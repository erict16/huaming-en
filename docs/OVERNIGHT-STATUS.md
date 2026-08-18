# Overnight status

Updated: 2026-08-19 ~00:40 CST

## Clock

- Started: 00:15 CST 2026-08-19
- Soft checkpoint: 07:30 CST 2026-08-19
- User override: keep looping until 07:30 CST 2026-08-20
- Scheduler: `01a015a8d8ee` every 45m

## Repo

- Workdir: `~/Github/huaming-en`
- GitHub: https://github.com/erict16/huaming-en (private)
- Branch: `feat/overnight-v1`
- Plan winner: **01 Utility handbook** (plurality 3–2–2 twice; no veto)
- `npm run build`: **0** (60 static routes)

## Done

- 6 plans + 2 independent ballots + identity lock
- OneDrive brochures + live PDFs → `public/downloads/` (30 PDFs)
- Next.js App Router, Tailwind v4, static export
- Home, learn, products (every type), downloads search, about/history/why, news, projects, renewable, careers, investors, contact+offices, legal
- `scripts/assert-export.mjs` green: required IA, CV2 PDF href, 30 files
- Sketches in `sketches/home-2026-08-19/`

## In flight

- `git push` of the first pack (large PDFs). HTTP 400 on first try; retry with bigger buffer still running
- Live home vote (UX + copy + marketing)
- Full MANIFEST checksum table
- WSL cage PDF still missing

## Blockers

- `web_fetch` blocked (Clash fake-ip 198.18.*)
- No git-lfs, no vercel CLI
- urllib crawl IncompleteRead — curl used instead
- huaming.com still 500 / ThinkPHP error
- Reinhausen product URL 404; Hitachi tap-changer URL 404

## SHA

Local commits: `fae2f77` init, `330b208` identity+mirror, `7c13282` drop zip dups. App commit pending push of those.
