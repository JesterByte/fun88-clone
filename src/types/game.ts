export type GameCategory =
  | "Home"
  | "Popular"
  | "Jackpot"
  | "New"
  | "Casual"
  | "Crash"
  | "Pragmatic"
  | "Fat Panda"
  | "Playtech"
  | "Slots"
  | "Bingo"
  | "Live"
  | "Cards"
  | "Others";

export const categories: GameCategory[] = [
  "Home",
  "Popular",
  "Jackpot",
  "New",
  "Casual",
  "Crash",
  "Pragmatic",
  "Fat Panda",
  "Playtech",
  "Slots",
  "Bingo",
  "Live",
  "Cards",
  "Others",
];

export interface Game {
  id: string;
  name: string;
  image: string;
  provider: string;
  category: GameCategory;
  isFavorite: boolean;
}
