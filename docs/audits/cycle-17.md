# cycle: 17

page: /news/[slug] (CHVT Longdong) and /404 gradient leftover

mr_css: layout.min.css sha256 `a4b5bea9b689`

this cycle (file:selector from `mirror/mr/impulse-article.html` ~2305):
- news slug: `.frame-type-sitereinhausen_articleintro` `.articleIntro` `.articleIntro-image` `.blueBox` `.article-text.intro.article-text-left` `.box-left`. Huaming titles/body only. No MR photos, no quote frame.
- `huaming.css`: `.articleIntro .blueBox{opacity:1}` because layout.min.css starts at opacity:0 and MR vhs JS is not shipped.
- 404 already has `.image-bg.gradient-bg` from cycle 16.

selector_hit: `/` 97/97, `/news/chvt-longdong-800kv` 28/28, `/404` 29/29, `/search` 41/41
token_hit: 22/22
structure: 9/9
closeness: 100

gaps: language modal, `.socialMedia` still skipped.

next_fix: none required for formula
