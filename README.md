# 1nFlow — website

Marketing site for **1nFlow** — banking/lending software for Indonesian financial institutions
(loan origination, collateral appraisal, collections, treasury and CDD on one BPMN/DMN engine),
plus the consulting practice that deploys it. **One workflow engine. Every product.**

> Rebuilt from the original single-file `index.html` (preserved in `legacy/`) into a Next.js app:
> aurora-light theme, bilingual EN/ID, cinematic animation + product infographics.

## Stack

- Next.js 15 (App Router) · React 19 · TypeScript 5.7 (pinned) · Tailwind CSS v4
- Motion: **Lenis** (smooth scroll) · **Framer Motion** (reveals + scroll-scrubbed `ScrollStage`) ·
  **Canvas** aurora background. All motion honours `prefers-reduced-motion`.
- Fonts: Fraunces (display) · Inter (body) · JetBrains Mono (labels)
- Identity: **aurora-light** — light background, deep-slate text, teal → sky → violet accents.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
npm test         # vitest: localize · decideLocale · contact validation
```

## Structure

- `app/` — routes. EN at root, ID mirrored under `/id/*` (hreflang + canonical, in sitemap).
  Pages: `/` · `/platform` · `/consulting` · `/industries` · `/contact`.
- `lib/dictionary.ts` — all EN + ID copy. `lib/i18n.tsx` (`localize()`), `lib/locale.ts`
  (`decideLocale()` → `middleware.ts`), `lib/site.ts`, `lib/contact.ts`.
- `components/graphics/` — `AuroraBg` (canvas), `WorkflowEngine` (pinned 8-stage BPMN),
  `VerticalMotifs` (LOS / Appraisal / Collections / Treasury / CDD), `ProofCounters`.
- `components/site/` — `Logo`, `Nav`, `Footer`, `LanguageSwitcher`, `LocaleShell`.

## SEO

Per-page metadata + canonical/hreflang, `robots.ts`, `sitemap.ts`, `manifest.ts`, dynamic
`opengraph-image.tsx`, JSON-LD. `NEXT_PUBLIC_SITE_URL` (default `https://1nflow.ai`).

## Deploy

Designed for **Vercel** (it builds Next.js from the repo and runs the contact API + middleware).
The old static `index.html` deploy (e.g. GitHub Pages) cannot serve a Next app — point `1nflow.ai`
at the Vercel project once connected. Original static site preserved in `legacy/`.
