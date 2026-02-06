import type { Game } from "../types/game";

interface Props {
  game: Game;
  onToggleFavorite: (id: string) => void;
}

export default function GameCard({ game, onToggleFavorite }: Props) {
  return (
    <div className="relative rounded-lg bg-gray-900 p-2">
      <img
        src={game.image}
        alt={game.name}
        className="h-32 w-full rounded object-cover"
      />

      <button
        onClick={() => onToggleFavorite(game.id)}
        className="absolute right-2 top-2 text-lg"
      >
        {game.isFavorite ? "⭐" : "☆"}
      </button>

      <div className="mt-2 text-sm text-white">{game.name}</div>
      <div className="text-xs text-white/50">{game.provider}</div>
    </div>
  );
}
