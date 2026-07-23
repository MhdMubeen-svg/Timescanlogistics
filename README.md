# Timescan Logistics — Corporate Website

Premium, enterprise-grade marketing site for Timescan Logistics Ltd, built with **Next.js 14 (App Router) + React 18 + Tailwind CSS 3 + TypeScript**.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## Pages

| Route | Purpose |
|---|---|
| `/` | Home — hero with animated trade-route map + live office-time ticker |
| `/about` | Company story, milestones, values, leadership |
| `/services` | Air, Ocean, Rail, Road, Customs & Compliance, Supply Chain (anchor-linked) |
| `/industries` | 8 industry verticals |
| `/global-network` | 6 offices, route map, core trade lanes |
| `/tracking` | Shipment tracking UI (demo data — wire to your TMS/carrier API) |
| `/quote` | Structured 3-step quote request form |
| `/blog` | Insights listing (12 posts, audience-tagged) |
| `/blog/[slug]` | Full article pages (SSG, Article JSON-LD) |
| `/faq` | FAQ with accessible accordions + FAQPage JSON-LD |
| `/resources` | Trade Resources: importer/exporter/manufacturer/e-commerce checklists, glossary, official links |
| `/careers` | Open roles + culture |
| `/contact` | Contact form + office directory |

## Built-in quality

- **SEO** — per-page `metadata`, Open Graph/Twitter cards, `sitemap.ts`, `robots.ts`, Organization JSON-LD, semantic headings.
- **Accessibility** — skip link, visible focus rings, labelled forms, `aria-live` status regions, `aria-current` nav, reduced-motion support throughout.
- **Performance** — no heavy libraries; SVG route map instead of a map SDK; fonts via `next/font` (self-hosted at build, zero layout shift); static rendering for all pages.
- **Responsive** — mobile-first, tested breakpoints down to 360px, hamburger nav.

## Design system

- **Colors** — Ink navy `#0B1C2E`, Cargo orange `#F26522`, Fog `#F5F7FA`, Steel `#64748B` (see `tailwind.config.ts`).
- **Type** — Archivo (display) + Inter (body) via `next/font/google`.
- **Signature elements** — the live **port-code ticker** (YVR · DXB · MAA · KUL · PVG · ORD with local times) and the animated route-arc map.

## Wiring up the forms & tracking

The quote, contact and tracking components are client components with clearly marked `// Replace with a POST…` hooks. Point them at:
- a Next.js **route handler** (`app/api/quote/route.ts`) that emails or writes to your CRM, and
- your TMS or carrier tracking API for `/tracking`.

## Deploy

Optimized for Vercel (`vercel deploy`) but works on any Node host or as a container.

## Placeholders to replace

- Office phone numbers in `lib/data.ts`
- Domain in `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts` (currently `www.timescanlogistics.com`)
- Blog posts in `lib/posts.ts`, FAQs in `lib/faq.ts`, resources in `lib/resources.ts`, jobs in `lib/data.ts`
- Logo: `components/Logo.tsx` renders an SVG wordmark — swap in the official Timescan logo file when ready.
