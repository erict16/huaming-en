/**
 * Full-page shots at a real window size. Do not use Chrome device-emulate
 * screenshots: that paints a 1440×900 page into a different window, so the
 * right edge is empty and the bottom is clipped.
 *
 *   npm run shot
 *   npm run shot -- http://127.0.0.1:4321
 */
import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "sketches", "shot");
const origin = process.argv[2] || "http://127.0.0.1:4321";

const pages = [
  ["home", "/"],
  ["contact", "/contact/"],
  ["about", "/about/"],
];

const views = [
  ["desktop", { width: 1440, height: 900, deviceScaleFactor: 1, isMobile: false, hasTouch: false }],
  ["phone", { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true }],
];

const browser = await chromium.launch({
  channel: "chrome",
  headless: true,
  args: [
    "--disable-extensions",
    "--disable-component-extensions-with-background-pages",
    "--hide-scrollbars",
  ],
});

await mkdir(outDir, { recursive: true });

for (const [viewName, viewport] of views) {
  const context = await browser.newContext({
    viewport,
    deviceScaleFactor: viewport.deviceScaleFactor,
    isMobile: viewport.isMobile,
    hasTouch: viewport.hasTouch,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  for (const [name, path] of pages) {
    const url = new URL(path, origin).href;
    const res = await page.goto(url, { waitUntil: "networkidle" });
    if (!res || !res.ok()) {
      throw new Error(`${url} → ${res ? res.status() : "no response"}`);
    }
    await page.waitForFunction(() => document.fonts ? document.fonts.status === "loaded" : true);
    await page.evaluate(() => {
      const walk = (root) => {
        for (const el of [...root.querySelectorAll("*")]) {
          const t = (el.textContent || "").replace(/\s+/g, " ");
          if (el.tagName === "BUTTON" && /Inspect/.test(t) && /Audit/.test(el.parentElement?.textContent || "")) {
            let n = el.parentElement;
            while (n && n.parentElement && n.parentElement !== document.body && n.parentElement !== document.documentElement) {
              n = n.parentElement;
            }
            n?.remove();
            return;
          }
          if (el.shadowRoot) walk(el.shadowRoot);
        }
      };
      walk(document);
    });
    const leftover = await page.evaluate(
      () =>
        [...document.querySelectorAll("button")].some(
          (b) => /Inspect/.test(b.textContent || "") && /Audit/.test(b.parentElement?.textContent || ""),
        ),
    );
    if (leftover) throw new Error(`devtools overlay still in ${url}`);
    const file = join(outDir, `${name}-${viewName}.png`);
    await page.screenshot({ path: file, fullPage: true, animations: "disabled" });
    console.log(file);
  }
  await context.close();
}

await browser.close();
