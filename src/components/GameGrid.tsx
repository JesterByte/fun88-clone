import type { Game } from "../types/game";
import GameCard from "./GameCard";

interface Props {
  games: Game[];
  onToggleFavorite: (id: string) => void;
}

export default function GameGrid({ games, onToggleFavorite }: Props) {
  if (games.length === 0) {
    return <div className="p-6 text-center text-white/60">No games found.</div>;
  }

  return (
    <div className="grid grid-cols-2 gap-3 px-4">
      {games.map((game) => (
        <GameCard
          key={game.id}
          game={game}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
