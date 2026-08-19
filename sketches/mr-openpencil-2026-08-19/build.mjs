/** OpenPencil eval: Huaming EN draft in Reinhausen homepage rhythm. */

function rgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return { r: ((n >> 16) & 255) / 255, g: ((n >> 8) & 255) / 255, b: (n & 255) / 255 };
}
function solid(hex, opacity = 1) {
  return [{ type: "SOLID", color: rgb(hex), opacity }];
}

const C = {
  white: "#FFFFFF",
  ink: "#1D1D1B",
  muted: "#6B6B68",
  line: "#E6E6E4",
  blue: "#0057B8",
  blueDark: "#003E84",
  stage: "#0E141C",
  board: "#D8D8D4",
};

const ROOT = "/Users/youming/Github/huaming-en/sketches/mr-openpencil-2026-08-19";

async function font(family, style) {
  try {
    await figma.loadFontAsync({ family, style });
    return { family, style };
  } catch {
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    return { family: "Inter", style: "Regular" };
  }
}

function frame(parent, { name, x, y, w, h, fill, radius, stroke, clip, opacity }) {
  const n = figma.createFrame();
  n.name = name || "frame";
  n.resize(w, h);
  n.fills = fill ? solid(fill, opacity ?? 1) : [];
  n.clipsContent = clip !== false;
  if (radius != null) n.cornerRadius = radius;
  if (stroke) {
    n.strokes = solid(stroke.color, stroke.opacity ?? 1);
    n.strokeWeight = stroke.weight ?? 1;
  }
  parent.appendChild(n);
  n.x = x || 0;
  n.y = y || 0;
  return n;
}

function txt(parent, {
  text, x, y, w, h, size, family, style, color, align, lh, track, opacity,
}) {
  const t = figma.createText();
  t.fontName = { family, style };
  t.characters = text;
  t.fontSize = size;
  t.fills = solid(color || C.ink, opacity ?? 1);
  if (align) t.textAlignHorizontal = align;
  if (lh) t.lineHeight = { unit: "PIXELS", value: lh };
  if (track != null) t.letterSpacing = { unit: "PIXELS", value: track };
  t.resize(w, h || Math.round(size * 1.3));
  parent.appendChild(t);
  t.x = x || 0;
  t.y = y || 0;
  return t;
}

function btn(parent, { label, x, y, w, fill, color, fontName, h }) {
  const height = h || 44;
  const b = frame(parent, {
    name: "btn-" + label,
    x, y, w, h: height,
    fill: fill || C.blue,
    radius: 2,
  });
  txt(b, {
    text: label,
    x: 0, y: Math.round((height - 18) / 2), w, h: 18, size: 14,
    family: fontName.family, style: fontName.style,
    color: color || C.white, align: "CENTER",
  });
  return b;
}

async function imageFill(path, scaleMode = "FILL") {
  const { readFileSync } = await import("node:fs");
  const buf = readFileSync(path);
  const img = figma.createImage(new Uint8Array(buf));
  return [{
    type: "IMAGE",
    imageHash: img.hash,
    scaleMode,
    opacity: 1,
    visible: true,
  }];
}
function darkPhoto(imageFills) {
  return [...solid(C.stage), ...imageFills];
}

function chrome(parent, { w, fonts, dark }) {
  const bar = frame(parent, {
    name: "utility", x: 0, y: 0, w, h: 36, fill: C.ink,
  });
  txt(bar, {
    text: "News    Downloads    Contact    Hub",
    x: w - 360, y: 10, w: 320, h: 16, size: 11,
    family: fonts.ui.family, style: fonts.ui.style, color: C.white, align: "RIGHT",
  });
  const head = frame(parent, {
    name: "header", x: 0, y: 36, w, h: 72, fill: dark ? C.ink : C.white,
  });
  txt(head, {
    text: "HUAMING", x: 56, y: 24, w: 180, h: 24, size: 20,
    family: fonts.uiSB.family, style: fonts.uiSB.style, color: dark ? C.white : C.blue, track: 1.4,
  });
  const navColor = dark ? C.white : C.ink;
  [["Products", 780], ["Projects", 900], ["About", 1020], ["Careers", 1110]].forEach(([label, nx]) => {
    txt(head, {
      text: label, x: nx, y: 28, w: 90, h: 18, size: 14,
      family: fonts.ui.family, style: fonts.ui.style, color: navColor,
    });
  });
  const seek = frame(head, {
    name: "search", x: w - 220, y: 18, w: 164, h: 36, fill: dark ? "#2A2A28" : "#F4F4F2",
    stroke: { color: dark ? C.white : C.ink, opacity: 0.18 },
  });
  txt(seek, {
    text: "Search", x: 12, y: 9, w: 140, h: 18, size: 13,
    family: fonts.ui.family, style: fonts.ui.style, color: dark ? C.white : C.muted,
  });
}

const ui = await font("Inter", "Regular");
const uiM = await font("Inter", "Medium");
const uiSB = await font("Inter", "Semi Bold");
const fonts = { ui, uiM, uiSB };

const heroFill = await imageFill(`${ROOT}/assets/hero.jpg`);
const factoryFill = await imageFill(`${ROOT}/assets/factory.jpg`);
const solarFill = await imageFill(`${ROOT}/assets/solar.jpg`);
const subFill = await imageFill(`${ROOT}/assets/substation.jpg`);
const cv2Fill = await imageFill(`${ROOT}/assets/products/cv2.png`, "FIT");
const cm2Fill = await imageFill(`${ROOT}/assets/products/cm2.png`, "FIT");
const shzvFill = await imageFill(`${ROOT}/assets/products/shzv.png`, "FIT");
const hwvFill = await imageFill(`${ROOT}/assets/products/hwv.png`, "FIT");
const wslFill = await imageFill(`${ROOT}/assets/products/wsl.jpg`, "FIT");
const cma7Fill = await imageFill(`${ROOT}/assets/products/cma7.jpg`, "FIT");
const cmFill = await imageFill(`${ROOT}/assets/products/cm.jpg`, "FIT");

for (const c of [...figma.currentPage.children]) c.remove();
figma.currentPage.name = "Huaming EN · MR layout";

const board = frame(figma.currentPage, {
  name: "Desktop + mobile",
  x: 0, y: 0, w: 1960, h: 5920, fill: C.board,
});

txt(board, {
  text: "HOME 1440 · MR STAGE",
  x: 40, y: 18, w: 400, h: 16, size: 11,
  family: uiM.family, style: uiM.style, color: C.muted, track: 1.6,
});
txt(board, {
  text: "MOBILE 390",
  x: 1528, y: 18, w: 200, h: 16, size: 11,
  family: uiM.family, style: uiM.style, color: C.muted, track: 1.6,
});

const desk = frame(board, {
  name: "home-desktop",
  x: 40, y: 48, w: 1440, h: 3480, fill: C.white,
});
chrome(desk, { w: 1440, fonts });

const stage = frame(desk, {
  name: "stage", x: 0, y: 108, w: 1440, h: 700, fill: C.stage,
});
stage.fills = heroFill;
const veil = frame(stage, {
  name: "veil", x: 0, y: 380, w: 1440, h: 320, fill: C.ink, opacity: 0.55, clip: false,
});
veil.fills = solid(C.ink, 0.62);
txt(stage, {
  text: "Tap changers for power transformers",
  x: 56, y: 468, w: 920, h: 96, size: 48,
  family: uiSB.family, style: uiSB.style, color: C.white, lh: 54,
});
txt(stage, {
  text: "On-load and de-energized types. Vacuum and oil. Technical data as PDF.",
  x: 56, y: 572, w: 720, h: 24, size: 16,
  family: ui.family, style: ui.style, color: C.white,
});
btn(stage, { label: "Find a type", x: 56, y: 616, w: 148, fill: C.white, color: C.ink, fontName: uiM });
const ghost = frame(stage, {
  name: "btn-Download brochures", x: 216, y: 616, w: 188, h: 44,
  stroke: { color: C.white, opacity: 1 },
});
txt(ghost, {
  text: "Download brochures", x: 0, y: 13, w: 188, h: 18, size: 14,
  family: uiM.family, style: uiM.style, color: C.white, align: "CENTER",
});

txt(desk, {
  text: "PROJECTS",
  x: 56, y: 844, w: 240, h: 14, size: 11,
  family: uiM.family, style: uiM.style, color: C.blue, track: 1.8,
});
txt(desk, {
  text: "What we have been building",
  x: 56, y: 866, w: 720, h: 36, size: 28,
  family: uiSB.family, style: uiSB.style,
});

const impulses = [
  { title: "Longdong ±800 kV", body: "CHVT on the Longdong ±800 kV HVDC line, commissioned 28 May 2025.", fill: solarFill },
  { title: "4–6 weeks", body: "Standard lead time for catalogue types is about 4–6 weeks.", fill: factoryFill },
  { title: "Vacuum or oil", body: "OLTC changes taps while the transformer is live. OCTC only with it off. Pick the family first.", fill: subFill },
];
impulses.forEach((card, i) => {
  const n = frame(desk, {
    name: card.title, x: 56 + i * 444, y: 920, w: 428, h: 300, fill: C.white,
    stroke: { color: C.ink, opacity: 0.12 },
  });
  const photo = frame(n, { name: "photo", x: 0, y: 0, w: 428, h: 168, fill: C.stage });
  photo.fills = card.fill;
  txt(n, {
    text: card.title, x: 20, y: 184, w: 388, h: 24, size: 18,
    family: uiSB.family, style: uiSB.style,
  });
  txt(n, {
    text: card.body, x: 20, y: 214, w: 388, h: 64, size: 13,
    family: ui.family, style: ui.style, color: C.muted, lh: 20,
  });
});

txt(desk, {
  text: "PRODUCTS",
  x: 56, y: 1260, w: 240, h: 14, size: 11,
  family: uiM.family, style: uiM.style, color: C.blue, track: 1.8,
});
txt(desk, {
  text: "On-load, de-energized, and motor drives.",
  x: 56, y: 1282, w: 800, h: 36, size: 28,
  family: uiSB.family, style: uiSB.style,
});
txt(desk, {
  text: "On-load, de-energized, and the motor drive that turns them. Open a type, take the PDF.",
  x: 56, y: 1324, w: 720, h: 22, size: 15,
  family: ui.family, style: ui.style, color: C.muted,
});

