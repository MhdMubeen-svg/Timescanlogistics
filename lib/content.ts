// Trade content: FAQs, full articles, and resources.
// NOTE: Regulatory details change - have your customs team review before publishing.

export type FaqGroup = { group: string; items: { q: string; a: string }[] };

export const faqs: FaqGroup[] = [
  {
    group: "Working with Timescan",
    items: [
      {
        q: "What does a freight forwarder do, and how is that different from a customs broker?",
        a: "A freight forwarder plans and manages the physical movement of your cargo - booking carriers, consolidating shipments, arranging pickup and delivery, and handling documentation across air, ocean, rail and road. A customs broker handles the regulatory side: classifying goods, filing entries and clearing shipments with border agencies. Timescan does both under one roof: we are a CBSA-registered forwarder with in-house customs capability, so the team routing your freight is the same team clearing it.",
      },
      {
        q: "Which trade lanes and countries do you cover?",
        a: "Our own offices operate in Canada (Vancouver HQ), the USA, the UAE, India, Malaysia and China, and our core lanes connect North America with the Middle East and Asia in both directions. Through partner networks we can arrange movements to and from most other markets - ask us about your specific lane.",
      },
      {
        q: "Is there a minimum shipment size?",
        a: "No. We handle everything from a single carton of samples moving by air to full container programs and project cargo. For small, frequent shipments we will usually recommend consolidation options that bring your per-unit cost down.",
      },
      {
        q: "How fast can you provide a quote?",
        a: "Standard air, ocean and road quotes are typically returned within one business day. Complex requests - project cargo, dangerous goods, multi-leg routings, or annual tenders - may take longer, and we will tell you the timeline up front.",
      },
    ],
  },
  {
    group: "Importing into Canada",
    items: [
      {
        q: "What is CARM and does it affect my imports?",
        a: "CARM (CBSA Assessment and Revenue Management) is the Canada Border Services Agency's system for assessing and collecting duties and taxes on commercial imports. Importers must register on the CARM Client Portal, post their own financial security to participate in Release Prior to Payment, and manage their statements of account through the portal. If you import commercially into Canada, CARM affects you directly - we help clients register, delegate authority to their service providers, and set up security correctly.",
      },
      {
        q: "What do I need before importing commercially into Canada?",
        a: "At minimum: a Business Number (BN) with an import-export (RM) program account from the CRA, registration on the CARM Client Portal, correct tariff classification (HS codes) for your goods, and any permits or licences required by other government departments - for example CFIA for food and plant products or Health Canada for regulated goods. You must also keep import records for six years. We walk first-time importers through the full checklist.",
      },
      {
        q: "What is CUSMA and can it eliminate my duties?",
        a: "CUSMA (known as USMCA in the US) is the free-trade agreement between Canada, the US and Mexico. Goods that meet its rules of origin can enter duty-free with a valid certification of origin. Qualification depends on where materials come from and how the product is made - not just where it ships from - so we review your bill of materials against the specific rule for your HS code before you claim preferential treatment.",
      },
      {
        q: "What is the difference between PARS and PAPS?",
        a: "Both are pre-arrival review systems for highway shipments. PARS (Pre-Arrival Review System) is used for shipments entering Canada; PAPS (Pre-Arrival Processing System) is the US equivalent for shipments entering the United States. In both cases, the entry is transmitted before the truck reaches the border so the shipment can be released on arrival instead of waiting at the crossing.",
      },
      {
        q: "How long does customs clearance take?",
        a: "With complete, accurate documentation submitted in advance, most shipments are released within hours of arrival - often on arrival for pre-cleared highway freight. Delays almost always trace back to documentation gaps, misclassification, missing permits, or examinations. Our pre-alert process is designed to catch those issues while the cargo is still in transit.",
      },
    ],
  },
  {
    group: "Exporting & manufacturing",
    items: [
      {
        q: "Do I need to declare my exports from Canada?",
        a: "Most commercial exports valued at CAD 2,000 or more to destinations other than the US must be declared through CERS (the Canadian Export Reporting System) before departure. Some goods also require export permits regardless of value. We file export declarations as part of our forwarding service and flag controlled goods early.",
      },
      {
        q: "Can you support just-in-time inbound programs for manufacturers?",
        a: "Yes. We build scheduled inbound programs with fixed sailing or flight patterns, pre-clearance, and delivery windows matched to production schedules - plus buffer-stock strategies and expedited backup lanes for when a supplier or vessel slips.",
      },
      {
        q: "Are there programs to reduce or recover duty on goods I re-export?",
        a: "Canada offers mechanisms such as the Duties Relief Program and duty drawback for imported goods that are later exported (including after processing), and duty deferral through customs bonded warehouses. Which mechanism fits depends on your flows and record-keeping - we can assess this with you as part of a supply chain review.",
      },
    ],
  },
  {
    group: "E-commerce sellers",
    items: [
      {
        q: "Can you handle Amazon FBA and marketplace shipments?",
        a: "Yes. We manage origin consolidation, ocean and air transport, customs clearance, labelling and carton compliance, and delivery into FBA and 3PL fulfillment centres in both Canada and the US - including appointment scheduling and palletization requirements.",
      },
      {
        q: "I sell into Canada but have no Canadian company. Can I still import?",
        a: "Usually yes, through the Non-Resident Importer (NRI) route: a foreign business registers for a Canadian Business Number, acts as importer of record, and can sell to Canadian customers with duties and taxes handled upfront - a landed-cost experience similar to a domestic seller. We help sellers evaluate whether NRI, a 3PL model, or a Canadian entity fits their volume.",
      },
      {
        q: "What changed with US de minimis (Section 321) shipments?",
        a: "The long-standing US$800 duty-free de minimis exemption for low-value imports has been sharply restricted, meaning low-value e-commerce parcels that once entered the US duty-free now generally require formal or informal entry with duties applied. Sellers shipping direct-to-consumer into the US should re-model landed costs and consider bulk import plus domestic fulfillment. Because these rules have shifted repeatedly, confirm current treatment with us before committing to a fulfillment model.",
      },
      {
        q: "Should I ship DDP or DAP to my customers?",
        a: "DDP (Delivered Duty Paid) gives your buyer a clean, all-in price and fewer delivery surprises, but makes you responsible for destination duties and taxes - which requires accurate landed-cost calculation. DAP shifts import formalities to the buyer, which many consumers and small businesses handle poorly, leading to refused deliveries. For B2C we generally recommend DDP with correctly modelled costs; for B2B it depends on your customer's import maturity.",
      },
    ],
  },
  {
    group: "Rates, transit & cargo care",
    items: [
      {
        q: "What information do you need to quote accurately?",
        a: "Origin and destination (city and country, plus pickup/delivery addresses if door service), commodity description, weight and dimensions or container type, Incoterm, cargo-ready date, and any special handling (temperature control, DG, out-of-gauge, high value). The more precise the details, the fewer assumptions in the rate - and the fewer surprises at invoice time.",
      },
      {
        q: "What are demurrage and detention, and how do I avoid them?",
        a: "Demurrage is charged when a container stays at the port or terminal beyond its free time; detention is charged when you keep the carrier's container outside the terminal beyond the allowed days. Both add up quickly. We manage them by pre-clearing shipments before arrival, booking trucking in advance, monitoring free-time clocks, and negotiating extended free time on regular programs.",
      },
      {
        q: "Is my cargo automatically insured?",
        a: "No - and this surprises many shippers. Carrier liability is limited by international conventions and usually covers only a small fraction of cargo value. We strongly recommend all-risk marine cargo insurance, which we can arrange per shipment or as an annual policy; it typically costs a small fraction of a percent of insured value.",
      },
      {
        q: "How do I track my shipment?",
        a: "Every booking receives a Timescan reference you can track on our website, and your operations coordinator sends proactive milestone updates - including exceptions like rollings, transshipment delays or customs examinations, with a recovery plan rather than just a status.",
      },
    ],
  },
];

