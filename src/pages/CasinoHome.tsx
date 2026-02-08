import { useGames } from "../hooks/useGames";
import BannerCarousel from "../components/BannerCarousel";
import CategoryTabs from "../components/CategoryTabs";
import GameGrid from "../components/GameGrid";
import SearchBar from "../components/SearchBar";
import ProviderFilter from "../components/ProviderFilter";
import ProviderCarousel from "../components/ProviderCarousel";
import Navbar from "../components/Navbar";
import type { GameCategory } from "../types/game";
import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import type { Game } from "../types/game";

export default function CasinoHome() {
  const { games, loading, toggleFavorite } = useGames();
  const [activeCategory, setActiveCategory] = useState<GameCategory>("Home");
  const [filteredGames, setFilteredGames] = useState<Game[]>(games);
  // const [search, setSearch] = useState("");
  const [provider, setProvider] = useState("");

  // const debouncedSearch = useDebounce(search);

  const providers = Array.from(new Set(games.map((game) => game.provider)));

  // const filteredGames = games
  //   .filter(
  //     (game) => activeCategory === "Home" || game.category === activeCategory,
  //   )
  //   .filter((game) =>
  //     game.name.toLowerCase().includes(debouncedSearch.toLowerCase()),
  //   )
  //   .filter((game) => (provider ? game.provider === provider : true));

  if (loading) {
    return <div className="p-4 text-center">Loading games...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="space-y-4">
        <BannerCarousel />
        <ProviderCarousel />
        <CategoryTabs
          active={activeCategory}
          onChange={setActiveCategory}
          onFilterChange={(category, search) => {
            const lowerSearch = search.toLowerCase();
            setFilteredGames(
              games.filter(
                (game) =>
                  (category === "Home" || game.category === category) &&
                  game.name.toLowerCase().includes(lowerSearch),
              ),
            );
          }}
        />
        {/* <SearchBar value={search} onChange={setSearch} /> */}
        <ProviderFilter
          providers={providers}
          value={provider}
          onChange={setProvider}
        />
        <GameGrid games={filteredGames} onToggleFavorite={toggleFavorite} />
      </div>
    </>
  );
}
