import Link from "next/link";
import Logo from "./Logo";
import { offices } from "@/lib/data";

const cols = [
  {
    h: "Services",
    links: [
      ["Air Freight", "/services#air-freight"],
      ["Ocean Freight", "/services#ocean-freight"],
      ["Rail Freight", "/services#rail-freight"],
      ["Road Transport", "/services#road-transport"],
      ["Customs & Compliance", "/services#customs-brokerage"],
      ["Supply Chain Solutions", "/services#supply-chain"],
    ],
  },
  {
    h: "Company",
    links: [
      ["About Timescan", "/about"],
      ["Industries", "/industries"],
      ["Global Network", "/global-network"],
      ["Insights", "/blog"],
      ["Careers", "/careers"],
      ["Contact", "/contact"],
    ],
  },
  {
    h: "Tools",
    links: [
      ["Track a Shipment", "/tracking"],
      ["Request a Quote", "/quote"],
      ["Trade Resources", "/resources"],
      ["Country Guides", "/guides"],
      ["Freight Calculators", "/tools"],
      ["FAQ", "/faq"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            International freight forwarding registered with CBSA. Air, sea, rail and road
            transport connecting North America, the Middle East and Asia — with our own
            offices in six countries.
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2" aria-label="Office locations">
            {offices.map((o) => (
              <li key={o.code} className="font-display text-xs font-bold tracking-widest text-cargo">
                {o.code}
              </li>
            ))}
          </ul>
        </div>
        {cols.map((c) => (
          <nav key={c.h} aria-label={c.h}>
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-white">{c.h}</h2>
            <ul className="mt-4 space-y-2.5">
              {c.links.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/70 transition-colors hover:text-cargo">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Timescan Logistics Ltd. All rights reserved. Headquartered in Vancouver, Canada.</p>
          <p>CBSA-registered freight forwarder</p>
        </div>
      </div>
    </footer>
  );
}
