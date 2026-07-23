export type FAQ = { q: string; a: string };
export type FAQGroup = { group: string; items: FAQ[] };

export const faqs: FAQGroup[] = [
  {
    group: "Getting started",
    items: [
      { q: "What does a freight forwarder actually do?", a: "We plan and manage your shipment end-to-end: choosing carriers and routing, booking space, preparing and checking documents, arranging customs clearance, and monitoring the cargo until delivery. You get one accountable partner instead of coordinating airlines, shipping lines, truckers and brokers yourself." },
      { q: "Do you handle small shipments or only full containers?", a: "Both. We move everything from a single pallet (LCL ocean or air consolidation) to full containers, project cargo and ongoing weekly programs. For very small parcels, courier services are usually more economical - we will tell you honestly when that is the case." },
      { q: "Which countries do you cover?", a: "We operate our own offices in Canada, the USA, India, the UAE, Malaysia and China, and serve the trade lanes between North America, the Middle East and Asia. Through partner networks we can arrange shipments to and from most other markets." },
      { q: "How do I get a quote, and what information do you need?", a: "Use the Request a Quote page. We need the origin and destination, cargo description, weight and volume, your preferred mode and Incoterm, and the cargo-ready date. The more precise the details, the more accurate the rate - especially dimensions for air freight." },
      { q: "Do you work with first-time importers and exporters?", a: "Yes, frequently. We will walk you through your first shipment: registering as an importer, choosing the right Incoterm, preparing documents and understanding the landed cost before you commit to a purchase order." },
    ],
  },
  {
    group: "Customs & compliance",
    items: [
      { q: "Are you registered with CBSA?", a: "Yes. Timescan Logistics Ltd is registered with the Canada Border Services Agency. We arrange customs clearance for imports into Canada and coordinate clearance for the USA and our other markets through licensed brokers in each country." },
      { q: "What is CARM and does it affect my imports into Canada?", a: "CARM is CBSA's Assessment and Revenue Management system. Commercial importers must register on the CARM Client Portal, post their own financial security, and manage duties and taxes through the portal. If you import into Canada and have not registered, this should be your first step - we can guide you through it." },
      { q: "What documents do I need for a typical international shipment?", a: "At minimum: a commercial invoice, packing list, and transport document (bill of lading or air waybill). Depending on the goods and lane you may also need a certificate of origin, CUSMA certification, permits, or food/plant/health certificates. We review your document set before cargo moves." },
      { q: "Can you help me classify my goods and estimate duties?", a: "Yes. We advise on HS tariff classification and estimate duties and taxes as part of quoting, so you know your landed cost up front. For binding certainty, we can also help you request an advance ruling from customs." },
      { q: "What happens if my shipment is held by customs?", a: "We find out why - usually documentation gaps, inspection selection, or permit issues - and resolve it directly with the broker and the agency. Because we prepare documents ourselves, holds are rare; when they happen, you get a clear explanation and a plan, not silence." },
    ],
  },
  {
    group: "Shipping & transit",
    items: [
      { q: "How long does ocean freight take from Asia to North America?", a: "Port-to-port transit from main Chinese ports to Vancouver is typically two to three weeks, with door-to-door timelines longer once inland transport and clearance are included. Transits vary by carrier, routing and season - we quote realistic door-to-door timelines, not just the sailing time." },
      { q: "When should I choose air freight over ocean?", a: "Air makes sense when the value of time exceeds the cost difference: product launches, production-line stoppages, perishables, or high-value low-weight goods. For cargo that is urgent but not that urgent, sea-air via Dubai often splits the difference on both time and cost." },
      { q: "Can you handle dangerous goods, temperature-controlled or oversized cargo?", a: "Yes - DG shipments with proper classification and declarations, reefer containers and temperature-controlled air freight, and out-of-gauge or project cargo with route surveys and special equipment. Tell us early: special cargo needs longer booking lead times." },
      { q: "Do you provide cargo insurance?", a: "We can arrange all-risk marine cargo insurance for your shipments. Carrier liability is limited by international conventions and rarely covers the full value of goods, so we recommend insuring any shipment you could not afford to lose." },
      { q: "What is the difference between FCL and LCL?", a: "FCL (Full Container Load) means the container is exclusively yours. LCL (Less than Container Load) means your cargo shares a container with other shippers - cheaper for small volumes but slightly slower due to consolidation. Above roughly 13-15 CBM, FCL often becomes the better value." },
    ],
  },
  {
    group: "Tracking, pricing & support",
    items: [
      { q: "How do I track my shipment?", a: "Use the tracking page with your Timescan reference, house bill or container number. For active bookings, your operations coordinator also sends milestone updates and flags exceptions - you should never have to chase us for bad news." },
      { q: "What is included in your quoted price?", a: "Every quote itemizes the charges: freight, origin and destination handling, documentation, customs clearance and any surcharges. We quote to the Incoterm you trade on, and flag costs that are estimates (like inspection fees) versus fixed charges." },
      { q: "Why do ocean freight rates change so often?", a: "Rates move with vessel capacity, fuel, seasonality and demand - carriers adjust general rate levels frequently and add peak-season surcharges. For regular shippers, we can lock longer-validity rates or set up a mini-tender so your budget is protected." },
      { q: "What are demurrage and detention, and how do I avoid them?", a: "Demurrage is charged when a container sits at the port beyond free time; detention when you keep the container too long outside the port. We avoid them by pre-clearing shipments before arrival, booking delivery early, and monitoring free time on every container - and we alert you before charges start, not after." },
      { q: "Do you offer credit terms?", a: "Established customers can apply for credit terms after an initial trading period. New customers ship on payment before release, with all charges confirmed in writing beforehand." },
    ],
  },
];
