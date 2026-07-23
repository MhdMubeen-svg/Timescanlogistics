"use client";

import { useState } from "react";
import { offices } from "@/lib/data";

export default function ContactClient() {
  const [sent, setSent] = useState(false);

  function submit() {
    const form = document.getElementById("contact-form") as HTMLFormElement | null;
    if (form && !form.reportValidity()) return;
    // Replace with a POST to your API route / inbox integration.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-sm border border-ink/10 bg-fog p-10 text-center">
        <p className="font-display text-4xl font-extrabold text-cargo">✓</p>
        <h2 className="h-display mt-3 text-2xl">Message sent.</h2>
        <p className="mt-3 text-steel">The right office will reply within one business day.</p>
      </div>
    );
  }

  return (
    <form id="contact-form" className="grid gap-5" onSubmit={(e) => e.preventDefault()}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label className="label" htmlFor="c-name">Full name *</label><input id="c-name" required className="field" autoComplete="name" /></div>
        <div><label className="label" htmlFor="c-email">Work email *</label><input id="c-email" type="email" required className="field" autoComplete="email" /></div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label className="label" htmlFor="c-company">Company</label><input id="c-company" className="field" autoComplete="organization" /></div>
        <div>
          <label className="label" htmlFor="c-office">Nearest office</label>
          <select id="c-office" className="field" defaultValue="Vancouver">
            {offices.map((o) => <option key={o.code}>{o.city}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label className="label" htmlFor="c-topic">Topic</label>
        <select id="c-topic" className="field" defaultValue="New shipment enquiry">
          <option>New shipment enquiry</option>
          <option>Active shipment support</option>
          <option>Customs & compliance</option>
          <option>Partnership / agency</option>
          <option>Careers</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="label" htmlFor="c-msg">Message *</label>
        <textarea id="c-msg" required rows={6} className="field" placeholder="Tell us about your shipment or question…" />
      </div>
      <button type="button" onClick={submit} className="btn-primary justify-self-start">Send message</button>
    </form>
  );
}
