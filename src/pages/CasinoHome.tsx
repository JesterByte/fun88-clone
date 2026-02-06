import { useGames } from "../hooks/useGames";

export default function CasinoHome() {
  const { games, loading, toggleFavorite } = useGames();

  if (loading) {
    return <div className="p-4 text-center">Loading games...</div>;
  }

  return (
    <div className="space-y-4">
      {/* BannerCarousel */}
      {/* CategoryTabs */}
      {/* SearchBar */}
      {/* ProviderFilter */}
      {/* GameGrid */}
    </div>
  );
}
