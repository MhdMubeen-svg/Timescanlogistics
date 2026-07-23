import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import ToolsClient from "./tools-client";

export const metadata: Metadata = {
  title: "Freight Tools — Landed Cost & Chargeable Weight Calculators",
  description:
    "Free calculators for importers and exporters: estimate landed cost (duty, taxes, fees) and air freight chargeable weight / ocean LCL revenue tons.",
};

export default function Tools() {
  return (
    <>
      <PageHero
        eyebrow="Freight Tools"
        title="Do the math before the cargo moves."
        intro="Two calculators we use every day at the pricing desk: true landed cost for imports, and chargeable weight for air and LCL ocean freight. Estimates for planning - your quote will confirm the real numbers."
      />
      <ToolsClient />
      <CTA />
    </>
  );
}
