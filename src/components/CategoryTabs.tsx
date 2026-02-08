import { useEffect, useState } from "react";
import type { GameCategory } from "../types/game";
import { categories } from "../types/game";
import SearchBar from "./SearchBar";

interface Props {
  active: GameCategory;
  onChange: (category: GameCategory) => void;
  onFilterChange: (category: GameCategory, search: string) => void;
}

export default function CategoryTabs({
  active,
  onChange,
  onFilterChange,
}: Props) {
  const [search, setSearch] = useState("");
  const [openSearch, setOpenSearch] = useState(false);

  useEffect(() => {
    onFilterChange(active, search);
  }, [active, search]);

  return (
    <>
      <div className="flex gap-2 overflow-auto px-4">
        <button
          className="font-medium text-sm"
          onClick={() => setOpenSearch(!openSearch)}
        >
          <img
            src={`/icons/search_${openSearch ? "active" : "light"}.svg`}
            alt="Search"
            className="h-8"
          />
          Search
        </button>

        {categories.map((category) => {
          const isActive = active === category;
          const iconSrc = `/icons/${category.replace(/\s+/g, "_")}_${isActive ? "active" : "light"}.webp`;
          return (
            <>
              <button
                key={category}
                onClick={() => onChange(category)}
                className={`whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium transition flex flex-col items-center ${
                  isActive ? "text-[#2596be]" : "text-black"
                }`}
              >
                <img
                  src={iconSrc.toLocaleLowerCase()}
                  alt={category}
                  className="h-8"
                />
                {category.toUpperCase()}
              </button>
            </>
          );
        })}
      </div>

      {openSearch && <SearchBar value={search} onChange={setSearch} />}
    </>
  );
}
