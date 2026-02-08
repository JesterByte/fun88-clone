import { useEffect, useState } from "react";
import type { Game } from "../types/game";
import GameCard from "./GameCard";

interface Props {
  games: Game[];
  selectedProvider: string | null;
  onToggleFavorite: (id: string) => void;
}

export default function GameGrid({
  games,
  selectedProvider,
  onToggleFavorite,
}: Props) {
  const [filteredGames, setFilteredGames] = useState<Game[]>(games);

  useEffect(() => {
    if (selectedProvider) {
      setFilteredGames(
        games.filter((game) => game.provider === selectedProvider),
      );
    } else {
      setFilteredGames(games);
    }
  }, [selectedProvider, games]);

  if (games.length === 0) {
    return <div className="p-6 text-center text-white/60">No games found.</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-2 px-4">
      {filteredGames.map((game) => (
        <GameCard
          key={game.id}
          game={game}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
