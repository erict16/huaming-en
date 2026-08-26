# Image and layout audit — overnight-unclone

All files under `public/images/products/` are ~3:2 stills (PNG 600×414, JPEG 836×577, ratio 1.449). They are not 16:9 or 16:6 cinema photographs.

## What was wrong

| Page | Wrong | Change |
|---|---|---|
| `/` home stage | `object-fit: cover` in a 28rem / 37.5vw strip. CV2/SHZV/HWV cropped to a close-up of the tank. Markup lied with width 1280×720. | 3:2 contain well, max 42rem. Caption sits under the still, not on it. Markup 600×414. |
| `/products/oltc/`, `/products/octc/`, `/products/accessories/`, family lists (`oltc-oil`, `oltc-vacuum`, …) | Same cinema cover. OCTC stage showed two cropped WSL columns. Accessories stage cropped SHM-D to the cabinet window. | Same 3:2 contain as home. Hide prev/next on a single still so arrows do not sit on the unit. |
| Product detail (`/products/cv2/`, `cm2`, `shzv`, `hwv`, `wsl`, `cma7`, and the rest) | Still was already contain. Stage arrows and pager sat on the photograph. | Hide controls on a one-slide PDP. Keep 3:2 contain. |
| Product cards (home “Latest products”, `/products/`, family grids) | 3:2 contain already. Cream `#f6f6f2` well. | Keep contain. Wells `#eef1f4`. |
| `/`, `/about/` news rows | Empty 3:2 plates where there is no still. | Do not render the image box if there is no file. |
| `/news/` | Giant yellow lead squares (placeholder) and empty 16:9 thumbs. | No placeholder. No empty thumb box. |
| About / OLTC TextMedia | `object-fit: cover` on a 3:2 plate. Factory stills (including the 697×771 engineers photo) were cropped. | `contain` on a cool-gray plate. |
| `/contact/` | The word “undefined” next to Send (MR form script writing an empty counter). | Hide the counter node. Strip any leftover “undefined” text. |
| `/search/` | No product photo. Large empty results area until a query. Left as-is. | — |
| `/downloads/`, `/legal/imprint/`, `/legal/privacy/` | No product stills. Layout held. | — |
| `/404/` | `/404` without a trailing slash hit Astro’s default page. The catalogue 404 is `/404/`. | Checked `/404/`. No photo. |

No new tap-changer photographs. No Reinhausen photographs. IBM Plex Sans and navy/steel/ink/white left in place.
