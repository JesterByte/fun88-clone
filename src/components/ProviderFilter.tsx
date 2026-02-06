interface Props {
  providers: string[];
  value: string;
  onChange: (provider: string) => void;
}

export default function ProviderFilter({ providers, value, onChange }: Props) {
  return (
    <div className="px-4">
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-lg bg-gray-800 px-4 py-2 text-sm text-white focus:outline-none"
      >
        <option value="">All Providers</option>
        {providers.map((provider) => (
          <option key={provider} value={provider}>
            {provider}
          </option>
        ))}
      </select>
    </div>
  );
}