const worlds = [
  { title: "Vacuum OLTC", sub: "CV2 · CM2 · SHZV · HWV", fill: cv2Fill, x: 56, y: 1364 },
  { title: "Oil OLTC", sub: "CM · CMD · CV", fill: cmFill, x: 740, y: 1364 },
  { title: "OCTC / DETC", sub: "Cage, drum, linear. Transformer off.", fill: wslFill, x: 56, y: 1716 },
  { title: "Motor drive", sub: "CMA7 · SHM-D. Accessory, not a tap changer.", fill: cma7Fill, x: 740, y: 1716 },
];
worlds.forEach((w) => {
  const n = frame(desk, { name: w.title, x: w.x, y: w.y, w: 644, h: 332, fill: C.stage });
  n.fills = darkPhoto(w.fill);
  const shade = frame(n, { name: "shade", x: 0, y: 210, w: 644, h: 122, fill: C.ink });
  shade.fills = solid(C.ink, 0.72);
  txt(n, {
    text: w.title, x: 24, y: 236, w: 580, h: 32, size: 26,
    family: uiSB.family, style: uiSB.style, color: C.white,
  });
  txt(n, {
    text: w.sub, x: 24, y: 274, w: 580, h: 20, size: 14,
    family: ui.family, style: ui.style, color: C.white,
  });
});

txt(desk, {
  text: "TYPES",
  x: 56, y: 2084, w: 280, h: 14, size: 11,
  family: uiM.family, style: uiM.style, color: C.blue, track: 1.8,
});
txt(desk, {
  text: "Four types to start.",
  x: 56, y: 2106, w: 640, h: 32, size: 28,
  family: uiSB.family, style: uiSB.style,
});

const latest = [
  { name: "CV2", line: "Vacuum selector. III 350 A and 600 A only.", fill: cv2Fill },
  { name: "CM2", line: "Vacuum CM. III/II 500 / 600 A only.", fill: cm2Fill },
  { name: "SHZV", line: "Vacuum CMD. 400 / 600 / 1000 A.", fill: shzvFill },
  { name: "HWV", line: "On-tank vacuum. 400 / 800 / 1000 A. Drive included.", fill: hwvFill },
];
latest.forEach((p, i) => {
  const n = frame(desk, {
    name: p.name, x: 56 + i * 340, y: 2156, w: 324, h: 236, fill: C.white,
    stroke: { color: C.ink, opacity: 0.12 },
  });
  const ph = frame(n, { name: "photo", x: 0, y: 0, w: 324, h: 140, fill: C.stage });
  ph.fills = darkPhoto(p.fill);
  txt(n, {
    text: p.name, x: 16, y: 152, w: 292, h: 22, size: 18,
    family: uiSB.family, style: uiSB.style,
  });
  txt(n, {
    text: p.line, x: 16, y: 178, w: 292, h: 40, size: 13,
    family: ui.family, style: ui.style, color: C.muted, lh: 18,
  });
});

const lead = frame(desk, { name: "lead-time", x: 0, y: 2420, w: 1440, h: 72, fill: C.blue });
txt(lead, {
  text: "Standard lead time about 4–6 weeks for catalogue types.",
  x: 56, y: 26, w: 900, h: 20, size: 16,
  family: uiM.family, style: uiM.style, color: C.white,
});
txt(lead, {
  text: "Ask sales for the current slot →",
  x: 1020, y: 26, w: 360, h: 20, size: 14,
  family: ui.family, style: ui.style, color: C.white, align: "RIGHT",
});

const nums = frame(desk, { name: "numbers", x: 0, y: 2492, w: 1440, h: 168, fill: C.ink });
txt(nums, {
  text: "FACTS",
  x: 56, y: 24, w: 400, h: 14, size: 11,
  family: uiM.family, style: uiM.style, color: C.white, track: 1.8, opacity: 0.7,
});
[
  ["150+", "countries in service"],
  ["4–6", "weeks, catalogue types"],
  ["CNAS, 2009", "type-test laboratory"],
  ["002270.SZ", "listed in Shenzhen"],
].forEach((row, i) => {
  txt(nums, {
    text: row[0], x: 56 + i * 340, y: 56, w: 300, h: 36, size: 28,
    family: uiSB.family, style: uiSB.style, color: C.white,
  });
  txt(nums, {
    text: row[1], x: 56 + i * 340, y: 100, w: 300, h: 20, size: 13,
    family: ui.family, style: ui.style, color: C.white, opacity: 0.7,
  });
});

const career = frame(desk, { name: "careers", x: 0, y: 2660, w: 1440, h: 280, fill: C.white });
const cphoto = frame(career, { name: "photo", x: 0, y: 0, w: 720, h: 280, fill: C.stage });
cphoto.fills = factoryFill;
txt(career, {
  text: "CAREERS",
  x: 772, y: 56, w: 560, h: 14, size: 11,
  family: uiM.family, style: uiM.style, color: C.blue, track: 1.8,
});
txt(career, {
  text: "Work on the switch inside the transformer.",
  x: 772, y: 84, w: 560, h: 72, size: 28,
  family: uiSB.family, style: uiSB.style, lh: 34,
});
txt(career, {
  text: "Shanghai and Singapore. Engineering, test, and sales.",
  x: 772, y: 168, w: 560, h: 22, size: 15,
  family: ui.family, style: ui.style, color: C.muted,
});
txt(career, {
  text: "Open roles →",
  x: 772, y: 208, w: 200, h: 20, size: 14,
  family: uiM.family, style: uiM.style, color: C.blue,
});

const help = frame(desk, { name: "contact-strip", x: 0, y: 2940, w: 1440, h: 240, fill: C.white });
txt(help, {
  text: "Write to intl@huaming.com. Singapore answers first.",
  x: 56, y: 24, w: 900, h: 32, size: 24,
  family: uiSB.family, style: uiSB.style,
});
[
  ["Looking for a type?", "Open the range. CV2 is three clicks from here.", "Find a type"],
  ["Need a PDF?", "Same technical data the factory uses. Search by type.", "Downloads"],
  ["Ready to talk?", "intl@huaming.com · Singapore HQ on Tai Seng.", "Contact"],
].forEach((col, i) => {
  const n = frame(help, {
    name: col[0], x: 56 + i * 444, y: 76, w: 428, h: 140, fill: C.white,
    stroke: { color: C.ink, opacity: 0.12 },
  });
  txt(n, {
    text: col[0], x: 20, y: 20, w: 388, h: 22, size: 16,
    family: uiSB.family, style: uiSB.style,
  });
  txt(n, {
    text: col[1], x: 20, y: 48, w: 388, h: 40, size: 13,
    family: ui.family, style: ui.style, color: C.muted, lh: 18,
  });
  txt(n, {
    text: col[2] + " →", x: 20, y: 100, w: 388, h: 18, size: 13,
    family: uiM.family, style: uiM.style, color: C.blue,
  });
});

const foot = frame(desk, { name: "footer", x: 0, y: 3180, w: 1440, h: 220, fill: C.ink });
txt(foot, {
  text: "HUAMING", x: 56, y: 32, w: 200, h: 20, size: 16,
  family: uiSB.family, style: uiSB.style, color: C.white, track: 1.2,
});
txt(foot, {
  text: "Shanghai Huaming Power Equipment Co., Ltd.",
  x: 56, y: 64, w: 420, h: 18, size: 12,
  family: ui.family, style: ui.style, color: C.white, opacity: 0.7,
});
txt(foot, {
  text: "No. 977 Tongpu Road, Putuo, Shanghai 200333",
  x: 56, y: 86, w: 420, h: 18, size: 12,
  family: ui.family, style: ui.style, color: C.white, opacity: 0.7,
});
txt(foot, {
  text: "Huaming Power Equipment Singapore Pte. Ltd",
  x: 520, y: 64, w: 440, h: 18, size: 12,
  family: ui.family, style: ui.style, color: C.white, opacity: 0.7,
});
txt(foot, {
  text: "TSX Tower A #03-13, 1 Tai Seng Ave, Singapore 536464",
  x: 520, y: 86, w: 440, h: 18, size: 12,
  family: ui.family, style: ui.style, color: C.white, opacity: 0.7,
});
txt(foot, {
  text: "intl@huaming.com",
  x: 1040, y: 64, w: 340, h: 18, size: 12,
  family: ui.family, style: ui.style, color: C.white,
});
txt(foot, {
  text: "Turkey · Indonesia · Brazil · USA",
  x: 1040, y: 86, w: 340, h: 18, size: 12,
  family: ui.family, style: ui.style, color: C.white, opacity: 0.7,
});
txt(foot, {
  text: "Privacy    Imprint    Selector    Hub",
  x: 56, y: 160, w: 480, h: 16, size: 11,
  family: ui.family, style: ui.style, color: C.white, opacity: 0.55,
});

desk.resize(1440, 3400);

const phone = frame(board, {
  name: "home-mobile",
  x: 1528, y: 48, w: 390, h: 2680, fill: C.white,
});
txt(phone, {
  text: "HUAMING", x: 16, y: 16, w: 160, h: 20, size: 16,
  family: uiSB.family, style: uiSB.style, color: C.blue, track: 1.2,
});
txt(phone, {
  text: "Menu", x: 310, y: 18, w: 60, h: 18, size: 13,
  family: uiM.family, style: uiM.style, align: "RIGHT",
});
const mstage = frame(phone, { name: "m-stage", x: 0, y: 52, w: 390, h: 420, fill: C.stage });
mstage.fills = heroFill;
const mveil = frame(mstage, { name: "veil", x: 0, y: 200, w: 390, h: 220, fill: C.ink });
mveil.fills = solid(C.ink, 0.62);
txt(mstage, {
  text: "Tap changers for power transformers",
  x: 16, y: 220, w: 358, h: 84, size: 26,
  family: uiSB.family, style: uiSB.style, color: C.white, lh: 30,
});
btn(mstage, { label: "Find a type", x: 16, y: 328, w: 358, fontName: uiM, fill: C.white, color: C.ink });
[
  { title: "CV2", sub: "Vacuum selector. III 350 / 600 A.", fill: cv2Fill },
  { title: "CM2", sub: "Vacuum CM. III/II 500 / 600 A.", fill: cm2Fill },
  { title: "SHZV", sub: "Vacuum CMD. 400 / 600 / 1000 A.", fill: shzvFill },
  { title: "HWV", sub: "On-tank vacuum. 400 / 800 / 1000 A.", fill: hwvFill },
].forEach((card, i) => {
  mPhotoCard(phone, {
    name: card.title, y: 492 + i * 188, fill: card.fill, title: card.title, sub: card.sub,
  });
});
const mnum = frame(phone, { name: "m-numbers", x: 0, y: 1256, w: 390, h: 160, fill: C.ink });
txt(mnum, {
  text: "150+ countries", x: 16, y: 24, w: 358, h: 28, size: 22,
  family: uiSB.family, style: uiSB.style, color: C.white,
});
txt(mnum, {
  text: "4–6 weeks · type-test lab · 002270.SZ",
  x: 16, y: 56, w: 358, h: 36, size: 14,
  family: ui.family, style: ui.style, color: C.white, opacity: 0.7, lh: 20,
});
txt(mnum, {
  text: "intl@huaming.com",
  x: 16, y: 108, w: 358, h: 20, size: 14,
  family: uiM.family, style: uiM.style, color: C.white,
});
btn(phone, { label: "Download brochures", x: 16, y: 1432, w: 358, fontName: uiM });
mFoot(phone, 1492);
phone.resize(390, 1580);

