import { useEffect, useState } from "react";
import Modal from "./Modal";
import { providers } from "../api/providers";
import { useTheme } from "../context/ThemeContext";

interface Props {
  value: string;
  onChange: (value: string, selectedProvider: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  const [search, setSearch] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState("");
  const { theme } = useTheme();
  const [textColor, setTextColor] = useState(
    theme === "dark" ? "text-white" : "text-black",
  );

  useEffect(() => {
    setTextColor(theme === "dark" ? "text-white" : "text-black");
  }, [theme]);

  useEffect(() => {
    onChange(search, selectedProvider);
  }, [search, selectedProvider]);

  const toggleProvider = (provider: string) => {
    setSelectedProvider(provider);
  };

  return (
    <>
      <div className="flex px-4 gap-2">
        <div className="w-full">
          <div className="relative">
            <img
              src="/icons/search_active.svg"
              alt="Search"
              className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 point-events-none"
            />
            <input
              type="text"
              placeholder="Find you game"
              value={value}
              onChange={(event) => setSearch(event.target.value)}
              className={`placeholder:${textColor} ${textColor} w-full rounded-lg px-10 py-2 text-sm border border-[#9E9E9E] focus:outline-[#2596be]`}
            />
          </div>
        </div>
        <button
          className="px-3 py-1.5 bg-[#2596be] hover:bg-[#4FAFD1] rounded-lg"
          onClick={() => setModalOpen(true)}
        >
          <img
            src="/icons/provider_filter.webp"
            alt="Provider Filter"
            className="h-5 w-auto"
          />
        </button>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          title={`Game providers (${providers.length})`}
        >
          <div className="grid grid-cols-2 gap-2 px-4">
            {providers.map((provider) => (
              <>
                <div
                  className={`${theme === "dark" ? "bg-neutral-700" : "bg-gray-100"} ${textColor} relative rounded-lg flex justify-center items-center h-12`}
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
      </div>
    </>
  );
}