export type Article = {
  slug: string;
  title: string;
  date: string;
  tag: string;
  excerpt: string;
  minutes: number;
  audience: string[];
  body: { h?: string; p: string }[];
};

export const articles: Article[] = [
  {
    slug: "carm-what-importers-need",
    title: "CARM is here: what Canadian importers need to do now",
    date: "2026-06-18",
    tag: "Customs",
    excerpt:
      "CBSA's assessment and revenue management system changes how duties are posted and paid. A practical checklist for importers of record.",
    minutes: 6,
    audience: ["Importers", "E-commerce"],
    body: [
      { p: "CARM - the CBSA Assessment and Revenue Management system - is now the way commercial import duties and taxes are assessed, corrected and paid in Canada. It moved responsibility for financial security and account management squarely onto importers, and businesses that treated it as a broker problem have discovered, sometimes at the border, that it is not." },
      { h: "What actually changed", p: "Under CARM, importers register on the CARM Client Portal, see their own statements of account, and post their own financial security to benefit from Release Prior to Payment (RPP) - the mechanism that lets goods be released before duties are paid. Previously, most importers rode on their customs broker's bond. That shortcut is gone: without your own security arrangement, your shipments can wait until payment is made." },
      { h: "The importer checklist", p: "First, register your business on the CARM Client Portal and confirm your Business Number and RM program account are correctly linked. Second, delegate portal authority to your customs broker or forwarder so entries reconcile cleanly. Third, choose and post financial security - a surety bond or cash deposit sized to your import volumes. Fourth, assign internal ownership: someone in finance should reconcile the monthly statement of account the same way they reconcile a bank statement. Fifth, review past classifications; CARM's transparency makes errors easier for CBSA to spot, and voluntary corrections are far cheaper than penalties." },
      { h: "Where importers stumble", p: "The common failure points we see are portal registration left to the last minute, security sized on last year's volumes rather than growth plans, and statements of account nobody reads until a balance surprises the CFO. All three are avoidable with an hour of setup and a monthly routine." },
      { p: "If you import into Canada and have not fully operationalized CARM - or you are a non-resident importer unsure how it applies to you - talk to our customs team. Setup is a one-time exercise; getting it wrong is a recurring one." },
    ],
  },
  {
    slug: "cusma-rules-of-origin",
    title: "CUSMA rules of origin: qualifying is not automatic",
    date: "2026-06-05",
    tag: "Trade",
    excerpt:
      "Shipping from the US or Mexico doesn't make goods duty-free. How rules of origin actually work - and how to certify without creating audit risk.",
    minutes: 7,
    audience: ["Importers", "Exporters", "Manufacturers"],
    body: [
      { p: "One of the most expensive misunderstandings in North American trade is the belief that anything shipped from the US or Mexico enters Canada duty-free under CUSMA. Origin is about where and how goods are made - not where they ship from. A product manufactured in Asia and forwarded through a US warehouse gains nothing from the agreement." },
      { h: "How rules of origin work", p: "Every product's HS code maps to a specific rule of origin in the agreement. Some goods qualify because they are wholly obtained in North America. Most manufactured goods qualify through a tariff-shift rule (non-originating inputs must change tariff classification during production), a regional value content (RVC) threshold, or both. Autos and some other sectors carry additional, stricter requirements." },
      { h: "Certification and the paper trail", p: "CUSMA replaced the old prescribed certificate with a certification of origin - a set of minimum data elements that can sit on an invoice or a separate document, completed by the exporter, producer or importer. The flexibility is convenient, but the obligation behind it is not lighter: whoever certifies must be able to substantiate the claim, and importers must keep records supporting preferential claims for years after import." },
      { h: "Where claims fall apart in verification", p: "CBSA and CBP verify origin claims, and the failures are predictable: certifications signed by traders who never analyzed the rule; bills of materials that changed after the original qualification; suppliers who quietly resourced inputs offshore; and RVC calculations done once and never refreshed as costs moved. A denied claim means repaid duties, interest and possible penalties - retroactively, across every entry." },
      { p: "Our advice: treat origin as an engineering exercise, not a checkbox. Qualify each SKU against its specific rule, re-verify when sourcing changes, and keep the worksheet with the certification. We run origin reviews for importers and manufacturers as part of our customs advisory work." },
    ],
  },
  {
    slug: "us-de-minimis-ecommerce",
    title: "The end of easy de minimis: what US-bound e-commerce sellers must rethink",
    date: "2026-05-22",
    tag: "E-commerce",
    excerpt:
      "Low-value parcels no longer glide into the US duty-free. How direct-to-consumer sellers should re-model landed cost and fulfillment.",
    minutes: 6,
    audience: ["E-commerce", "Exporters"],
    body: [
      { p: "For years, the US$800 de minimis threshold let low-value parcels enter the United States duty-free with minimal formalities - and entire cross-border e-commerce models were built on it. That era has effectively ended. Low-value shipments now broadly face duties and formal processing, and sellers who priced their US offering around duty-free entry are watching margins evaporate one parcel at a time." },
      { h: "What it means at the parcel level", p: "Direct-to-consumer shipments now typically require entry processing with duties calculated on classification and origin - which means every SKU needs a correct HS code and a defensible country of origin, even at low values. Processing costs that were negligible per parcel become material at scale, and delivery times stretch when parcels queue for clearance." },
      { h: "The strategic responses", p: "Sellers are converging on three models. First: bulk import plus domestic fulfillment - move inventory into the US in commercial quantities (paying duty once, at wholesale values with proper planning) and fulfill domestically from a 3PL or FBA. Second: nearshore fulfillment from Canada or Mexico for lighter catalogs, weighing speed against the new clearance economics. Third: true landed-cost pricing at checkout for goods that must ship direct, so duty surprises never reach the customer as a refused delivery." },
      { h: "Re-model before you re-route", p: "The right answer is arithmetic, not instinct: it depends on your average order value, catalog duty rates, return rates and demand geography. We build these landed-cost comparisons for sellers weekly, and the winning model is rarely the one the seller assumed walking in." },
      { p: "Rules in this area have shifted repeatedly and remain politically live - confirm current treatment for your products before committing to a fulfillment architecture. Our team tracks the changes so your checkout doesn't have to." },
    ],
  },
  {
    slug: "nonresident-importer-canada",
    title: "Selling into Canada without a Canadian entity: the Non-Resident Importer route",
    date: "2026-05-10",
    tag: "E-commerce",
    excerpt:
      "US and international sellers can act as importer of record into Canada - offering domestic-style delivery without opening a subsidiary.",
    minutes: 5,
    audience: ["E-commerce", "Exporters"],
    body: [
      { p: "Canada is often the first international market US sellers expand into - and the first place they discover that asking customers to act as importers kills conversion. The Non-Resident Importer (NRI) program solves this: a business with no physical presence in Canada registers for a Canadian Business Number, acts as importer of record, and delivers duty-paid like a domestic seller." },
      { h: "What NRI setup involves", p: "The core steps are obtaining a Business Number with an import-export (RM) account, registering on the CARM Client Portal with appropriate financial security, registering for GST/HST where required, and setting up record-keeping that satisfies CBSA's requirements. None of it requires a Canadian subsidiary - but all of it requires doing properly, because the NRI carries full importer-of-record liability." },
      { h: "The commercial payoff", p: "NRI sellers can quote landed prices, pre-collect taxes at checkout, clear commercial shipments in bulk to a Canadian 3PL, and offer delivery times competitive with domestic retailers. For marketplaces, it enables FBA Canada and similar programs. Compared with shipping DAP and letting customers face the courier's brokerage invoice at the door, the conversion difference is dramatic." },
      { h: "When NRI is not the answer", p: "At very low volumes, direct duty-paid parcel shipping may be simpler; at very high volumes with local hiring, a Canadian entity may serve you better for tax and banking reasons. The middle - where most growing sellers live - is NRI territory." },
      { p: "We set up and operate the logistics side of NRI programs end-to-end: registration guidance, customs clearance, bulk inbound freight, and delivery into Canadian fulfillment networks." },
    ],
  },
  {
    slug: "canadian-gateway-comparison",
    title: "Vancouver, Prince Rupert or Montreal? Choosing your Canadian gateway",
    date: "2026-04-28",
    tag: "Ocean Freight",
    excerpt:
      "Canada's major container gateways serve different geographies and risk profiles. How to pick - and why the answer may be 'more than one'.",
    minutes: 6,
    audience: ["Importers", "Manufacturers"],
    body: [
      { p: "Importers moving transpacific freight into Canada usually default to Vancouver - the country's largest port, with the deepest carrier choice and densest trucking and transload market. It is often the right answer. It is not always the only one worth pricing." },
      { h: "Vancouver: depth and density", p: "Vancouver offers the widest sailing choice from Asia, strong rail connections east via CN and CPKC, and mature warehousing and transloading capacity. Its weaknesses are the flip side of its scale: it is the first place congestion appears in peak season, and local drayage and storage capacity tightens when volumes surge." },
      { h: "Prince Rupert: speed to the interior", p: "Prince Rupert is closer to Asia by sailing time and is built around rail intermodal - cargo discharges essentially onto trains bound for Toronto, Montreal, Chicago and Memphis. For inland destinations, it can shave meaningful days versus congested routings and offers a genuinely different congestion-risk profile. It is less suited to cargo that needs local BC delivery or heavy transloading." },
      { h: "Montreal and the East Coast option", p: "For Ontario and Quebec consignees, routing via Montreal or Atlantic gateways - from Asia via Suez, or for European and transatlantic cargo - puts arrival closer to final delivery and diversifies away from West Coast risk entirely. Transits from Asia are longer, but total landed reliability sometimes wins." },
      { h: "The resilience argument", p: "Recent years - strikes, floods, congestion waves - taught Canadian importers that gateway concentration is a supply chain risk of its own. For steady programs, we increasingly design dual-gateway routings: a primary lane for cost, a tested alternate for continuity, with documentation and customs set up in advance so switching is an email, not a project." },
      { p: "If your entire import program flows through one port and one railhead, it is worth an hour to price the alternatives. We will model them lane by lane." },
    ],
  },
  {
    slug: "asia-northamerica-capacity-outlook",
    title: "Asia-North America capacity outlook for peak season",
    date: "2026-05-30",
    tag: "Ocean Freight",
    excerpt:
      "Blank sailings, transpacific rate movement, and why booking windows are moving earlier again this year.",
    minutes: 5,
    audience: ["Importers", "Manufacturers", "E-commerce"],
    body: [
      { p: "Every year, importers promise themselves they will book peak season earlier - and every year, the shippers who actually do sail through Q3 while everyone else fights for rollover slots. The structural picture this year rewards the disciplined again." },
      { h: "The capacity mechanics", p: "Carriers actively manage transpacific capacity through blank sailings - cancelled voyages that tighten supply when demand softens and hold rates up. The practical consequence for shippers: nominal weekly capacity on a lane is not real capacity, and space in the weeks around holidays and pre-tariff pull-forwards disappears fastest." },
      { h: "What we advise programs to do", p: "First, forecast honestly with your suppliers and give your forwarder rolling four-to-six-week visibility rather than booking shipment by shipment. Second, protect critical cargo with premium or fixed-space products where the delay cost justifies it, and let flexible cargo ride spot. Third, hold a tested air or sea-air fallback for genuine emergencies, priced in advance. Fourth, watch transshipment exposure: cheap routings through congested hubs are where peak-season schedules go to die." },
      { h: "On rates", p: "Rate forecasting in this market humbles everyone, so we plan around scenarios rather than predictions: a budget rate, a protection strategy for the upside case, and clarity on which SKUs can tolerate deferment if the market spikes. Shippers with that structure negotiate calmly in any market." },
      { p: "For a lane-by-lane view of your program's peak exposure, ask your Timescan contact for a capacity review - it is a standing part of our quarterly business reviews." },
    ],
  },
  {
    slug: "air-vs-sea-air",
    title: "Air, ocean, or sea-air? Choosing the right mode by landed cost",
    date: "2026-05-02",
    tag: "Strategy",
    excerpt:
      "A framework for weighing transit time against total landed cost - with real trade-lane thinking from Dubai and Kuala Lumpur.",
    minutes: 5,
    audience: ["Importers", "Exporters", "Manufacturers"],
    body: [
      { p: "Mode choice is usually framed as a speed-versus-price argument, and settled by habit. The better frame is landed cost per unit of time saved - because the cost of transit time is different for every product and every situation." },
      { h: "The real cost of transit time", p: "Time in transit costs you inventory carrying cost, markdown risk on seasonal goods, stockout risk on fast movers, and cash conversion. A high-margin product launching for a selling window justifies air economics that would be absurd for stable replenishment SKUs. Compute the daily cost of delay for a shipment and mode choice often makes itself." },
      { h: "The middle options most shippers ignore", p: "Between pure air and pure ocean sit deferred air products, expedited ocean services, and sea-air combinations - for example, ocean from Asian origins to a Middle East hub like Dubai, then air onward to North America. Sea-air can land cargo meaningfully faster than ocean at a fraction of pure air freight cost, and it shines exactly when calendars are tight but budgets are real." },
      { h: "A simple decision discipline", p: "Segment your catalog: which SKUs are time-critical, which are seasonal, which are steady? Assign a default mode per segment, pre-price the upgrade paths, and decide exceptions by the daily-cost-of-delay math rather than by whoever is most nervous in the room. Programs run this way spend less on freight and miss fewer windows - simultaneously." },
      { p: "We build mode-strategy matrices like this for customers as part of supply chain reviews. Bring us a product list and a calendar; we will bring the arithmetic." },
    ],
  },
  {
    slug: "incoterms-mistakes",
    title: "Five Incoterms mistakes that cost importers real money",
    date: "2026-02-14",
    tag: "Trade",
    excerpt:
      "From EXW surprises to DDP tax exposure - the terms that quietly shift risk onto the wrong party.",
    minutes: 5,
    audience: ["Importers", "Exporters", "E-commerce"],
    body: [
      { p: "Incoterms decide who pays for what, who carries risk where, and who handles which formalities. They are three letters on a purchase order - and among the most expensive three letters in trade when chosen carelessly." },
      { h: "Mistake 1: Buying EXW without meaning to export", p: "EXW makes the buyer responsible for everything from the seller's dock onward - including export formalities in the seller's country, which foreign buyers often cannot legally perform smoothly. FCA usually achieves the buyer-controlled freight goal without the export-clearance trap." },
      { h: "Mistake 2: Using ocean-only terms for containers", p: "FOB, CFR and CIF are designed for cargo passing over a ship's rail - conventional, non-containerized shipping. For containers, risk actually transfers when the box is handed to the carrier, often at an inland terminal, so FCA, CPT and CIP align the paperwork with reality. Insurance claims fail in the gap between the term and the facts." },
      { h: "Mistake 3: CIF and assuming 'insured' means 'covered'", p: "CIF and CIP require the seller to insure - but at minimum specified coverage levels that may be far thinner than your risk deserves, in a policy the seller chose. Many importers buy their own all-risk cover and purchase on CFR/CPT instead, keeping control of claims." },
      { h: "Mistake 4: Selling DDP without modelling destination taxes", p: "DDP makes the seller responsible for import duties and taxes in the buyer's country - including registration obligations the seller may not anticipate. Sellers quoting DDP into new markets without landed-cost modelling routinely discover their margin at customs." },
      { h: "Mistake 5: Letting the supplier choose", p: "Whoever controls the freight controls cost visibility, carrier choice and problem-solving leverage. Suppliers offering suspiciously attractive CIF prices often recover margin in destination charges the buyer never scrutinized. Take control of terms deliberately - and if you want help choosing per lane, that conversation with us is free." },
      { p: "" },
    ],
  },
  {
    slug: "rail-middle-corridor",
    title: "Rail's quiet advantage: where intermodal genuinely wins",
    date: "2026-04-11",
    tag: "Rail",
    excerpt:
      "Where intermodal rail beats ocean on time and air on cost across North America and Eurasia - and where it doesn't.",
    minutes: 4,
    audience: ["Importers", "Manufacturers"],
    body: [
      { p: "Rail rarely headlines a logistics strategy, and that is exactly why it is underused. On the right lanes, intermodal rail sits in a sweet spot: materially faster than all-water routings to inland points, dramatically cheaper than air, and more carbon-efficient than either trucking or flying." },
      { h: "North America: the inland leg", p: "For Asian imports destined to Toronto, Chicago, Memphis or Montreal, discharging at a West Coast port onto rail is the default architecture - and gateway choice (see our Canadian gateway comparison) changes the math more than most shippers realize. Cross-border Canada-US rail also moves finished vehicles, lumber, chemicals and consumer goods at trucking-beating economics for distances beyond roughly a day's drive." },
      { h: "Eurasia: the corridor options", p: "Between China and Europe, block trains have offered a middle path for years - roughly half ocean's transit at a fraction of air cost - with routing choices that have shifted with geopolitics. For Canadian and US shippers, these corridors matter mainly for European legs of multi-region supply chains." },
      { h: "Where rail loses", p: "Rail disappoints on short hauls where drayage at both ends eats the savings, on urgent freight where a missed cut-off means days not hours, and on lanes where terminal congestion is chronic. The discipline is to price it honestly, door to door, rather than assume either way." },
      { p: "If your inland freight moves entirely by truck, or your Asia-Europe cargo entirely by water, a rail comparison costs nothing and occasionally saves a great deal." },
    ],
  },
  {
    slug: "visibility-that-matters",
    title: "Shipment visibility that actually changes decisions",
    date: "2026-03-20",
    tag: "Technology",
    excerpt:
      "Milestones are not insight. What a control tower should tell you before a delay becomes a stockout.",
    minutes: 4,
    audience: ["Importers", "Manufacturers", "E-commerce"],
    body: [
      { p: "Every forwarder now promises visibility, and most deliver the same thing: a portal of milestones telling you where your container was yesterday. That is a rear-view mirror. Visibility only earns its keep when it changes a decision before the cost lands." },
      { h: "From milestones to exceptions", p: "The useful question is never 'where is my container' - it is 'which shipments will miss their required date, and what am I doing about it.' That requires ETAs compared against need-by dates, automatic flagging when the gap goes negative, and a human with authority proposing the recovery: expedite, transload, air-bridge the critical SKUs, or accept the delay and re-plan downstream." },
      { h: "Connecting freight data to business data", p: "The step most programs never take is joining shipment data to inventory and sales data. A five-day vessel delay is trivia on its own; against days-of-cover per SKU it becomes a precise answer to 'will we stock out, where, and when.' Our leadership's background in SAP supply-chain and analytics platforms shapes how we build this for clients: freight events feeding the same dashboards the business already runs on." },
      { h: "What to ask any provider", p: "Ask three questions: How will I know a shipment is in trouble before it is late? Who proposes the recovery plan, and how fast? Can your data land in my systems, not just your portal? The answers separate visibility as a feature from visibility as a service." },
      { p: "" },
    ],
  },
];

