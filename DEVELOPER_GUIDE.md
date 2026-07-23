# Timescan Logistics Website — Developer Guide

**For a development team new to this project (and possibly new to Next.js).** This document explains what the website is, how it's built, how to run and edit it, how to connect the real integrations, and how to deploy it — assuming no prior experience with the stack.

---

## 1. What you're looking at

This is the corporate website for **Timescan Logistics Ltd**, an international freight forwarder headquartered in Vancouver, Canada with offices in six countries. It is a **content and lead-generation site**: its jobs are to explain the company, publish trade content, and convert visitors through the quote form, contact form, newsletter and chat widget.

**The technology stack, in plain words:**

| Technology | What it is | Why it's here |
|---|---|---|
| **Next.js 14 (App Router)** | A framework built on React that turns the code into fast, pre-rendered web pages | Speed, SEO, and a clear file-based structure |
| **React 18** | The library used to build UI out of reusable "components" | Industry standard; components keep the code organized |
| **TypeScript** | JavaScript with type checking | Catches mistakes before they reach users |
| **Tailwind CSS** | A styling system using small utility classes (`p-4`, `text-white`) directly in the markup | Consistent design without separate CSS files per page |

Almost every page is **statically generated**: at build time, Next.js produces plain HTML files that load extremely fast and are ideal for search engines. There is currently **no database and no backend** — all content lives in code files, and forms show a success state without sending anywhere yet (Section 6 explains how to wire them up).

---

## 2. Getting it running on your machine

### 2.1 Install the prerequisites (one time)

