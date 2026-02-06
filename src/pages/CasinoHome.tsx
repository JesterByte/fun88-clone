import { useGames } from "../hooks/useGames";
import BannerCarousel from "./BannerCarousel";
import CategoryTabs from "./CategoryTabs";
import type { GameCategory } from "../types/game";
import { useState } from "react";

export default function CasinoHome() {
  const { games, loading, toggleFavorite } = useGames();
  const [activeCategory, setActiveCategory] = useState<GameCategory>("START");

  if (loading) {
    return <div className="p-4 text-center">Loading games...</div>;
  }

  return (
    <div className="space-y-4">
      <BannerCarousel />
      <CategoryTabs active={activeCategory} onChange={setActiveCategory} />
      {/* SearchBar */}
      {/* ProviderFilter */}
      {/* GameGrid */}
    </div>
  );
}
