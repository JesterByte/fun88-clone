import ProviderFilter from "./ProviderFilter";
import { providers } from "../api/providers";
import { useState } from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  const [provider, setProvider] = useState("");

  const gameProviders = Array.from(
    new Set(providers.map((provider) => provider.name)),
  );

  return (
    <div className="px-4">
      <div className="relative w-full">
        <img
          src="/icons/search_active.svg"
          alt="Search"
          className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 point-events-none"
        />
        <input
          type="text"
          placeholder="Find you game"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full rounded-lg px-10 py-2 text-sm border border-[#9E9E9E] focus:outline-[#2596be]"
        />
      </div>
      <ProviderFilter
        providers={gameProviders}
        value={provider}
        onChange={setProvider}
      />
    </div>
  );
}
