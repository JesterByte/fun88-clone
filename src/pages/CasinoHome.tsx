import { useGames } from "../hooks/useGames";
import BannerCarousel from "../components/BannerCarousel";
import CategoryTabs from "../components/CategoryTabs";
import GameGrid from "../components/GameGrid";
import ProviderCarousel from "../components/ProviderCarousel";
import Navbar from "../components/Navbar";
import type { GameCategory } from "../types/game";
import { useEffect, useState } from "react";
import type { Game } from "../types/game";
import CasinoSeoContent from "../components/CasinoSeoContent";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";

export default function CasinoHome() {
  const { games, loading, toggleFavorite } = useGames();
  const [activeCategory, setActiveCategory] = useState<GameCategory>("Home");
  const [selectedProvider, setSelectedProvider] = useState("");
  const [search, setSearch] = useState("");
  const [filteredGames, setFilteredGames] = useState<Game[]>(games);
  const { theme } = useTheme();

  useEffect(() => {
    setFilteredGames(
      games.filter(
        (game) =>
          (game.category === "Home" || game.category === activeCategory) &&
          game.name.toLowerCase().includes(search) &&
          (selectedProvider === "" || game.provider === selectedProvider),
      ),
    );
  }, [games, activeCategory, selectedProvider]);

  if (loading) {
    return <div className="p-4 text-center">Loading games...</div>;
  }

  return (
    <>
      <Navbar />
      <main
        className={`space-y-4 transition-all duration-500 ${theme === "dark" ? "bg-black" : "bg-white"}`}
      >
        <BannerCarousel />
        <ProviderCarousel
          filteredGames={filteredGames}
          onClick={setSelectedProvider}
        />
        <CategoryTabs
          active={activeCategory}
          onChange={setActiveCategory}
          onFilterChange={(category, search, selectedProvider) => {
            const lowerSearch = search.toLowerCase();
            setSearch(lowerSearch);
            setSelectedProvider(selectedProvider);
            setFilteredGames(
              games.filter(
                (game) =>
                  (category === "Home" || game.category === category) &&
                  game.name.toLowerCase().includes(lowerSearch),
              ),
            );
          }}
        />
        <GameGrid
          games={filteredGames}
          selectedProvider={selectedProvider}
          onToggleFavorite={toggleFavorite}
        />
        <CasinoSeoContent />
        <Footer />
      </main>
    </>
  );
}
