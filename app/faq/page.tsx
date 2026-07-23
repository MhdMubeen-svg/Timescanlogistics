import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { faqs } from "@/lib/faq";

export const metadata: Metadata = {
  title: "FAQ — Freight Forwarding, Customs & Shipping Questions Answered",
  description:
    "Answers to common questions about freight forwarding, CBSA and CARM, customs documents, transit times, FCL vs LCL, demurrage, tracking and pricing.",
};

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.flatMap((g) =>
      g.items.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      }))
    ),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="FAQ"
        title="Straight answers to freight questions."
        intro="The questions importers, exporters and first-time shippers ask us most - answered the way we'd answer across a desk. Can't find yours? Ask us directly and we'll reply within one business day."
      />
      <section className="bg-white py-16 lg:py-24">
        <div className="container-x max-w-4xl">
          {faqs.map((g, gi) => (
            <div key={g.group} className={gi > 0 ? "mt-14" : ""}>
              <Reveal>
                <h2 className="h-display border-b border-ink/10 pb-4 text-2xl">{g.group}</h2>
              </Reveal>
              <div className="mt-2">
                {g.items.map((f, i) => (
                  <Reveal key={f.q} delay={i * 40}>
                    <details className="group border-b border-ink/10">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-base font-bold text-ink transition-colors hover:text-cargo [&::-webkit-details-marker]:hidden">
                        {f.q}
                        <span aria-hidden="true" className="shrink-0 text-cargo transition-transform group-open:rotate-45">＋</span>
                      </summary>
                      <p className="pb-6 pr-8 text-sm leading-relaxed text-steel">{f.a}</p>
                    </details>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
          <Reveal delay={80} className="mt-14 rounded-sm border-l-2 border-cargo bg-fog p-7">
            <p className="text-sm leading-relaxed text-steel">
              Still have a question? <Link href="/contact" className="font-semibold text-cargo underline-offset-2 hover:underline">Contact the office nearest your cargo</Link> or{" "}
              <Link href="/quote" className="font-semibold text-cargo underline-offset-2 hover:underline">request a quote</Link> with your details - specific answers beat general ones.
            </p>
          </Reveal>
        </div>
      </section>
      <CTA />
    </>
  );
}
