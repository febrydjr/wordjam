import { DIFFICULTY_SETTINGS, Difficulty } from "@/config/gameConfig";

export interface Word {
  id: number;
  text: string;
}

export const words: Word[] = [
  // Buah-buahan - 35 kata
  { id: 1, text: "Apel" },
  { id: 2, text: "Pisang" },
  { id: 3, text: "Ceri" },
  { id: 4, text: "Kurma" },
  { id: 5, text: "Elderberi" },
  { id: 6, text: "Ara" },
  { id: 7, text: "Anggur" },
  { id: 8, text: "Melon Madu" },
  { id: 9, text: "Kiwi" },
  { id: 10, text: "Lemon" },
  { id: 11, text: "Mangga" },
  { id: 12, text: "Nektarin" },
  { id: 13, text: "Jeruk" },
  { id: 14, text: "Persik" },
  { id: 15, text: "Kesemek" },
  { id: 16, text: "Raspberry" },
  { id: 17, text: "Stroberi" },
  { id: 18, text: "Jeruk Mandarin" },
  { id: 19, text: "Ugli" },
  { id: 20, text: "Semangka" },
  { id: 21, text: "Aprikot" },
  { id: 22, text: "Blackberry" },
  { id: 23, text: "Blewah" },
  { id: 24, text: "Buah Naga" },
  { id: 25, text: "Jambu" },
  { id: 26, text: "Nangka" },
  { id: 27, text: "Pepaya" },
  { id: 28, text: "Nanas" },
  { id: 29, text: "Prem" },
  { id: 30, text: "Delima" },
  { id: 31, text: "Belimbing" },
  { id: 32, text: "Blueberry" },
  { id: 33, text: "Cranberry" },
  { id: 34, text: "Jeruk Bali" },
  { id: 35, text: "Kesemek" },

  // Makanan - 35 kata
  { id: 36, text: "Roti" },
  { id: 37, text: "Mentega" },
  { id: 38, text: "Keju" },
  { id: 39, text: "Donat" },
  { id: 40, text: "Telur" },
  { id: 41, text: "Tepung" },
  { id: 42, text: "Madu" },
  { id: 43, text: "Es" },
  { id: 44, text: "Selai" },
  { id: 45, text: "Saus Tomat" },
  { id: 46, text: "Mustar" },
  { id: 47, text: "Mie" },
  { id: 48, text: "Oatmeal" },
  { id: 49, text: "Pasta" },
  { id: 50, text: "Quinoa" },
  { id: 51, text: "Nasi" },
  { id: 52, text: "Gula" },
  { id: 53, text: "Teh" },
  { id: 54, text: "Cuka" },
  { id: 55, text: "Wafel" },
  { id: 56, text: "Yogurt" },
  { id: 57, text: "Garam" },
  { id: 58, text: "Cokelat" },
  { id: 59, text: "Pancake" },
  { id: 60, text: "Sup" },
  { id: 61, text: "Sandwich" },
  { id: 62, text: "Pizza" },
  { id: 63, text: "Burger" },
  { id: 64, text: "Taco" },
  { id: 65, text: "Sushi" },
  { id: 66, text: "Kari" },
  { id: 67, text: "Steak" },
  { id: 68, text: "Salami" },
  { id: 69, text: "Bacon" },
  { id: 70, text: "Daging Asap" },

  // Sayuran - 35 kata
  { id: 71, text: "Wortel" },
  { id: 72, text: "Brokoli" },
  { id: 73, text: "Bayam" },
  { id: 74, text: "Selada" },
  { id: 75, text: "Kubis" },
  { id: 76, text: "Mentimun" },
  { id: 77, text: "Paprika" },
  { id: 78, text: "Bawang" },
  { id: 79, text: "Bawang Putih" },
  { id: 80, text: "Kentang" },
  { id: 81, text: "Tomat" },
  { id: 82, text: "Lobak" },
  { id: 83, text: "Seledri" },
  { id: 84, text: "Asparagus" },
  { id: 85, text: "Terong" },
  { id: 86, text: "Zukini" },
  { id: 87, text: "Bit" },
  { id: 88, text: "Jagung" },
  { id: 89, text: "Kacang Polong" },
  { id: 90, text: "Kacang" },
  { id: 91, text: "Kale" },
  { id: 92, text: "Daun Bawang" },
  { id: 93, text: "Jamur" },
  { id: 94, text: "Artichoke" },
  { id: 95, text: "Kembang Kol" },
  { id: 96, text: "Labu" },
  { id: 97, text: "Turnip" },
  { id: 98, text: "Squash" },
  { id: 99, text: "Chard" },
  { id: 100, text: "Adas" },
  { id: 101, text: "Okra" },
  { id: 102, text: "Parsnip" },
  { id: 103, text: "Rutabaga" },
  { id: 104, text: "Shallot" },
  { id: 105, text: "Selada Air" },

  // Kata kerja - 45 kata
  { id: 106, text: "Berlari" },
  { id: 107, text: "Melompat" },
  { id: 108, text: "Berjalan" },
  { id: 109, text: "Berenang" },
  { id: 110, text: "Menari" },
  { id: 111, text: "Bernyanyi" },
  { id: 112, text: "Berbicara" },
  { id: 113, text: "Membaca" },
  { id: 114, text: "Menulis" },
  { id: 115, text: "Menggambar" },
  { id: 116, text: "Melukis" },
  { id: 117, text: "Memasak" },
  { id: 118, text: "Membakar" },
  { id: 119, text: "Menyetir" },
  { id: 120, text: "Terbang" },
  { id: 121, text: "Tidur" },
  { id: 122, text: "Bermimpi" },
  { id: 123, text: "Berpikir" },
  { id: 124, text: "Bermain" },
  { id: 125, text: "Bekerja" },
  { id: 126, text: "Belajar" },
  { id: 127, text: "Membersihkan" },
  { id: 128, text: "Mencuci" },
  { id: 129, text: "Makan" },
  { id: 130, text: "Minum" },
  { id: 131, text: "Mendengarkan" },
  { id: 132, text: "Berbicara" },
  { id: 133, text: "Membangun" },
  { id: 134, text: "Merusak" },
  { id: 135, text: "Memperbaiki" },
  { id: 136, text: "Memanjat" },
  { id: 137, text: "Tertawa" },
  { id: 138, text: "Menangis" },
  { id: 139, text: "Menggali" },
  { id: 140, text: "Menggulung" },
  { id: 141, text: "Menggigit" },
  { id: 142, text: "Mengunyah" },
  { id: 143, text: "Mengisap" },
  { id: 144, text: "Mengendus" },
  { id: 145, text: "Menggaruk" },
  { id: 146, text: "Menggosok" },
  { id: 147, text: "Mengelus" },
  { id: 148, text: "Menggenggam" },
  { id: 149, text: "Mengangkat" },
  { id: 150, text: "Menurunkan" }
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
