import type { Game } from "../types/game";

const mockGames: Game[] = Array.from({ length: 30 }).map((_, i) => ({
  id: String(i),
  name: `Game ${i + 1}`,
  image: "/banner.jpg",
  provider: i % 2 === 0 ? "Pragmatic" : "PG Soft",
  category: i % 3 === 0 ? "NEW" : "SLOTS",
  isFavorite: false,
}));

export const fetchGames = (): Promise<Game[]> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(mockGames), 2000);
  });
