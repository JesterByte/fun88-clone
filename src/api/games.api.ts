import type { Game, GameCategory } from "../types/game";
import { categories } from "../types/game";
import { providers } from "./providers";

const randomProvider = () => {
  const randomIndex = Math.floor(Math.random() * providers.length);
  return providers[randomIndex].name;
};

const randomCategory = (): GameCategory => {
  const randomIndex = Math.floor(Math.random() * categories.length);
  return categories[randomIndex];
};

const mockGames: Game[] = Array.from({ length: 30 }).map((_, i) => ({
  id: String(i),
  name: `Game ${i + 1}`,
  image: "/icons/fun-88.webp",
  provider: randomProvider(),
  category: randomCategory(),
  isFavorite: false,
}));

export const fetchGames = (): Promise<Game[]> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(mockGames), 2000);
  });
