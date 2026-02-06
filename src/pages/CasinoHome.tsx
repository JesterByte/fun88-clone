import { useGames } from "../hooks/useGames";
import BannerCarousel from "../components/BannerCarousel";
import CategoryTabs from "../components/CategoryTabs";
import GameGrid from "../components/GameGrid";
import type { GameCategory } from "../types/game";
import { useState } from "react";

export default function CasinoHome() {
  const { games, loading, toggleFavorite } = useGames();
  const [activeCategory, setActiveCategory] = useState<GameCategory>("START");

  const filteredGames = games.filter(
    (game) => game.category === activeCategory,
  );

  if (loading) {
    return <div className="p-4 text-center">Loading games...</div>;
  }

  return (
    <div className="space-y-4">
      <BannerCarousel />
      <CategoryTabs active={activeCategory} onChange={setActiveCategory} />
      {/* SearchBar */}
      {/* ProviderFilter */}
      <GameGrid games={filteredGames} onToggleFavorite={toggleFavorite} />
    </div>
  );
}
