import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Insights — Canadian & North American Trade, Customs and Supply Chain",
  description:
    "Practical intelligence on CARM, CUSMA, transpacific capacity, cross-border e-commerce, duty relief and supply chain visibility - from the Timescan operations desk.",
};

export default function Blog() {
  const tags = Array.from(new Set(posts.map((p) => p.tag)));
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Written at the operations desk, not the marketing desk."
        intro="Canadian and North American trade moves fast: customs modernization, tariff shifts, capacity swings. This is the intelligence we share with customers - published for every importer, exporter, manufacturer and online seller moving goods across borders."
      />
      <section className="bg-white py-16 lg:py-24">
        <div className="container-x">
          <Reveal className="mb-10 flex flex-wrap gap-2" aria-label="Topics covered">
            {tags.map((t) => (
              <span key={t} className="rounded-sm border border-ink/15 px-3.5 py-1.5 font-display text-xs font-bold uppercase tracking-wider text-ink/70">{t}</span>
            ))}
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 70}>
                <article className="group flex h-full flex-col rounded-sm border border-ink/10 p-7 transition-colors hover:border-cargo">
                  <div className="flex items-center justify-between">
                    <p className="font-display text-xs font-bold uppercase tracking-widest text-cargo">{p.tag}</p>
                    <time dateTime={p.date} className="text-xs text-steel">
                      {new Date(p.date).toLocaleDateString("en-CA", { month: "short", day: "numeric", year: "numeric" })}
                    </time>
                  </div>
                  <h2 className="h-display mt-4 text-xl leading-snug">
                    <Link href={`/blog/${p.slug}`} className="transition-colors hover:text-cargo">{p.title}</Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-steel">{p.excerpt}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.audience.map((a) => (
                      <span key={a} className="rounded-sm bg-fog px-2 py-0.5 text-[11px] font-semibold text-steel">{a}</span>
                    ))}
                  </div>
                  <Link href={`/blog/${p.slug}`} className="mt-5 font-display text-xs font-bold uppercase tracking-widest text-cargo">
                    Read article <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
                  </Link>
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
