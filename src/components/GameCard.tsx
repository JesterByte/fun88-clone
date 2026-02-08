import type { Game } from "../types/game";
import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";

interface Props {
  game: Game;
  onToggleFavorite: (id: string) => void;
}

export default function GameCard({ game, onToggleFavorite }: Props) {
  const { theme } = useTheme();
  const [textColor, setTextColor] = useState(
    theme === "dark" ? "text-white" : "text-black",
  );
  const [borderColor, setBorderColor] = useState(
    theme === "dark" ? "border-white" : "border-black",
  );

  useEffect(() => {
    setTextColor(theme === "dark" ? "text-white" : "text-black");
    setBorderColor(theme === "dark" ? "border-white" : "border-black");
  }, [theme]);

  return (
    <div className={`${borderColor} relative rounded-xl border`}>
      <img
        src={game.image}
        alt={game.name}
        className={`${borderColor} h-26 px-4 rounded object-contain border-b`}
      />

      <button
        onClick={() => {
          onToggleFavorite(game.id);
        }}
        className={`${textColor} absolute right-2 top-2 text-lg`}
      >
        {game.isFavorite ? "⭐" : "☆"}
      </button>

      <div className="text-center">
        {" "}
        <div className={`mt-2 text-sm ${textColor}`}>{game.name}</div>
        <div className={`text-xs ${textColor}/50`}>{game.provider}</div>
      </div>
    </div>
  );
}