txt(board, {
  text: "PRODUCT 1440 · CV2",
  x: 40, y: 3580, w: 400, h: 16, size: 11,
  family: uiM.family, style: uiM.style, color: C.muted, track: 1.6,
});

const prod = frame(board, {
  name: "product-cv2",
  x: 40, y: 3608, w: 1440, h: 1680, fill: C.white,
});
chrome(prod, { w: 1440, fonts });
const cv2stage = frame(prod, { name: "stage", x: 0, y: 108, w: 1440, h: 520, fill: C.stage });
cv2stage.fills = darkPhoto(cv2Fill);
const cv2veil = frame(cv2stage, { name: "veil", x: 0, y: 280, w: 1440, h: 240, fill: C.ink });
cv2veil.fills = solid(C.ink, 0.62);
txt(cv2stage, {
  text: "CV2",
  x: 56, y: 310, w: 800, h: 56, size: 48,
  family: uiSB.family, style: uiSB.style, color: C.white,
});
txt(cv2stage, {
  text: "Vacuum selector-switch OLTC. III 350 A and 600 A. Primarily-delta transformers up to 132 kV.",
  x: 56, y: 376, w: 800, h: 44, size: 16,
  family: ui.family, style: ui.style, color: C.white, lh: 22,
});
btn(cv2stage, { label: "Technical data PDF", x: 56, y: 436, w: 196, fill: C.white, color: C.ink, fontName: uiM });

[
  ["CM2", "Vacuum CM. III/II 500 / 600 A only.", cm2Fill],
  ["SHZV", "Vacuum CMD. Use when CM2 current does not cover.", shzvFill],
  ["HWV", "On-tank vacuum. 400 / 800 / 1000 A. Drive included.", hwvFill],
].forEach((row, i) => {
  const n = frame(prod, {
    name: row[0], x: 56 + i * 444, y: 656, w: 428, h: 200, fill: C.white,
    stroke: { color: C.ink, opacity: 0.12 },
  });
  const ph = frame(n, { name: "ph", x: 0, y: 0, w: 160, h: 200, fill: C.stage });
  ph.fills = darkPhoto(row[2]);
  txt(n, {
    text: row[0], x: 180, y: 56, w: 220, h: 24, size: 20,
    family: uiSB.family, style: uiSB.style,
  });
  txt(n, {
    text: row[1], x: 180, y: 88, w: 220, h: 80, size: 13,
    family: ui.family, style: ui.style, color: C.muted, lh: 18,
  });
});

const specs = [
  ["Switching", "Vacuum selector switch. Mechanical backup contacts. No grade letter."],
  ["Current", "III 350 A and 600 A."],
  ["Um", "40.5 / 72.5 / 126 / 145 kV"],
  ["Step voltage", "2000 V (10 contacts) / 1500 V (12 contacts)"],
  ["Positions", "12 without change-over, 23 with"],
];
specs.forEach((row, i) => {
  const y = 884 + i * 56;
  const line = figma.createRectangle();
  line.resize(1328, 1);
  line.fills = solid(C.ink, 0.12);
  prod.appendChild(line);
  line.x = 56;
  line.y = y;
  txt(prod, {
    text: row[0], x: 56, y: y + 16, w: 220, h: 20, size: 13,
    family: uiM.family, style: uiM.style, color: C.muted,
  });
  txt(prod, {
    text: row[1], x: 300, y: y + 16, w: 1080, h: 20, size: 15,
    family: ui.family, style: ui.style,
  });
});

const pfoot = frame(prod, { name: "footer", x: 0, y: 1320, w: 1440, h: 160, fill: C.ink });
txt(pfoot, {
  text: "intl@huaming.com    Shanghai · Singapore",
  x: 56, y: 64, w: 600, h: 18, size: 13,
  family: ui.family, style: ui.style, color: C.white, opacity: 0.8,
});
txt(pfoot, {
  text: "Find a type    Downloads    Contact",
  x: 900, y: 64, w: 484, h: 18, size: 13,
  family: ui.family, style: ui.style, color: C.white, align: "RIGHT",
});
prod.resize(1440, 1480);

const mprod = frame(board, {
  name: "product-cv2-mobile",
  x: 1528, y: 3608, w: 390, h: 1480, fill: C.white,
});
txt(mprod, {
  text: "HUAMING", x: 16, y: 16, w: 160, h: 18, size: 14,
  family: uiSB.family, style: uiSB.style, color: C.blue, track: 1.2,
});
txt(mprod, {
  text: "Products / CV2", x: 16, y: 48, w: 358, h: 16, size: 12,
  family: ui.family, style: ui.style, color: C.muted,
});
const mph = frame(mprod, { name: "photo", x: 0, y: 76, w: 390, h: 280, fill: C.stage });
mph.fills = darkPhoto(cv2Fill);
txt(mprod, {
  text: "CV2", x: 16, y: 372, w: 358, h: 40, size: 36,
  family: uiSB.family, style: uiSB.style,
});
txt(mprod, {
  text: "Vacuum selector-switch OLTC. III 350 A and 600 A.",
  x: 16, y: 420, w: 358, h: 64, size: 15,
  family: ui.family, style: ui.style, color: C.muted, lh: 22,
});
btn(mprod, { label: "Technical data PDF", x: 16, y: 500, w: 358, fontName: uiM });
[
  ["Current", "III 350 A and 600 A"],
  ["Um", "40.5 / 72.5 / 126 / 145 kV"],
  ["Positions", "12, or 23 with change-over"],
].forEach((row, i) => {
  txt(mprod, {
    text: row[0], x: 16, y: 568 + i * 48, w: 358, h: 16, size: 11,
    family: uiM.family, style: uiM.style, color: C.muted, track: 0.8,
  });
  txt(mprod, {
    text: row[1], x: 16, y: 584 + i * 48, w: 358, h: 18, size: 14,
    family: ui.family, style: ui.style,
  });
});
mprod.resize(390, 760);

board.resize(1960, 5160);

for (const p of [...figma.root.children]) {
  if (p.name !== "Huaming EN · MR layout") p.remove();
}

function siteArt(pageName, artName, h) {
  const p = figma.createPage();
  p.name = pageName;
  figma.currentPage = p;
  const art = frame(p, { name: artName, x: 40, y: 40, w: 1440, h, fill: C.white });
  chrome(art, { w: 1440, fonts });
  return art;
}

function siteFoot(parent, y) {
  const f = frame(parent, { name: "footer", x: 0, y, w: 1440, h: 180, fill: C.ink });
  txt(f, {
    text: "HUAMING",
    x: 56, y: 36, w: 200, h: 18, size: 14,
    family: uiSB.family, style: uiSB.style, color: C.white, track: 1.2,
  });
  txt(f, {
    text: "Shanghai 977 Tongpu Road    Singapore TSX Tower A #03-13",
    x: 56, y: 64, w: 720, h: 18, size: 12,
    family: ui.family, style: ui.style, color: C.white, opacity: 0.75,
  });
  txt(f, {
    text: "intl@huaming.com",
    x: 56, y: 90, w: 400, h: 18, size: 12,
    family: ui.family, style: ui.style, color: C.white,
  });
  txt(f, {
    text: "Products    Downloads    Contact",
    x: 900, y: 64, w: 484, h: 18, size: 13,
    family: ui.family, style: ui.style, color: C.white, align: "RIGHT",
  });
  return f;
}

function siteMobile(deskArt, artName, h) {
  const m = frame(deskArt.parent, {
    name: artName, x: 1528, y: 40, w: 390, h, fill: C.white,
  });
  txt(m, {
    text: "HUAMING", x: 16, y: 16, w: 160, h: 20, size: 16,
    family: uiSB.family, style: uiSB.style, color: C.blue, track: 1.2,
  });
  txt(m, {
    text: "Menu", x: 310, y: 18, w: 60, h: 18, size: 13,
    family: uiM.family, style: uiM.style, align: "RIGHT",
  });
  return m;
}

function mStage(parent, { fill, title, dek, cta, h }) {
  const stH = h || 340;
  const st = frame(parent, { name: "stage", x: 0, y: 52, w: 390, h: stH, fill: C.stage });
  st.fills = fill;
  const veil = frame(st, { name: "veil", x: 0, y: stH - 200, w: 390, h: 200, fill: C.ink });
  veil.fills = solid(C.ink, 0.62);
  const titleH = title.length > 28 ? 64 : 36;
  const titleY = cta ? stH - 188 : stH - 148;
  txt(st, {
    text: title,
    x: 16, y: titleY, w: 358, h: titleH, size: 24,
    family: uiSB.family, style: uiSB.style, color: C.white, lh: 28,
  });
  if (dek) {
    txt(st, {
      text: dek,
      x: 16, y: cta ? stH - 116 : stH - 76, w: 358, h: 40, size: 13,
      family: ui.family, style: ui.style, color: C.white, lh: 18,
    });
  }
  if (cta) {
    btn(st, { label: cta, x: 16, y: stH - 60, w: 358, fontName: uiM, fill: C.white, color: C.ink });
  }
  return 52 + stH;
}

function mPhotoCard(parent, { name, y, fill, title, sub }) {
  const n = frame(parent, { name, x: 16, y, w: 358, h: 176, fill: C.stage });
  n.fills = darkPhoto(fill);
  const shade = frame(n, { name: "shade", x: 0, y: 104, w: 358, h: 72, fill: C.ink });
  shade.fills = solid(C.ink, 0.72);
  txt(n, {
    text: title, x: 16, y: 116, w: 326, h: 22, size: 16,
    family: uiSB.family, style: uiSB.style, color: C.white,
  });
  txt(n, {
    text: sub, x: 16, y: 140, w: 326, h: 18, size: 12,
    family: ui.family, style: ui.style, color: C.white,
  });
  return n;
}

function mTeaser(parent, { name, y, fill, kicker, title, sub }) {
  const n = frame(parent, {
    name, x: 16, y, w: 358, h: 228, fill: C.white,
    stroke: { color: C.ink, opacity: 0.12 },
  });
  const ph = frame(n, { name: "photo", x: 0, y: 0, w: 358, h: 128, fill: C.stage });
  ph.fills = darkPhoto(fill);
  let ty = 140;
  if (kicker) {
    txt(n, {
      text: kicker, x: 16, y: ty, w: 326, h: 14, size: 11,
      family: uiM.family, style: uiM.style, color: C.blue, track: 0.6,
    });
    ty += 16;
  }
  txt(n, {
    text: title, x: 16, y: ty, w: 326, h: 20, size: 16,
    family: uiSB.family, style: uiSB.style,
  });
  txt(n, {
    text: sub, x: 16, y: ty + 22, w: 326, h: 36, size: 12,
    family: ui.family, style: ui.style, color: C.muted, lh: 16,
  });
  return n;
}

