# MR source (750-source equivalent)

Pulled 2026-08-23 ~22:24 Asia/Shanghai with `curl -sL`. Hashes rotate; re-read `<link rel="stylesheet">` on `mirror/mr/home.html` each cycle.

Do not score from screenshots. File wins if it disagrees with this table.

## Files on disk

CSS hash in live HTML: `_assets/4fe0297b88c3f75f81bce57218e3ae92/Css/layout.min.css`

| path | bytes | sha256-12 |
|------|------:|-----------|
| `mirror/mr/home.html` | 359473 | `46fdbeabe992` |
| `mirror/mr/oltc.html` | 395742 | `499a236c23c4` |
| `mirror/mr/vacutap-vi.html` | 678510 | `9d23b9fbd7c3` |
| `mirror/mr/downloadcenter.html` | 347690 | `a2e4a410df49` |
| `mirror/mr/company.html` | 357750 | `58bce9b0211b` |
| `mirror/mr/contact.html` | 468125 | `326ddb6e2353` |
| `mirror/mr/impulses.html` | 638666 | `783d767f546d` |
| `mirror/mr/search.html` | 294018 | `7adf516c5bb3` |
| `mirror/mr/404.html` | 293431 | `7bca55935aeb` |
| `mirror/mr/imprint.html` | 295225 | `32389e52bff8` |
| `mirror/mr/impulse-article.html` | 345091 | `7a023ebebc9e` |
| `mirror/mr/portfolio.html` | 315975 | `4c24d224ec6b` |
| `mirror/mr/css/layout.min.css` | 857650 | `a4b5bea9b689` |
| `mirror/mr/css/animate.min.css` | 17715 | `1623c56c99d6` |
| `mirror/mr/css/Basic.css` | 4066 | `6fc59a79199f` |
| `mirror/mr/css/ke_search_pi1.css` | 10087 | `5964157f8dfd` |
| `mirror/mr/css/auto-complete.css` | 687 | `e68b980506a1` |
| `mirror/mr/js/vendor.min.js` | 946579 | `4df686e3577e` |
| `mirror/mr/js/scripts.min.js` | 63132 | `4ab6dbd504f7` |
| `mirror/mr/js/stage.min.js` | 1395 | `2addc3d8499f` |

`/downloadcenter` 404'd. Real page is `https://www.reinhausen.com/downloads` (title: "MR | Download Center"). Saved as `downloadcenter.html`. Privacy URL 404'd; imprint exists. VACUTAP VI: `/productdetail/on-load-tap-changers/vacutap-vi`.

12 Azo Sans `.woff2` files in `mirror/mr/fonts/AzoSans/` and `public/fonts/AzoSans/` (wOF2 magic). Live path: `_assets/4fe0297b88c3f75f81bce57218e3ae92/Fonts/AzoSans/AzoSans2-*.woff2`.

Do not ship: `ShopOverlay.js`, Usercentrics, Matomo/GTM, MR wordmark, VACUTAP® / OILTAP® / ECOTAP® / TESSA®, "THE POWER BEHIND POWER".

## Token table (`layout.min.css` counts)

Verified with Python `.count()` on `mirror/mr/css/layout.min.css`:

| token | hex / family | hits in layout.min.css |
|-------|----------------|------------------------|
| navy | `#002a55` | 101 |
| link blue | `#075898` | 58 |
| sky | `#56aad8` | 48 |
| gold | `#e5bb29` | 62 |
| ink gray | `#535252` | 64 |
| paper | `#f6f6f2` | 11 |
| warm gray | `#edece5` | 7 |
| body black / white | `#000` / `#fff` | 120 / 226 |

Quotes:

```
.bg-secColor{background:#e5bb29}
.bg-lightbrown{background:#f6f6f2}
.link-download{color:#e5bb29!important
.stage-content.bg-dark-blue{background:#002a55!important
.stage-content.bg-light-blue{background:#075898!important
.stage-content.bg-gradient{background:linear-gradient(115deg,rgba(86,170,216,.9) 0,rgba(0,42,85,.9) 52%,rgba(0,0,0,.9) 100%)!important
```

