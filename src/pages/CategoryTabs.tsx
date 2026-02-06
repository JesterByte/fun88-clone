import type { GameCategory } from "../types/game";

const categories: GameCategory[] = ["START", "NEW", "SLOTS"];

interface Props {
  active: GameCategory;
  onChange: (category: GameCategory) => void;
}

export default function CategoryTabs({ active, onChange }: Props) {
  return (
    <div className="flex gap-2 overflow-auto px-4">
      {categories.map((category) => {
        const isActive = active === category;

        return (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
              isActive
                ? "bg-yellow-400 text-black"
                : "bg-gray-800 text-white/70"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
