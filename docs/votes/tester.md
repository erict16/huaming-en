# Tester vote

Date: 2026-08-19  
Role: Tester  
Independent. Plans + `public/downloads/` only. Not other ballots.

Fixture I can actually hit: 20 PDFs under `public/downloads/`, including `CV2-OLTC-Technical-Data-HM0.154.4101-2025.pdf`. SHM-XE names are already smashed. That is in scope.

## Ranked top 3

1. **Plan 03 — Buyer console**  
   Search, type table, and `/downloads` share one index. Empty query, zero-hit query, row open, PDF href: all selectors I can write tonight. CV2 is three keystrokes plus two clicks, not a mood.

2. **Plan 01 — Utility handbook**  
   File is the product. `/products/cv2` and a searchable downloads table are stable routes. Almost no motion. Tables beat tiles. I can assert the plate links the real CV2 PDF.

3. **Plan 06 — Singapore HQ / global maker**  
   Office list, header Products, header Downloads, contact form, no motion. Addresses and `intl@huaming.com` are strings I can match. Products stay in the first header row, so the buyer path is still three clicks.

## Veto

**Plan 05 — Explainer-first.**

The home object is a 3-state motion diagram. “A non-engineer understood it in 30 seconds” is not a buildable assertion. A motion-only explainer with a pause control is a flake, not a test. Plan 04 is close (unsourced jobs, fake maps, scroll-linked captions) but 05 fails the bar first: I cannot pass or fail a lesson.

## Five assertions on the winning site

1. **Download integrity.** Every file listed on `/downloads` and every “Technical data (PDF)” on a type page returns `200`, `Content-Type: application/pdf`, and a non-zero body. The 20 files in `public/downloads/` are the fixture. The CV2 link is `CV2-OLTC-Technical-Data-HM0.154.4101-2025.pdf`, not an HTML error and not a Joomla 302. Smashed SHM-XE names fail this check until renamed.

2. **Broken links.** Crawl `/`, header, footer, and every required job route: learn, products + every type, downloads, about / history / why, projects / renewable, news, careers, investors, contact, legal. In-site hrefs are `200`. No `#` dead ends pretending to be pages.

3. **Empty / error.** `GET /products/not-a-type` is a real `404` page, not a blank shell. A downloads or type search for `ZZZZ` shows an empty state with a count of `0`, not a 500 and not a table of leftover rows.

4. **CV2 in ≤3 clicks.** From `/`, at most three activations reach the CV2 type and a live PDF href. On 03 that is: type `CV2` → open the row → download. A Playwright script records the click count. Four clicks is a fail.

5. **Required IA is live.** Home, learn, products, oltc, octc, accessories, downloads, about, history, why, projects, renewable, news, careers, investors, contact, privacy, imprint each return `200` and are linked from chrome. A route that exists only in the plan file is a fail.

## Bug-veto policy

If I say no, it is not done. Marketing mood, a pretty still, or a passing visual review does not override a failed assertion. A red download, a 404 in the nav, a silent empty search, or CV2 on click four ships nothing.
