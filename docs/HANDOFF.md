# 1nFlow website — handoff & operations

Continue this project from a cold start. Pair with `README.md`.

## 1. What this is
Marketing site for **1nFlow** (`1nflow.ai`) — banking/lending software for Indonesian financial
institutions, a **1nx** product. Rebuilt 2026-06 from a single static `index.html` (kept in
`legacy/`) into a Next.js app: aurora-light theme, bilingual EN/ID, animation + product infographics.

## 2. Product (for accurate copy)
Vertical banking software on one **BPMN/DMN engine** + a consulting practice. Verticals: **LOS**
(live), **Appraisal** (live), **Collections** (Q3 2026), **Treasury** (Q1 2027), **CDD** (Q4 2026).
LOS = 8-stage BPMN (Submission→KYC→Enrichment→Verify→Underwrite→Committee→Accept→Disburse), POJK
compliance, Dukcapil/SLIK/BI-Fast integrations, AI credit narrative (Claude, 5C, **advisory only**,
POJK 4/2022). Appraisal = KJPP/MAPPI, mobile capture, SPI-2018 methods, POJK-40 revaluation. ~75%
cost vs Temenos/FLEXCUBE; 8–12 wk deploys; for BPR/BPD, KBMI 1–4, multifinance, fintech, koperasi,
agritech. Demo app: demo.1nflow.ai (admin/admin did **not** work as of 2026-06-26).

## 3. Stack & identity
Next.js 15.5 · React 19 · TS 5.7 (pinned; `global.d.ts`) · Tailwind v4 · Framer Motion · **Lenis** ·
**Canvas** (no WebGL). **Aurora-light**: light bg, deep-slate text, `--aurora` gradient
teal `#14b8a6` → sky `#0ea5e9` → violet `#8b5cf6`, solid accent `#0d9488`. Fonts: **Fraunces**
(display) / Inter / JetBrains Mono. Logo = aurora tile + branching "flow" glyph (`components/site/Logo.tsx`).

## 4. Structure
- `app/` — EN root, ID `/id/*` (hreflang+canonical, sitemap). Pages: `/`, `/platform`, `/consulting`,
  `/industries`, `/contact` (+ `/id`). Form → `app/api/contact/route.ts` (form-only; `lib/contact.ts`).
- `lib/dictionary.ts` (EN+ID copy), `lib/i18n.tsx` (`localize`), `lib/locale.ts` (`decideLocale`) +
  `middleware.ts`, `lib/site.ts`.
- `components/graphics/` — `AuroraBg` (drift canvas hero), `WorkflowEngine` (pinned 8-stage BPMN
  scroll-scrub), `VerticalMotifs` (los/appraisal/collections/treasury/cdd), `ProofCounters`.
- `components/site/` — Logo, Nav, Footer, LanguageSwitcher, LocaleShell.

## 5. Commands
```bash
npm install && npm run dev      # http://localhost:3000
npm run build && npm start
npm test                        # vitest: localize · decideLocale · validateContact
```
If CSS 404s after a build-mode change: `rm -rf .next && npm run build`.

## 6. Deploy — Vercel from GitHub
- Repo `git@github.com:sgultom26/1nflow-website.git`, branch `main`. **1nflow.ai is hosted on Vercel**
  (apex redirects → `www.1nflow.ai`); Vercel builds Next.js from `main` and auto-deploys on push.
- Contact API + middleware run as Vercel functions/edge. `NEXT_PUBLIC_SITE_URL` default
  `https://1nflow.ai` (set to `https://www.1nflow.ai` on Vercel if you want www canonical).
- The rebuild shipped to `main` 2026-06-26 (was previewed on branch `rebuild/nextjs-aurora`).
  Roll back via Vercel deployment history or `git revert` if needed. Old static site is in `legacy/`.

## 7. Follow-ons
Real proof metrics (currently indicative); scroll-scrubbed entrances on platform verticals; a
Company/About page; wire the contact form to email/CRM.
