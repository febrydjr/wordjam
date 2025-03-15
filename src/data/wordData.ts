import { DIFFICULTY_SETTINGS, Difficulty } from "@/config/gameConfig";

export interface Word {
  id: number;
  text: string;
}

export const words: Word[] = [
  { id: 1, text: "a" },
  { id: 2, text: "b" },
  { id: 3, text: "c" },
  { id: 4, text: "d" },
  { id: 5, text: "e" },
  { id: 6, text: "f" },
  { id: 7, text: "g" },
  { id: 8, text: "h" },
  { id: 9, text: "i" },
  { id: 10, text: "j" },
  { id: 11, text: "k" },
  { id: 12, text: "l" },
  { id: 13, text: "m" },
  { id: 14, text: "n" },
  { id: 15, text: "o" },
  { id: 16, text: "p" },
  { id: 17, text: "q" },
  { id: 18, text: "r" },
  { id: 19, text: "s" },
  { id: 20, text: "t" },
  { id: 21, text: "u" },
  { id: 22, text: "v" },
  { id: 23, text: "w" },
  { id: 24, text: "x" },
  { id: 25, text: "y" },
  { id: 26, text: "z" }
];

interface RandomWordsResult {
  words: Word[];
  repeatProbability: number;
}

// This allows for easy switching between static data and future database implementation
export const getWords = () => {
  // In the future, this could be replaced with a database fetch
  return Promise.resolve(words);
};

export const getRandomWords = (
  count: number,
  difficulty: Difficulty
): Promise<RandomWordsResult> => {
  const shuffled = [...words].sort(() => 0.5 - Math.random());

  // Get repeat probability from centralized config
  const repeatProbability = DIFFICULTY_SETTINGS.REPEAT_PROBABILITY[difficulty];

  return Promise.resolve({
    words: shuffled.slice(0, count),
    repeatProbability,
  });
};
