import { useEffect, useRef, useState } from "react";
import { providers } from "../api/providers";
import type { Game } from "../types/game";
import Modal from "./Modal";

const AUTO_SCROLL_MS = 3000;

interface Props {
  filteredGames: Game[];
  onClick: (provider: string) => void;
}

export default function ProviderCarousel({ filteredGames, onClick }: Props) {
  const [itemsPerView, setItemsPerView] = useState(5);
  const [selectedProvider, setSelectedProvider] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  const toggleProvider = (provider: string) => {
    setSelectedProvider(provider);
  };

  useEffect(() => {
    onClick(selectedProvider);
  }, [selectedProvider]);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setItemsPerView(3);
      } else {
        setItemsPerView(6);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, AUTO_SCROLL_MS);

    return () => clearInterval(interval);
  }, []);

  const getItemWidth = () => {
    if (!itemRef.current) return 0;
    return itemRef.current.getBoundingClientRect().width;
  };

  const scrollLeft = () => {
    if (!containerRef.current) return;

    const amount = getItemWidth();
    containerRef.current.scrollBy({
      left: -amount,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    if (!containerRef.current) return;

    const element = containerRef.current;
    const amount = getItemWidth();
    const maxScroll = element.scrollWidth - element.clientWidth;

    const nextScrollLeft = element.scrollLeft + amount;

    if (nextScrollLeft >= maxScroll - 1) {
      element.scrollTo({
        left: 0,
        behavior: "smooth",
      });
      return;
    }

    element.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="mx-4 space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-gray-500">Game providers</p>

          <div className="flex items-center  space-x-2">
            <button
              className="bg-gray-100 rounded px-3 py-1.5 text-sm"
              onClick={() => setModalOpen(true)}
            >
              More
            </button>

            <button onClick={scrollLeft}>
              <img
                src="/icons/left-arrow.svg"
                className="bg-gray-100 rounded px-3 py-1.5 h-7"
              />
            </button>
            <button onClick={scrollRight}>
              <img
                src="/icons/right-arrow.svg"
                className="bg-gray-100 rounded px-3 py-1.5 h-7"
              />
            </button>
          </div>
        </div>

        <div
          ref={containerRef}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory"
        >
          {providers.map((provider, index) => (
            <div
              key={provider.id}
              ref={index === 0 ? itemRef : null}
              style={{ flex: `0 0 calc(100% / ${itemsPerView})` }}
              className="p-1 snap-start"
            >
              <div
                className={`flex items-center justify-center bg-gray-100 rounded h-12 md:h-14 sm:h-16 gap-2 ${selectedProvider === provider.name ? "border border-[#2596be]" : ""}`}
                onClick={() => {
                  if (selectedProvider === provider.name) {
                    setSelectedProvider("");
                  } else {
                    setSelectedProvider(provider.name);
                  }
                }}
              >
                {/* <img
                  src={provider.logo}
                  alt={provider.name}
                  className="h-full w-full max-h-10 max-w-[80%] object-contain"
                /> */}
                <div className="text-sm">{provider.name}</div>
                <div className="text-gray-500">
                  (
                  {
                    filteredGames.filter((game: Game) => {
                      return game.provider === provider.name;
                    }).length
                  }
                  )
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title={`Game providers (${providers.length})`}
      >
        <div className="grid grid-cols-2 gap-2 px-4">
          {providers.map((provider) => (
            <>
              <div
                className="relative rounded-xl bg-gray-100 flex justify-center items-center h-12"
                onClick={() => {
                  toggleProvider(provider.name);
                }}
              >
                {/* <img
                          src={provider.logo}
                          alt={provider.name}
                          onClick={() => toggleProvider(provider.name)}
                        /> */}
                {provider.name}
              </div>
            </>
          ))}
        </div>
      </Modal>
    </>
  );
}
