import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import PortTicker from "@/components/PortTicker";
import RouteMap from "@/components/RouteMap";
import CTA from "@/components/CTA";
import { services, offices } from "@/lib/data";
import { posts } from "@/lib/posts";
import { serviceIcons } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Timescan Logistics | Global Freight Forwarding — Air, Ocean, Rail & Road",
  description:
    "CBSA-registered freight forwarder headquartered in Vancouver with offices in the UAE, India, Malaysia, China and the USA. Get quotes for air, ocean, rail and road freight.",
};

const stats = [
  { k: "6", l: "Countries with our own offices" },
  { k: "4", l: "Modes: air, ocean, rail, road" },
  { k: "3", l: "Continents connected daily" },
  { k: "24/7", l: "Operations coverage across time zones" },
];

const reasons = [
  {
    t: "CBSA-registered, compliance-first",
    d: "We are registered with the Canada Border Services Agency and file CARM, PARS and PAPS ourselves — no third-party black boxes at the border.",
  },
  {
    t: "Our own offices, not just agents",
    d: "Vancouver, Dubai, Chennai, Kuala Lumpur, Shanghai and Chicago are Timescan teams. When cargo moves overseas, the person answering is on our payroll.",
  },
  {
    t: "Technology-driven visibility",
    d: "Milestone tracking, exception alerts and reporting built by a leadership team with SAP supply-chain and analytics credentials — freight data you can act on.",
  },
  {
    t: "Built by operators",
    d: "Two decades in retail, manufacturing and international trade before forwarding a single container. We plan freight the way shippers actually run businesses.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="container-x grid gap-10 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
          <div className="animate-fadeUp">
            <p className="eyebrow">International Freight Forwarding · CBSA-Registered</p>
            <h1 className="h-display mt-4 text-4xl leading-[1.05] !text-white sm:text-5xl lg:text-6xl">
              Global freight,
              <br />
              forwarded with <span className="text-cargo">precision.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              Air, sea, rail and road transport across North America, the Middle East and
              Asia — managed by our own offices in six countries, cleared by our own
              customs team in Canada.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/quote" className="btn-primary">Request a quote</Link>
              <Link href="/tracking" className="btn-ghost-light">Track a shipment</Link>
            </div>
          </div>
          <div className="animate-fadeUp [animation-delay:200ms]">
            <RouteMap />
          </div>
        </div>
        <PortTicker />
      </section>

      {/* SERVICES */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="services-h">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">What we move</p>
            <h2 id="services-h" className="h-display mt-2 text-3xl sm:text-4xl">
              Four modes. One accountable partner.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = serviceIcons[s.slug];
              return (
                <Reveal key={s.slug} delay={i * 70}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="group flex h-full flex-col bg-white p-8 transition-colors hover:bg-fog"
                  >
                    <span className="text-cargo"><Icon className="h-8 w-8" /></span>
                    <h3 className="h-display mt-5 text-xl">{s.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-steel">{s.desc}</p>
                    <span className="mt-5 font-display text-xs font-bold uppercase tracking-widest text-cargo">
                      Explore <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY TIMESCAN */}
      <section className="bg-fog py-20 lg:py-28" aria-labelledby="why-h">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <p className="eyebrow">Why Timescan</p>
            <h2 id="why-h" className="h-display mt-2 text-3xl sm:text-4xl">
              A forwarder built by people who have been the shipper.
            </h2>
            <p className="mt-5 text-steel leading-relaxed">
              Timescan was founded by operators from retail, manufacturing and
              international trade. We know what a delayed container costs a production
              line — because we have stood on that side of the desk.
            </p>
            <Link href="/about" className="btn-ghost mt-8">Our story</Link>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal key={r.t} delay={i * 80} className="rounded-sm border-l-2 border-cargo bg-white p-6">
                <h3 className="h-display text-base">{r.t}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-steel">{r.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-ink py-16 text-white" aria-label="Company at a glance">
        <div className="container-x grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 80}>
              <p className="font-display text-5xl font-extrabold text-cargo">{s.k}</p>
              <p className="mt-2 text-sm text-white/70">{s.l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* NETWORK STRIP */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="network-h">
        <div className="container-x">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Where we are</p>
              <h2 id="network-h" className="h-display mt-2 text-3xl sm:text-4xl">Six offices. Three continents.</h2>
            </div>
            <Link href="/global-network" className="btn-ghost">View the network</Link>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {offices.map((o, i) => (
              <Reveal key={o.code} delay={i * 60} className="bg-white p-7">
                <p className="font-display text-2xl font-extrabold tracking-widest text-cargo">{o.code}</p>
                <h3 className="h-display mt-2 text-lg">{o.city}, {o.country}</h3>
                <p className="mt-1.5 text-sm text-steel">{o.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="bg-fog py-20 lg:py-28" aria-labelledby="insights-h">
        <div className="container-x">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Insights</p>
              <h2 id="insights-h" className="h-display mt-2 text-3xl sm:text-4xl">Trade intelligence from the desk.</h2>
            </div>
            <Link href="/blog" className="btn-ghost">All insights</Link>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {posts.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <article className="group h-full rounded-sm border border-ink/10 bg-white p-7 transition-colors hover:border-cargo">
                  <p className="font-display text-xs font-bold uppercase tracking-widest text-cargo">{p.tag}</p>
                  <h3 className="h-display mt-3 text-lg leading-snug">
                    <Link href={`/blog/${p.slug}`} className="hover:text-cargo">{p.title}</Link>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel">{p.excerpt}</p>
                  <time dateTime={p.date} className="mt-4 block text-xs text-steel/80">
                    {new Date(p.date).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}
                  </time>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
