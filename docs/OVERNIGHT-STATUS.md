# Overnight status

Updated: 2026-08-19 00:55 CST

## Clock

- Started: 00:15 CST 2026-08-19
- Hard stop: **07:00 CST 2026-08-19** (Eric: 到七点就停，不再 loop)
- Scheduler `01a015a8d8ee` still fires every 45m until then; after 07:00 it must no-op

## Repo

- Workdir: `~/Github/huaming-en`
- GitHub: https://github.com/erict16/huaming-en (private)
- Preview: https://huaming-en.vercel.app (first Vercel deploy landed on production alias; not the official domain)
- Branch: `feat/overnight-v1`
- Plan winner: **01 Utility handbook**
- Live home vote: marketing keep, copy keep, UX iterate-not-scrap (plate pulled above the fold)

## File counts

- 62 PDFs in `public/downloads/` (~249 MB)
- 27 product types in `content/products.json`
- 60 static routes from `npm run build`
- 43 mirrored HTML pages under `mirror/raw/`
- 12 news articles

## Done

- Six plans, independent votes, runoff, identity lock
- Next.js App Router + TS + Tailwind v4, `output: "export"`
- All required routes
- OneDrive technical brochures + live shop leaflets / OI
- Contact mailto
- `npm run build` 0; `scripts/assert-export.mjs` 0
- No prices. Hub + selector outbound

## Not finished

- CHVT still has no technical PDF
- Full `/images/` tree (partial)
- Chinese huaming.com HTTP 500
- No Vercel preview (no vercel CLI)
- git-lfs unavailable
- YouTube: links only (`docs/youtube.md`)
- Some product HTML still thin Joomla shells

## Blockers

- `web_fetch` blocked (Clash 198.18.*)
- No wget / httrack / git-lfs