function mFoot(parent, y) {
  const f = frame(parent, { name: "footer", x: 0, y, w: 390, h: 88, fill: C.ink });
  txt(f, {
    text: "intl@huaming.com",
    x: 16, y: 24, w: 358, h: 18, size: 13,
    family: uiM.family, style: uiM.style, color: C.white,
  });
  txt(f, {
    text: "Shanghai · Singapore",
    x: 16, y: 48, w: 358, h: 16, size: 12,
    family: ui.family, style: ui.style, color: C.white, opacity: 0.7,
  });
  return f;
}

// Product type: chrome → STAGE (photo or dark band, type bottom-left, one CTA) → 3 photo teasers → spec list → ink footer
// studio: white stills sit on a dark band (right), so the stage is not a pale PDP.
function productType(pageName, artName, { fill, name, dek, siblings, specs, cta, studio }) {
  const art = siteArt(pageName, artName, 1680);
  const st = frame(art, { name: "stage", x: 0, y: 108, w: 1440, h: 520, fill: C.stage });
  if (studio) {
    const still = frame(st, { name: "still", x: 760, y: 40, w: 620, h: 440, fill: C.stage });
    still.fills = darkPhoto(fill);
  } else {
    st.fills = darkPhoto(fill);
  }
  const veil = frame(st, { name: "veil", x: 0, y: 280, w: studio ? 720 : 1440, h: 240, fill: C.ink });
  veil.fills = solid(C.ink, studio ? 0.45 : 0.62);
  txt(st, {
    text: name,
    x: 56, y: 310, w: 680, h: 56, size: 48,
    family: uiSB.family, style: uiSB.style, color: C.white,
  });
  txt(st, {
    text: dek,
    x: 56, y: 376, w: 680, h: 44, size: 16,
    family: ui.family, style: ui.style, color: C.white, lh: 22,
  });
  const ctaLabel = cta || "Technical data PDF";
  btn(st, {
    label: ctaLabel, x: 56, y: 436, w: ctaLabel.length > 20 ? 220 : 196,
    fill: C.white, color: C.ink, fontName: uiM,
  });

  siblings.forEach((row, i) => {
    const n = frame(art, {
      name: row[0], x: 56 + i * 444, y: 656, w: 428, h: 200, fill: C.white,
      stroke: { color: C.ink, opacity: 0.12 },
    });
    const ph = frame(n, { name: "ph", x: 0, y: 0, w: 160, h: 200, fill: C.stage });
    ph.fills = darkPhoto(row[2]);
    txt(n, {
      text: row[0], x: 180, y: 56, w: 220, h: 24, size: 20,
      family: uiSB.family, style: uiSB.style,
    });
    txt(n, {
      text: row[1], x: 180, y: 88, w: 220, h: 80, size: 13,
      family: ui.family, style: ui.style, color: C.muted, lh: 18,
    });
  });

  specs.forEach((row, i) => {
    const y = 884 + i * 56;
    const line = figma.createRectangle();
    line.resize(1328, 1);
    line.fills = solid(C.ink, 0.12);
    art.appendChild(line);
    line.x = 56;
    line.y = y;
    txt(art, {
      text: row[0], x: 56, y: y + 16, w: 220, h: 20, size: 13,
      family: uiM.family, style: uiM.style, color: C.muted,
    });
    txt(art, {
      text: row[1], x: 300, y: y + 16, w: 1080, h: 20, size: 15,
      family: ui.family, style: ui.style,
    });
  });

  siteFoot(art, 1320);
  art.resize(1440, 1460);
  return art;
}

// PRODUCTS INDEX — MR portfolio: stage + teaser tiles, then a compact type list
const products = siteArt("02 Products", "products-desktop", 2200);
const pstage = frame(products, { name: "stage", x: 0, y: 108, w: 1440, h: 420, fill: C.stage });
pstage.fills = heroFill;
const pveil = frame(pstage, { name: "veil", x: 0, y: 180, w: 1440, h: 240, fill: C.ink });
pveil.fills = solid(C.ink, 0.58);
txt(pstage, {
  text: "On-load, de-energized, and motor drives.",
  x: 56, y: 220, w: 900, h: 56, size: 40,
  family: uiSB.family, style: uiSB.style, color: C.white, lh: 46,
});
txt(pstage, {
  text: "On-load, de-energized, and the motor drive. Open a family, then a type.",
  x: 56, y: 286, w: 720, h: 24, size: 16,
  family: ui.family, style: ui.style, color: C.white,
});
btn(pstage, { label: "Download brochures", x: 56, y: 332, w: 196, fill: C.white, color: C.ink, fontName: uiM });

const worldsP = [
  { title: "Vacuum OLTC", sub: "CV2 · CM2 · SHZV · HWV", fill: cv2Fill, x: 56, y: 556 },
  { title: "Oil OLTC", sub: "CM · CMD · CV", fill: cmFill, x: 740, y: 556 },
  { title: "OCTC / DETC", sub: "Cage, drum, linear. Transformer off.", fill: wslFill, x: 56, y: 900 },
  { title: "Motor drive", sub: "CMA7 · SHM-D. Accessory, not a tap changer.", fill: cma7Fill, x: 740, y: 900 },
];
worldsP.forEach((w) => {
  const n = frame(products, { name: w.title, x: w.x, y: w.y, w: 644, h: 320, fill: C.stage });
  n.fills = darkPhoto(w.fill);
  const shade = frame(n, { name: "shade", x: 0, y: 200, w: 644, h: 120, fill: C.ink });
  shade.fills = solid(C.ink, 0.72);
  txt(n, {
    text: w.title, x: 24, y: 224, w: 580, h: 32, size: 24,
    family: uiSB.family, style: uiSB.style, color: C.white,
  });
  txt(n, {
    text: w.sub, x: 24, y: 260, w: 580, h: 20, size: 14,
    family: ui.family, style: ui.style, color: C.white,
  });
});

txt(products, {
  text: "All types",
  x: 56, y: 1252, w: 400, h: 28, size: 22,
  family: uiSB.family, style: uiSB.style,
});
const typeRows = [
  ["CV2", "Vacuum selector. III 350 / 600 A only."],
  ["CM2", "Vacuum diverter + selector. III/II 500 / 600 A."],
  ["SHZV", "Vacuum. 400 / 600 / 1000 A."],
  ["HWV", "On-tank vacuum. 400 / 800 / 1000 A. Drive included."],
  ["CM", "Oil in-tank. III 500 / 600 A."],
  ["WSL", "Cage OCTC. Transformer off."],
  ["CMA7", "Motor drive. Do not add twice on HWV."],
];
typeRows.forEach((row, i) => {
  const y = 1296 + i * 48;
  const line = figma.createRectangle();
  line.resize(1328, 1);
  line.fills = solid(C.ink, 0.1);
  products.appendChild(line);
  line.x = 56;
  line.y = y;
  txt(products, {
    text: row[0], x: 56, y: y + 14, w: 160, h: 20, size: 15,
    family: uiM.family, style: uiM.style, color: C.blue,
  });
  txt(products, {
    text: row[1], x: 240, y: y + 14, w: 1100, h: 20, size: 14,
    family: ui.family, style: ui.style,
  });
});
siteFoot(products, 1660);
products.resize(1440, 1800);

const productsM = siteMobile(products, "products-mobile", 1680);
let py = mStage(productsM, {
  fill: heroFill,
  title: "On-load, de-energized, and motor drives.",
  dek: "Open a family, then a type.",
  cta: "Download brochures",
});
worldsP.forEach((w, i) => {
  mPhotoCard(productsM, {
    name: w.title, y: py + 16 + i * 188, fill: w.fill, title: w.title, sub: w.sub,
  });
});
py += 16 + worldsP.length * 188 + 16;
txt(productsM, {
  text: "All types",
  x: 16, y: py, w: 358, h: 24, size: 18,
  family: uiSB.family, style: uiSB.style,
});
py += 32;
typeRows.forEach((row, i) => {
  const y = py + i * 48;
  const line = figma.createRectangle();
  line.resize(358, 1);
  line.fills = solid(C.ink, 0.1);
  productsM.appendChild(line);
  line.x = 16;
  line.y = y;
  txt(productsM, {
    text: row[0], x: 16, y: y + 12, w: 358, h: 16, size: 13,
    family: uiM.family, style: uiM.style, color: C.blue,
  });
  txt(productsM, {
    text: row[1], x: 16, y: y + 28, w: 358, h: 16, size: 11,
    family: ui.family, style: ui.style, color: C.muted,
  });
});
py += typeRows.length * 48 + 16;
mFoot(productsM, py);
productsM.resize(390, py + 88);

// DOWNLOADS — stage photo, kind teasers, then table
const dl = siteArt("03 Downloads", "downloads-desktop", 1900);
const dstage = frame(dl, { name: "stage", x: 0, y: 108, w: 1440, h: 380, fill: C.stage });
dstage.fills = factoryFill;
const dveil = frame(dstage, { name: "veil", x: 0, y: 180, w: 1440, h: 200, fill: C.ink });
dveil.fills = solid(C.ink, 0.62);
txt(dstage, {
  text: "Downloads",
  x: 56, y: 220, w: 900, h: 48, size: 40,
  family: uiSB.family, style: uiSB.style, color: C.white,
});
txt(dstage, {
  text: "Technical data, leaflets, operating instructions. Same files the factory uses.",
  x: 56, y: 276, w: 800, h: 24, size: 16,
  family: ui.family, style: ui.style, color: C.white, opacity: 0.85,
});
[
  ["Technical data", "Ratings the factory quotes.", cv2Fill],
  ["Leaflets", "Short type sheets.", hwvFill],
  ["Instructions", "Install and operate.", cma7Fill],
].forEach((row, i) => {
  const n = frame(dl, {
    name: row[0], x: 56 + i * 444, y: 516, w: 428, h: 200, fill: C.stage,
  });
  n.fills = darkPhoto(row[2]);
  const sh = frame(n, { name: "shade", x: 0, y: 120, w: 428, h: 80, fill: C.ink });
  sh.fills = solid(C.ink, 0.72);
  txt(n, {
    text: row[0], x: 16, y: 132, w: 396, h: 22, size: 16,
    family: uiSB.family, style: uiSB.style, color: C.white,
  });
  txt(n, {
    text: row[1], x: 16, y: 158, w: 396, h: 18, size: 12,
    family: ui.family, style: ui.style, color: C.white,
  });
});
const search = frame(dl, {
  name: "search", x: 56, y: 740, w: 1328, h: 52, fill: C.white,
  stroke: { color: C.ink, opacity: 0.16 },
});
txt(search, {
  text: "Search type or file  ·  e.g. CV2",
  x: 16, y: 17, w: 800, h: 18, size: 14,
  family: ui.family, style: ui.style, color: C.muted,
});
["Type", "Kind", "File"].forEach((h, i) => {
  txt(dl, {
    text: h, x: 56 + [0, 220, 520][i], y: 812, w: 200, h: 16, size: 11,
    family: uiM.family, style: uiM.style, color: C.muted, track: 1.2,
  });
});
const files = [
  ["CV2", "Technical data", "CV2-OLTC-Technical-Data-HM0.154.4101-2025.pdf"],
  ["CV2", "Leaflet", "CV2-Leaflet-2024.pdf"],
  ["CV2", "Operating instructions", "OLTC-CV2-OI-HM0.460.5601-2026.pdf"],
  ["CM2", "Technical data", "CM2-Vacuum-OLTC-Technical-Data-HM0-154-5701.pdf"],
  ["SHZV", "Technical data", "SHZV-Vacuum-OLTC-Technical-Data-HM0.154.3901-2025.pdf"],
  ["SHZVG", "Technical data", "SHZVG-Vacuum-OLTC-Technical-Data-2025.pdf"],
  ["HWV", "Technical data", "HWV-Technical-Data-ENG.pdf"],
  ["CM", "Technical data", "CM-OLTC-Technical-Data--HM0-154-301.pdf"],
  ["CMD", "Technical data", "CMD-OLTC-Technical-Data-HM0-154-1901.pdf"],
  ["WSL", "Leaflet", "WSL-Leaflet.pdf"],
  ["CMA7", "Operating instructions", "MDU-CMA7-OM-HM0.460.302-EN-2025.pdf"],
  ["Retrofit", "Leaflet", "Retrofit-Leaflet-En.pdf"],
];
files.forEach((row, i) => {
  const y = 844 + i * 56;
  const band = frame(dl, {
    name: row[2], x: 56, y, w: 1328, h: 64, fill: i % 2 ? "#F6F6F4" : C.white,
  });
  txt(band, {
    text: row[0], x: 16, y: 22, w: 180, h: 20, size: 14,
    family: uiM.family, style: uiM.style,
  });
  txt(band, {
    text: row[1], x: 220, y: 22, w: 260, h: 20, size: 14,
    family: ui.family, style: ui.style, color: C.muted,
  });
  txt(band, {
    text: row[2], x: 520, y: 22, w: 720, h: 20, size: 13,
    family: ui.family, style: ui.style, color: C.blue,
  });
});
siteFoot(dl, 1540);
dl.resize(1440, 1680);

