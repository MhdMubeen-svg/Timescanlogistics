import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Country Guides — Shipping to & from Canada, USA, India, UAE, Malaysia, China",
  description:
    "Practical import/export guides for the six countries where Timescan has its own offices: gateways, customs basics, documents and insider tips.",
};

export default function Guides() {
  return (
    <>
      <PageHero
        eyebrow="Country Guides"
        title="Six markets. Local knowledge, written down."
        intro="A working guide for each country where Timescan operates its own office - gateways, customs basics, documents and the tips our local teams give customers every week."
      />
      <section className="bg-white py-16 lg:py-24">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g, i) => (
            <Reveal key={g.slug} delay={(i % 3) * 70}>
              <Link href={`/guides/${g.slug}`} className="group flex h-full flex-col rounded-sm border border-ink/10 p-7 transition-colors hover:border-cargo">
                <div className="flex items-baseline justify-between">
                  <h2 className="h-display text-2xl">{g.name}</h2>
                  <span className="font-display text-sm font-extrabold tracking-widest text-cargo">{g.code}</span>
                </div>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-steel">{g.office}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-steel">{g.summary}</p>
                <span className="mt-5 font-display text-xs font-bold uppercase tracking-widest text-cargo">
                  Open guide <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
