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
24. [done] `/search` ke-search form+results vs `search.html` (cycle 13)
25. [done] PDP related types + OLTC hidden breadcrumb (cycle 14)
26. [done] Imprint / privacy `.text-module` + 404 `textmedia-parallax` (cycle 15)
27. [done] 404 `.image-bg.gradient-bg` overlay (no MR photo) (cycle 16)
28. [done] News slug `articleIntro` / `blueBox` from impulse article (cycle 17)
29. [done] Footer `.icon-wrap` + scroll-to-top PNG (cycle 18)
30. [done] Contact `.contactfinder` / `.contact-teaser` office cards (cycle 19)
31. [done] About `.text-module` from company.html (cycle 20)
32. [done] `/products` portfolio introtext + family tabs + wordcloud (cycle 21)
33. [done] Downloads + news introtext / h1ToIntro (cycle 22)
34. Skip language modal and `.socialMedia`.
35. [done] Page-by-page audit + PAGE-GOAL.md (cycle 23)
36. [done] Family list URLs + Header second-level hrefs (cycle 23)
37. [done] About/contact drop empty stage → introtext (cycle 23)
38. [done] Downloads `downloadCenterInputWrapper` search vs downloadcenter.html (cycle 24)
39. Next failing row in `docs/PAGE-AUDIT.md`. Paint, not only class formula.

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
- 13: search ke-search form+results; header icon submit. `/search` 41/41.
- 14: breadcrumb arrows + PDP related + OLTC introtext (`7645295`). cv2 33/33.
- 15: 404 textmedia-parallax; imprint/privacy text-module. `/404` 27/27.
- 16: 404 `.image-bg.gradient-bg` overlay (no MR photo). `/404` 29/29.
- 17: news slug articleIntro + blueBox from impulse-article.html. CHVT 28/28.
- 18: footer icon-wrap + arrowup.png. `/` 99/99.
- 19: contactfinder office teasers. `/contact` 41/41.
- 20: about text-module. `/about` 31/31.
- 21: products index from portfolio.html. `/products` 31/31.
- 22: downloads/news introtext. `/downloads` 33/33, `/news` 29/29.
- 23: PAGE-GOAL + family list routes (octc/accessories/10 families). Header second-level no longer dumps to `/products/`. About/contact introtext, empty stage gone.
- 24: downloadCenterInputWrapper search. `/downloads` 36/36.
