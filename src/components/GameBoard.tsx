import React from 'react';
import useWordMemory from '@/hooks/useWordMemory';
import Button from './Button';
import ProgressBar from './ProgressBar';
import ScoreBoard from './ScoreBoard';
import GameOverModal from './GameOverModal';
import { Difficulty, PROGRESSION_SETTINGS } from '@/config/gameConfig';

interface GameBoardProps {
  initialDifficulty?: Difficulty;
}

const GameBoard: React.FC<GameBoardProps> = ({ 
  initialDifficulty = Difficulty.NORMAL 
}) => {
  const { 
    currentWord, 
    streak, 
    highscore, 
    isGameOver, 
    timeRemaining, 
    handleGuess, 
    startNewGame,
    difficulty,
    steps
  } = useWordMemory(initialDifficulty);
  
  const isGameWon = isGameOver && steps >= PROGRESSION_SETTINGS.STEPS_TO_WIN;
  
  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center">
      <div className="w-full flex flex-col gap-2 mb-4">
        <ProgressBar 
          value={timeRemaining} 
          maxValue={20} 
          className="h-4"
        />
        
        <div className="flex justify-between items-center w-full px-1">
          <div className="text-xs bg-white px-2 py-1 rounded-md shadow-sm">
            Step: {steps}/{PROGRESSION_SETTINGS.STEPS_TO_WIN}
          </div>
          <ScoreBoard 
            streak={streak} 
            highscore={highscore} 
            className="text-sm"
          />
        </div>
      </div>
      
      <div className="glassmorphism rounded-xl p-6 mb-4 w-full shadow-md min-h-[150px] flex items-center justify-center">
        <h1 className="text-3xl font-bold text-center word-appear">
          {currentWord?.text || "Starting..."}
        </h1>
      </div>
      
      <div className="flex items-center justify-center gap-4 w-full">
        <Button 
          variant="outline" 
          size="lg" 
          className="flex-1 py-4"
          onClick={() => handleGuess(false)}
        >
          Seen
        </Button>
        
        <Button 
          variant="primary" 
          size="lg" 
          className="flex-1 py-4"
          onClick={() => handleGuess(true)}
        >
          New
        </Button>
      </div>
      
      {isGameOver && (
        <GameOverModal 
          streak={streak} 
          isWin={isGameWon} 
          onRestart={startNewGame} 
          difficulty={difficulty}
        />
      )}
    </div>
  );
};

export default GameBoard;
