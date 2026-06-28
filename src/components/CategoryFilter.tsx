export default function CategoryFilter({
  selected,
  onChange,
}: {
  selected: string
  onChange: (value: string) => void
}) {
  const options = ['全部', '學校', '校外']
  return (
    <div className="flex gap-2 mb-8 justify-center">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`font-mono text-xs px-3 py-1.5 rounded-md border transition-colors ${
            selected === opt
              ? 'bg-[#1a2744] text-primary border-[#3878ff44]'
              : 'bg-transparent text-[#5a7090] border-[#1e2d4a] hover:border-[#3878ff44]'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}
