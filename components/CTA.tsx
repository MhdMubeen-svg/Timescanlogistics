import Link from "next/link";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="bg-ink">
      <div className="container-x py-16 lg:py-20">
        <Reveal className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="eyebrow">Ready when you are</p>
            <h2 className="h-display mt-2 text-3xl !text-white sm:text-4xl">
              Move your next shipment with a forwarder that answers.
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/quote" className="btn-primary">Request a quote</Link>
            <Link href="/contact" className="btn-ghost-light">Talk to our team</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
