# Audit — implement v3-01 + v3-03, then merge main

## What shipped

Live homepage is company-first, not last-night navy+machine.

1. **Welcome to Huaming** + Putuo factory photo (v3-01).
2. **Shanghai factory | Singapore HQ** split with addresses and `intl@huaming.com` (v3-03).
3. **Latest products**: CV2, CM2, SHZV, HWV, WSL, CMA7, 3:2 contain.
4. **News** list under that.

Header still has News once (primary only). Footer still lists Shanghai, Singapore, and intl@huaming.com. About facts stay a four-column chart.

## Other-page tweaks

- One page measure: `--hm-page: min(72rem, calc(100% - 2.5rem))` on bar, wrap, leftover `.container` inside catalogue pages.
- Stripped leftover MR `::before` arrows on homepage links.
- Did not rewrite products, PDPs, downloads, contact, about, or news content.

## Merge SHA

Written after push. See git log on `origin/main`.
