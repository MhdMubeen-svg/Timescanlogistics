"use client";

import { useState } from "react";

/**
 * Newsletter signup. Wire `subscribe()` to your email provider
 * (e.g. Mailchimp, Brevo, ConvertKit) via an API route: POST /api/newsletter.
 */
export default function Newsletter({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "done" | "error">("idle");

  function subscribe() {
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!ok) { setState("error"); return; }
    // TODO: POST { email } to /api/newsletter, then set "done" on success.
    setState("done");
  }

  if (state === "done") {
    return (
      <div className={compact ? "" : "rounded-sm bg-ink p-8 text-white lg:p-10"}>
        <p className="font-display text-lg font-bold text-cargo">You're on the list. ✓</p>
        <p className={`mt-2 text-sm ${compact ? "text-white/70" : "text-white/70"}`}>
          Trade updates land monthly — unsubscribe anytime with one click.
        </p>
      </div>
    );
  }

  const inner = (
    <>
      <div className={compact ? "" : "max-w-xl"}>
        <p className="eyebrow">Trade Brief</p>
        <p className={`h-display mt-2 ${compact ? "text-lg !text-white" : "text-2xl !text-white sm:text-3xl"}`}>
          Canadian & North American trade updates, monthly.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-white/70">
          Customs changes, capacity outlooks and practical guidance — the brief we send customers, free for every shipper. No spam, one email a month.
        </p>
      </div>
      <form className="mt-5 flex w-full max-w-md flex-col gap-3 sm:flex-row" onSubmit={(e) => { e.preventDefault(); subscribe(); }}>
        <label htmlFor={compact ? "nl-email-c" : "nl-email"} className="sr-only">Email address</label>
        <input
          id={compact ? "nl-email-c" : "nl-email"}
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setState("idle"); }}
          placeholder="you@company.com"
          autoComplete="email"
          className="flex-1 rounded-sm border border-white/25 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-cargo focus:outline-none"
          aria-invalid={state === "error"}
          aria-describedby={state === "error" ? "nl-err" : undefined}
        />
        <button type="submit" className="btn-primary justify-center !py-3">Subscribe</button>
      </form>
      {state === "error" && <p id="nl-err" className="mt-2 text-xs text-cargo">Please enter a valid email address.</p>}
    </>
  );

  return compact ? <div>{inner}</div> : (
    <section aria-label="Newsletter signup" className="bg-ink-800">
      <div className="container-x flex flex-col items-start justify-between gap-6 py-14 lg:flex-row lg:items-center">{inner}</div>
    </section>
  );
}
