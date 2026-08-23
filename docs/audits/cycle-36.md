# cycle: 36

page: PDP keyfact-headline

mr_css: layout.min.css sha256 `a4b5bea9b689`

this cycle:
- MR VACUTAP VI also ships empty `<p></p>` in `.keyfact-headline` (boldHeadline==0). Empty `p` still eats a 2.3rem line.
- Labels only from the rating string: family name on the first line, then `Um` / `Step voltage` / `Positions` when the line starts that way. No invented amps.
- Empty headlines `display:none`.
- CV2 dist: headlines `OLTC, vacuum` / (empty) / `Um` / `Step voltage` / `Positions`.

selector_hit: unchanged class tree
token_hit: 22/22
structure: 9/9
closeness: 100

gaps: language modal, `.socialMedia` skipped.

next_fix: none required unless paint regresses
