/**
 * Central configuration file for the Word Memory game
 * Control all game parameters from this single location
 */

// Game difficulty settings
export enum Difficulty {
  CHILD = "Child",
  NORMAL = "Normal",
  HARD = "Hard",
  THE_TINKER = "The_Tinker",
}

export const DIFFICULTY_SETTINGS = {
  // Current difficulty setting - change this to modify the game difficulty
  CURRENT_DIFFICULTY: Difficulty.CHILD,

  // Repeat probability based on difficulty (chance of showing a previously seen word)
  REPEAT_PROBABILITY: {
    [Difficulty.CHILD]: 0.15, // Lower - easier for children
    [Difficulty.NORMAL]: 0.25, // Default difficulty
    [Difficulty.HARD]: 0.35, // Higher - more challenging
    [Difficulty.THE_TINKER]: 0.45, // Highest - most challenging
  },
};

// Game timing settings
export const TIME_SETTINGS = {
  // Main game timer (seconds)
  GAME_DURATION: 22,

  // Timer update interval (milliseconds)
  TIMER_INTERVAL: 100,
};

// Game progression settings
export const PROGRESSION_SETTINGS = {
  // Steps required to win/complete a game cycle
  STEPS_TO_WIN: 25,

  // Number of cycles required to upgrade difficulty
  CYCLES_TO_UPGRADE: 1,

  // Initial word pool size for each game
  INITIAL_WORD_POOL_SIZE: 50,
};

// Game UI settings
export const UI_SETTINGS = {
  // Number of letters in animated background
  BACKGROUND_LETTER_COUNT: 30,
};

// Game display text
export const GAME_TEXT = {
  TITLE: "Word Jam",
  SUBTITLE:
    "Test your memory with 25 words. Is it new or have you seen it before?",
  FOOTER: "Remember correctly 25 times to win!",
};
