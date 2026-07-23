import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import TrackingClient from "./tracking-client";

export const metadata: Metadata = {
  title: "Track a Shipment",
  description: "Track your Timescan Logistics shipment by reference number - air, ocean, rail or road, with milestone-level status.",
};

export default function Tracking() {
  return (
    <>
      <PageHero
        eyebrow="Shipment Tracking"
        title="Where is my cargo?"
        intro="Enter your Timescan reference (e.g. TSL-2026-004821), house bill, or container number. For live updates on active bookings, your operations contact is always one message away."
      />
      <TrackingClient />
    </>
  );
}