export type ResourceSection = {
  id: string;
  audience: string;
  headline: string;
  intro: string;
  checklist: string[];
  tip: string;
};

export const resourceSections: ResourceSection[] = [
  {
    id: "importers",
    audience: "Importers",
    headline: "Importing into Canada, done in order",
    intro:
      "First-time and growing importers hit the same walls in the same order. This is the sequence that avoids them.",
    checklist: [
      "Obtain a Business Number (BN) with an import-export (RM) program account from the CRA",
      "Register on the CARM Client Portal and delegate authority to your broker/forwarder",
      "Post financial security on CARM to enable Release Prior to Payment",
      "Classify your goods (HS codes) and confirm duty rates and applicable trade agreements",
      "Check other-government-department requirements (CFIA, Health Canada, Transport Canada, etc.)",
      "Set up record-keeping - import records must be kept for six years",
      "Arrange all-risk cargo insurance rather than relying on carrier liability",
      "Establish a customs valuation approach for related-party or assist scenarios",
    ],
    tip: "Most border delays are documentation problems that existed weeks before the vessel arrived. Send documents to your forwarder at time of booking, not at time of arrival.",
  },
  {
    id: "exporters",
    audience: "Exporters",
    headline: "Exporting from Canada without surprises",
    intro:
      "Export compliance is lighter than import compliance - until it isn't. Controlled goods, declarations and origin certification are where exporters get caught.",
    checklist: [
      "Declare eligible exports through CERS (Canadian Export Reporting System) before departure",
      "Screen products against the Export Control List and destination sanctions early",
      "Prepare certificates of origin where buyers claim trade-agreement preferences",
      "Match your Incoterm to what you can actually perform in the destination country",
      "Explore EDC (Export Development Canada) insurance and financing for receivables risk",
      "Use the Trade Commissioner Service for market-entry intelligence in new countries",
      "Confirm packaging, labelling and phytosanitary requirements for the destination",
    ],
    tip: "Quote landed or near-landed prices where you can. Exporters who make buying easy - clear terms, clean documents, predictable delivery - win repeat orders over marginally cheaper competitors.",
  },
  {
    id: "manufacturers",
    audience: "Manufacturers",
    headline: "Freight as part of the production system",
    intro:
      "For manufacturers, logistics is not a purchasing category - it is a production input with a failure mode. These are the levers that matter.",
    checklist: [
      "Build scheduled inbound programs with fixed patterns and pre-clearance, not shipment-by-shipment booking",
      "Qualify key inputs under CUSMA rules of origin and keep the analysis current as sourcing changes",
      "Assess Duties Relief / duty drawback programs for imported inputs that are re-exported",
      "Consider bonded warehousing for duty deferral on imported inventory",
      "Segment SKUs by criticality and assign default modes plus pre-priced expedite paths",
      "Dual-source gateways and carriers on critical lanes; test the alternate before you need it",
      "Join shipment ETAs to production schedules so delays trigger re-planning automatically",
    ],
    tip: "The cheapest freight program and the most resilient freight program are different programs. Decide deliberately, lane by lane, which one each input deserves.",
  },
  {
    id: "ecommerce",
    audience: "E-commerce sellers",
    headline: "Cross-border selling that survives contact with customs",
    intro:
      "E-commerce logistics changed more in the last two years than the previous ten. The sellers thriving are the ones who re-modelled instead of hoping.",
    checklist: [
      "Re-model US landed costs following de minimis restrictions - per SKU, not per catalog",
      "Evaluate the Non-Resident Importer (NRI) route for selling into Canada without an entity",
      "Compare direct-parcel vs bulk-import-plus-3PL/FBA economics for each destination market",
      "Register for destination taxes (GST/HST in Canada) where your model requires it",
      "Get HS classification and country-of-origin right at catalog level - it drives every duty calculation",
      "Choose DDP vs DAP deliberately; refused deliveries are a landed-cost line item too",
      "Plan returns logistics before launch, not after the first return wave",
    ],
    tip: "Marketplaces and couriers will happily move badly-planned freight - at your margin's expense. An hour of landed-cost modelling before launch is the highest-ROI logistics work an e-commerce seller can do.",
  },
];