`rgba(86,170,216` = `#56aad8`. `rgba(0,42,85` = `#002a55`.

## Fonts (`@font-face` in layout.min.css)

Family names from the file (do not substitute Inter / Helvetica / Source Serif):

| family | weight | file (woff2) |
|--------|--------|----------------|
| `Azo Sans Tn` | 100 | `AzoSans2-Thin.woff2` (+ Italic) |
| `Azo Sans Lt` | 300 | `AzoSans2-Light.woff2` (+ Italic) |
| `Azo Sans` | 400 | `AzoSans2-Regular.woff2` (+ Italic) |
| `Azo Sans Md` | 500 | `AzoSans2-Medium.woff2` (+ Italic) |
| `Azo Sans` | 700 | `AzoSans2-Bold.woff2` (+ Italic) |
| `Azo Sans Bk` | 900 | `AzoSans2-Black.woff2` (+ Italic) |

CSS `src` is `../Fonts/AzoSans/AzoSans2-*.eot` with woff2 in the same `@font-face` stack. Ship woff2 at `/fonts/AzoSans/` and retarget urls.

Also used: `'Azo Sans lt'` (lowercase lt) on stage pagination.

## Home chrome classes (`mirror/mr/home.html`)

Landmark counts (rg):

| class | hits |
|-------|-----:|
| `page-header page-header-sticky` | 1 |
| `top-nav` | 1 |
| `main-header main-header-xl` | 1 |
| `dropdown-menu-products` | 1 |
| `dropdown-third` | 10 |
| `search` / `#searchToggler` / `#searchModal` | present |
| `stage` | 1 (plus 4 related) |
| `teaser_newsimpulse` | 1 |
| `teaser-module` | 2 |
| `teaser_products` | 1 |
| `product-box` | 13 |
| `footerDown` | 1 |
| `footer` | 1 |
| `footer-content` | 3 |

`footerUp` is **not** in home HTML. It is in CSS:

```
#main,.footerUp,.main-width,.page-header{max-width:187.5rem;width:100%;margin:0 auto}
```

Ship `footerUp` on the `<footer>` wrapper so that max-width rule applies. `footerDown` is the fixed scroll-to-top: `div.goback-container.main-width.footerDown`.

### Utility bar

`div.page-header.page-header-sticky > div.top-nav > ul.container` with Newsroom / Downloads / Contact / myReinhausen + `li.languageSelect`.

### Mega nav

```
ul.items.dropdown-menu-products.navbar-nav
  li.nav-item.mainItem.dropdown.dropdown-swiper
    a.nav-link
    div.dropdown-sub-toggle
    div.nav-header.dropdown-toggle-back-wrapper
    div.swiper.navSwiper → swiper-slide + div.dropdown-third
    li.subItem.dropdown-sub.third-nav-toggler-li.dropdown-slide
```

MR top items: Impulses, Portfolio, Career, Company, 100 Years. We keep the **class tree**, Huaming labels (Products / About / News).

### Search

`button.search#searchToggler` `data-toggle="modal" data-target="#searchModal"`. Overlay: `div.modal.fade#searchModal` → `.tx-kesearch-pi1` → `input.ke_search_sword_search`. Do not load shop button (`#shopSlideBtn` / `ShopOverlay.js`).

### Stage

```
div.stage
  div.swiper-container.stage-slider  data-loop="0" data-autoplay="1" data-autoplay-time="5000"
    div.swiper-wrapper > div.swiper-slide
      div.swiper-image (+ optional video.fullWidth)
      div.stage-content.bg-gradient > .text-container > h2 + span.light + a.link-download
```

### Teasers / products / news

After stage: `div.teaser_newsimpulse` (news swiper), `div.teaser-module.bg-gradient` (`h2.headline.headline-teaser-big` + `div.teaser_element`), `div.teaser_products.container` (`div.swiper-slide.product-box.columns` → `.product-box-inner` / `.product-title` / `.product-intro` / `.product-keyfacts`).

### Footer

