"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/**
 * Timescan Assist - a scripted chat assistant.
 *
 * Today: guided quick-reply flows (quote, tracking, customs, human handoff).
 * To upgrade to a live agent or AI:
 *  - Live agent: replace the panel body with your provider's embed
 *    (Crisp, Intercom, Tawk.to) OR keep this UI and relay messages
 *    to your helpdesk via an API route.
 *  - AI answers: POST the message history to /api/chat and call the
 *    Anthropic API server-side; stream the reply into `messages`.
 */

type Msg = { from: "bot" | "user"; text: string; links?: { label: string; href: string }[] };

const intro: Msg = {
  from: "bot",
  text: "Hi! I'm Timescan Assist. I can point you in the right direction - what do you need today?",
};

const flows: Record<string, Msg> = {
  quote: {
    from: "bot",
    text: "Happy to help with pricing. The fastest route is our quote form - a specialist from the office nearest your origin replies within one business day with routing options, not just a rate.",
    links: [{ label: "Open the quote form", href: "/quote" }],
  },
  track: {
    from: "bot",
    text: "You can track with your Timescan reference (like TSL-2026-004821), house bill, or container number. For urgent updates on an active booking, your operations coordinator is the quickest path.",
    links: [{ label: "Track a shipment", href: "/tracking" }],
  },
  customs: {
    from: "bot",
    text: "Customs questions are our home turf - we're CBSA-registered. For common topics (CARM, documents, duties, holds) start with our FAQ and Trade Resources; for your specific goods, message our customs team.",
    links: [
      { label: "Read the FAQ", href: "/faq" },
      { label: "Trade Resources", href: "/resources" },
      { label: "Contact customs team", href: "/contact" },
    ],
  },
  newbie: {
    from: "bot",
    text: "Welcome to international shipping! We work with first-time importers and exporters all the time. Start with our step-by-step resources, then send us your first shipment details - we'll walk you through the rest.",
    links: [
      { label: "First-time guides", href: "/resources" },
      { label: "Country guides", href: "/guides" },
    ],
  },
  human: {
    from: "bot",
    text: "Of course. Reach the office nearest your cargo via the contact page, or leave your details in the form and the right person will reply within one business day - across six time zones, someone is usually awake.",
    links: [{ label: "Contact a human", href: "/contact" }],
  },
};

const quickReplies = [
  { key: "quote", label: "Get a quote" },
  { key: "track", label: "Track my shipment" },
  { key: "customs", label: "Customs question" },
  { key: "newbie", label: "I'm new to shipping" },
  { key: "human", label: "Talk to a human" },
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([intro]);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [messages, open]);

  function pick(key: string, label: string) {
    setMessages((m) => [...m, { from: "user", text: label }, flows[key]]);
  }

  return (
    <div className="fixed bottom-5 right-5 z-[70]">
      {open && (
        <div
          role="dialog"
          aria-label="Timescan Assist chat"
          className="mb-3 flex h-[440px] w-[min(92vw,360px)] flex-col overflow-hidden rounded-md border border-ink/10 bg-white shadow-2xl"
        >
          <div className="flex items-center justify-between bg-ink px-4 py-3 text-white">
            <div>
              <p className="font-display text-sm font-bold">Timescan Assist</p>
              <p className="text-[11px] text-white/60">Guided help · humans one click away</p>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="p-1 text-white/70 hover:text-white">✕</button>
          </div>
          <div ref={bodyRef} className="flex-1 space-y-3 overflow-y-auto bg-fog p-4">
            {messages.map((m, i) => (
              <div key={i} className={m.from === "user" ? "flex justify-end" : "flex justify-start"}>
                <div className={`max-w-[85%] rounded-md px-3.5 py-2.5 text-sm leading-relaxed ${m.from === "user" ? "bg-cargo text-white" : "border border-ink/10 bg-white text-ink"}`}>
                  {m.text}
                  {m.links && (
                    <div className="mt-2.5 flex flex-col gap-1.5">
                      {m.links.map((l) => (
                        <Link key={l.href + l.label} href={l.href} onClick={() => setOpen(false)}
                          className="rounded-sm border border-cargo/40 px-3 py-1.5 text-center font-display text-[11px] font-bold uppercase tracking-wider text-cargo hover:bg-cargo hover:text-white">
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-ink/10 bg-white p-3">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-steel">Choose a topic</p>
            <div className="flex flex-wrap gap-1.5">
              {quickReplies.map((q) => (
                <button key={q.key} onClick={() => pick(q.key, q.label)}
                  className="rounded-full border border-ink/15 px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:border-cargo hover:text-cargo">
                  {q.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close Timescan Assist chat" : "Open Timescan Assist chat"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-cargo text-white shadow-xl transition-transform hover:scale-105"
      >
        {open ? "✕" : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15a2 2 0 01-2 2H8l-5 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        )}
      </button>
    </div>
  );
}
