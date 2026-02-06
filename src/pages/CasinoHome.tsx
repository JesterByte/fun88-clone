import { useGames } from "../hooks/useGames";
import BannerCarousel from "../components/BannerCarousel";
import CategoryTabs from "../components/CategoryTabs";
import GameGrid from "../components/GameGrid";
import SearchBar from "../components/SearchBar";
import ProviderFilter from "../components/ProviderFilter";
import type { GameCategory } from "../types/game";
import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

export default function CasinoHome() {
  const { games, loading, toggleFavorite } = useGames();
  const [activeCategory, setActiveCategory] = useState<GameCategory>("START");
  const [search, setSearch] = useState("");
  const [provider, setProvider] = useState("");

  const debouncedSearch = useDebounce(search);

  const providers = Array.from(new Set(games.map((game) => game.provider)));

  const filteredGames = games
    .filter(
      (game) => activeCategory === "START" || game.category === activeCategory,
    )
    .filter((game) =>
      game.name.toLowerCase().includes(debouncedSearch.toLowerCase()),
    )
    .filter((game) => (provider ? game.provider === provider : true));

  if (loading) {
    return <div className="p-4 text-center">Loading games...</div>;
  }

  return (
    <div className="space-y-4">
      <BannerCarousel />
      <CategoryTabs active={activeCategory} onChange={setActiveCategory} />
      <SearchBar value={search} onChange={setSearch} />
      <ProviderFilter
        providers={providers}
        value={provider}
        onChange={setProvider}
      />
      <GameGrid games={filteredGames} onToggleFavorite={toggleFavorite} />
    </div>
  );
}