`<footer>` → three `div.footer-content.col-12.col-sm-4` → `hr` → `div.row.footer-subline` (`.footer-links` + `.socialMedia`).

## Geometry / type (layout.min.css)

```
.top-nav{top:2rem;position:absolute;width:100%;height:1.375rem;z-index:5}
.main-header{padding:2.5rem 0}
.page-header .main-header .menu-icons{height:6.313rem}
.page-header{background-color:#fff;position:fixed;top:0;transition:.3s linear}
.page-header .main-header .main-nav ul li.mainItem a.nav-link{margin-bottom:0;font-size:1rem;font-weight:700;text-decoration:none}
.nav-link{color:#000;line-height:2.25rem;padding:0 1.875rem 0 0;letter-spacing:.4px}
.nav-link{color:#075898;background-color:transparent}
.nav-link.active{color:#002a55}
.nav-link:hover{color:#075898}

.stage .swiper-container .swiper-wrapper .swiper-slide .swiper-image{height:100%;min-height:37.5vw}
.stage .swiper-slide .stage-content{padding:3.1vw}

.product-box.columns{overflow:hidden;grid-column:span 12;...padding-top:45px;padding-bottom:45px}
@media: grid-column span 6 / 4 / 3
.product-box.columns:hover .swiper-image{transform:scale(1.05)
.product-box .product-title{font-size:1.375rem;line-height:1.875rem;font-family:"Azo Sans Lt";font-weight:100}
.product-box .product-intro{font-family:"Azo Sans Lt";font-size:.9375rem;line-height:1.75rem}
.teaser_element{margin-bottom:3.5vw}

.footerDown{bottom:-7.5rem!important}
.goback-container{height:3.125rem;position:fixed;...z-index:99998}
```

Button / gold CTA: `.link-download{color:#e5bb29!important`.

## OLTC list (`oltc.html`)

`div.stage` then intro, `h2.headline` "Technical data at a glance", `.tabelle.table-gradient` / `.table-white` / `.table-grey`, then `.product-list-plugin` of `.swiper-slide.product-box.columns`.

## PDP (`vacutap-vi.html`)

```
div.product-detail-wrapper
  ul.breadcrumb
  h1
  div.introtext
  div.keyfacts.bg-gradient → ol.keyfacts-list → .keyfact-headline
  div.product-registers-container
  div.download-center → .downloadcenter-rows → .downloadcenter-row → .downloadItem
```

Do not copy VACUTAP® VI. Huaming PDP uses CV2 / CM2 / SHZV copy + ratings from `content/products.json`. CHVT with no PDF stays "no English technical data."

## Motion

`animate.min.css`: animate.css. Durations in file: `.5s`, `.75s`, `.8s`, `1s`, `1.3s`, `2s`, `3s`. Classes used site-wide: `.fadeIn`, `.fadeInUp`, `.bounceIn`, `.animated`.

`stage.min.js` (verbatim behavior to port):

```
initStageSlider() → document.querySelectorAll(".stage-slider")
new Swiper(e, {
  watchOverflow: true,
  autoplay: { delay: e.dataset.autoplayTime, stopOnLastSlide: true, disableOnInteraction: false },
  slidesPerView: 1,
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  pagination: { el: ".swiper-pagination", type: "fraction" },
  breakpoints: { 0:{speed:1000}, 640:{speed:1500}, 1000:{speed:2000} }
})
```

Home stage: `data-autoplay-time="5000"`. Hover pauses autoplay (`$(e).mouseover` / `mouseleave`). Video on active slide `.play()` if `data-autoplay==1`.

Do not invent Framer motion.

## How we apply CSS

1. Keep MR class names on Astro markup.
2. Ship `layout.min.css` with font urls retargeted to `/fonts/AzoSans/`. Drop shop/cookie/matomo hooks in markup, not by rewriting 857kb of CSS.
3. Also ship `animate.min.css`, `Basic.css`, `ke_search_pi1.css`.
4. Load `vendor.min.js` (Swiper/jQuery/Bootstrap) + `scripts.min.js` + `stage.min.js`. Do **not** load `ShopOverlay.js` or Usercentrics.
