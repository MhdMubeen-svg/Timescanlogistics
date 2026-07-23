import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { industries } from "@/lib/data";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Freight forwarding for manufacturing, retail, food, agriculture, healthcare, automotive, e-commerce and trade - across Canada, the USA, India, the UAE, Malaysia and China.",
};

export default function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Freight shaped by the business it serves."
        intro="A pallet of pharmaceuticals and a container of machine parts don't want the same routing, the same paperwork, or the same risk plan. We build programs around how each industry actually operates - because we have operated in most of them."
      />
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x grid gap-px overflow-hidden rounded-sm border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.title} delay={(i % 4) * 70}>
              <article className="flex h-full flex-col bg-white p-7 transition-colors hover:bg-fog">
                <h2 className="h-display text-lg">{ind.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-steel">{ind.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="bg-fog py-16">
        <div className="container-x">
          <Reveal className="rounded-sm border-l-2 border-cargo bg-white p-8 lg:p-10">
            <p className="eyebrow">Don't see your sector?</p>
            <p className="mt-3 max-w-3xl text-lg leading-relaxed text-ink">
              These are the industries we serve most often - not the limit of what we
              move. If it ships legally, we can likely design a lane for it. Tell us
              what you're moving and where it needs to be.
            </p>
          </Reveal>
        </div>
      </section>
      <CTA />
    </>
  );
}
