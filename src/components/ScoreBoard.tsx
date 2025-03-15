
import React from 'react';
import { cn } from '@/lib/utils';

interface ScoreBoardProps {
  streak: number;
  highscore: number;
  className?: string;
}

const ScoreBoard = ({ streak, highscore, className }: ScoreBoardProps) => {
  return (
    <div className={cn("flex items-center gap-3 bg-white px-2 py-1 rounded-md shadow-sm", className)}>
      <div className="flex items-center">
        <span className="text-xs uppercase tracking-wider text-gray-500 mr-1">Streak:</span>
        <span className="font-bold">{streak}</span>
      </div>
      
      <div className="flex items-center">
        <span className="text-xs uppercase tracking-wider text-gray-500 mr-1">High:</span>
        <span className="font-bold">{highscore}</span>
      </div>
    </div>
  );
};

export default ScoreBoard;
