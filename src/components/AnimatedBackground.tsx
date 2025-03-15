
import React, { useEffect, useState } from 'react';

interface AnimatedLetter {
  id: number;
  letter: string;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  rotation: number;
  color: string;
}

interface AnimatedBackgroundProps {
  letterCount?: number;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ letterCount = 20 }) => {
  const [letters, setLetters] = useState<AnimatedLetter[]>([]);
  
  useEffect(() => {
    // Generate random letters
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const colors = ['#8B5CF6', '#D946EF', '#F97316', '#0EA5E9', '#6366F1'];
    const newLetters: AnimatedLetter[] = [];
    
    for (let i = 0; i < letterCount; i++) {
      newLetters.push({
        id: i,
        letter: alphabet[Math.floor(Math.random() * alphabet.length)],
        x: Math.random() * 100, // Random position (0-100%)
        y: Math.random() * 100,
        size: Math.random() * 3 + 1.5, // Increased size (1.5-4.5rem)
        speed: Math.random() * 0.4 + 0.1, // Random speed
        opacity: Math.random() * 0.3 + 0.15, // Increased opacity (0.15-0.45)
        rotation: Math.random() * 360, // Random rotation (0-360deg)
        color: colors[Math.floor(Math.random() * colors.length)] // Random color from the array
      });
    }
    
    setLetters(newLetters);
    
    // Animation loop
    const interval = setInterval(() => {
      setLetters(prevLetters => 
        prevLetters.map(letter => ({
          ...letter,
          y: (letter.y + letter.speed) % 100, // Move down and wrap around
          rotation: (letter.rotation + 0.2) % 360 // Slowly rotate
        }))
      );
    }, 50);
    
    return () => clearInterval(interval);
  }, [letterCount]);
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {letters.map(letter => (
        <div
          key={letter.id}
          className="absolute select-none font-bold"
          style={{
            left: `${letter.x}%`,
            top: `${letter.y}%`,
            fontSize: `${letter.size}rem`,
            opacity: letter.opacity,
            transform: `rotate(${letter.rotation}deg)`,
            transition: 'top 0.05s linear, transform 0.5s ease',
            color: letter.color
          }}
        >
          {letter.letter}
        </div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
