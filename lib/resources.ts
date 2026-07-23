export type Audience = {
  id: string;
  title: string;
  tagline: string;
  intro: string;
  checklist: { t: string; d: string }[];
  documents: string[];
};

export const audiences: Audience[] = [
  {
    id: "importers",
    title: "Importers",
    tagline: "Bringing goods into Canada & the USA",
    intro: "Importing well is mostly preparation: registration, classification, and documents settled before the goods move. Get these right and clearance becomes a non-event.",
    checklist: [
      { t: "Register as an importer", d: "Canada: business number with an import-export (RM) account, plus CARM Client Portal registration and your own financial security. USA: an importer of record number and a customs bond." },
      { t: "Classify your goods before you order", d: "The HS tariff classification sets your duty rate and flags other-agency requirements (CFIA, Health Canada, FDA, USDA). Build it into product costing, not post-arrival surprises." },
      { t: "Choose your Incoterm deliberately", d: "FOB origin is a sensible ocean default - you control freight and see its true cost. Be cautious buying EXW (origin obligations) or DDP (you depend on the seller's compliance)." },
      { t: "Know your full landed cost", d: "Goods + freight + insurance + duty + taxes + clearance + delivery. GST/HST is recoverable for Canadian registrants; duty is not - it belongs in your margin math." },
      { t: "Pre-clear before arrival", d: "Documents reviewed and entry filed while cargo is in transit means release on arrival - and no demurrage clock eating your margin." },
    ],
    documents: ["Commercial invoice (accurate values, currency, terms)", "Packing list", "Bill of lading / air waybill", "Certificate of origin or CUSMA certification (if claiming preference)", "Permits & certificates for regulated goods (food, health, plants)"],
  },
  {
    id: "exporters",
    title: "Exporters",
    tagline: "Selling from Canada to the world",
    intro: "Exporters win on reliability: correct declarations, destination-ready certificates, and documents precise enough to get paid on first presentation.",
    checklist: [
      { t: "File your export declarations", d: "Most commercial exports of CAD $2,000+ to non-US destinations require a CERS declaration before departure. US-bound goods are generally exempt from Canadian export declaration." },
      { t: "Run the control check", d: "Confirm your product is not export-controlled, the destination is not sanctioned, and the end-user is legitimate - and document that you checked. The legal duty sits with the exporter." },
      { t: "Prepare destination certificates", d: "Preferential origin certificates (CUSMA, CETA, CPTPP), phytosanitary and health certificates, and legalized documents for certain Middle East markets - requirements differ by country and commodity." },
      { t: "Match documents to payment terms", d: "Under letters of credit, banks reject discrepancies as small as punctuation. Prepare document sets against the credit line by line - clean presentation is cash flow." },
      { t: "Quote terms you can control", d: "Selling CIF/CPT lets you manage freight and offer a complete price - often a competitive edge over EXW sellers who hand logistics to the buyer." },
    ],
    documents: ["Commercial invoice & packing list", "CERS export declaration (where required)", "Certificate of origin / preferential origin certification", "Transport document (B/L or AWB)", "Commodity certificates (phytosanitary, health, inspection) as required"],
  },
  {
    id: "manufacturers",
    title: "Manufacturers",
    tagline: "Inbound materials, outbound products",
    intro: "Manufacturing freight is schedule-driven: inbound windows that hold, buffer strategies that match risk, and duty programs that recover real money.",
    checklist: [
      { t: "Design inbound around the line, not the vessel", d: "Delivery windows, transloading options and safety-stock rules should reflect what a line-down hour costs - and which SKUs can never be the reason for one." },
      { t: "Review duty relief & drawback", d: "Import inputs and export finished goods? Canada's Duties Relief and Duty Drawback programs may refund or waive duty - with retroactive claims possible for prior years." },
      { t: "Consider bonded warehousing", d: "Defer duty until goods enter the domestic market; eliminate it on goods re-exported. Useful for multi-market distribution from a Canadian node." },
      { t: "Certify origin for your customers", d: "A defensible CUSMA/FTA origin analysis per product family is a sales asset - your customers claim duty-free entry on the strength of your certification." },
      { t: "Build mode flexibility", d: "A pre-agreed air/sea-air escalation path for critical parts turns a supply crisis into a known cost, decided in minutes instead of negotiated in a panic." },
    ],
    documents: ["Bills of materials with origin data (for FTA analysis)", "Import entries & duty-spend history (for drawback review)", "Supplier CUSMA/FTA certifications", "Production & export records linking inputs to outputs"],
  },
  {
    id: "ecommerce",
    title: "E-commerce Sellers",
    tagline: "Cross-border online retail",
    intro: "Parcel-by-parcel economics have shifted - especially into the US. Winning sellers now design around consolidation, landed-cost pricing and smart inventory placement.",
    checklist: [
      { t: "Re-verify de minimis rules per market", d: "US low-value duty-free treatment has been substantially curtailed and rules continue to evolve; Canada's CUSMA courier thresholds remain comparatively favourable. Confirm current treatment before pricing a season." },
      { t: "Model bulk-import + domestic fulfillment", d: "Consolidated freight, commercial clearance and a local 3PL often beat cross-border parcels on cost and delivery promise once volume justifies it." },
      { t: "Price DDP with real duty data", d: "Classify every SKU and bake duties into retail pricing - surprise charges at the door are the fastest route to refused deliveries and chargebacks." },
      { t: "Split inventory by market where it pays", d: "A US node for US customers and a Canadian node for Canadian customers can outperform a single warehouse serving both - model it against your order mix." },
      { t: "Plan returns before you need them", d: "Cross-border returns can erase category margins. Decide per market: local returns consolidation, refurbish-and-resell locally, or refund-without-return thresholds." },
    ],
    documents: ["SKU-level HS classification table with duty rates", "Commercial invoices for bulk consolidations", "Marketplace / 3PL routing requirements", "Returns policy & reverse-logistics plan per market"],
  },
];

