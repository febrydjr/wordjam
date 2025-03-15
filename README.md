
# Word Memory Game

A challenging word memory game where players must correctly identify whether they've seen a word before or if it's new. Test your memory skills through a series of 25 steps and track your high scores.

## Features

- **Game Mechanics**:
  - Correctly identify if a word is new or has been seen before
  - Complete 25 steps successfully to achieve a streak
  - Time limit of 20 seconds for the entire game
  - Automatic difficulty progression after completing 2 full cycles

- **Difficulty Levels**:
  - **Child**: Easier gameplay with less word repetition (15% repeat probability)
  - **Normal**: Standard gameplay (25% repeat probability)
  - **Hard**: Challenging gameplay with increased word repetition (35% repeat probability)
  - **The Tinker**: Expert level with high word repetition (45% repeat probability)

- **User Experience**:
  - Visual progress tracking (steps completed out of 25)
  - Streak counter for completed cycles
  - High score tracking (stored in local storage)
  - Visual timer with color indicators
  - Animated backgrounds with floating letters
  - Audio feedback for correct and incorrect answers

- **Responsive Design**:
  - Works on desktop and mobile devices
  - Compact, minimalist interface

## Technical Stack

- **Frontend**:
  - React with TypeScript
  - Vite for fast development and building
  - Tailwind CSS for styling
  - shadcn/ui for UI components

- **State Management**:
  - React Hooks for state and side effects
  - Custom hooks for game logic

- **Audio**:
  - Web Audio API via custom AudioContext implementation

- **Storage**:
  - LocalStorage for persisting high scores
  - Prepared for database integration (SQL file included)

## Database Integration

The game is designed to easily transition from static data to a database backend. The `wordData.ts` file includes functions that can be modified to fetch from a database instead of using static data.

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Access the game at `http://localhost:5173`

## Customizing Difficulty

The game difficulty can be changed in the code by modifying the `CURRENT_DIFFICULTY` constant in `src/pages/Index.tsx`:

```typescript
// Change this value to one of: Difficulty.CHILD, Difficulty.NORMAL, Difficulty.HARD, Difficulty.THE_TINKER
const CURRENT_DIFFICULTY = Difficulty.NORMAL;
```
