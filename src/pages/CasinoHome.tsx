import { useGames } from "../hooks/useGames";
import BannerCarousel from "../components/BannerCarousel";
import CategoryTabs from "../components/CategoryTabs";
import GameGrid from "../components/GameGrid";
import ProviderCarousel from "../components/ProviderCarousel";
import Navbar from "../components/Navbar";
import type { GameCategory } from "../types/game";
import { useState } from "react";
import type { Game } from "../types/game";
import CasinoSeoContent from "../components/CasinoSeoContent";
import Footer from "../components/Footer";

export default function CasinoHome() {
  const { games, loading, toggleFavorite } = useGames();
  const [activeCategory, setActiveCategory] = useState<GameCategory>("Home");
  const [selectedProvider, setSelectedProvider] = useState("");
  const [filteredGames, setFilteredGames] = useState<Game[]>(games);

  if (loading) {
    return <div className="p-4 text-center">Loading games...</div>;
  }

  return (
    <>
      <Navbar />
      <main className="space-y-4">
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
      </main>
      <Footer />
    </>
  );
}
