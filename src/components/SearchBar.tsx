interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="px-4">
      <input
        type="text"
        placeholder="Search games"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-lg bg-gray-800 px-4 py-2 text-sm text-white placeholder-white/40 focus:outline-none"
      />
    </div>
  );
}
