"use client";

import { useEffect, useState } from "react";
import { offices } from "@/lib/data";

/** Signature element: live local-time strip across the six-office network. */
export default function PortTicker({ dark = true }: { dark?: boolean }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(t);
  }, []);

  const fmt = (tz: string) =>
    now
      ? new Intl.DateTimeFormat("en-CA", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: tz }).format(now)
      : "--:--";

  const items = [...offices, ...offices]; // duplicated for seamless loop

  return (
    <div
      className={`overflow-hidden border-y ${dark ? "border-white/10 bg-ink-800/60" : "border-ink/10 bg-fog"}`}
      aria-label="Local time at Timescan offices worldwide"
    >
      <div className="flex w-max animate-ticker gap-10 py-3 pl-10 motion-reduce:animate-none">
        {items.map((o, i) => (
          <span key={i} className="flex items-center gap-3 whitespace-nowrap" aria-hidden={i >= offices.length}>
            <span className={`font-display text-sm font-extrabold tracking-widest ${dark ? "text-cargo" : "text-cargo"}`}>
              {o.code}
            </span>
            <span className={`text-sm ${dark ? "text-white/80" : "text-ink/80"}`}>{o.city}</span>
            <span
              className={`font-mono text-sm tabular-nums ${dark ? "text-white/60" : "text-steel"}`}
              suppressHydrationWarning
            >
              {fmt(o.tz)} LT
            </span>
            <span className={dark ? "text-white/20" : "text-ink/20"}>•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
