# LOOP — feat/mr-astro-lock

Queue. Rewrite every cycle. Disk is memory.

Hard stop: 2026-08-24 07:00 Asia/Shanghai.

## Queue

1. [done] Curl live MR HTML/CSS/JS/fonts into `mirror/mr/` (cycle 1)
2. [done] Write `docs/MR-source.md` from those files (cycle 1)
3. [done] Scaffold Astro; port `content/`, `public/downloads`, product stills, `lib/` (cycle 2)
4. [done] Ship adapted `layout.min.css` + Azo Sans (cycle 2)
5. [done] Chrome: `.page-header` `.top-nav` mega-nav `.dropdown-menu-products` `#searchModal` (cycle 2)
6. [done] Home: `.stage` then teasers then `.teaser_products` / `.teaser_newsimpulse` then footer (cycle 2)
7. [done] `/products` + `/products/oltc` (cycle 2)
8. [done] `/products/[slug]` PDP (cycle 2)
9. [done] `/downloads` download-center rows (cycle 2)
10. [done] `/about` (cycle 2)
11. [done] `/news` (cycle 2)
12. [done] `/contact` form chrome (cycle 2)
13. [done] 404 (cycle 2)
14. [done] Curl CSS-referenced icons into public so arrows paint (cycle 3)
15. [next] Vercel preview URL (`npx vercel --yes`)
16. Motion check: stage Swiper + animate classes actually in dist JS
17. Strip unused eot/ttf/woff from @font-face (woff2 only)
18. Leftover selector/asset gaps from audits

## Cycle log

- 01: mirror + MR-source. closeness 0
- 02: Astro + layout.min.css + mapped pages. closeness 100 on class/token formula; icon urls still 404
- 03: 18 CSS icon SVGs mirrored; layout urls retargeted to `/_assets/` and `/fileadmin/`