const dlM = siteMobile(dl, "downloads-mobile", 1680);
let dy = mStage(dlM, {
  fill: factoryFill,
  title: "Downloads",
  dek: "Technical data, leaflets, operating instructions.",
  cta: "Find a type",
});
[
  ["Technical data", "Ratings the factory quotes.", cv2Fill],
  ["Leaflets", "Short type sheets.", hwvFill],
  ["Instructions", "Install and operate.", cma7Fill],
].forEach((row, i) => {
  mPhotoCard(dlM, {
    name: row[0], y: dy + 16 + i * 188, fill: row[2], title: row[0], sub: row[1],
  });
});
dy += 16 + 3 * 188 + 12;
const mSearch = frame(dlM, {
  name: "search", x: 16, y: dy, w: 358, h: 44, fill: C.white,
  stroke: { color: C.ink, opacity: 0.16 },
});
txt(mSearch, {
  text: "Search type or file  ·  e.g. CV2",
  x: 12, y: 13, w: 334, h: 18, size: 13,
  family: ui.family, style: ui.style, color: C.muted,
});
dy += 56;
files.forEach((row, i) => {
  const y = dy + i * 48;
  const band = frame(dlM, {
    name: row[0] + "-" + row[1], x: 16, y, w: 358, h: 44,
    fill: i % 2 ? "#F6F6F4" : C.white,
  });
  txt(band, {
    text: row[0], x: 12, y: 6, w: 334, h: 16, size: 13,
    family: uiM.family, style: uiM.style,
  });
  txt(band, {
    text: row[1], x: 12, y: 24, w: 334, h: 14, size: 11,
    family: ui.family, style: ui.style, color: C.blue,
  });
});
dy += files.length * 48 + 16;
mFoot(dlM, dy);
dlM.resize(390, dy + 88);

// ABOUT — factory stage, numbers, two HQ
const about = siteArt("04 About", "about-desktop", 1680);
const astage = frame(about, { name: "stage", x: 0, y: 108, w: 1440, h: 480, fill: C.stage });
astage.fills = factoryFill;
const aveil = frame(astage, { name: "veil", x: 0, y: 260, w: 1440, h: 220, fill: C.ink });
aveil.fills = solid(C.ink, 0.62);
txt(astage, {
  text: "Tap changers, made in Shanghai.",
  x: 56, y: 300, w: 900, h: 52, size: 36,
  family: uiSB.family, style: uiSB.style, color: C.white, lh: 42,
});
txt(astage, {
  text: "Shanghai Huaming Power Equipment Co., Ltd. On-load and de-energized types for power transformers.",
  x: 56, y: 360, w: 800, h: 44, size: 16,
  family: ui.family, style: ui.style, color: C.white, lh: 22,
});
const numsA = frame(about, { name: "numbers", x: 0, y: 588, w: 1440, h: 140, fill: C.ink });
[
  ["1989", "Founded, Shanghai"],
  ["002270.SZ", "Listed 2015"],
  ["150+", "countries in service"],
  ["4–6", "weeks, catalogue types"],
].forEach((row, i) => {
  txt(numsA, {
    text: row[0], x: 56 + i * 340, y: 32, w: 300, h: 32, size: 24,
    family: uiSB.family, style: uiSB.style, color: C.white,
  });
  txt(numsA, {
    text: row[1], x: 56 + i * 340, y: 72, w: 300, h: 20, size: 13,
    family: ui.family, style: ui.style, color: C.white, opacity: 0.7,
  });
});
[
  {
    name: "shanghai", x: 56,
    fill: factoryFill, kicker: "Shanghai  ·  factory",
    addr: "No. 977 Tongpu Road, Putuo District, Shanghai 200333, China",
    note: "Credit code 913101076076323035",
  },
  {
    name: "singapore", x: 740,
    fill: heroFill, kicker: "Singapore  ·  international HQ",
    addr: "TSX Tower A #03-13, 1 Tai Seng Ave, Singapore 536464",
    note: "Opened 29 April 2025. intl@huaming.com",
  },
].forEach((hq) => {
  const n = frame(about, {
    name: hq.name, x: hq.x, y: 760, w: 644, h: 320, fill: C.white,
    stroke: { color: C.ink, opacity: 0.12 },
  });
  const ph = frame(n, { name: "photo", x: 0, y: 0, w: 644, h: 180, fill: C.stage });
  ph.fills = hq.fill;
  txt(n, {
    text: hq.kicker, x: 24, y: 196, w: 596, h: 18, size: 13,
    family: uiM.family, style: uiM.style, color: C.blue, track: 0.8,
  });
  txt(n, {
    text: hq.addr, x: 24, y: 220, w: 596, h: 40, size: 15,
    family: ui.family, style: ui.style, lh: 20,
  });
  txt(n, {
    text: hq.note, x: 24, y: 268, w: 596, h: 18, size: 13,
    family: ui.family, style: ui.style, color: C.muted,
  });
});
txt(about, {
  text: "Turkey plant, Indonesia, Brazil, USA. ISO 9001 / 14001 / 18001. Type-test laboratory.",
  x: 56, y: 1104, w: 1100, h: 24, size: 15, family: ui.family, style: ui.style, color: C.muted,
});
siteFoot(about, 1160);
about.resize(1440, 1300);

const aboutM = siteMobile(about, "about-mobile", 1280);
let ay = mStage(aboutM, {
  fill: factoryFill,
  title: "Tap changers, made in Shanghai.",
  dek: "On-load and de-energized types for power transformers.",
});
const mNumsA = frame(aboutM, { name: "numbers", x: 0, y: ay, w: 390, h: 220, fill: C.ink });
[
  ["1989", "Founded, Shanghai"],
  ["002270.SZ", "Listed 2015"],
  ["150+", "countries in service"],
  ["4–6", "weeks, catalogue types"],
].forEach((row, i) => {
  txt(mNumsA, {
    text: row[0], x: 16, y: 16 + i * 50, w: 358, h: 20, size: 16,
    family: uiSB.family, style: uiSB.style, color: C.white,
  });
  txt(mNumsA, {
    text: row[1], x: 140, y: 18 + i * 50, w: 234, h: 18, size: 12,
    family: ui.family, style: ui.style, color: C.white, opacity: 0.7,
  });
});
ay += 236;
[
  { title: "Shanghai  ·  factory", sub: "No. 977 Tongpu Road, Putuo. Credit code 913101076076323035.", fill: factoryFill },
  { title: "Singapore  ·  international HQ", sub: "TSX Tower A #03-13, 1 Tai Seng Ave. Opened 29 April 2025.", fill: heroFill },
].forEach((card, i) => {
  mTeaser(aboutM, {
    name: card.title, y: ay + i * 240, fill: card.fill,
    title: card.title, sub: card.sub,
  });
});
ay += 492;
txt(aboutM, {
  text: "Turkey, Indonesia, Brazil, USA. ISO 9001 / 14001 / 18001.",
  x: 16, y: ay, w: 358, h: 36, size: 13,
  family: ui.family, style: ui.style, color: C.muted, lh: 18,
});
ay += 52;
mFoot(aboutM, ay);
aboutM.resize(390, ay + 88);

