# LOOP — feat/mr-astro-lock

Queue. Rewrite every cycle. Disk is memory.

Hard stop: 2026-08-24 07:00 Asia/Shanghai.

## Queue

1. [done] Curl live MR HTML/CSS/JS/fonts into `mirror/mr/` (cycle 1)
2. [done] Write `docs/MR-source.md` from those files (cycle 1)
3. [next] Scaffold Astro; port `content/`, `public/downloads`, product stills, `lib/`
4. Ship adapted `layout.min.css` + Azo Sans `@font-face` (font urls → `/fonts/AzoSans/`)
5. Chrome: `.page-header` `.top-nav` mega-nav `.dropdown-menu-products` `#searchModal` (no shop, no CMP)
6. Home: `.stage` then teasers then `.teaser_products` / `.teaser_newsimpulse` then footer
7. `/products` + `/products/oltc`: OLTC list chrome (`.product-list-plugin` `.product-box` tables)
8. `/products/[slug]`: PDP (`.product-detail-wrapper` `.keyfacts` `.downloadcenter-rows`)
9. `/downloads`: download-center rows
10. `/about` from company template
11. `/news` from impulses index chrome
12. `/contact` form chrome (no MR Powermail backend)
13. 404
14. Motion: `animate.min.css` + `stage.min.js` (Swiper), no Framer
15. Leftover selector gaps from audits

## Cycle log

- 01: mirror + MR-source. closeness 0 (no Astro dist yet)
