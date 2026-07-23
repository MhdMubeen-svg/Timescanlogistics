export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
        <rect x="1" y="1" width="32" height="32" rx="3" fill={light ? "#F26522" : "#0B1C2E"} />
        <path d="M8 22 L17 9 L26 22" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="17" cy="9" r="2.4" fill="#F26522" stroke="#fff" strokeWidth="1.4" />
      </svg>
      <span className={`font-display text-lg font-extrabold uppercase tracking-tight ${light ? "text-white" : "text-ink"}`}>
        Timescan<span className="text-cargo">.</span>
        <span className={`ml-1 text-[10px] font-semibold tracking-[0.3em] ${light ? "text-white/70" : "text-steel"}`}>LOGISTICS</span>
      </span>
    </span>
  );
}
