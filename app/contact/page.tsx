import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactClient from "./contact-client";
import { offices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Timescan Logistics - offices in Vancouver, Dubai, Chennai, Kuala Lumpur, Shanghai and Chicago. Reach the team nearest your cargo.",
};

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Reach the office nearest your cargo."
        intro="Operations questions go fastest to the local desk; new business and partnerships are welcome at any office. We answer in local business hours - and across time zones for active shipments."
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-[1.1fr_1fr]">
          <ContactClient />
          <div>
            <Reveal><p className="eyebrow">Offices</p></Reveal>
            <ul className="mt-5 divide-y divide-ink/10 rounded-sm border border-ink/10">
              {offices.map((o, i) => (
                <Reveal key={o.code} delay={i * 60}>
                  <li className="flex items-start justify-between gap-4 p-5">
                    <div>
                      <p className="h-display text-base">{o.city}, {o.country}</p>
                      <p className="mt-0.5 text-sm text-steel">{o.role}</p>
                      <p className="mt-1.5 text-sm text-steel">{o.phone}</p>
                    </div>
                    <span className="font-display text-sm font-extrabold tracking-widest text-cargo">{o.code}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
