import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { services } from "@/lib/data";
import { serviceIcons } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Services — Air, Ocean, Rail, Road, Customs & Supply Chain",
  description:
    "Timescan Logistics services: air freight, FCL/LCL ocean freight, intermodal rail, cross-border road transport, CBSA-registered customs brokerage and supply chain solutions.",
};

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Every mode. Every border. One partner."
        intro="From urgent air freight to full-container ocean programs, bonded trucking to CBSA clearance - Timescan designs the routing, carries the accountability, and keeps you informed at every milestone."
      />

      <section className="bg-white">
        {services.map((s, i) => {
          const Icon = serviceIcons[s.slug];
          const alt = i % 2 === 1;
          return (
            <article
              key={s.slug}
              id={s.slug}
              className={`scroll-mt-24 border-b border-ink/10 ${alt ? "bg-fog" : "bg-white"}`}
              aria-labelledby={`${s.slug}-h`}
            >
              <div className={`container-x grid gap-10 py-16 lg:grid-cols-2 lg:items-center lg:py-20 ${alt ? "lg:[direction:rtl]" : ""}`}>
                <Reveal className="lg:[direction:ltr]">
                  <span className="text-cargo"><Icon className="h-10 w-10" /></span>
                  <h2 id={`${s.slug}-h`} className="h-display mt-5 text-3xl sm:text-4xl">{s.title}</h2>
                  <p className="mt-4 max-w-xl leading-relaxed text-steel">{s.desc}</p>
                  <Link href="/quote" className="btn-primary mt-8">Quote this service</Link>
                </Reveal>
                <Reveal delay={120} className="lg:[direction:ltr]">
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 rounded-sm border border-ink/10 bg-white p-4">
                        <span className="mt-0.5 text-cargo" aria-hidden="true">✓</span>
                        <span className="text-sm font-medium text-ink/90">{p}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </article>
          );
        })}
      </section>

      <CTA />
    </>
  );
}
