# cycle: 60

page: `/contact` named powermail wraps from contact.html

mr_css: layout.min.css sha256 `a4b5bea9b689`

this cycle:
- Fieldwraps now include `namevorname` / `e_mail` / `anrede` / `firma` / `telefon` / `ihrenachricht`.
- Telephone input + `.textarea-length`. Captcha skipped.

selector_hit: `/contact` 63/63
token_hit: 22/22
structure: 15/15
closeness: 100

gaps: language modal, `.socialMedia` skipped.

next_fix: leftover chrome only if a mapped page still misses a class that paints