// CONTACT — MR: Curious / Questions / Customer, then form
const contact = siteArt("05 Contact", "contact-desktop", 1480);
const cstage = frame(contact, { name: "stage", x: 0, y: 108, w: 1440, h: 380, fill: C.stage });
cstage.fills = factoryFill;
const cveil = frame(cstage, { name: "veil", x: 0, y: 180, w: 1440, h: 200, fill: C.ink });
cveil.fills = solid(C.ink, 0.62);
txt(cstage, {
  text: "Write to intl@huaming.com.",
  x: 56, y: 220, w: 1000, h: 44, size: 36,
  family: uiSB.family, style: uiSB.style, color: C.white,
});
txt(cstage, {
  text: "Singapore answers first. Name the type if you have one.",
  x: 56, y: 274, w: 800, h: 24, size: 16,
  family: ui.family, style: ui.style, color: C.white, opacity: 0.85,
});
[
  ["Find a type", "Open the range. Start with CV2.", cv2Fill],
  ["Take a PDF", "Technical data the factory uses.", hwvFill],
  ["Write", "intl@huaming.com. Name the type.", factoryFill],
].forEach((col, i) => {
  const n = frame(contact, {
    name: col[0], x: 56 + i * 444, y: 520, w: 428, h: 220, fill: C.stage,
  });
  n.fills = darkPhoto(col[2]);
  const sh = frame(n, { name: "shade", x: 0, y: 140, w: 428, h: 80, fill: C.ink });
  sh.fills = solid(C.ink, 0.72);
  txt(n, {
    text: col[0], x: 16, y: 152, w: 396, h: 22, size: 16,
    family: uiSB.family, style: uiSB.style, color: C.white,
  });
  txt(n, {
    text: col[1], x: 16, y: 178, w: 396, h: 28, size: 13,
    family: ui.family, style: ui.style, color: C.white,
  });
});
const form = frame(contact, {
  name: "form", x: 56, y: 768, w: 720, h: 360, fill: C.white,
  stroke: { color: C.ink, opacity: 0.12 },
});
[
  ["Name", 16],
  ["Email", 80],
  ["Type or project", 144],
  ["Message", 208],
].forEach((row) => {
  const field = frame(form, {
    name: row[0], x: 20, y: row[1], w: 680, h: row[0] === "Message" ? 72 : 52,
    fill: C.white, stroke: { color: C.ink, opacity: 0.16 },
  });
  txt(field, {
    text: row[0], x: 16, y: 16, w: 400, h: 18, size: 14,
    family: ui.family, style: ui.style, color: C.muted,
  });
});
btn(form, { label: "Send", x: 20, y: 296, w: 120, fontName: uiM });
const offices = [
  ["Shanghai", "977 Tongpu Road, Putuo, 200333"],
  ["Singapore", "TSX Tower A #03-13, 1 Tai Seng Ave"],
  ["Turkey", "OSB 9. Cad. No.13/2, Balıkesir"],
  ["Indonesia", "Delta Silicon 5, Bekasi 17530"],
  ["Brazil", "Vila Antonina, São Paulo"],
  ["USA", "Irwindale, CA 91706"],
];
offices.forEach((row, i) => {
  const y = 768 + i * 56;
  txt(contact, {
    text: row[0], x: 820, y, w: 540, h: 16, size: 14,
    family: uiM.family, style: uiM.style,
  });
  txt(contact, {
    text: row[1], x: 820, y: y + 20, w: 540, h: 16, size: 12,
    family: ui.family, style: ui.style, color: C.muted,
  });
});
siteFoot(contact, 1160);
contact.resize(1440, 1300);

const contactM = siteMobile(contact, "contact-mobile", 1680);
let cy = mStage(contactM, {
  fill: factoryFill,
  title: "Write to intl@huaming.com.",
  dek: "Singapore answers first. Name the type if you have one.",
});
[
  ["Find a type", "Open the range. Start with CV2.", cv2Fill],
  ["Take a PDF", "Technical data the factory uses.", hwvFill],
  ["Write", "intl@huaming.com. Name the type.", factoryFill],
].forEach((col, i) => {
  mPhotoCard(contactM, {
    name: col[0], y: cy + 16 + i * 188, fill: col[2], title: col[0], sub: col[1],
  });
});
cy += 16 + 3 * 188 + 16;
const mForm = frame(contactM, {
  name: "form", x: 16, y: cy, w: 358, h: 280, fill: C.white,
  stroke: { color: C.ink, opacity: 0.12 },
});
[
  ["Name", 12],
  ["Email", 64],
  ["Type or project", 116],
  ["Message", 168],
].forEach((row) => {
  const field = frame(mForm, {
    name: row[0], x: 12, y: row[1], w: 334, h: row[0] === "Message" ? 56 : 44,
    fill: C.white, stroke: { color: C.ink, opacity: 0.16 },
  });
  txt(field, {
    text: row[0], x: 12, y: 12, w: 300, h: 16, size: 13,
    family: ui.family, style: ui.style, color: C.muted,
  });
});
btn(mForm, { label: "Send", x: 12, y: 232, w: 334, fontName: uiM });
cy += 296;
offices.forEach((row, i) => {
  const y = cy + i * 48;
  txt(contactM, {
    text: row[0], x: 16, y, w: 358, h: 16, size: 13,
    family: uiM.family, style: uiM.style,
  });
  txt(contactM, {
    text: row[1], x: 16, y: y + 18, w: 358, h: 16, size: 11,
    family: ui.family, style: ui.style, color: C.muted,
  });
});
cy += offices.length * 48 + 16;
mFoot(contactM, cy);
contactM.resize(390, cy + 88);

// PROJECTS — stage + three Home impulses. Not a fake case-study grid.
const projects = siteArt("06 Projects", "projects-desktop", 1480);
const prstage = frame(projects, { name: "stage", x: 0, y: 108, w: 1440, h: 480, fill: C.stage });
prstage.fills = subFill;
const prveil = frame(prstage, { name: "veil", x: 0, y: 250, w: 1440, h: 230, fill: C.ink });
prveil.fills = solid(C.ink, 0.62);
txt(prstage, {
  text: "CHVT at Longdong ±800 kV",
  x: 56, y: 292, w: 1000, h: 52, size: 36,
  family: uiSB.family, style: uiSB.style, color: C.white, lh: 42,
});
txt(prstage, {
  text: "Commissioned 28 May 2025. Converter-transformer on-load tap changer on an HVDC line.",
  x: 56, y: 352, w: 860, h: 24, size: 16,
  family: ui.family, style: ui.style, color: C.white,
});
btn(prstage, { label: "Find a type", x: 56, y: 396, w: 148, fill: C.white, color: C.ink, fontName: uiM });

const prImpulses = [
  { title: "Longdong ±800 kV", body: "CHVT on the Longdong ±800 kV HVDC line, commissioned 28 May 2025.", fill: solarFill },
  { title: "4–6 weeks", body: "Standard lead time for catalogue types is about 4–6 weeks.", fill: factoryFill },
  { title: "Vacuum or oil", body: "OLTC changes taps while the transformer is live. OCTC only with it off. Pick the family first.", fill: subFill },
];
prImpulses.forEach((card, i) => {
  const n = frame(projects, {
    name: card.title, x: 56 + i * 444, y: 620, w: 428, h: 300, fill: C.white,
    stroke: { color: C.ink, opacity: 0.12 },
  });
  const photo = frame(n, { name: "photo", x: 0, y: 0, w: 428, h: 168, fill: C.stage });
  photo.fills = card.fill;
  txt(n, {
    text: card.title, x: 20, y: 184, w: 388, h: 24, size: 18,
    family: uiSB.family, style: uiSB.style,
  });
  txt(n, {
    text: card.body, x: 20, y: 214, w: 388, h: 64, size: 13,
    family: ui.family, style: ui.style, color: C.muted, lh: 20,
  });
});
const numsP = frame(projects, { name: "numbers", x: 0, y: 952, w: 1440, h: 140, fill: C.ink });
[
  ["150+", "countries in service"],
  ["4–6", "weeks, catalogue types"],
  ["CNAS, 2009", "type-test laboratory"],
  ["002270.SZ", "listed in Shenzhen"],
].forEach((row, i) => {
  txt(numsP, {
    text: row[0], x: 56 + i * 340, y: 32, w: 300, h: 32, size: 24,
    family: uiSB.family, style: uiSB.style, color: C.white,
  });
  txt(numsP, {
    text: row[1], x: 56 + i * 340, y: 72, w: 300, h: 20, size: 13,
    family: ui.family, style: ui.style, color: C.white, opacity: 0.7,
  });
});
siteFoot(projects, 1092);
projects.resize(1440, 1232);

const projectsM = siteMobile(projects, "projects-mobile", 1480);
let pry = mStage(projectsM, {
  fill: subFill,
  title: "CHVT at Longdong ±800 kV",
  dek: "Commissioned 28 May 2025. Converter-transformer OLTC on an HVDC line.",
  cta: "Find a type",
});
prImpulses.forEach((card, i) => {
  mTeaser(projectsM, {
    name: card.title, y: pry + 16 + i * 240, fill: card.fill, title: card.title, sub: card.body,
  });
});
pry += 16 + prImpulses.length * 240;
const mNumsP = frame(projectsM, { name: "numbers", x: 0, y: pry, w: 390, h: 220, fill: C.ink });
[
  ["150+", "countries in service"],
  ["4–6", "weeks, catalogue types"],
  ["CNAS, 2009", "type-test laboratory"],
  ["002270.SZ", "listed in Shenzhen"],
].forEach((row, i) => {
  txt(mNumsP, {
    text: row[0], x: 16, y: 16 + i * 50, w: 358, h: 20, size: 16,
    family: uiSB.family, style: uiSB.style, color: C.white,
  });
  txt(mNumsP, {
    text: row[1], x: 160, y: 18 + i * 50, w: 214, h: 18, size: 12,
    family: ui.family, style: ui.style, color: C.white, opacity: 0.7,
  });
});
pry += 236;
mFoot(projectsM, pry);
projectsM.resize(390, pry + 88);

// NEWS — photo stage, three dated teasers
const newsPg = siteArt("07 News", "news-desktop", 1480);
const nstage = frame(newsPg, { name: "stage", x: 0, y: 108, w: 1440, h: 480, fill: C.stage });
nstage.fills = solarFill;
const nveil = frame(nstage, { name: "veil", x: 0, y: 250, w: 1440, h: 230, fill: C.ink });
nveil.fills = solid(C.ink, 0.62);
txt(nstage, {
  text: "News",
  x: 56, y: 284, w: 900, h: 52, size: 40,
  family: uiSB.family, style: uiSB.style, color: C.white,
});
txt(nstage, {
  text: "Three dates we can print. Longdong, Singapore, Shenzhen.",
  x: 56, y: 348, w: 800, h: 24, size: 16,
  family: ui.family, style: ui.style, color: C.white, opacity: 0.85,
});
btn(nstage, { label: "About", x: 56, y: 400, w: 120, fill: C.white, color: C.ink, fontName: uiM });

const newsCards = [
  { title: "CHVT at Longdong ±800 kV", date: "28 May 2025", body: "Commissioned on an HVDC line in China.", fill: solarFill },
  { title: "Singapore international HQ", date: "29 April 2025", body: "Tai Seng Exchange. intl@huaming.com.", fill: heroFill },
  { title: "Listed in Shenzhen", date: "2015", body: "Stock code 002270.SZ.", fill: factoryFill },
];
newsCards.forEach((card, i) => {
  const n = frame(newsPg, {
    name: card.title, x: 56 + i * 444, y: 620, w: 428, h: 320, fill: C.white,
    stroke: { color: C.ink, opacity: 0.12 },
  });
  const photo = frame(n, { name: "photo", x: 0, y: 0, w: 428, h: 168, fill: C.stage });
  photo.fills = card.fill;
  txt(n, {
    text: card.date, x: 20, y: 184, w: 388, h: 16, size: 12,
    family: uiM.family, style: uiM.style, color: C.blue, track: 0.6,
  });
  txt(n, {
    text: card.title, x: 20, y: 206, w: 388, h: 44, size: 18,
    family: uiSB.family, style: uiSB.style, lh: 22,
  });
  txt(n, {
    text: card.body, x: 20, y: 256, w: 388, h: 40, size: 13,
    family: ui.family, style: ui.style, color: C.muted, lh: 18,
  });
});
siteFoot(newsPg, 980);
newsPg.resize(1440, 1120);

