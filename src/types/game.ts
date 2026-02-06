export type GameCategory = "START" | "NEW" | "SLOTS";

export interface Game {
  id: string;
  name: string;
  image: string;
  provider: string;
  category: GameCategory;
  isFavorite: boolean;
}
