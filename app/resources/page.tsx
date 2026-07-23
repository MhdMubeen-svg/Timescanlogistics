import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { audiences, glossary, officialLinks } from "@/lib/resources";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Trade Resources — Guides for Importers, Exporters, Manufacturers & E-commerce",
  description:
    "Practical checklists, documents and official links for Canadian and North American trade: importing, exporting, CARM, CUSMA, duty relief and cross-border e-commerce.",
};

export default function Resources() {
  return (
    <>
      <PageHero
        eyebrow="Trade Resources"
        title="The reference desk for cross-border trade."
        intro="Checklists, documents and official sources for the four groups we serve most - importers, exporters, manufacturers and e-commerce sellers - focused on Canadian and North American trade. Bookmark it; regulations move, and so do we."
      />

      {/* Audience quick nav */}
      <nav aria-label="Resource sections" className="border-b border-ink/10 bg-fog">
        <div className="container-x flex flex-wrap gap-2 py-4">
          {audiences.map((a) => (
            <a key={a.id} href={`#${a.id}`} className="rounded-sm border border-ink/15 bg-white px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-ink transition-colors hover:border-cargo hover:text-cargo">
              {a.title}
            </a>
          ))}
          <a href="#glossary" className="rounded-sm border border-ink/15 bg-white px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-ink transition-colors hover:border-cargo hover:text-cargo">Glossary</a>
          <a href="#links" className="rounded-sm border border-ink/15 bg-white px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-ink transition-colors hover:border-cargo hover:text-cargo">Official Links</a>
        </div>
      </nav>

      {audiences.map((a, ai) => {
        const related = posts.filter((p) => p.audience.includes(a.title.replace(" Sellers", ""))).slice(0, 3);
        return (
          <section key={a.id} id={a.id} className={`scroll-mt-24 py-16 lg:py-24 ${ai % 2 ? "bg-fog" : "bg-white"}`} aria-labelledby={`${a.id}-h`}>
            <div className="container-x">
              <Reveal>
                <p className="eyebrow">{a.tagline}</p>
                <h2 id={`${a.id}-h`} className="h-display mt-2 text-3xl sm:text-4xl">For {a.title}</h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-steel">{a.intro}</p>
              </Reveal>
              <div className="mt-10 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
                <div>
                  <Reveal><h3 className="h-display text-lg">The checklist</h3></Reveal>
                  <ol className="mt-4 space-y-4">
                    {a.checklist.map((c, i) => (
                      <Reveal key={c.t} delay={i * 60}>
                        <li className="flex gap-4 rounded-sm border border-ink/10 bg-white p-5">
                          <span className="font-display text-lg font-extrabold text-cargo" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                          <div>
                            <p className="font-display font-bold text-ink">{c.t}</p>
                            <p className="mt-1.5 text-sm leading-relaxed text-steel">{c.d}</p>
                          </div>
                        </li>
                      </Reveal>
                    ))}
                  </ol>
                </div>
                <div className="space-y-8">
                  <Reveal delay={100}>
                    <div className="rounded-sm border-t-2 border-cargo bg-white p-6 shadow-sm">
                      <h3 className="h-display text-base">Core documents</h3>
                      <ul className="mt-4 space-y-2.5">
                        {a.documents.map((d) => (
                          <li key={d} className="flex items-start gap-2.5 text-sm text-steel">
                            <span className="mt-0.5 text-cargo" aria-hidden="true">▸</span>{d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                  {related.length > 0 && (
                    <Reveal delay={160}>
                      <div className="rounded-sm bg-ink p-6 text-white">
                        <h3 className="h-display text-base !text-white">Read next</h3>
                        <ul className="mt-4 space-y-3">
                          {related.map((p) => (
                            <li key={p.slug}>
                              <Link href={`/blog/${p.slug}`} className="text-sm leading-snug text-white/80 transition-colors hover:text-cargo">
                                {p.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Glossary */}
      <section id="glossary" className="scroll-mt-24 bg-white py-16 lg:py-24" aria-labelledby="glossary-h">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Speak freight</p>
            <h2 id="glossary-h" className="h-display mt-2 text-3xl sm:text-4xl">A short glossary.</h2>
          </Reveal>
          <dl className="mt-10 grid gap-px overflow-hidden rounded-sm border border-ink/10 bg-ink/10 sm:grid-cols-2">
            {glossary.map(([t, d], i) => (
              <Reveal key={t} delay={(i % 2) * 60}>
                <div className="h-full bg-white p-6">
                  <dt className="font-display font-bold text-ink">{t}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-steel">{d}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Official links */}
      <section id="links" className="scroll-mt-24 bg-fog py-16 lg:py-24" aria-labelledby="links-h">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Go to the source</p>
            <h2 id="links-h" className="h-display mt-2 text-3xl sm:text-4xl">Official links worth bookmarking.</h2>
            <p className="mt-4 max-w-2xl text-steel">Regulations change. These are the authoritative sources we check - and where you should verify anything that affects your money.</p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {officialLinks.map((l, i) => (
              <Reveal key={l.href} delay={i * 60}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="block h-full rounded-sm border border-ink/10 bg-white p-6 transition-colors hover:border-cargo">
                  <p className="font-display font-bold text-ink">{l.t} <span aria-hidden="true" className="text-cargo">↗</span></p>
                  <p className="mt-2 text-sm leading-relaxed text-steel">{l.d}</p>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100} className="mt-10 rounded-sm border-l-2 border-cargo bg-white p-6">
            <p className="text-sm leading-relaxed text-steel">
              This page is general information, not legal or customs advice for a specific transaction. Rules - especially US low-value import treatment and tariff measures - have changed repeatedly in recent years. Verify current requirements with the official sources above or ask our customs team about your specific goods and lanes.
            </p>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