const newsM = siteMobile(newsPg, "news-mobile", 1280);
let ny = mStage(newsM, {
  fill: solarFill,
  title: "News",
  dek: "Three dates we can print. Longdong, Singapore, Shenzhen.",
  cta: "About",
});
newsCards.forEach((card, i) => {
  mTeaser(newsM, {
    name: card.title, y: ny + 16 + i * 240, fill: card.fill,
    kicker: card.date, title: card.title, sub: card.body,
  });
});
ny += 16 + newsCards.length * 240 + 16;
mFoot(newsM, ny);
newsM.resize(390, ny + 88);

// CAREERS — factory stage. Two cities. No vacancy list.
const careers = siteArt("08 Careers", "careers-desktop", 1480);
const crstage = frame(careers, { name: "stage", x: 0, y: 108, w: 1440, h: 480, fill: C.stage });
crstage.fills = factoryFill;
const crveil = frame(crstage, { name: "veil", x: 0, y: 250, w: 1440, h: 230, fill: C.ink });
crveil.fills = solid(C.ink, 0.62);
txt(crstage, {
  text: "Work on the switch inside the transformer.",
  x: 56, y: 284, w: 1000, h: 88, size: 36,
  family: uiSB.family, style: uiSB.style, color: C.white, lh: 42,
});
txt(crstage, {
  text: "Shanghai and Singapore. Engineering, test, and sales.",
  x: 56, y: 380, w: 720, h: 22, size: 16,
  family: ui.family, style: ui.style, color: C.white,
});
btn(crstage, { label: "Write to us", x: 56, y: 416, w: 140, fill: C.white, color: C.ink, fontName: uiM });

const crTeasers = [
  { title: "Shanghai", sub: "Factory", body: "No. 977 Tongpu Road, Putuo District, Shanghai 200333.", fill: factoryFill },
  { title: "Singapore", sub: "International HQ", body: "TSX Tower A #03-13, 1 Tai Seng Ave. Opened 29 April 2025.", fill: heroFill },
  { title: "Write", sub: "intl@huaming.com", body: "Engineering, test, and sales. We do not print a vacancy list.", fill: subFill },
];
crTeasers.forEach((card, i) => {
  const n = frame(careers, {
    name: card.title, x: 56 + i * 444, y: 620, w: 428, h: 300, fill: C.white,
    stroke: { color: C.ink, opacity: 0.12 },
  });
  const photo = frame(n, { name: "photo", x: 0, y: 0, w: 428, h: 168, fill: C.stage });
  photo.fills = card.fill;
  txt(n, {
    text: card.sub, x: 20, y: 180, w: 388, h: 16, size: 12,
    family: uiM.family, style: uiM.style, color: C.blue, track: 0.6,
  });
  txt(n, {
    text: card.title, x: 20, y: 200, w: 388, h: 24, size: 18,
    family: uiSB.family, style: uiSB.style,
  });
  txt(n, {
    text: card.body, x: 20, y: 230, w: 388, h: 48, size: 13,
    family: ui.family, style: ui.style, color: C.muted, lh: 18,
  });
});
siteFoot(careers, 960);
careers.resize(1440, 1100);

const careersM = siteMobile(careers, "careers-mobile", 1480);
let cry = mStage(careersM, {
  fill: factoryFill,
  title: "Work on the switch inside the transformer.",
  dek: "Shanghai and Singapore. Engineering, test, and sales.",
  cta: "Write to us",
  h: 360,
});
crTeasers.forEach((card, i) => {
  mTeaser(careersM, {
    name: card.title, y: cry + 16 + i * 240, fill: card.fill,
    kicker: card.sub, title: card.title, sub: card.body,
  });
});
cry += 16 + crTeasers.length * 240 + 16;
mFoot(careersM, cry);
careersM.resize(390, cry + 88);

// LEARN — what a tap changer is. Three steps. No course chrome.
const learn = siteArt("09 Learn", "learn-desktop", 1480);
const lstage = frame(learn, { name: "stage", x: 0, y: 108, w: 1440, h: 480, fill: C.stage });
lstage.fills = heroFill;
const lveil = frame(lstage, { name: "veil", x: 0, y: 220, w: 1440, h: 260, fill: C.ink });
lveil.fills = solid(C.ink, 0.62);
txt(lstage, {
  text: "The switch that picks the tap.",
  x: 56, y: 252, w: 1000, h: 48, size: 36,
  family: uiSB.family, style: uiSB.style, color: C.white, lh: 42,
});
txt(lstage, {
  text: "A tap changer picks which winding tap is live. OLTC changes taps while the transformer is energised. OCTC only with it off. Vacuum or oil. Name the family, open a type, take the PDF.",
  x: 56, y: 312, w: 860, h: 64, size: 16,
  family: ui.family, style: ui.style, color: C.white, lh: 22,
});
btn(lstage, { label: "Find a type", x: 56, y: 396, w: 148, fill: C.white, color: C.ink, fontName: uiM });

const learnSteps = [
  { title: "Name the family", body: "OLTC, OCTC, or motor drive. On-load or off. Vacuum or oil.", fill: cv2Fill },
  { title: "Open the type", body: "CV2, CM2, SHZV, HWV. Then the rest of the range.", fill: cm2Fill },
  { title: "Take the PDF", body: "Same technical data the factory uses.", fill: shzvFill },
];
learnSteps.forEach((card, i) => {
  const n = frame(learn, {
    name: card.title, x: 56 + i * 444, y: 620, w: 428, h: 300, fill: C.white,
    stroke: { color: C.ink, opacity: 0.12 },
  });
  const photo = frame(n, { name: "photo", x: 0, y: 0, w: 428, h: 168, fill: C.stage });
  photo.fills = darkPhoto(card.fill);
  txt(n, {
    text: "0" + (i + 1), x: 20, y: 180, w: 388, h: 16, size: 12,
    family: uiM.family, style: uiM.style, color: C.blue, track: 0.8,
  });
  txt(n, {
    text: card.title, x: 20, y: 200, w: 388, h: 24, size: 18,
    family: uiSB.family, style: uiSB.style,
  });
  txt(n, {
    text: card.body, x: 20, y: 230, w: 388, h: 48, size: 13,
    family: ui.family, style: ui.style, color: C.muted, lh: 18,
  });
});
siteFoot(learn, 960);
learn.resize(1440, 1100);

const learnM = siteMobile(learn, "learn-mobile", 1280);
let ly = mStage(learnM, {
  fill: heroFill,
  title: "The switch that picks the tap.",
  dek: "OLTC while live. OCTC only with it off. Name the family, open a type, take the PDF.",
  cta: "Find a type",
  h: 360,
});
learnSteps.forEach((card, i) => {
  mTeaser(learnM, {
    name: card.title, y: ly + 16 + i * 240, fill: card.fill,
    kicker: "0" + (i + 1), title: card.title, sub: card.body,
  });
});
ly += 16 + learnSteps.length * 240 + 16;
mFoot(learnM, ly);
learnM.resize(390, ly + 88);

// 10 Product CM2 — vacuum CM. III/II 500 / 600 A only.
productType("10 Product CM2", "product-cm2", {
  fill: cm2Fill,
  name: "CM2",
  dek: "Vacuum CM. Diverter + selector. III/II 500 A and 600 A only.",
  siblings: [
    ["CV2", "Vacuum selector. III 350 A and 600 A only.", cv2Fill],
    ["SHZV", "Vacuum CMD. Use when CM2 current does not cover.", shzvFill],
    ["HWV", "On-tank vacuum. 400 / 800 / 1000 A. Drive included.", hwvFill],
  ],
  specs: [
    ["Switching", "Vacuum CM. Diverter + selector."],
    ["Current", "III/II 500 A and 600 A. I also 800 / 1200 / 1500 A."],
    ["Um", "72.5 / 126 / 170 / 252 kV"],
    ["Selector", "B / C / D / DE"],
    ["Positions", "18 without change-over, 35 with"],
  ],
});

// 11 Product SHZV — vacuum CMD. III/II 400 / 600 / 1000 A.
productType("11 Product SHZV", "product-shzv", {
  fill: shzvFill,
  name: "SHZV",
  dek: "Vacuum version of CMD. III/II 400 / 600 / 1000 A. Use when CM2 current does not cover.",
  siblings: [
    ["CM2", "Vacuum CM. III/II 500 / 600 A only.", cm2Fill],
    ["CV2", "Vacuum selector-switch. III 350 A and 600 A only.", cv2Fill],
    ["HWV", "On-tank vacuum. 400 / 800 / 1000 A. Drive included.", hwvFill],
  ],
  specs: [
    ["Switching", "Vacuum CMD. In-tank combined."],
    ["Current", "III/II 400 / 600 / 1000 A"],
    ["Um", "72.5 / 126 / 170 / 252 kV"],
    ["Selector", "B / C / D / DE. Max. step voltage 4000 V"],
    ["Positions", "18 without change-over, 35 with"],
  ],
});

// 12 Product HWV — on-tank vacuum. 400 / 800 / 1000 A. Drive included. No 600 A.
productType("12 Product HWV", "product-hwv", {
  fill: hwvFill,
  name: "HWV",
  dek: "On-tank vacuum OLTC. 400 / 800 / 1000 A. Motor drive included.",
  siblings: [
    ["CV2", "Vacuum selector. III 350 A and 600 A only.", cv2Fill],
    ["CM2", "Vacuum CM. III/II 500 / 600 A only.", cm2Fill],
    ["CMA7", "Motor drive. Accessory, not a tap changer.", cma7Fill],
  ],
  specs: [
    ["Switching", "On-tank vacuum. Oil chamber separate from the main tank."],
    ["Current", "400 / 800 / 1000 A — no 600 A"],
    ["Um", "17.5 / 40.5 / 72.5 kV. No selector grade letter."],
    ["Drive", "Motor drive included."],
    ["Positions", "18 without change-over, 35 with"],
  ],
});

// 13 Product WSL — cage OCTC / DETC. Transformer off. Not an OLTC.
productType("13 Product WSL", "product-wsl", {
  fill: wslFill,
  studio: true,
  name: "WSL",
  dek: "Cage-type OCTC. Transformer off. Not an OLTC.",
  siblings: [
    ["CM", "Oil in-tank OLTC. Transformer stays live.", cmFill],
    ["CMA7", "Motor drive. Accessory, not a tap changer.", cma7Fill],
    ["CM2", "Vacuum CM. III/II 500 / 600 A only.", cm2Fill],
  ],
  specs: [
    ["Duty", "OCTC / DETC. Transformer off."],
    ["Type", "Cage. De-energized only."],
    ["Operation", "Only with the transformer isolated. Not an OLTC."],
    ["Name", "WSL. Cage OCTC."],
    ["Also", "Drum WDG · linear ZWC"],
  ],
});

