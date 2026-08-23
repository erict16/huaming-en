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
12. [done] `/contact` form chrome (cycle 2, powermail tree cycle 11)
13. [done] 404 (cycle 2)
14. [done] Curl CSS-referenced icons into public so arrows paint (cycle 3)
15. [done] Strip unused eot/ttf/woff from @font-face (cycle 4)
16. [done] Vercel preview Astro build. URL in STATUS. `vercel curl` confirms classes/tokens (cycle 5)
17. [done] Stage swiper-controls + mega-nav overflow-scroll (cycle 6). MR home does not use fadeIn classes in HTML; motion is stage.min.js.
18. [done] Product-box inner wrappers: product-image-wrapper + swiper-text-container (cycle 7)
19. [done] Define `stageSlides` (HEAD was a ReferenceError); inner-page stage controls; public preview no SSO (cycle 8)
20. [done] Mobile `third-nav-toggler` / `list-parent` / `mobile-menu-third` (cycle 9)
21. [done] Drop unused powermail `/typo3conf/` image urls in Basic.css (cycle 10)
22. [done] Contact powermail class tree + downloads filter chrome (cycle 11)
23. [done] About `numbers-module` + news `teaser_articles` / `articleWrapper` (cycle 12)
24. [done] Search pi2 results chrome + client `?q=` filter (cycle 13)
25. Inner breadcrumbs (`arrow-right.svg` between crumbs) on PDP / list / about / news / contact / downloads
26. Skip language modal and `.socialMedia`. Formula at target.

## Cycle log

- 01: mirror + MR-source. closeness 0
- 02: Astro + layout.min.css + mapped pages. closeness 100 on class/token formula; icon urls still 404
- 03: 18 CSS icon SVGs mirrored; layout urls retargeted to `/_assets/` and `/fileadmin/`
- 04: Azo @font-face woff2-only; vercel.json framework astro. CLI deploy still Next until redeploy.
- 05: Preview live. `vercel curl` home/oltc/cv2/chvt. closeness 100 on live HTML+CSS.
- 06: Stage `.swiper-controls` + mega-nav `.overflow-scroll` from home.html.
- 07: ProductBox MR inner wrappers. Home selector 85/85.
- 08: stageSlides defined (3 autoplay slides); inner StageControls; Vercel framework astro + SSO off; public 200 preview.
- 09: mobile mega `third-nav-toggler`. Home selector 97/97.
- 10: Basic.css powermail `/typo3conf/` urls → `none`.
- 11: contact `.tx-powermail` / `.powermail_form`; downloads `.dc-filter-container`.
- 12: about numbers-module; news teaser_articles.
- 13: search pi2 + client catalog filter. `/search` 29/29.
