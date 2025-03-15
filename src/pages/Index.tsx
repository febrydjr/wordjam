
import React from 'react';
import GameBoard from '@/components/GameBoard';
import AnimatedBackground from '@/components/AnimatedBackground';
import { DIFFICULTY_SETTINGS, UI_SETTINGS, GAME_TEXT } from '@/config/gameConfig';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-blue-50 to-white relative">
      {/* Animated Background */}
      <AnimatedBackground letterCount={UI_SETTINGS.BACKGROUND_LETTER_COUNT} />
      
      <div className="max-w-md w-full mb-10 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">
            {GAME_TEXT.TITLE}
          </h1>
          <p className="text-gray-600">
            {GAME_TEXT.SUBTITLE}
          </p>
          <p className="text-sm text-blue-600 mt-2">
            Current Difficulty: <span className="font-bold">{DIFFICULTY_SETTINGS.CURRENT_DIFFICULTY.replace('_', ' ')}</span>
          </p>
        </div>
        
        <GameBoard initialDifficulty={DIFFICULTY_SETTINGS.CURRENT_DIFFICULTY} />
      </div>
      
      <div className="mt-12 text-center text-sm text-gray-500 relative z-10">
        <p>{GAME_TEXT.FOOTER}</p>
      </div>
    </div>
  );
};

export default Index;
