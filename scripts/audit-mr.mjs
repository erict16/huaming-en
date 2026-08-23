#!/usr/bin/env node
/**
 * Code audit vs mirror/mr. No screenshots.
 * closeness = 0.5 * selector_hit% + 0.3 * token_hit% + 0.2 * structure_pass%
 */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const mrHome = path.join(root, "mirror/mr/home.html");
const mrOltc = path.join(root, "mirror/mr/oltc.html");
const mrPdp = path.join(root, "mirror/mr/vacutap-vi.html");
const mrCss = path.join(root, "mirror/mr/css/layout.min.css");
const ourCss = path.join(root, "src/styles/layout.min.css");

const CHROME_CLASSES = [
  "page-header",
  "page-header-sticky",
  "top-nav",
  "main-header",
  "main-header-xl",
  "main-nav",
  "main-logo",
  "desktop-logo",
  "dropdown-menu-products",
  "navbar-nav",
  "nav-item",
  "mainItem",
  "dropdown-swiper",
  "nav-link",
  "dropdown-sub-toggle",
  "dropdown-menu-sub",
  "dropdown-swiper-wrapper",
  "nav-header",
  "dropdown-toggle-back-wrapper",
  "dropdown-toggle-back",
  "list-parent-swiper",
  "dropdown-slide",
  "navSwiper",
  "dropdown-third",
  "dropdown-item",
  "dropdown-item-second",
  "subItem-child",
  "menu-icons",
  "search",
  "searchToggler",
  "searchModal",
  "mobile-menu-toggle",
  "hamburger-menu",
  "navbar-toggler",
  "modal-header",
  "modal-body",
  "tx-kesearch-pi1",
  "kesearch_searchbox",
  "kesearchbox",
  "ke_search_sword_search",
  "stage",
  "stage-slider",
  "swiper-container",
  "swiper-wrapper",
  "swiper-slide",
  "swiper-image",
  "stage-content",
  "bg-gradient",
  "text-container",
  "link-download",
  "teaser_newsimpulse",
  "newsimpulse-swiper",
  "teaser-module",
  "teaser-wrapper",
  "headline-teaser-big",
  "teaser_element",
  "textteaser-gradient",
  "textteaser-outline",
  "teaser-HeadlineAndText",
  "three-column",
  "teaser_products",
  "product-swiper",
  "product-box",
  "product-box-inner",
  "product-title",
  "product-intro",
  "product-keyfacts",
  "product-keyfact",
  "cta-slide",
  "swiper-controls",
  "swiper-pagination",
  "swiper-button-next",
  "swiper-button-prev",
  "swiper-button-next-news",
  "swiper-button-prev-news",
  "swiper-button-next-product1",
  "swiper-button-prev-product1",
  "footerUp",
  "footerDown",
  "footer-content",
  "footer-subline",
  "footer-links",
  "goback-container",
  "overflow-scroll",
  "overflow-scroll-left",
  "overflow-scroll-right",
  "swiper-controls",
  "swiper-pagination",
  "swiper-button-prev",
  "swiper-button-next",
  "product-image-wrapper",
  "swiper-text",
  "swiper-text-container",
  "list-parent",
  "third-nav-toggler",
  "third-nav-toggler-li",
  "mobile-menu-third",
];