// 14 Product CMA7 — motor drive unit. Accessory. Not a tap changer. HWV already has its drive.
productType("14 Product CMA7", "product-cma7", {
  fill: cma7Fill,
  studio: true,
  cta: "Operating instructions",
  name: "CMA7",
  dek: "Motor drive unit. Accessory, not a tap changer.",
  siblings: [
    ["HWV", "On-tank vacuum OLTC. Motor drive included.", hwvFill],
    ["CM", "Oil in-tank OLTC. III 500 / 600 A.", cmFill],
    ["CM2", "Vacuum CM. III/II 500 / 600 A only.", cm2Fill],
  ],
  specs: [
    ["Function", "Motor drive unit. Turns the tap changer."],
    ["Kind", "Accessory. Not a tap changer."],
    ["Family", "CMA7 · SHM-D · SHM-X"],
    ["Mount", "The motor cabinet on an in-tank tap changer."],
    ["PDF", "Operating instructions."],
  ],
});

// 15 Product CM — oil-arc in-tank OLTC. III 500 / 600 A typical. Not vacuum.
productType("15 Product CM", "product-cm", {
  fill: cmFill,
  studio: true,
  name: "CM",
  dek: "Oil-arc in-tank OLTC. III 500 / 600 A. Not vacuum.",
  siblings: [
    ["CM2", "Vacuum CM. III/II 500 / 600 A only.", cm2Fill],
    ["CV2", "Vacuum selector. III 350 A and 600 A only.", cv2Fill],
    ["CMA7", "Motor drive. Accessory, not a tap changer.", cma7Fill],
  ],
  specs: [
    ["Switching", "In-tank diverter + selector. Arc in oil."],
    ["Current", "III/II 500 A and 600 A. I also 800 / 1200 / 1500 A."],
    ["Um", "72.5 / 126 / 170 / 252 kV"],
    ["Selector", "B / C / D / DE. Max. step voltage 3300 V"],
    ["Positions", "18 without change-over, 35 with"],
  ],
});

// 16 More types — remaining catalogue as compact rows. Flagships already have full pages.
const more = siteArt("16 More types", "more-types-desktop", 2800);
const moreStage = frame(more, { name: "stage", x: 0, y: 108, w: 1440, h: 440, fill: C.stage });
moreStage.fills = factoryFill;
const moreVeil = frame(moreStage, { name: "veil", x: 0, y: 200, w: 1440, h: 240, fill: C.ink });
moreVeil.fills = solid(C.ink, 0.58);
txt(moreStage, {
  text: "The rest of the range",
  x: 56, y: 248, w: 1000, h: 52, size: 40,
  family: uiSB.family, style: uiSB.style, color: C.white,
});
txt(moreStage, {
  text: "Oil, vacuum, dry, gas, regulator, reactive, OCTC, and the drives. Flagships have their own pages.",
  x: 56, y: 308, w: 880, h: 24, size: 16,
  family: ui.family, style: ui.style, color: C.white,
});
btn(moreStage, { label: "Download brochures", x: 56, y: 356, w: 196, fill: C.white, color: C.ink, fontName: uiM });

const moreWorlds = [
  { title: "Oil OLTC", sub: "CMD · CV", fill: cmFill, x: 56, y: 576 },
  { title: "Vacuum OLTC", sub: "SHZVG · CHVT", fill: shzvFill, x: 740, y: 576 },
  { title: "Dry · gas · regulator · reactive", sub: "CVT · CZ · SHGV · HMDK · HWDK", fill: subFill, x: 56, y: 892 },
  { title: "OCTC", sub: "WDG · ZWC. Transformer off.", fill: wslFill, x: 740, y: 892 },
];
moreWorlds.forEach((w) => {
  const n = frame(more, { name: w.title, x: w.x, y: w.y, w: 644, h: 300, fill: C.stage });
  n.fills = darkPhoto(w.fill);
  const shade = frame(n, { name: "shade", x: 0, y: 188, w: 644, h: 112, fill: C.ink });
  shade.fills = solid(C.ink, 0.72);
  txt(n, {
    text: w.title, x: 24, y: 208, w: 596, h: 32, size: 22,
    family: uiSB.family, style: uiSB.style, color: C.white,
  });
  txt(n, {
    text: w.sub, x: 24, y: 244, w: 596, h: 20, size: 14,
    family: ui.family, style: ui.style, color: C.white,
  });
});

txt(more, {
  text: "TYPES",
  x: 56, y: 1224, w: 240, h: 14, size: 11,
  family: uiM.family, style: uiM.style, color: C.blue, track: 1.8,
});
txt(more, {
  text: "By family. One line each.",
  x: 56, y: 1246, w: 720, h: 28, size: 22,
  family: uiSB.family, style: uiSB.style,
});

const moreGroups = [
  {
    label: "OIL",
    rows: [
      ["CMD", "Larger oil OLTC, same family idea as CM, higher current steps."],
      ["CV", "Selector-switch oil OLTC. The oil ancestor of CV2."],
    ],
  },
  {
    label: "VACUUM",
    rows: [
      ["SHZVG", "Larger vacuum OLTC after SHZV max current (1300 / 1500 A III)."],
      ["CHVT", "High-voltage vacuum OLTC for HVDC / converter transformers. Longdong ±800 kV, May 2025."],
    ],
  },
  {
    label: "DRY",
    rows: [
      ["CVT", "Vacuum OLTC for dry-type / air-insulated transformers. Low Um."],
      ["CZ", "Vacuum dry / air OLTC at distribution voltages."],
    ],
  },
  {
    label: "GAS",
    rows: [
      ["SHGV", "Combined vacuum OLTC for SF6 / gas-insulated regulating transformers."],
    ],
  },
  {
    label: "REGULATOR",
    rows: [
      ["HMDK", "Reactance-transition tap changer for a distribution step-voltage regulator."],
    ],
  },
  {
    label: "REACTIVE",
    rows: [
      ["HWDK", "Reactive-transition compartment OLTC, used mostly in North America, usually on the secondary."],
    ],
  },
  {
    label: "OCTC DRUM / LINEAR",
    rows: [
      ["WDG", "Drum-type de-energized tap changer."],
      ["ZWC", "Linear de-energized tap changer."],
    ],
  },
  {
    label: "MOTOR DRIVE / MONITOR",
    rows: [
      ["SHM-D", "Motor drive unit for in-tank OLTCs."],
      ["SHM-X", "Motor drive unit."],
      ["SHM-KX", "Controller / drive cabinet. Type-test pack on file for SHM-XE."],
      ["ET-SZ6", "Digital voltage relay: AVR, over-current / over-voltage block, parallel, delay."],
      ["HMC-3C", "Position indicator for CMA7 / CMA9 motor drives. Decimal in, BCD out."],
      ["ZXJY", "Online oil filter plant."],
    ],
  },
];

let gy = 1292;
moreGroups.forEach((g) => {
  txt(more, {
    text: g.label, x: 56, y: gy, w: 640, h: 16, size: 11,
    family: uiM.family, style: uiM.style, color: C.blue, track: 1.8,
  });
  gy += 28;
  g.rows.forEach((row) => {
    const line = figma.createRectangle();
    line.resize(1328, 1);
    line.fills = solid(C.ink, 0.1);
    more.appendChild(line);
    line.x = 56;
    line.y = gy;
    txt(more, {
      text: row[0], x: 56, y: gy + 12, w: 160, h: 20, size: 15,
      family: uiM.family, style: uiM.style, color: C.blue,
    });
    txt(more, {
      text: row[1], x: 240, y: gy + 12, w: 1144, h: 20, size: 14,
      family: ui.family, style: ui.style,
    });
    gy += 44;
  });
  gy += 16;
});

const moreAsk = frame(more, { name: "ask", x: 0, y: gy + 8, w: 1440, h: 140, fill: C.ink });
txt(moreAsk, {
  text: "Name the type. Singapore answers first.",
  x: 56, y: 40, w: 800, h: 28, size: 22,
  family: uiSB.family, style: uiSB.style, color: C.white,
});
txt(moreAsk, {
  text: "intl@huaming.com",
  x: 56, y: 80, w: 400, h: 20, size: 14,
  family: ui.family, style: ui.style, color: C.white, opacity: 0.8,
});
txt(moreAsk, {
  text: "Contact →",
  x: 1020, y: 56, w: 360, h: 20, size: 14,
  family: uiM.family, style: uiM.style, color: C.white, align: "RIGHT",
});
siteFoot(more, gy + 148);
more.resize(1440, gy + 288);

// 17 Not found — empty / no type. Same chrome. Stage, then three real types, not a white 404.
const missing = siteArt("17 Not found", "not-found-desktop", 1280);
const missSt = frame(missing, { name: "stage", x: 0, y: 108, w: 1440, h: 480, fill: C.stage });
missSt.fills = subFill;
const missVeil = frame(missSt, { name: "veil", x: 0, y: 250, w: 1440, h: 230, fill: C.ink });
missVeil.fills = solid(C.ink, 0.62);
txt(missSt, {
  text: "No type by that name.",
  x: 56, y: 284, w: 900, h: 52, size: 40,
  family: uiSB.family, style: uiSB.style, color: C.white,
});
txt(missSt, {
  text: "Open the range. Start with CV2.",
  x: 56, y: 348, w: 720, h: 24, size: 16,
  family: ui.family, style: ui.style, color: C.white, opacity: 0.85,
});
btn(missSt, { label: "Find a type", x: 56, y: 400, w: 148, fill: C.white, color: C.ink, fontName: uiM });
[
  ["CV2", "Vacuum selector. III 350 A and 600 A only.", cv2Fill],
  ["CM2", "Vacuum CM. III/II 500 / 600 A only.", cm2Fill],
  ["WSL", "Cage OCTC. Transformer off.", wslFill],
].forEach((row, i) => {
  const n = frame(missing, {
    name: row[0], x: 56 + i * 444, y: 620, w: 428, h: 200, fill: C.white,
    stroke: { color: C.ink, opacity: 0.12 },
  });
  const ph = frame(n, { name: "ph", x: 0, y: 0, w: 160, h: 200, fill: C.stage });
  ph.fills = darkPhoto(row[2]);
  txt(n, {
    text: row[0], x: 180, y: 56, w: 220, h: 24, size: 20,
    family: uiSB.family, style: uiSB.style,
  });
  txt(n, {
    text: row[1], x: 180, y: 88, w: 220, h: 80, size: 13,
    family: ui.family, style: ui.style, color: C.muted, lh: 18,
  });
});
siteFoot(missing, 860);
missing.resize(1440, 1000);

return {
  pages: figma.root.children.map((c) => c.name),
  desk: { w: desk.width, h: desk.height },
  prod: { w: prod.width, h: prod.height },
  mobile: [
    productsM.name, dlM.name, aboutM.name, contactM.name, projectsM.name,
    newsM.name, careersM.name, learnM.name,
  ].map((name, i) => ({
    name,
    w: [productsM, dlM, aboutM, contactM, projectsM, newsM, careersM, learnM][i].width,
    h: [productsM, dlM, aboutM, contactM, projectsM, newsM, careersM, learnM][i].height,
  })),
};
