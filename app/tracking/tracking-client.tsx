"use client";

import { useState } from "react";

type Milestone = { label: string; place: string; time: string; done: boolean };

const demo: Milestone[] = [
  { label: "Booking confirmed", place: "Shanghai (PVG)", time: "2026-07-02 09:14 LT", done: true },
  { label: "Cargo received at origin", place: "Shanghai CFS", time: "2026-07-05 16:40 LT", done: true },
  { label: "Vessel departed", place: "Port of Shanghai", time: "2026-07-08 22:05 LT", done: true },
  { label: "In transit — transpacific", place: "Pacific Ocean", time: "Current status", done: true },
  { label: "Arrival at destination port", place: "Port of Vancouver", time: "ETA 2026-07-24", done: false },
  { label: "Customs clearance (CBSA)", place: "Vancouver", time: "Pending arrival", done: false },
  { label: "Delivered", place: "Consignee door", time: "—", done: false },
];

export default function TrackingClient() {
  const [ref, setRef] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "found" | "notfound">("idle");

  function track() {
    const v = ref.trim();
    if (!v) return;
    setState("loading");
    // Demo behaviour: replace with a fetch to your tracking API endpoint.
    setTimeout(() => {
      setState(/^tsl/i.test(v) || v.length >= 8 ? "found" : "notfound");
    }, 600);
  }

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-x max-w-3xl">
        <div className="flex flex-col gap-3 sm:flex-row">
          <label htmlFor="track-ref" className="sr-only">Shipment reference number</label>
          <input
            id="track-ref"
            className="field flex-1 !py-4 text-base"
            placeholder="TSL-2026-004821"
            value={ref}
            onChange={(e) => setRef(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && track()}
            autoComplete="off"
            inputMode="text"
          />
          <button type="button" onClick={track} className="btn-primary justify-center !py-4" disabled={state === "loading"}>
            {state === "loading" ? "Searching…" : "Track shipment"}
          </button>
        </div>

        <div aria-live="polite" className="mt-10">
          {state === "notfound" && (
            <div className="rounded-sm border border-cargo/40 bg-cargo/5 p-6">
              <p className="font-display font-bold text-ink">No shipment found for "{ref}".</p>
              <p className="mt-2 text-sm text-steel">
                Check the reference on your booking confirmation or house bill, or contact
                your Timescan operations coordinator and we'll locate it for you.
              </p>
            </div>
          )}

          {state === "found" && (
            <div className="rounded-sm border border-ink/10">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/10 bg-fog p-6">
                <div>
                  <p className="font-display text-xs font-bold uppercase tracking-widest text-cargo">Ocean · FCL 1×40'HC</p>
                  <p className="h-display mt-1 text-xl">{ref.toUpperCase()}</p>
                </div>
                <p className="rounded-sm bg-ink px-3 py-1.5 font-display text-xs font-bold uppercase tracking-wider text-white">
                  In transit
                </p>
              </div>
              <ol className="p-6">
                {demo.map((m) => (
                  <li key={m.label} className="relative border-l-2 border-ink/10 pb-7 pl-7 last:pb-0">
                    <span
                      aria-hidden="true"
                      className={`absolute -left-[7px] top-1 h-3 w-3 rounded-full ${m.done ? "bg-cargo" : "border-2 border-ink/25 bg-white"}`}
                    />
                    <p className={`font-display text-sm font-bold ${m.done ? "text-ink" : "text-steel"}`}>{m.label}</p>
                    <p className="mt-0.5 text-sm text-steel">{m.place} · {m.time}</p>
                  </li>
                ))}
              </ol>
              <p className="border-t border-ink/10 p-5 text-xs text-steel">
                Demo data shown. Connect this page to your TMS or carrier API for live milestones.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
