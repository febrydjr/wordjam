
import { useState, useEffect, useCallback, useRef } from 'react';
import { Word, getRandomWords } from '../data/wordData';
import { playButtonSound, playTone } from '../utils/audioUtils';
import { TIME_SETTINGS, PROGRESSION_SETTINGS, DIFFICULTY_SETTINGS, Difficulty } from '@/config/gameConfig';

export interface GameState {
  currentWord: Word | null;
  seenWords: Word[];
  isGameOver: boolean;
  streak: number;
  highscore: number;
  timeRemaining: number;
  isTimerRunning: boolean;
  difficulty: Difficulty;
  completedCycles: number;
}

const useWordMemory = (initialDifficulty = Difficulty.NORMAL) => {
  // Game state
  const [gameState, setGameState] = useState<GameState>({
    currentWord: null,
    seenWords: [],
    isGameOver: false,
    streak: 0,
    highscore: 0,
    timeRemaining: TIME_SETTINGS.GAME_DURATION,
    isTimerRunning: false,
    difficulty: initialDifficulty,
    completedCycles: 0
  });
  
  // Refs
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const gamePoolRef = useRef<Word[]>([]);
  const repeatProbabilityRef = useRef<number>(0.25); // Default repeat probability
  const stepCountRef = useRef<number>(0);
  
  // Initialize and load high score
  useEffect(() => {
    const savedHighscore = localStorage.getItem('wordMemoryHighscore');
    if (savedHighscore) {
      setGameState(prev => ({ ...prev, highscore: parseInt(savedHighscore) }));
    }
    
    startNewGame();
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);
  
  // Save high score when it changes
  useEffect(() => {
    if (gameState.streak > gameState.highscore) {
      const newHighscore = gameState.streak;
      setGameState(prev => ({ ...prev, highscore: newHighscore }));
      localStorage.setItem('wordMemoryHighscore', newHighscore.toString());
    }
  }, [gameState.streak, gameState.highscore]);
  
  // Timer effect - runs for the entire game, not per word
  useEffect(() => {
    if (gameState.isTimerRunning && !gameState.isGameOver) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      
      timerRef.current = setInterval(() => {
        setGameState(prev => {
          const newTimeRemaining = prev.timeRemaining - (TIME_SETTINGS.TIMER_INTERVAL / 1000);
          
          if (newTimeRemaining <= 0) {
            clearInterval(timerRef.current!);
            playTone('error', 400);
            return {
              ...prev,
              isGameOver: true,
              isTimerRunning: false,
              timeRemaining: 0
            };
          }
          
          return {
            ...prev,
            timeRemaining: newTimeRemaining
          };
        });
      }, TIME_SETTINGS.TIMER_INTERVAL);
    }
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [gameState.isTimerRunning, gameState.isGameOver]);
  
  // Update difficulty
  const setDifficulty = useCallback((difficulty: Difficulty) => {
    setGameState(prev => ({
      ...prev,
      difficulty
    }));
  }, []);
  
  // Auto upgrade difficulty after player completes 2 cycles of 25 steps
  useEffect(() => {
    if (gameState.completedCycles >= PROGRESSION_SETTINGS.CYCLES_TO_UPGRADE) {
      let newDifficulty = gameState.difficulty;
      
      switch(gameState.difficulty) {
        case Difficulty.CHILD:
          newDifficulty = Difficulty.NORMAL;
          break;
        case Difficulty.NORMAL:
          newDifficulty = Difficulty.HARD;
          break;
        case Difficulty.HARD:
          newDifficulty = Difficulty.THE_TINKER;
          break;
        // No upgrade beyond THE_TINKER
      }
      
      if (newDifficulty !== gameState.difficulty) {
        setGameState(prev => ({
          ...prev,
          difficulty: newDifficulty,
          completedCycles: 0
        }));
      }
    }
  }, [gameState.completedCycles]);
  
  // Start a new game
  const startNewGame = useCallback(() => {
    // Reset step counter at start of new game
    stepCountRef.current = 0;
    
    // Get a pool of random words for this game session with current difficulty
    getRandomWords(PROGRESSION_SETTINGS.INITIAL_WORD_POOL_SIZE, gameState.difficulty).then(result => {
      gamePoolRef.current = result.words;
      repeatProbabilityRef.current = result.repeatProbability;
      
      // Reset game state
      setGameState(prev => ({
        ...prev,
        currentWord: result.words[0],
        seenWords: [],
        isGameOver: false,
        timeRemaining: TIME_SETTINGS.GAME_DURATION,
        isTimerRunning: true
      }));
    });
  }, [gameState.difficulty]);
  
  // Handle user guess
  const handleGuess = useCallback((isNew: boolean) => {
    const currentWord = gameState.currentWord;
    if (!currentWord || gameState.isGameOver) return;
    
    const isCorrectGuess = isNew 
      ? !gameState.seenWords.some(word => word.id === currentWord.id)
      : gameState.seenWords.some(word => word.id === currentWord.id);
    
    if (isCorrectGuess) {
      // Correct guess
      playButtonSound(isNew ? 'new' : 'seen');
      
      // Update seen words
      const updatedSeenWords = isNew 
        ? [...gameState.seenWords, currentWord]
        : gameState.seenWords;
      
      // Increment step counter
      stepCountRef.current += 1;
      
      // Check if player has completed a cycle (25 correct guesses)
      const hasCompletedCycle = stepCountRef.current >= PROGRESSION_SETTINGS.STEPS_TO_WIN;
      
      if (hasCompletedCycle) {
        playTone('success', 500);
        
        // Reset step counter for next cycle
        stepCountRef.current = 0;
        
        // Increment streak and completed cycles
        setGameState(prev => ({
          ...prev,
          streak: prev.streak + 1,
          completedCycles: prev.completedCycles + 1,
          seenWords: [], // Reset seen words for next cycle
          timeRemaining: TIME_SETTINGS.GAME_DURATION // Reset timer for next cycle
        }));
        
        // Start next cycle with a new word
        getRandomWords(PROGRESSION_SETTINGS.INITIAL_WORD_POOL_SIZE, gameState.difficulty).then(result => {
          gamePoolRef.current = result.words;
          repeatProbabilityRef.current = result.repeatProbability;
          
          setGameState(prev => ({
            ...prev,
            currentWord: result.words[0]
          }));
        });
        
        return;
      }
      
      // Continue game with next word
      const remainingPool = gamePoolRef.current.filter(
        word => word.id !== currentWord.id
      );
      
      // Use dynamic repeat probability based on difficulty level
      let nextWord: Word;
      if (updatedSeenWords.length > 0 && Math.random() < repeatProbabilityRef.current) {
        // Show a previously seen word
        const randomIndex = Math.floor(Math.random() * updatedSeenWords.length);
        nextWord = updatedSeenWords[randomIndex];
      } else {
        // Show a new word
        const randomIndex = Math.floor(Math.random() * remainingPool.length);
        nextWord = remainingPool[randomIndex];
      }
      
      // Update with next word and seen words
      setGameState(prev => ({
        ...prev,
        currentWord: nextWord,
        seenWords: updatedSeenWords
      }));
      
    } else {
      // Incorrect guess
      playTone('error', 400);
      setGameState(prev => ({
        ...prev,
        isGameOver: true,
        isTimerRunning: false
      }));
    }
  }, [gameState]);
  
  return {
    ...gameState,
    startNewGame,
    handleGuess,
    setDifficulty,
    steps: stepCountRef.current
  };
};

export default useWordMemory;
