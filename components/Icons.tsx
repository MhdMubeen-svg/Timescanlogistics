const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export function PlaneIcon({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M2 16l20-6-20-6 4 6-4 6zM6 10h16" />
    </svg>
  );
}
export function ShipIcon({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M3 15l2 5h14l2-5H3zM7 15V9h10v6M10 9V5h4v4" />
    </svg>
  );
}
export function TrainIcon({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <rect x="5" y="3" width="14" height="13" rx="2" />
      <path d="M5 10h14M9 20l-2 2M15 20l2 2M8 16v4h8v-4" />
      <circle cx="9" cy="13" r=".5" /><circle cx="15" cy="13" r=".5" />
    </svg>
  );
}
export function TruckIcon({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M1 6h13v10H1zM14 10h5l3 3v3h-8" />
      <circle cx="6" cy="18" r="2" /><circle cx="17" cy="18" r="2" />
    </svg>
  );
}
export function StampIcon({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M5 21h14M6 17h12v-3H6zM12 14V9M9 6a3 3 0 116 0c0 2-1 3-3 3s-3-1-3-3z" />
    </svg>
  );
}
export function ChainIcon({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M4 4h6v6H4zM14 14h6v6h-6zM10 7h7v7" />
    </svg>
  );
}
export const serviceIcons: Record<string, (p: { className?: string }) => JSX.Element> = {
  "air-freight": PlaneIcon,
  "ocean-freight": ShipIcon,
  "rail-freight": TrainIcon,
  "road-transport": TruckIcon,
  "customs-brokerage": StampIcon,
  "supply-chain": ChainIcon,
};
