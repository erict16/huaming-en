# cycle: 5

page: live preview `/`, `/products/oltc`, `/products/cv2` via `vercel curl` (SSO bypass). Not a screenshot.

preview: https://huaming-3dfbdftcr-eric-tans-projects.vercel.app
inspect: https://vercel.com/eric-tans-projects/huaming-en/EKk51HD5M4CNpHLrZbfH95QVwT29

mr_css: layout.min.css sha256 `a4b5bea9b689`

selector_hit (preview HTML):
- `/`: stage, dropdown-menu-products, footerUp, footerDown, top-nav, teaser_products, product-box, searchModal, teaser_newsimpulse, teaser-module — all present. 75/75 still holds on dist; preview home 22147 bytes.
- `/products/oltc`: stage, product-box, product-list-plugin, tabelle
- `/products/cv2`: product-detail-wrapper, keyfacts, downloadcenter-rows, stage

token_hit: preview CSS `/_astro/about.CbxXfr37.css` 878253 bytes
- Azo Sans 130
- `#002a55` 122
- `#e5bb29` 62
- `#075898` 58
- `min-height:37.5vw` 6
= 22/22

structure: 8/8 on preview home

CHVT preview: "No English technical data" present. No VACUTAP / THE POWER BEHIND POWER on home.

JS on home: `/js/mr/vendor.min.js`, `scripts.min.js`, `stage.min.js`.

gaps:
- Deployment protection: raw curl hits Vercel SSO login. Use `vercel curl`.
- Vercel toolbar script `vercel.live/_next-live/feedback.js` is Vercel, not MR analytics.

also this cycle: home news/products swipers get `.swiper-controls` prev/next like `mirror/mr/home.html` (file:selector `.swiper-button-prev-news`, `.swiper-button-next-product1852`)

next_fix: leave CLI preview URL in STATUS; GitHub integration may add a branch alias later

closeness `/`: 100
closeness oltc / cv2: 100
