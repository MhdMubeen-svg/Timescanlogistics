import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { jobs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Careers — Join Timescan Logistics",
  description: "Open roles at Timescan Logistics across Vancouver, Dubai, Chennai, Kuala Lumpur, Shanghai and Chicago - operations, customs, pricing and sales.",
};

const perks = [
  { t: "Global by default", d: "Work daily with colleagues across six countries and hand cargo across time zones - real international exposure from day one." },
  { t: "Learn from operators", d: "A leadership team with two decades in trade and industry, plus SAP-certified supply-chain expertise, invested in your development." },
  { t: "Room to build", d: "We're growing our technology platform and trade lanes. The processes you improve become how the company works." },
  { t: "Ownership culture", d: "Small teams, direct access to leadership, and accountability for outcomes - not tickets." },
];

export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Move the world's goods. Grow with them."
        intro="Timescan is hiring across operations, customs, pricing and sales in all six of our offices. If you like problems that span oceans and time zones, you'll fit right in."
      />

      <section className="bg-white py-20 lg:py-28" aria-labelledby="perks-h">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Why join</p>
            <h2 id="perks-h" className="h-display mt-2 text-3xl sm:text-4xl">What it's like here.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p, i) => (
              <Reveal key={p.t} delay={i * 80} className="rounded-sm border-t-2 border-cargo bg-fog p-7">
                <h3 className="h-display text-lg">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel">{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-fog py-20 lg:py-28" aria-labelledby="roles-h">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Open roles</p>
            <h2 id="roles-h" className="h-display mt-2 text-3xl sm:text-4xl">Current openings.</h2>
          </Reveal>
          <ul className="mt-12 divide-y divide-ink/10 overflow-hidden rounded-sm border border-ink/10 bg-white">
            {jobs.map((j, i) => (
              <Reveal key={j.title} delay={i * 60}>
                <li className="flex flex-col gap-3 p-6 transition-colors hover:bg-fog sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="h-display text-lg">{j.title}</h3>
                    <p className="mt-1 text-sm text-steel">{j.location} · {j.dept} · {j.type}</p>
                  </div>
                  <Link href={`/contact?role=${encodeURIComponent(j.title)}`} className="btn-ghost shrink-0 !px-5 !py-2.5">
                    Apply
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={100} className="mt-8 rounded-sm border-l-2 border-cargo bg-white p-6">
            <p className="text-sm leading-relaxed text-steel">
              Don't see your role? We hire good freight people whenever we find them.
              Send your CV via the <Link href="/contact" className="font-semibold text-cargo underline-offset-2 hover:underline">contact page</Link> with
              the office you'd like to join.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
