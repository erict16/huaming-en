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
39. [done] PDP stage 3:2 contain; home banner stays cover (cycle 25)
40. [done] News article image band: navy plate + existing stills only (cycle 26)
41. [done] Mobile product cards full-width 3:2 (cycle 27)
42. [done] Home newsimpulse-image 3:2 plate + existing stills (cycle 28)
43. [done] SV still aliases to CV (same leaflet) (cycle 29)
44. [done] News index `.articleImage` from impulses.html (cycle 30)
45. [done] News lead is gradient only; articleImage 3:2 contain (cycle 31)
46. [done] Article 16:6 band: no product-still cover (cycle 32)
47. [done] Inner `page-header-animation` + `.blue-nav` from oltc.html (cycle 33)
48. [done] `mobileTopNav` from home.html (cycle 34)
49. [done] OLTC list `table-gradient` / `table-white` / `table-grey` from oltc.html (cycle 35)
50. [done] PDP `keyfact-headline` labels from the rating string (cycle 36)
51. Language modal and `.socialMedia` still skipped.
52. [done] PDP product-registers accordion + nav-pills from vacutap-vi.html (cycle 37)
53. [done] PDP show-more/less keyfacts siblings (cycle 37)
54. [done] Downloads + PDP downloadItem icon / download-link from downloadcenter.html (cycle 38)
55. [done] Home introtext + numbers-module.bg-gradient from home.html (cycle 39)
56. [done] Home textmedia-parallax + sticky contact overlay (cycle 40). Login skipped.
57. [done] Home second teaser-module + teaserproduct frame (cycle 41)
58. [done] About news swiper + list table/stage/intro frames (cycle 42)
59. [done] Family list text-module.bg-grey before tables (cycle 43)
60. [done] PDP related-services teasers + product-detail-btn (cycle 44)
61. [done] About three textmedia (Management / History / Laboratory) (cycle 45)
62. [done] News article quote + sourced numbers (cycle 46)
63. [done] Contact powermail_select About / Office (cycle 47)
64. [done] News index teaser-module + Indonesia figures (cycle 48)
65. [done] Home text-module + footer frame + legal introtext (cycle 49)
66. [done] About quote + OLTC laboratory textmedia (cycle 50)
67. [done] InnerTeaser on contact / downloads / search / family lists (cycle 51)
68. [done] 404 text-module + InnerTeaser (cycle 52)
69. [done] About + legal InnerTeaser (cycle 53)
70. [done] News article InnerTeaser (cycle 54)
71. [done] PDP InnerTeaser (cycle 55)
72. [done] Extra news figures from article bodies (cycle 56)
73. [done] News topicteaser left/right from impulses.html (cycle 57)
74. [done] Contact + downloads `frame-type-list` (cycle 58)
75. [done] About + OLTC text-media-images from company.html (cycle 59)
76. [done] Contact named powermail wraps + telephone (cycle 60)
77. [done] Products wordcloud noHit + wordcloud-items (cycle 61)
78. [done] PDP teaser_newsimpulse + download icon-placeholder / dc-select (cycle 62)

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
- 25: PDP still centered 3:2 contain (768×512); home stage 1265×448 cover.
- 26: news articleIntro-image navy plate; CHVT/Indonesia stills that already exist.
- 27: mobile product-box stills width 100% 3:2 (MR was 50% square).
- 28: home newsimpulse-image 3:2; CHVT/Indonesia stills. `/` 99/99.
- 29: SV still aliases to existing CV.png (same technical-data PDF).
- 30: news index articleImage 16:9. `/news` 30/30.
- 31: news lead gradient only; slider stills 3:2 contain (249×166).
- 32: CHVT article band navy only; Indonesia 7-5.png stays.
- 33: inner header `page-header-animation` + `.blue-nav`. Home stays sticky. PDP `#productName`.
- 34: Header `.mobileTopNav` utility list. `/` 100/100.
- 35: OLTC list three tables (vacuum / other / oil). `/products/oltc` 37/37.
- 36: PDP keyfact-headline labels from rating strings; empty headlines hidden.
- 37: PDP product-registers accordion + pills; show-all keyfacts. cv2 52/52.
- 38: downloadItem PDF icon + download-link on `/downloads` and PDP. `/downloads` 46/46.
- 39: home introtext + numbers-module. `/` 107/107, structure 13/13.
- 40: home parallax CTA (no MR photo) + sticky contact. Login skipped.
- 41: home second teaser-module + teaserproduct frame. `/` 111/111.
- 42: about teaser_newsimpulse; OLTC table frames. `/about` 44/44, `/products/oltc` 41/41.
- 43: list text-module.bg-grey before tables. `/products/oltc` 44/44.
- 44: PDP related-services + product-detail-btn. cv2 59/59.
- 45: about three textmedia. `/about` 48/48.
- 46: article quote + numbers. CHVT 43/43.
- 47: contact powermail_select. `/contact` 53/53.
- 48: news teaser-module; Indonesia 2004/2025. `/news` 41/41.
- 49: home text-module + footer frame. `/` 114/114, structure 15/15.
- 50: about quote; OLTC textmedia. `/about` 53/53, `/products/oltc` 46/46.
- 51: InnerTeaser on contact/downloads/search/lists. contact 55/55.
- 52: 404 text-module. `/404` 39/39.
- 53: about + legal InnerTeaser. `/about` 55/55.
- 54: news article InnerTeaser. CHVT 45/45.
- 55: PDP InnerTeaser. cv2 60/60.
- 56: Nigeria / factory-test / Pakistan figures from the body.
- 57: news topicteaser left/right. `/news` 47/47.
- 58: contactfinder + download-center `frame-type-list`. contact 56/56, downloads 50/50.
- 59: about/OLTC text-media-images. `/about` 59/59, `/products/oltc` 51/51.
- 60: contact named fieldwraps + telephone. `/contact` 63/63.
- 61: products wordcloud noHit. `/products` 42/42.
- 62: PDP news impulse + download icon-placeholder. cv2 63/63, downloads 52/52.
