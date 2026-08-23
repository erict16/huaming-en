# cycle: 11

page: /contact and /downloads (also / , oltc, cv2)

mr_css: layout.min.css sha256 `a4b5bea9b689` (live hashes unchanged this cycle)

selector_hit: `/` 97/97, oltc 26/26, cv2 28/28, `/contact` 31/31, `/downloads` 26/26

token_hit: 22/22

structure `/`: 9/9

this cycle (file:selector from `mirror/mr/contact.html` ~5403–5435 and `downloadcenter.html` ~2459–2578):
- contact: `.frame-type-powermail_pi1` `.tx-powermail` `.powermail_form.layout1` `.powermail_fieldset` `.powermail_input` `.powermail_textarea` `.placholder` `.cta.cta-gradient.powermail_submit`
- Huaming fields only (name, email, company, message, privacy). No captcha. No TYPO3 hidden fields. mailto intl@huaming.com.
- downloads: `.dc-filter-container` `.downloadCenter-filter` `.downloadcenter-select-area` `.dropdown-selectarea` over Huaming `kind` values. Static site filters rows via `data-filter-category` (no downloadcenter-plugin.min.js).

gaps:
- language modal, `.socialMedia` skipped on purpose
- no MR downloadcenter-plugin / nested product selects (MR catalog, not ours)

next_fix: leftover chrome only if a mapped page still misses an MR class that paints (search overlay already shipped)

closeness: 100
