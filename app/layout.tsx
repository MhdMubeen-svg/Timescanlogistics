import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import Newsletter from "@/components/Newsletter";

const display = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://www.timescanlogistics.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Timescan Logistics | International Freight Forwarding — Air, Ocean, Rail & Road",
    template: "%s | Timescan Logistics",
  },
  description:
    "CBSA-registered international freight forwarder headquartered in Vancouver, Canada, with offices in the UAE, India, Malaysia, China and the USA. Air, ocean, rail and road freight with customs brokerage and supply chain solutions.",
  keywords: [
    "freight forwarding Canada",
    "international freight forwarder Vancouver",
    "CBSA customs broker",
    "air freight",
    "ocean freight FCL LCL",
    "rail freight",
    "cross-border trucking",
    "supply chain solutions",
  ],
  openGraph: {
    type: "website",
    siteName: "Timescan Logistics",
    url: siteUrl,
    title: "Timescan Logistics — Global Freight, Forwarded with Precision",
    description:
      "Air, ocean, rail and road freight across North America, the Middle East and Asia. CBSA-registered. Offices in six countries.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Timescan Logistics — International Freight Forwarding",
    description:
      "Air, ocean, rail and road freight across North America, the Middle East and Asia.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

export const viewport: Viewport = {
  themeColor: "#0B1C2E",
  width: "device-width",
  initialScale: 1,
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Timescan Logistics Ltd",
  url: siteUrl,
  description:
    "International freight forwarding company registered with CBSA, offering air, ocean, rail and road transport across North America, the Middle East and Asia.",
  foundingLocation: "Vancouver, Canada",
  areaServed: ["CA", "US", "IN", "AE", "MY", "CN"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vancouver",
    addressRegion: "BC",
    addressCountry: "CA",
  },
  sameAs: [] as string[],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-cargo focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Header />
        <main id="main">{children}</main>
        <Newsletter />
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
