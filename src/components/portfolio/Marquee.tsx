export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="grain relative overflow-hidden border-y border-ink/10 bg-ink py-3 text-paper">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-3 px-4 font-serif-display text-sm italic tracking-wide sm:text-base"
          >
            {item}
            <span aria-hidden className="h-1 w-1 rotate-45 bg-gold not-italic" />
          </span>
        ))}
      </div>
    </div>
  );
}
