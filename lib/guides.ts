export type CountryGuide = {
  slug: string;
  name: string;
  code: string;
  office: string;
  summary: string;
  gateways: string[];
  importing: string[];
  exporting: string[];
  documents: string[];
  tips: string[];
};

export const guides: CountryGuide[] = [
  {
    slug: "canada",
    name: "Canada",
    code: "YVR",
    office: "Vancouver — our global headquarters",
    summary: "Home base. CBSA-regulated imports run through CARM; Pacific gateways at Vancouver and Prince Rupert connect Asia to the whole continent by rail.",
    gateways: ["Port of Vancouver (largest port, dense sailings)", "Port of Prince Rupert (fast Asia transit, on-dock rail)", "Toronto Pearson & Vancouver Intl (air cargo)", "Montreal (Atlantic/European ocean gateway)"],
    importing: ["Importer needs a business number with RM account plus CARM Client Portal registration and own financial security.", "10-digit tariff classification decides duty and other-agency involvement (CFIA for food, Health Canada for health products).", "GST (5%) applies on duty-paid value and is generally recoverable for registrants; provincial taxes vary by province and channel.", "Pre-arrival review (PARS) speeds truck crossings; pre-cleared ocean entries release on arrival."],
    exporting: ["CERS export declaration required for most commercial exports CAD $2,000+ to non-US destinations.", "US-bound exports are generally exempt from Canadian export declaration.", "Preferential access via CUSMA, CETA (Europe), CPTPP (Asia-Pacific) and more — certification unlocks buyer-side duty savings."],
    documents: ["Commercial invoice (or Canada Customs Invoice data)", "Packing list", "B/L or AWB", "CUSMA/FTA certification where claimed", "CFIA licences & certificates for food/plants/animals"],
    tips: ["Register CARM before your first order, not after the vessel sails.", "Compare Vancouver vs Prince Rupert routing for Central Canada — rail economics differ by season.", "Winter surcharges and weather delays are real: build buffer into Q4–Q1 transits."],
  },
  {
    slug: "usa",
    name: "United States",
    code: "ORD",
    office: "Chicago — US inland distribution",
    summary: "The world's largest import market, reshaped by recent tariff actions and the curtailment of de minimis. Compliance rigour and tariff strategy now decide margins.",
    gateways: ["LA / Long Beach (largest transpacific gateway)", "New York / New Jersey (Atlantic)", "Savannah & Houston (fast-growing ocean)", "Chicago O'Hare (air + rail interchange hub)"],
    importing: ["Importer of record needs a customs bond; entries filed through a licensed customs broker via ACE.", "Tariff exposure has shifted repeatedly in recent years — check current Section 301/232 and related measures for your goods and origin before pricing.", "Low-value (de minimis) duty-free entry has been substantially curtailed; parcel-based models should re-verify current treatment.", "Partner-government agencies (FDA, USDA, FCC, DOT) attach to many product categories — flag them at classification time."],
    exporting: ["Most exports file Electronic Export Information (EEI) through AES for shipments over USD $2,500 per Schedule B line.", "Export controls (EAR/ITAR) demand screening for dual-use and defense-related goods.", "USMCA certification lets Canadian and Mexican buyers import your goods duty-free where rules of origin are met."],
    documents: ["Commercial invoice & packing list", "Customs bond (continuous or single-entry)", "B/L or AWB", "USMCA certification where claimed", "PGA documents per product (FDA prior notice, etc.)"],
    tips: ["Tariff engineering — origin, classification, valuation — is now a board-level topic; review before committing to sourcing.", "East vs West coast routing decisions should weigh canal constraints, labour cycles and inland rail costs.", "For Canada–US truck freight, PAPS pre-clearance and carrier bond status keep borders moving."],
  },
  {
    slug: "india",
    name: "India",
    code: "MAA",
    office: "Chennai — South Asia operations",
    summary: "A fast-growing manufacturing and export power. Documentation discipline and the IEC/GST framework are the keys to smooth cargo.",
    gateways: ["Nhava Sheva / JNPT, Mumbai (largest container port)", "Chennai & Ennore (south-east manufacturing belt)", "Mundra (west-coast private port)", "Delhi & Chennai air cargo complexes"],
    importing: ["Importers need an Import Export Code (IEC) and GST registration; filings run through ICEGATE.", "Duty structure stacks basic customs duty + social welfare surcharge + IGST — model the full stack for landed cost.", "Many consumer goods require BIS or other certifications before import — verify early, lead times can be long."],
    exporting: ["Exports also require the IEC; shipping bills file through ICEGATE with e-BRC for payment reconciliation.", "Incentive schemes (e.g. RoDTEP duty remission) can materially improve export economics — claim them systematically.", "Pre-shipment inspection and buyer-country certificates (phytosanitary, health) are common for agri and food exports — our Chennai team handles these locally."],
    documents: ["Commercial invoice & packing list", "Shipping bill / bill of entry (ICEGATE)", "IEC & GST details", "Certificates of origin (including India's FTAs)", "Product certifications (BIS etc.) where applicable"],
    tips: ["Book early around Diwali and pre-monsoon peaks — space and trucking tighten fast.", "Factory-stuffed containers with early document handover clear fastest at Indian ports.", "For US/Canada-bound cargo, compare direct calls vs transshipment via Colombo or Singapore on both time and reliability."],
  },
  {
    slug: "uae",
    name: "United Arab Emirates",
    code: "DXB",
    office: "Dubai — Middle East gateway",
    summary: "The re-export capital of the region: world-class ports, free zones and the sea–air corridor that splits the difference between ocean and air.",
    gateways: ["Jebel Ali, Dubai (region's largest container port)", "Dubai Intl & Al Maktoum (global air cargo hubs)", "Khalifa Port, Abu Dhabi", "Free zones: JAFZA, DAFZA, DMCC and more"],
    importing: ["Standard GCC customs duty is 5% for most goods; VAT applies at 5%.", "Free-zone imports defer duty until goods enter the mainland — powerful for regional distribution hubs.", "Some Middle East destinations require legalized/attested documents — plan the extra days."],
    exporting: ["Re-exports through free zones move with minimal friction — the UAE's core trade model.", "Certificates of origin and (where required) embassy legalization are routine paperwork our Dubai office manages daily.", "Sea–air via Dubai: ocean from Asia, air onward to the Americas or Europe — mid-way cost and transit."],
    documents: ["Commercial invoice & packing list", "Certificate of origin (chamber-attested where required)", "B/L or AWB", "Free-zone transfer documents where applicable", "Legalized documents for specific destinations"],
    tips: ["Use free-zone warehousing to serve GCC, Africa and South Asia from one duty-deferred stock.", "Ramadan and summer peaks shift working hours and capacity — plan cut-offs accordingly.", "For urgent-but-not-desperate Asia–North America cargo, price the Dubai sea–air lane before defaulting to pure air."],
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    code: "KUL",
    office: "Kuala Lumpur — Southeast Asia hub",
    summary: "A stable, well-connected ASEAN manufacturing base — electronics, palm-based products and furniture — with excellent transshipment links.",
    gateways: ["Port Klang (main gateway, major transshipment)", "Penang (northern electronics corridor)", "Tanjung Pelepas (deep-sea transshipment)", "KLIA air cargo"],
    importing: ["Imports register through Royal Malaysian Customs; sales-and-service tax (SST) applies to many goods.", "Certain goods require import licences/permits (SIRIM and other agencies) — verify by HS code early.", "ASEAN and RCEP trade agreements offer preferential duty into and out of Malaysia — use Form D/RCEP origin docs."],
    exporting: ["Export declarations file through customs; most goods export freely with standard documents.", "Preferential certificates (ATIGA Form D, RCEP, MJEPA and others) cut buyer-side duty across Asia.", "Electronics and semiconductor logistics favour air and sea–air blends — Penang to North America lanes are a specialty."],
    documents: ["Commercial invoice & packing list", "Customs declaration (K1/K2 forms)", "B/L or AWB", "Preferential certificates of origin (Form D, RCEP…)", "Permits for controlled goods where applicable"],
    tips: ["Port Klang congestion ebbs and flows — build 2–3 buffer days in peak months.", "Compare Port Klang vs Tanjung Pelepas sailings for your carrier alliance; transshipment reliability differs.", "For mixed ASEAN sourcing, consolidate in Malaysia to cut per-shipment costs into North America."],
  },
  {
    slug: "china",
    name: "China",
    code: "PVG",
    office: "Shanghai — China sourcing corridor",
    summary: "Still the world's factory floor. Success is operational: booking discipline, supplier document quality, and tariff-aware routing into North America.",
    gateways: ["Shanghai (world's busiest container port)", "Ningbo, Shenzhen/Yantian, Qingdao (major export bases)", "Shanghai Pudong & Guangzhou air cargo", "China–Europe rail corridors (Chongqing, Chengdu, Xi'an)"],
    importing: ["Imports require a registered Chinese entity with customs (or an agent importer); CIQ inspection applies to many categories.", "VAT applies at import; duty rates vary widely by HS code and origin agreements.", "Food, cosmetics and medical products carry registration requirements with long lead times."],
    exporting: ["Export clearance is routine for registered exporters; VAT rebate rates by HS code shape supplier pricing.", "Factory-loaded containers with telex-released B/Ls keep destination release simple.", "North America-bound cargo: watch tariff measures by product and consider routing/origin strategy with professional advice."],
    documents: ["Commercial invoice & packing list", "Customs declaration (export)", "B/L or AWB", "Certificates of origin (including RCEP where useful)", "Product registrations/inspections for regulated goods"],
    tips: ["Golden Week (early October) and Chinese New Year stop factories and squeeze vessel space for weeks — book around them, not into them.", "Insist on supplier document drafts before sailing; fixing an invoice at origin beats fixing it at destination customs.", "Our Shanghai team can audit supplier packing and loading — cheap insurance against damage and short-shipment claims."],
  },
];