1. **Node.js (LTS version, 18 or newer)** — the runtime that executes the tooling. Download from [nodejs.org](https://nodejs.org) and install with defaults. Verify in a terminal: `node -v` (should print v18+ or v20+) and `npm -v`.
2. **A code editor** — [Visual Studio Code](https://code.visualstudio.com) is recommended. Install the extensions *ESLint* and *Tailwind CSS IntelliSense* (they autocomplete class names and flag errors).
3. **Git** (optional but strongly recommended) — version control. [git-scm.com](https://git-scm.com).

### 2.2 Run the project

```bash
# 1. Unzip the project and open a terminal in the folder (the one containing package.json)
cd timescan

# 2. Install dependencies (downloads Next.js, React, Tailwind into node_modules/ — a few minutes first time)
npm install

# 3. Start the development server
npm run dev
```

Open **http://localhost:3000** in a browser. The dev server has **hot reload**: save any file and the browser updates instantly. Stop it with `Ctrl+C`.

### 2.3 The three commands you'll use

| Command | What it does |
|---|---|
| `npm run dev` | Development server with hot reload (daily work) |
| `npm run build` | Production build — also your **error check**: if it completes, the site is deployable |
| `npm start` | Serves the production build locally (test what users will get) |

> **Tip:** run `npm run build` before every deploy or pull request. TypeScript will refuse to build if something is broken — that's a feature.

---

## 3. Project structure — where everything lives

```
timescan/
├── app/                     ← PAGES. Each folder = one URL.
│   ├── layout.tsx           ← Wraps every page: fonts, header, footer, chat, newsletter, global SEO
│   ├── globals.css          ← Design tokens & shared CSS classes (.btn-primary, .field, .eyebrow…)
│   ├── page.tsx             ← Homepage (/)
│   ├── about/page.tsx       ← /about
│   ├── services/page.tsx    ← /services
│   ├── industries/page.tsx  ← /industries
│   ├── global-network/      ← /global-network
│   ├── tracking/            ← /tracking  (+ tracking-client.tsx = interactive part)
│   ├── quote/               ← /quote     (+ quote-client.tsx)
│   ├── contact/             ← /contact   (+ contact-client.tsx)
│   ├── blog/
│   │   ├── page.tsx         ← /blog (article list)
│   │   └── [slug]/page.tsx  ← /blog/any-article-slug (one file renders ALL articles)
│   ├── guides/
│   │   ├── page.tsx         ← /guides
│   │   └── [slug]/page.tsx  ← /guides/canada, /guides/india, …
│   ├── tools/               ← /tools (calculators; tools-client.tsx has the math)
│   ├── faq/page.tsx         ← /faq
│   ├── resources/page.tsx   ← /resources
│   ├── careers/page.tsx     ← /careers
│   ├── sitemap.ts           ← Auto-generates /sitemap.xml for Google
│   └── robots.ts            ← Auto-generates /robots.txt
├── components/              ← REUSABLE BUILDING BLOCKS
│   ├── Header.tsx           ← Top navigation (edit the `nav` array to change menu items)
│   ├── Footer.tsx           ← Footer columns and links
│   ├── ChatWidget.tsx       ← Floating chat assistant (scripted flows; see §6.4)
│   ├── Newsletter.tsx       ← Email signup band (see §6.3)
│   ├── Reveal.tsx           ← Scroll-into-view fade animation wrapper
│   ├── PortTicker.tsx       ← Live office local-time ticker
│   ├── RouteMap.tsx         ← Animated SVG trade-route map
│   ├── PageHero.tsx, CTA.tsx, Logo.tsx, Icons.tsx
├── lib/                     ← CONTENT DATA (this is where 90% of edits happen)
│   ├── data.ts              ← Offices, services, industries, job openings
│   ├── posts.ts             ← Blog articles (title, date, tags, full body text)
│   ├── faq.ts               ← FAQ questions & answers
│   ├── resources.ts         ← Audience checklists, glossary, official links
│   └── guides.ts            ← Country guides
├── tailwind.config.ts       ← Brand colors & fonts (ink navy, cargo orange…)
└── package.json             ← Project manifest & scripts
```

**The golden rule of this codebase:** *content lives in `lib/`, layout lives in `app/` and `components/`.* Most day-to-day changes (new blog post, new FAQ, changed phone number, new job opening) are edits to a `lib/` file — no React knowledge required.

**One concept to understand — Server vs Client components:** files with `"use client"` at the top run in the browser and can be interactive (forms, calculators, chat). Files without it render on the server as static HTML (faster, better SEO). If you need a click handler or `useState`, the file needs `"use client"`. That's why interactive pages are split into `page.tsx` (server, holds SEO metadata) + `*-client.tsx` (browser, holds interactivity).

---

## 4. Common tasks, step by step

### 4.1 Publish a new blog article
1. Open `lib/posts.ts`.
2. Copy an existing post object `{ ... },` and paste it at the **top** of the array (newest first).
3. Edit: `slug` (URL-safe, lowercase, hyphens — becomes `/blog/your-slug`), `title`, `date` (`YYYY-MM-DD`), `tag`, `audience` (any of `"Importers" | "Exporters" | "Manufacturers" | "E-commerce"`), `excerpt`, and `body` (an array of strings — each string is one paragraph).
4. Save. The article page, blog list, homepage insights, resources "Read next" links and the sitemap all update automatically.

### 4.2 Add or edit a FAQ
Open `lib/faq.ts`, find the right group, add `{ q: "Question?", a: "Answer." }`. The accordion and the Google FAQ structured data update automatically.

### 4.3 Update office details, jobs, services, industries
All in `lib/data.ts`. Phone numbers are currently placeholders (`+1 (604) 000-0000`) — **replace them before launch.**

### 4.4 Edit a country guide or add a new country
Open `lib/guides.ts`. Each guide is one object; the fields map 1-to-1 to the blocks on the page. Adding an object creates a new page at `/guides/<slug>` automatically.

### 4.5 Add a completely new page
1. Create a folder in `app/` (e.g. `app/warehousing/`) with a `page.tsx` inside.
2. Start from this template:
```tsx
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Warehousing",
  description: "One-sentence description for Google (under ~155 characters).",
};

export default function Warehousing() {
  return (
    <>
      <PageHero eyebrow="Warehousing" title="Headline here." intro="Intro sentence." />
      <section className="bg-white py-20"><div className="container-x">
        {/* content */}
      </div></section>
      <CTA />
    </>
  );
}
```
3. Add it to the menu: edit the `nav` array in `components/Header.tsx`, and/or the footer columns in `components/Footer.tsx`.
4. Add the route string to the `routes` array in `app/sitemap.ts`.

### 4.6 Change brand colors or fonts
Colors: `tailwind.config.ts` → `theme.extend.colors` (e.g. `cargo` is the orange `#F26522`). Fonts: `app/layout.tsx` (loaded via `next/font/google` — swap `Archivo`/`Inter` for others and the site self-hosts them at build time). Shared classes like `.btn-primary` live in `app/globals.css`.

### 4.7 Replace the placeholder logo
`components/Logo.tsx` renders a simple SVG wordmark. Replace it with the official Timescan logo: put the file in `public/` (e.g. `public/logo.svg`) and render `<img src="/logo.svg" alt="Timescan Logistics" />` — keep the `light` prop behaviour for the dark footer if you use two versions.

---

## 5. Domain & SEO checklist before launch

The site ships with per-page titles/descriptions, Open Graph tags, a sitemap, robots.txt, and structured data (Organization, FAQPage, Article). Before going live:

1. **Search & replace the domain** `https://www.timescanlogistics.com` in: `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts` — set the real domain.
2. Replace **placeholder phone numbers** in `lib/data.ts`.
3. Add a real **Open Graph image**: put a 1200×630 image at `public/og.png` and reference it in the `openGraph.images` field in `app/layout.tsx`.
4. After deploy, submit `https://yourdomain/sitemap.xml` in **Google Search Console**.
5. Add analytics if desired (e.g. Plausible/GA4 script in `app/layout.tsx`).

---

## 6. Wiring up the real integrations

Every interactive feature currently works as a **front-end demo** with a clearly marked `// TODO` or `// Replace with…` comment. Here's how to make each one real. The standard pattern is a **Next.js Route Handler**: a file at `app/api/<name>/route.ts` becomes a backend endpoint at `/api/<name>` — it runs on the server, so secrets (API keys) are safe there and must **never** be placed in client components.

### 6.1 Quote & contact forms
Create `app/api/quote/route.ts`:
```ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  // Option A: email it (e.g. Resend, SendGrid, or Zoho Mail SMTP)
  // Option B: create a lead in your CRM (Zoho CRM has a REST API)
  // Option C: both.
  console.log("Quote request:", data);
  return NextResponse.json({ ok: true });
}
```
Then in `app/quote/quote-client.tsx`, replace the `submit()` body: collect the field values into an object, `await fetch("/api/quote", { method: "POST", body: JSON.stringify(values) })`, and call `setSent(true)` only on success (show an error message otherwise). Same pattern for `contact-client.tsx` → `/api/contact`. Recommended for Timescan: push into **Zoho CRM** as Leads so sales follow-up is automatic.

### 6.2 Shipment tracking
`app/tracking/tracking-client.tsx` currently shows demo milestones. Replace the `setTimeout` block with a fetch to `/api/track?ref=...`, and implement that route handler to query your TMS or carrier-visibility API (e.g. your freight software's REST API, or an aggregator like a container-tracking provider). Map the response into the `Milestone[]` shape already used by the UI — the timeline rendering can stay untouched.

### 6.3 Newsletter
`components/Newsletter.tsx` → the `subscribe()` function. Create `app/api/newsletter/route.ts` that calls your email provider's "add subscriber" API (Mailchimp, Brevo, ConvertKit — all have simple REST endpoints; keep the API key in an environment variable, see §6.5). Legal note for Canada: **CASL** requires express consent — the current copy ("one email a month, unsubscribe anytime") supports this; keep a record of signups.

### 6.4 Chat widget → live agent or AI
`components/ChatWidget.tsx` is a scripted assistant (guided buttons, no free text). Three upgrade paths, in increasing effort:
1. **Third-party live chat** (fastest): sign up with Crisp, Tawk.to or Intercom and paste their embed script into `app/layout.tsx`; delete or keep ChatWidget as the offline fallback.
2. **Relay to your helpdesk**: add a free-text input to ChatWidget that POSTs to `/api/chat-relay`, which forwards to email/Slack/Zoho Desk; replies come by email.
3. **AI answers**: add `app/api/chat/route.ts` that forwards the message history to the Anthropic API server-side and returns the reply. Give the model a system prompt containing the FAQ and resources content so answers stay on-brand, and always keep the "Talk to a human" escape hatch. Never call the AI API directly from the browser — the key must stay server-side.

### 6.5 Environment variables (secrets)
Create a file named `.env.local` in the project root (never commit it):
```
CRM_API_KEY=xxxx
NEWSLETTER_API_KEY=xxxx
ANTHROPIC_API_KEY=xxxx
```
Read them in route handlers with `process.env.CRM_API_KEY`. On Vercel, add the same variables in Project → Settings → Environment Variables.

---

## 7. Deployment

**Recommended: Vercel** (made by the Next.js team, free tier is fine to start):
1. Push the project to a GitHub repository.
2. Sign in at vercel.com → *Add New Project* → import the repo. Vercel auto-detects Next.js; accept defaults and deploy.
3. Add the custom domain under Project → Settings → Domains, and update DNS as instructed.
4. From now on, every `git push` to the main branch deploys automatically.

Alternatives: any Node host (`npm run build && npm start` behind a reverse proxy), or a Docker container. Netlify also supports Next.js.

---

## 8. Rules of the house (please preserve these)

- **Accessibility:** every form input keeps a `<label>`; interactive elements are real `<button>`/`<a>`; the skip-link, focus rings, `aria-live` regions and `prefers-reduced-motion` handling stay in place. Test new pages with keyboard-only navigation.
- **Performance:** no heavy libraries for decoration (the route map is hand-written SVG on purpose). Before adding a dependency, ask whether 30 lines of code could do it. Check bundle impact in the `npm run build` output.
- **Copy tone:** confident, specific, operator-voiced; no filler. Trade content ends with a "verify current rules / not advice" note where regulations are volatile.
- **Content honesty:** demo features (tracking data, form submissions) are labeled as such in the UI until wired to real systems — keep it that way.

---

## 9. Troubleshooting

| Symptom | Likely cause & fix |
|---|---|
| `npm install` fails | Old Node version — install Node 18+ LTS and retry. Delete `node_modules/` and `package-lock.json` if it persists. |
| Build error mentioning fonts / `next/font` | No internet during build (fonts download once from Google at build time) — build with connectivity, or switch to `next/font/local` with font files in `public/`. |
| "You're importing a component that needs useState…" | You used a hook in a server component — add `"use client";` as the first line, or move the interactive part to a `*-client.tsx` file. |
| Page changes not showing | Dev server stopped, or you edited the wrong file — check the terminal, restart `npm run dev`. |
| Type error on build | Read the file/line in the message; usually a typo in a `lib/` data file (missing comma, quote, or field). |
| Styles not applying | Tailwind only sees classes written out in full (`text-cargo`, not `text-${color}`); dynamic class names silently fail. |

---

## 10. Glossary for newcomers

**Component** — a reusable piece of UI written as a function returning markup. **Props** — inputs passed to a component. **Hook (`useState`, `useEffect`)** — React functions for state and side effects; client components only. **SSG** — static site generation: pages pre-built as HTML at build time. **Route Handler** — a backend endpoint defined by a file in `app/api/`. **Slug** — the URL-safe identifier of an article/guide. **Hydration** — the browser attaching interactivity to server-rendered HTML. **JSON-LD / structured data** — machine-readable page info that helps Google show rich results. **Environment variable** — a secret/config value kept out of the code.

---

*Questions the docs don't answer? The official Next.js docs (nextjs.org/docs) and Tailwind docs (tailwindcss.com/docs) are excellent — and the codebase itself is small enough to read in an afternoon. Start with `app/layout.tsx` and one simple page like `app/faq/page.tsx`.*
