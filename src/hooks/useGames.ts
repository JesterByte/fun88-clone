import { useEffect, useState } from "react";
import type { Game } from "../types/game";
import { fetchGames } from "../api/games.api";

export function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGames().then((data) => {
      setGames(data);
      setLoading(false);
    });
  }, []);

  const toggleFavorite = (id: string) => {
    setGames((prev) =>
      prev.map((game) =>
        game.id === id ? { ...game, isFavorite: !game.isFavorite } : game,
      ),
    );
  };

  return { games, loading, toggleFavorite };
}
