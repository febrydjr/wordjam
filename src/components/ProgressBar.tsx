
import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number;
  maxValue: number;
  className?: string;
}

const ProgressBar = ({ value, maxValue, className }: ProgressBarProps) => {
  const percentage = Math.max(0, Math.min(100, (value / maxValue) * 100));
  
  // Color changes based on remaining time
  const getColorClass = () => {
    if (percentage > 60) return "bg-green-500";
    if (percentage > 30) return "bg-yellow-500";
    return "bg-red-500";
  };
  
  // Round to one decimal place for display
  const timeDisplay = Math.max(0, Math.round(value * 10) / 10).toFixed(1);
  
  return (
    <div className={cn("w-full flex items-center gap-2 bg-white p-2 rounded-md shadow-sm", className)}>
      <div className="flex-1 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={cn("h-2 progress-bar transition-all", getColorClass())}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="text-xs font-medium text-gray-700 whitespace-nowrap min-w-[35px]">
        {timeDisplay}s
      </div>
    </div>
  );
};

export default ProgressBar;
