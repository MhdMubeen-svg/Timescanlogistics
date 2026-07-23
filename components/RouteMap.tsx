"use client";

/**
 * Animated trade-route arcs connecting the six Timescan offices.
 * Pure SVG - no map library, fast to load, decorative (aria-hidden).
 */
export default function RouteMap() {
  const hubs = [
    { x: 120, y: 118, label: "YVR" },
    { x: 205, y: 150, label: "ORD" },
    { x: 555, y: 178, label: "DXB" },
    { x: 648, y: 205, label: "MAA" },
    { x: 712, y: 232, label: "KUL" },
    { x: 760, y: 152, label: "PVG" },
  ];
  const arcs = [
    "M120,118 Q440,10 760,152",
    "M120,118 Q380,40 555,178",
    "M205,150 Q430,60 648,205",
    "M760,152 Q740,200 712,232",
    "M555,178 Q600,196 648,205",
    "M205,150 Q160,138 120,118",
  ];

  return (
    <svg viewBox="0 0 880 320" className="h-auto w-full" aria-hidden="true" role="img">
      {/* faint graticule */}
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={`v${i}`} x1={80 + i * 90} y1="20" x2={80 + i * 90} y2="300" stroke="#ffffff" strokeOpacity="0.05" />
      ))}
      {Array.from({ length: 4 }).map((_, i) => (
        <line key={`h${i}`} x1="40" y1={60 + i * 70} x2="840" y2={60 + i * 70} stroke="#ffffff" strokeOpacity="0.05" />
      ))}
      {arcs.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke="#F26522"
          strokeWidth="1.6"
          strokeDasharray="900"
          strokeDashoffset="900"
          className="animate-dash motion-reduce:[stroke-dashoffset:0]"
          style={{ animationDelay: `${i * 0.25}s` }}
          strokeOpacity="0.75"
        />
      ))}
      {hubs.map((h) => (
        <g key={h.label}>
          <circle cx={h.x} cy={h.y} r="10" fill="#F26522" fillOpacity="0.18" />
          <circle cx={h.x} cy={h.y} r="4" fill="#F26522" />
          <text x={h.x + 14} y={h.y + 4} fill="#fff" fillOpacity="0.85" fontSize="13" fontFamily="var(--font-display)" fontWeight="700" letterSpacing="2">
            {h.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