const TOKENS = [
  { id: "navy", re: /#002a55/i },
  { id: "link-blue", re: /#075898/i },
  { id: "sky", re: /#56aad8/i },
  { id: "gold", re: /#e5bb29/i },
  { id: "ink-gray", re: /#535252/i },
  { id: "paper", re: /#f6f6f2/i },
  { id: "warm-gray", re: /#edece5/i },
  { id: "azo-sans", re: /Azo Sans/ },
  { id: "azo-lt", re: /Azo Sans Lt/ },
  { id: "azo-md", re: /Azo Sans Md/ },
  { id: "azo-bk", re: /Azo Sans Bk/ },
  { id: "azo-tn", re: /Azo Sans Tn/ },
  { id: "woff2-thin", re: /AzoSans2-Thin\.woff2/ },
  { id: "woff2-light", re: /AzoSans2-Light\.woff2/ },
  { id: "woff2-regular", re: /AzoSans2-Regular\.woff2/ },
  { id: "woff2-medium", re: /AzoSans2-Medium\.woff2/ },
  { id: "woff2-bold", re: /AzoSans2-Bold\.woff2/ },
  { id: "woff2-black", re: /AzoSans2-Black\.woff2/ },
  { id: "top-nav-h", re: /\.top-nav\{[^}]*height:1\.375rem/ },
  { id: "main-header-pad", re: /\.main-header\{padding:2\.5rem 0\}/ },
  { id: "stage-min", re: /min-height:37\.5vw/ },
  { id: "nav-weight", re: /font-size:1rem;font-weight:700/ },
];

const HOME_BLOCKS = [
  { id: "utility-bar", re: /class="[^"]*top-nav[^"]*"/ },
  { id: "mega-nav", re: /dropdown-menu-products/ },
  { id: "search", re: /searchModal|id="searchToggler"/ },
  { id: "stage", re: /class="stage"|class="[^"]* stage / },
  { id: "teaser-row", re: /teaser-module|teaser_element/ },
  { id: "product-news", re: /teaser_products|teaser_newsimpulse/ },
  { id: "footerUp", re: /footerUp/ },
  { id: "footerDown", re: /footerDown/ },
  { id: "stage-controls", re: /swiper-controls/ },
];

function sha12(file) {
  if (!existsSync(file)) return "missing";
  return createHash("sha256").update(readFileSync(file)).digest("hex").slice(0, 12);
}

function findDistHtml(route) {
  // trailingSlash always → dist/index.html, dist/products/oltc/index.html
  const p = path.join(dist, route.replace(/^\//, ""), "index.html");
  if (existsSync(p)) return p;
  const alt = path.join(dist, `${route.replace(/^\//, "")}.html`);
  if (existsSync(alt)) return alt;
  return null;
}

function classHits(html, classes) {
  const present = [];
  const missing = [];
  for (const c of classes) {
    const hit =
      html.includes(`class="${c}"`) ||
      html.includes(`class="${c} `) ||
      html.includes(` ${c}"`) ||
      html.includes(` ${c} `) ||
      html.includes(`id="${c}"`);
    (hit ? present : missing).push(c);
  }
  return { present, missing };
}

function tokenHits(css) {
  const present = [];
  const missing = [];
  for (const t of TOKENS) {
    (t.re.test(css) ? present : missing).push(t.id);
  }
  return { present, missing };
}

function structureHits(html) {
  const present = [];
  const missing = [];
  for (const b of HOME_BLOCKS) {
    (b.re.test(html) ? present : missing).push(b.id);
  }
  return { present, missing };
}

function pct(n, d) {
  return d === 0 ? 0 : n / d;
}

function closeness(sel, tok, stru) {
  return 0.5 * sel + 0.3 * tok + 0.2 * stru;
}

if (!existsSync(dist)) {
  console.error("no dist/. run npm run build first");
  process.exit(1);
}

const ourCssText = existsSync(ourCss) ? readFileSync(ourCss, "utf8") : "";
const tok = tokenHits(ourCssText);
const tokPct = pct(tok.present.length, TOKENS.length);

function fileHas(rel, re) {
  const p = path.join(root, rel);
  if (!existsSync(p)) return false;
  return re.test(readFileSync(p, "utf8"));
}
const motion = {
  stage_init: fileHas("dist/js/mr/stage.min.js", /initStageSlider/),
  vendor_swiper: fileHas("dist/js/mr/vendor.min.js", /Swiper/),
  scripts_product: fileHas("dist/js/mr/scripts.min.js", /product-swiper/),
  scripts_news: fileHas("dist/js/mr/scripts.min.js", /newsimpulse-swiper/),
  animate_fadeIn: existsSync(path.join(root, "src/styles/animate.min.css"))
    && /fadeIn/.test(readFileSync(path.join(root, "src/styles/animate.min.css"), "utf8")),
  home_stage_slides: 0,
};
const homeHtmlPath = findDistHtml("");
if (homeHtmlPath) {
  const h = readFileSync(homeHtmlPath, "utf8");
  motion.home_stage_slides = (h.match(/data-swiper-autoplay="5000"/g) || []).length;
}

const pages = [
  { id: "/", route: "", mr: mrHome, extra: CHROME_CLASSES },
  { id: "/products/oltc", route: "products/oltc", mr: mrOltc, extra: ["product-list-plugin", "tabelle", "table-gradient", "product-box", "product-keyfacts", "stage"] },
  { id: "/products/cv2", route: "products/cv2", mr: mrPdp, extra: ["product-detail-wrapper", "keyfacts", "keyfacts-list", "keyfact-headline", "download-center", "downloadcenter-rows", "downloadItem", "breadcrumb"] },
  { id: "/contact", route: "contact", mr: path.join(root, "mirror/mr/contact.html"), extra: ["tx-powermail", "powermail_form", "powermail_fieldset", "powermail_input", "powermail_textarea", "powermail_submit", "cta-gradient", "powermail_label", "powermail_field", "frame-type-powermail_pi1", "placholder"] },
  { id: "/downloads", route: "downloads", mr: path.join(root, "mirror/mr/downloadcenter.html"), extra: ["download-center", "downloadcenter-rows", "downloadItem", "dc-filter-container", "downloadCenter-filter", "downloadcenter-select-area"] },
  { id: "/about", route: "about", mr: path.join(root, "mirror/mr/company.html"), extra: ["numbers-module", "number-headline", "number-number", "number-overline", "number-label", "numbers"] },
  { id: "/news", route: "news", mr: path.join(root, "mirror/mr/impulses.html"), extra: ["teaser_articles", "article-main-area", "blue-teaser", "article-slider-area", "swiper-articles", "articleWrapper"] },
  { id: "/search", route: "search", mr: path.join(root, "mirror/mr/search.html"), extra: ["tx-kesearch-pi1", "kesearch_searchbox", "kesearchbox", "ke_search_sword_search", "frame-type-ke_search_pi2", "kesearch_results", "result-list-item", "searchbox-grid", "kesGreyButt"] },
];

const report = {
  mr_css: `layout.min.css sha256 ${sha12(mrCss)} bytes=${existsSync(mrCss) ? readFileSync(mrCss).length : 0}`,
  our_css: `src/styles/layout.min.css sha256 ${sha12(ourCss)} azo=${/Azo Sans/.test(ourCssText)} navy=${/#002a55/i.test(ourCssText)} gold=${/#e5bb29/i.test(ourCssText)}`,
  token_hit: `${tok.present.length}/${TOKENS.length}`,
  token_missing: tok.missing,
  motion,
  pages: [],
};

for (const page of pages) {
  const htmlPath = findDistHtml(page.route);
  const html = htmlPath ? readFileSync(htmlPath, "utf8") : "";
  const classes = page.id === "/" ? CHROME_CLASSES : [...new Set([...CHROME_CLASSES.slice(0, 20), ...page.extra])];
  const sel = classHits(html, classes);
  const stru = page.id === "/" ? structureHits(html) : { present: [], missing: [] };
  const selPct = pct(sel.present.length, classes.length);
  const struPct = page.id === "/" ? pct(stru.present.length, HOME_BLOCKS.length) : selPct;
  const close = closeness(selPct, tokPct, struPct);
  report.pages.push({
    page: page.id,
    html: htmlPath ? path.relative(root, htmlPath) : "MISSING",
    selector_hit: `${sel.present.length}/${classes.length}`,
    selector_missing: sel.missing,
    structure_hit: page.id === "/" ? `${stru.present.length}/${HOME_BLOCKS.length}` : "n/a (use selector)",
    structure_missing: stru.missing,
    closeness: Math.round(close * 1000) / 10,
  });
}

console.log(JSON.stringify(report, null, 2));
