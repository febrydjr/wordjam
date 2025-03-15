import { DIFFICULTY_SETTINGS, Difficulty } from "@/config/gameConfig";

export interface Word {
  id: number;
  text: string;
}

export const words: Word[] = [
  // Fruits - 35 words
  { id: 1, text: "Apple" },
  { id: 2, text: "Banana" },
  { id: 3, text: "Cherry" },
  { id: 4, text: "Date" },
  { id: 5, text: "Elderberry" },
  { id: 6, text: "Fig" },
  { id: 7, text: "Grape" },
  { id: 8, text: "Honeydew" },
  { id: 9, text: "Kiwi" },
  { id: 10, text: "Lemon" },
  { id: 11, text: "Mango" },
  { id: 12, text: "Nectarine" },
  { id: 13, text: "Orange" },
  { id: 14, text: "Peach" },
  { id: 15, text: "Quince" },
  { id: 16, text: "Raspberry" },
  { id: 17, text: "Strawberry" },
  { id: 18, text: "Tangerine" },
  { id: 19, text: "Ugli" },
  { id: 20, text: "Watermelon" },
  { id: 21, text: "Apricot" },
  { id: 22, text: "Blackberry" },
  { id: 23, text: "Cantaloupe" },
  { id: 24, text: "Dragonfruit" },
  { id: 25, text: "Guava" },
  { id: 26, text: "Jackfruit" },
  { id: 27, text: "Papaya" },
  { id: 28, text: "Pineapple" },
  { id: 29, text: "Plum" },
  { id: 30, text: "Pomegranate" },
  { id: 31, text: "Starfruit" },
  { id: 32, text: "Blueberry" },
  { id: 33, text: "Cranberry" },
  { id: 34, text: "Grapefruit" },
  { id: 35, text: "Persimmon" },

  // Food items - 35 words
  { id: 36, text: "Bread" },
  { id: 37, text: "Butter" },
  { id: 38, text: "Cheese" },
  { id: 39, text: "Donut" },
  { id: 40, text: "Egg" },
  { id: 41, text: "Flour" },
  { id: 42, text: "Honey" },
  { id: 43, text: "Ice" },
  { id: 44, text: "Jam" },
  { id: 45, text: "Ketchup" },
  { id: 46, text: "Mustard" },
  { id: 47, text: "Noodle" },
  { id: 48, text: "Oatmeal" },
  { id: 49, text: "Pasta" },
  { id: 50, text: "Quinoa" },
  { id: 51, text: "Rice" },
  { id: 52, text: "Sugar" },
  { id: 53, text: "Tea" },
  { id: 54, text: "Vinegar" },
  { id: 55, text: "Waffle" },
  { id: 56, text: "Yogurt" },
  { id: 57, text: "Salt" },
  { id: 58, text: "Chocolate" },
  { id: 59, text: "Pancake" },
  { id: 60, text: "Soup" },
  { id: 61, text: "Sandwich" },
  { id: 62, text: "Pizza" },
  { id: 63, text: "Burger" },
  { id: 64, text: "Taco" },
  { id: 65, text: "Sushi" },
  { id: 66, text: "Curry" },
  { id: 67, text: "Steak" },
  { id: 68, text: "Salami" },
  { id: 69, text: "Bacon" },
  { id: 70, text: "Ham" },

  // Vegetables - 35 words
  { id: 71, text: "Carrot" },
  { id: 72, text: "Broccoli" },
  { id: 73, text: "Spinach" },
  { id: 74, text: "Lettuce" },
  { id: 75, text: "Cabbage" },
  { id: 76, text: "Cucumber" },
  { id: 77, text: "Pepper" },
  { id: 78, text: "Onion" },
  { id: 79, text: "Garlic" },
  { id: 80, text: "Potato" },
  { id: 81, text: "Tomato" },
  { id: 82, text: "Radish" },
  { id: 83, text: "Celery" },
  { id: 84, text: "Asparagus" },
  { id: 85, text: "Eggplant" },
  { id: 86, text: "Zucchini" },
  { id: 87, text: "Beet" },
  { id: 88, text: "Corn" },
  { id: 89, text: "Pea" },
  { id: 90, text: "Bean" },
  { id: 91, text: "Kale" },
  { id: 92, text: "Leek" },
  { id: 93, text: "Mushroom" },
  { id: 94, text: "Artichoke" },
  { id: 95, text: "Cauliflower" },
  { id: 96, text: "Pumpkin" },
  { id: 97, text: "Turnip" },
  { id: 98, text: "Squash" },
  { id: 99, text: "Chard" },
  { id: 100, text: "Fennel" },
  { id: 101, text: "Okra" },
  { id: 102, text: "Parsnip" },
  { id: 103, text: "Rutabaga" },
  { id: 104, text: "Shallot" },
  { id: 105, text: "Watercress" },

  // Verbs - 45 words (30% of 150)
  { id: 106, text: "Run" },
  { id: 107, text: "Jump" },
  { id: 108, text: "Walk" },
  { id: 109, text: "Swim" },
  { id: 110, text: "Dance" },
  { id: 111, text: "Sing" },
  { id: 112, text: "Talk" },
  { id: 113, text: "Read" },
  { id: 114, text: "Write" },
  { id: 115, text: "Draw" },
  { id: 116, text: "Paint" },
  { id: 117, text: "Cook" },
  { id: 118, text: "Bake" },
  { id: 119, text: "Drive" },
  { id: 120, text: "Fly" },
  { id: 121, text: "Sleep" },
  { id: 122, text: "Dream" },
  { id: 123, text: "Think" },
  { id: 124, text: "Play" },
  { id: 125, text: "Work" },
  { id: 126, text: "Study" },
  { id: 127, text: "Clean" },
  { id: 128, text: "Wash" },
  { id: 129, text: "Eat" },
  { id: 130, text: "Drink" },
  { id: 131, text: "Listen" },
  { id: 132, text: "Speak" },
  { id: 133, text: "Build" },
  { id: 134, text: "Break" },
  { id: 135, text: "Fix" },
  { id: 136, text: "Climb" },
  { id: 137, text: "Laugh" },
  { id: 138, text: "Cry" },
  { id: 139, text: "Smile" },
  { id: 140, text: "Frown" },
  { id: 141, text: "Push" },
  { id: 142, text: "Pull" },
  { id: 143, text: "Throw" },
  { id: 144, text: "Catch" },
  { id: 145, text: "Close" },
  { id: 146, text: "Open" },
  { id: 147, text: "Begin" },
  { id: 148, text: "Finish" },
  { id: 149, text: "Create" },
  { id: 150, text: "Destroy" },
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
