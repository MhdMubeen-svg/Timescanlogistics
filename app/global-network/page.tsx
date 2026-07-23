import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import PortTicker from "@/components/PortTicker";
import RouteMap from "@/components/RouteMap";
import { offices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Global Network — Offices in Canada, UAE, India, Malaysia, China & USA",
  description:
    "Timescan Logistics operates its own offices in Vancouver, Dubai, Chennai, Kuala Lumpur, Shanghai and Chicago - covering North America, the Middle East and Asia around the clock.",
};

const lanes = [
  { from: "Asia", to: "North America", d: "Transpacific FCL/LCL programs from China, Malaysia and India into Vancouver, Chicago and beyond - with buyer's consolidation and peak-season space protection." },
  { from: "Middle East", to: "North America", d: "Air and sea services between the UAE and Canada/USA, supporting trading houses, re-exporters and project cargo through the Dubai gateway." },
  { from: "India", to: "Worldwide", d: "Export programs from Chennai and major Indian gateways for manufacturers and agri-exporters, with documentation handled locally by our own team." },
  { from: "Intra-Asia", to: "& beyond", d: "Malaysia-China-India connectivity for sourcing operations, plus sea-air combinations via Dubai when the calendar is tight but air freight isn't justified." },
];

export default function GlobalNetwork() {
  return (
    <>
      <PageHero
        eyebrow="Global Network"
        title="Our own people in six countries. Not a directory of agents."
        intro="Every Timescan office is staffed by our team, working your cargo in local language, local time and local regulation - and handing over across time zones so operations never sleep."
      />

      <section className="bg-ink pb-4 pt-10">
        <div className="container-x"><RouteMap /></div>
        <div className="mt-8"><PortTicker /></div>
      </section>

      <section className="bg-white py-20 lg:py-28" aria-labelledby="offices-h">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Offices</p>
            <h2 id="offices-h" className="h-display mt-2 text-3xl sm:text-4xl">Where you'll find us.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offices.map((o, i) => (
              <Reveal key={o.code} delay={i * 70}>
                <article className="h-full rounded-sm border border-ink/10 p-7 transition-colors hover:border-cargo">
                  <div className="flex items-baseline justify-between">
                    <h3 className="h-display text-xl">{o.city}</h3>
                    <span className="font-display text-sm font-extrabold tracking-widest text-cargo">{o.code}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-ink/70">{o.country}</p>
                  <p className="mt-3 text-sm leading-relaxed text-steel">{o.role}</p>
                  <p className="mt-4 text-sm text-steel">{o.phone}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-fog py-20 lg:py-28" aria-labelledby="lanes-h">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Core trade lanes</p>
            <h2 id="lanes-h" className="h-display mt-2 text-3xl sm:text-4xl">The corridors we run every week.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {lanes.map((l, i) => (
              <Reveal key={l.from + l.to} delay={i * 80} className="rounded-sm bg-white p-8">
                <p className="font-display text-lg font-extrabold uppercase tracking-wide text-ink">
                  {l.from} <span className="text-cargo">→</span> {l.to}
                </p>
                <p className="mt-3 leading-relaxed text-steel">{l.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