export const usefulLinks = [
  { name: "Canada Border Services Agency (CBSA)", url: "https://www.cbsa-asfc.gc.ca", note: "Import/export requirements, D-memoranda, tariff information" },
  { name: "CARM Client Portal", url: "https://ccp-pcc.cbsa-asfc.cloud-nuage.canada.ca", note: "Importer registration, statements of account, financial security" },
  { name: "Canada Tariff Finder", url: "https://www.tariffinder.ca", note: "Duty rates for Canadian exports under free-trade agreements" },
  { name: "Trade Commissioner Service", url: "https://www.tradecommissioner.gc.ca", note: "Market intelligence and export support in 160+ cities worldwide" },
  { name: "Export Development Canada (EDC)", url: "https://www.edc.ca", note: "Export credit insurance, financing and guarantees" },
  { name: "Canadian Food Inspection Agency (CFIA)", url: "https://inspection.canada.ca", note: "Requirements for food, plant and animal imports/exports" },
  { name: "U.S. Customs and Border Protection (CBP)", url: "https://www.cbp.gov", note: "US import requirements and trade programs" },
  { name: "Canadian Export Reporting System (CERS)", url: "https://www.cbsa-asfc.gc.ca/services/export/menu-eng.html", note: "Electronic export declarations" },
];
