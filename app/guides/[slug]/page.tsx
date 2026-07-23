import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { guides } from "@/lib/guides";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const g = guides.find((x) => x.slug === params.slug);
  if (!g) return {};
  return { title: `${g.name} Shipping Guide — Import & Export Basics`, description: g.summary };
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <Reveal>
      <div className="rounded-sm border border-ink/10 bg-white p-7">
        <h2 className="h-display text-lg">{title}</h2>
        <ul className="mt-4 space-y-3">
          {items.map((it) => (
            <li key={it} className="flex items-start gap-3 text-sm leading-relaxed text-steel">
              <span className="mt-0.5 text-cargo" aria-hidden="true">▸</span>{it}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const g = guides.find((x) => x.slug === params.slug);
  if (!g) notFound();
  const others = guides.filter((x) => x.slug !== g.slug);

  return (
    <>
      <section className="bg-ink text-white">
        <div className="container-x py-16 lg:py-20">
          <Reveal>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/guides" className="font-display text-xs font-bold uppercase tracking-widest text-white/60 hover:text-cargo">← All guides</Link>
              <span className="font-display text-xs font-extrabold tracking-widest text-cargo">{g.code}</span>
            </div>
            <h1 className="h-display mt-4 text-4xl !text-white sm:text-5xl">{g.name}</h1>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-white/60">{g.office}</p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{g.summary}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-fog py-14 lg:py-20">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          <Block title="Key gateways" items={g.gateways} />
          <Block title="Importing basics" items={g.importing} />
          <Block title="Exporting basics" items={g.exporting} />
          <Block title="Core documents" items={g.documents} />
        </div>
        <div className="container-x mt-6">
          <Reveal>
            <div className="rounded-sm border-l-2 border-cargo bg-white p-7">
              <h2 className="h-display text-lg">Tips from our {g.name} desk</h2>
              <ul className="mt-4 space-y-3">
                {g.tips.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm leading-relaxed text-steel">
                    <span className="mt-0.5 font-display font-extrabold text-cargo" aria-hidden="true">→</span>{t}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs leading-relaxed text-steel">
                General guidance, not advice for a specific transaction - regulations and tariff measures change. Confirm current requirements for your goods with our team or official sources.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container-x">
          <Reveal><h2 className="h-display text-2xl">Other markets</h2></Reveal>
          <div className="mt-6 flex flex-wrap gap-3">
            {others.map((o) => (
              <Link key={o.slug} href={`/guides/${o.slug}`} className="rounded-sm border border-ink/15 px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-ink transition-colors hover:border-cargo hover:text-cargo">
                {o.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
