
import React from 'react';
import Button from './Button';
import { Difficulty } from '@/config/gameConfig';

interface GameOverModalProps {
  streak: number;
  isWin: boolean;
  onRestart: () => void;
  difficulty?: Difficulty;
}

const GameOverModal = ({ streak, isWin, onRestart, difficulty = Difficulty.NORMAL }: GameOverModalProps) => {
  const difficultyText = difficulty.replace('_', ' ');
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 p-4 animate-fade-in">
      <div className="bg-white rounded-lg p-6 md:p-8 shadow-xl max-w-md w-full mx-4 animate-scale-in">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            {isWin ? '🎉 You Won! 🎉' : '😢 Game Over!'}
          </h2>
          
          <p className="text-lg mb-2">
            {isWin 
              ? 'Congratulations! You have completed the challenge!' 
              : 'Better luck next time!'}
          </p>
          
          <div className="my-5 py-2 px-4 bg-blue-100 rounded-lg inline-block">
            <p className="text-lg font-semibold">
              Final score: <span className="font-bold">{streak}</span>
            </p>
            <p className="text-base">
              Difficulty: <span className="font-bold capitalize">{difficultyText}</span>
            </p>
          </div>
          
          <div className="mt-6">
            <Button 
              variant="primary"
              className="px-6 py-2" 
              onClick={onRestart}
            >
              Play Again
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameOverModal;
