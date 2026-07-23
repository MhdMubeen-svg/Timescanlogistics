"use client";

import { useState } from "react";

const modes = ["Ocean — FCL", "Ocean — LCL", "Air Freight", "Rail / Intermodal", "Road / Trucking", "Not sure — advise me"];
const terms = ["EXW", "FOB", "CIF", "CFR", "DAP", "DDP", "Other / not sure"];

export default function QuoteClient() {
  const [sent, setSent] = useState(false);

  function submit() {
    const form = document.getElementById("quote-form") as HTMLFormElement | null;
    if (form && !form.reportValidity()) return;
    // Replace with a POST to your API route / CRM (e.g. /api/quote).
    setSent(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (sent) {
    return (
      <section className="bg-white py-24">
        <div className="container-x max-w-2xl text-center">
          <p className="font-display text-5xl font-extrabold text-cargo">✓</p>
          <h2 className="h-display mt-4 text-3xl">Quote request received.</h2>
          <p className="mt-4 leading-relaxed text-steel">
            A pricing specialist will reply within one business day. Urgent shipment?
            Call our Vancouver desk and quote your request reference.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-x max-w-4xl">
        <form id="quote-form" className="grid gap-10" onSubmit={(e) => e.preventDefault()}>
          <fieldset className="grid gap-5 sm:grid-cols-2">
            <legend className="h-display mb-5 w-full border-b border-ink/10 pb-3 text-xl">1 · Your details</legend>
            <div><label className="label" htmlFor="q-name">Full name *</label><input id="q-name" required className="field" autoComplete="name" /></div>
            <div><label className="label" htmlFor="q-company">Company *</label><input id="q-company" required className="field" autoComplete="organization" /></div>
            <div><label className="label" htmlFor="q-email">Work email *</label><input id="q-email" type="email" required className="field" autoComplete="email" /></div>
            <div><label className="label" htmlFor="q-phone">Phone</label><input id="q-phone" type="tel" className="field" autoComplete="tel" /></div>
          </fieldset>

          <fieldset className="grid gap-5 sm:grid-cols-2">
            <legend className="h-display mb-5 w-full border-b border-ink/10 pb-3 text-xl">2 · The lane</legend>
            <div><label className="label" htmlFor="q-origin">Origin (city, country) *</label><input id="q-origin" required className="field" placeholder="Shanghai, China" /></div>
            <div><label className="label" htmlFor="q-dest">Destination (city, country) *</label><input id="q-dest" required className="field" placeholder="Vancouver, Canada" /></div>
            <div>
              <label className="label" htmlFor="q-mode">Preferred mode *</label>
              <select id="q-mode" required className="field" defaultValue="">
                <option value="" disabled>Select a mode</option>
                {modes.map((m) => <option key={m}>{m}</option>)}
              </select>
            </div>
            <div>
              <label className="label" htmlFor="q-incoterm">Incoterm</label>
              <select id="q-incoterm" className="field" defaultValue="">
                <option value="" disabled>Select a term</option>
                {terms.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div><label className="label" htmlFor="q-ready">Cargo ready date</label><input id="q-ready" type="date" className="field" /></div>
            <div><label className="label" htmlFor="q-freq">Frequency</label>
              <select id="q-freq" className="field" defaultValue="One-time shipment">
                <option>One-time shipment</option><option>Weekly</option><option>Monthly</option><option>Ongoing program / tender</option>
              </select>
            </div>
          </fieldset>

          <fieldset className="grid gap-5 sm:grid-cols-2">
            <legend className="h-display mb-5 w-full border-b border-ink/10 pb-3 text-xl">3 · The cargo</legend>
            <div><label className="label" htmlFor="q-commodity">Commodity *</label><input id="q-commodity" required className="field" placeholder="e.g. auto parts, packaged food" /></div>
            <div><label className="label" htmlFor="q-weight">Gross weight (kg)</label><input id="q-weight" type="number" min="0" className="field" /></div>
            <div><label className="label" htmlFor="q-volume">Volume (CBM) / pieces</label><input id="q-volume" className="field" placeholder="e.g. 28 CBM or 1×40'HC" /></div>
            <div>
              <label className="label" htmlFor="q-special">Special handling</label>
              <select id="q-special" className="field" defaultValue="None">
                <option>None</option><option>Temperature-controlled</option><option>Dangerous goods (DG)</option><option>Out-of-gauge / project</option><option>High value</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="label" htmlFor="q-notes">Anything else we should know?</label>
              <textarea id="q-notes" rows={4} className="field" placeholder="Target delivery date, customs concerns, packaging details…" />
            </div>
          </fieldset>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-steel">We only use these details to prepare your quote. No mailing lists.</p>
            <button type="button" onClick={submit} className="btn-primary justify-center">Submit quote request</button>
          </div>
        </form>
      </div>
    </section>
  );
}