export const glossary: [string, string][] = [
  ["B/L (Bill of Lading)", "The ocean transport contract and receipt; often also the document controlling release of the goods."],
  ["CARM", "CBSA Assessment and Revenue Management - Canada's portal-based system for importer registration, security and duty payment."],
  ["CBSA / CBP", "Canada Border Services Agency / US Customs and Border Protection - the customs authorities of Canada and the USA."],
  ["CUSMA / USMCA", "The Canada-US-Mexico free trade agreement; duty-free treatment for qualifying originating goods."],
  ["Demurrage & Detention", "Charges for keeping a container at the port (demurrage) or outside it (detention) beyond free time."],
  ["FCL / LCL", "Full Container Load (container exclusively yours) vs Less than Container Load (shared consolidation container)."],
  ["HS Code", "Harmonized System tariff classification - determines duty rates and regulatory requirements for a product."],
  ["Incoterms", "Standardized trade terms (FOB, CIF, DDP...) defining who pays for what and where risk transfers."],
  ["Landed Cost", "The true total cost of imported goods: price + freight + insurance + duty + taxes + fees + delivery."],
  ["PARS / PAPS", "Pre-arrival review systems for shipments trucked into Canada (PARS) and the USA (PAPS)."],
];

export const officialLinks: { t: string; d: string; href: string }[] = [
  { t: "CBSA - Canada Border Services Agency", d: "Canadian customs: importing, exporting, tariff and CARM information.", href: "https://www.cbsa-asfc.gc.ca" },
  { t: "CARM Client Portal", d: "Register as an importer, post security and manage duty accounts with CBSA.", href: "https://ccp-pcc.cbsa-asfc.cloud-nuage.canada.ca" },
  { t: "Canada Tariff Finder", d: "Look up duty rates for Canadian imports and exports under Canada's trade agreements.", href: "https://www.tariffinder.ca" },
  { t: "CFIA - Canadian Food Inspection Agency", d: "Licensing and requirements for importing food, plants and animals into Canada.", href: "https://inspection.canada.ca" },
  { t: "Trade Commissioner Service", d: "Global Affairs Canada's export support network - market intelligence and contacts abroad.", href: "https://www.tradecommissioner.gc.ca" },
  { t: "US CBP - Customs and Border Protection", d: "US import requirements, rulings and trade programs.", href: "https://www.cbp.gov" },
];
