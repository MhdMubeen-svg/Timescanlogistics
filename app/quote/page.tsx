import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import QuoteClient from "./quote-client";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: "Request an air, ocean, rail or road freight quote from Timescan Logistics. Responses within one business day from the office nearest your origin.",
};

export default function Quote() {
  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title="Tell us the lane. We'll bring the numbers."
        intro="Share your origin, destination and cargo details below. A pricing specialist from the Timescan office nearest your origin will respond within one business day - with routing options, not just a rate."
      />
      <QuoteClient />
    </>
  );
}
