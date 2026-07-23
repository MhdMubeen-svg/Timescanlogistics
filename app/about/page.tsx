import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Timescan Logistics is a CBSA-registered international freight forwarder founded in Vancouver, Canada, led by operators with two decades of experience in retail, manufacturing and global trade.",
};

const values = [
  { t: "Accountability", d: "One accountable partner from booking to delivery. When something changes on the water or in the air, you hear it from us first - with a plan." },
  { t: "Precision", d: "Freight forwarding is a discipline of details: cut-offs, documents, tariff lines, free time. We treat every one as if the demurrage bill were ours." },
  { t: "Partnership", d: "We grow when our customers trade more. Rate advice, mode strategy and market intelligence are part of the service, not an upsell." },
  { t: "Technology", d: "Visibility, exception alerts and analytics designed by a leadership team certified in SAP supply-chain and analytics platforms." },
];

const milestones = [
  { y: "2005", d: "Founding team begins two decades in retail operations, food manufacturing and distribution across the Yesesi Group of Companies." },
  { y: "2010s", d: "Expansion into international trade: sourcing networks established across Asia and multi-market trading operations under Global Source Impex." },
  { y: "2020s", d: "Timescan Logistics Ltd founded in Vancouver, Canada and registered with CBSA as an international freight forwarder." },
  { y: "Today", d: "Own offices in Canada, the UAE, India, Malaysia, China and the USA, serving customers primarily across India, the USA and Canada." },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Timescan"
        title="Forwarding built on the shipper's side of the desk."
        intro="Timescan Logistics Ltd is an international freight forwarding company headquartered in Vancouver, Canada and registered with the Canada Border Services Agency (CBSA). We move cargo by air, sea, rail and road across North America, the Middle East and Asia."
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Our story</p>
            <h2 className="h-display mt-2 text-3xl sm:text-4xl">From operating businesses to moving them.</h2>
            <div className="mt-6 space-y-4 leading-relaxed text-steel">
              <p>
                Most forwarders started in forwarding. We didn't. Our leadership spent
                nearly two decades running retail operations, food manufacturing and
                cross-border trading businesses before founding Timescan - building the
                sourcing networks across Asia that we now serve as a logistics partner.
              </p>
              <p>
                That history shapes how we work. We know that a container is never just a
                container: it's a production schedule, a store shelf, a customer promise.
                So we plan freight around your operation, not around a carrier's schedule.
              </p>
              <p>
                Today Timescan operates its own offices in six countries, with customers
                concentrated in India, the USA and Canada, and a growing technology
                platform that gives shippers the visibility we always wished we'd had.
              </p>
            </div>
            <Link href="/global-network" className="btn-ghost mt-8">Explore our network</Link>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow">Milestones</p>
            </Reveal>
            <ol className="mt-6 space-y-0">
              {milestones.map((m, i) => (
                <Reveal key={m.y} delay={i * 90}>
                  <li className="relative border-l-2 border-ink/10 pb-8 pl-8 last:pb-0">
                    <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-cargo" aria-hidden="true" />
                    <p className="font-display text-sm font-extrabold uppercase tracking-widest text-cargo">{m.y}</p>
                    <p className="mt-1.5 leading-relaxed text-steel">{m.d}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-fog py-20 lg:py-28" aria-labelledby="values-h">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">How we work</p>
            <h2 id="values-h" className="h-display mt-2 text-3xl sm:text-4xl">Four commitments on every shipment.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 80} className="rounded-sm border-t-2 border-cargo bg-white p-7">
                <h3 className="h-display text-lg">{v.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel">{v.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x grid items-center gap-10 rounded-sm bg-ink p-10 text-white lg:grid-cols-[1.3fr_1fr] lg:p-14">
          <Reveal>
            <p className="eyebrow">Leadership</p>
            <h2 className="h-display mt-2 text-3xl !text-white">Founder & Director</h2>
            <p className="mt-5 leading-relaxed text-white/75">
              Timescan is led by its Founder & Director, Mohamed Yusuf Silarsha - an
              entrepreneur with 19+ years across retail, manufacturing, international
              trade and logistics, an MBA in International Management, a BSc in Computer
              Science, advanced analytics studies, and SAP certifications spanning IBP,
              Analytics Cloud, Supply Chain Management, and Sales & Distribution.
            </p>
          </Reveal>
          <Reveal delay={120} className="rounded-sm border border-white/15 p-7">
            <p className="font-display text-sm font-bold uppercase tracking-wider text-cargo">The vision</p>
            <p className="mt-3 text-lg leading-relaxed text-white/90">
              "Simplify and strengthen global trade through reliable, efficient,
              technology-driven logistics."
            </p>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
