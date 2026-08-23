export type NewsFigure = {
  val: string;
  unit?: string;
  label: string;
};

export type NewsItem = {
  slug: string;
  date: string;
  title: string;
  summary: string;
  body: string[];
  sourcePath: string;
  figures?: NewsFigure[];
};

export const news: NewsItem[] = [
  {
    slug: "chvt-longdong-800kv",
    date: "2025-05-28",
    title: "CHVT commissioned at Longdong ±800 kV HVDC",
    summary:
      "Huaming’s CHVT converter-transformer on-load tap changer went into service at Longdong ±800 kV in China.",
    body: [
      "On 28 May 2025 the live newsroom said CHVT tap changers went into batch service on the Longdong–Shandong ±800 kV UHVDC line, a wind / solar / thermal / storage project.",
      "The same site earlier (23 April 2024) said the type passed factory tests at Xi’an Xidian for Qingyang Station.",
    ],
    sourcePath:
      "/component/content/article/huaming-chvt-converter-transformer-on-load-tap-changer-has-successfully-commissioned-at-longdong-800kv-hvdc-converter-station-in-china",
    figures: [
      { val: "800", unit: "kV", label: "Longdong HVDC" },
      { val: "2025", label: "Commissioned 28 May" },
    ],
  },
  {
    slug: "singapore-international-hq",
    date: "2025-04-30",
    title: "International headquarters opens in Singapore",
    summary:
      "Huaming Power Equipment Singapore Pte. Ltd opened at Tai Seng Exchange on 29 April 2025.",
    body: [
      "Company note dated 29 April 2025: Huaming Power Equipment Singapore Pte. Ltd is the international headquarters. The live article also calls it a global training site.",
      "Address we print: Tai Seng Exchange (TSX) Tower A #03-13, 1 Tai Seng Ave, Singapore 536464.",
    ],
    sourcePath:
      "/component/content/article/huaming-power-equipment-opens-international-headquarters-in-singapore-to-leverage-opportunities-in-the-energy-transition-2",
    figures: [
      { val: "2025", label: "HQ opened 29 April" },
      { val: "2022", label: "Singapore subsidiary" },
    ],
  },
  {
    slug: "t-and-d-dubai-2025",
    date: "2025-02-18",
    title: "Sustainable Development Strategies for T&D, Dubai",
    summary: "Industry Navigator conference, 9–11 April 2025, Dubai.",
    body: [
      "Listed on the live home and newsroom as a T&D conference in Dubai, 9–11 April 2025. We do not have a longer English article body.",
    ],
    sourcePath: "/newsroom",
  },
  {
    slug: "oltc-course-transformer-magazine",
    date: "2025-02-18",
    title: "Free basic OLTC course with Transformer Magazine",
    summary: "First basic-level lesson, hosted with Dr Raka Levi.",
    body: [
      "Transformer Magazine and Huaming listed a free basic OLTC lesson hosted by Dr Raka Levi. The live page pointed at 5 March, 14:00 CET.",
      "Registration URL printed on that page: https://transformers-magazine.com/transformers-academy/oltc-course-lesson-1-on-load-tap-changer-basics/",
    ],
    sourcePath:
      "/component/content/article/course-on-load-tap-changers-oltc-free-basic-level---brought-to-you-by-transformer-magazine-and-huaming",
  },
  {
    slug: "tap-changer-comic",
    date: "2025-01-14",
    title: "A comic that explains tap changers",
    summary: "Plain-language comic on the live newsroom for readers new to the device.",
    body: [
      "The live newsroom ran a tap-changer comic dated 14 January 2025. Copyright on that page is Hunzhi; we are not republishing the drawings.",
      "For a text explainer on this site, use /learn.",
    ],
    sourcePath:
      "/component/content/article/not-familiar-with-tap-changers-this-comic-will-make-it-easy-to-understand-5",
  },
  {
    slug: "indonesia-twenty-years",
    date: "2024-06-07",
    title: "Twenty years in Indonesia",
    summary: "Shanghai Huaming on two decades of work with Indonesian customers.",
    body: [
      "Live article: first Huaming tap changer into Indonesia in 2004–2005. Later named as a PLN supplier. Products used at a G20 site, per that page.",
      "The history page says the Indonesia plant started in 2025.",
    ],
    sourcePath:
      "/component/content/article/shanghai-huaming-twenty-years-of-deep-engagement-in-indonesia-building-a-trusted-brand-for-customers",
    figures: [
      { val: "2004", label: "First tap changer into Indonesia" },
      { val: "2025", label: "Indonesia plant" },
    ],
  },
  {
    slug: "nigeria-tcn-seminar",
    date: "2024-06-06",
    title: "Technical seminar for TCN, Nigeria",
    summary: "Huaming held a tap-changer seminar for Transmission Company of Nigeria.",
    body: [
      "6 June 2024, Abuja: a tap-changer seminar for Transmission Company of Nigeria (TCN). That is the fact the live page states.",
    ],
    sourcePath:
      "/component/content/article/huaming-technical-seminar-successfully-held-in-nigeria-for-tcn",
  },
  {
    slug: "chvt-factory-test",
    date: "2024-04-23",
    title: "CHVT passes UHV converter-transformer factory test",
    summary: "Vacuum CHVT cleared the factory test on an ultra-high-voltage converter transformer.",
    body: [
      "23 April 2024 newsroom: CHVT passed factory tests at Xi’an Xidian on a ±800 kV converter transformer, intended for Qingyang Station on Longdong–Shandong.",
    ],
    sourcePath: "/component/content/article/milestone-achievement",
  },
  {
    slug: "pakistan-seminar",
    date: "2024-01-30",
    title: "Technical seminar in Pakistan",
    summary: "Tap-changer seminar with local utility and OEM staff.",
    body: [
      "10 January 2024, Lahore: a Huaming tap-changer seminar. The live page says it covered principles, company history, and main types.",
    ],
    sourcePath:
      "/component/content/article/huaming-technical-seminar-on-tap-changer-successfully-held-in-pakistan",
  },
  {
    slug: "municipal-technology-center",
    date: "2024-03-04",
    title: "Municipal-level enterprise technology centre",
    summary: "Huaming named a distinguished municipal-level enterprise technology centre (live newsroom).",
    body: [
      "4 March 2024 newsroom: Shanghai municipal government named Huaming a municipal-level enterprise technology centre.",
    ],
    sourcePath:
      "/component/content/article/huaming-awarded-distinguished-municipal-level-enterprise-technology-center",
  },
  {
    slug: "outstanding-supplier-2023",
    date: "2023-03-04",
    title: "Outstanding supplier of 2022 (Huapeng)",
    summary: "Jiangsu Huapeng named Huaming outstanding supplier of 2022. The live slug still says 2023.",
    body: [
      "Live article dated 4 March 2023: Jiangsu Huapeng Group named Huaming “Outstanding Supplier of 2022”. The URL slug says 2023. We print both.",
    ],
    sourcePath: "/component/content/article/huaming-power-awarded-outstanding-supplier-of-2023",
  },
  {
    slug: "huaming-in-action",
    date: "2024-03-08",
    title: "Huaming in action",
    summary: "Live newsroom photo note: a “Caring for Silver Hair” event at Ruijin Hospital, Shanghai.",
    body: [
      "8 March 2024: the live page is a hospital community event at Ruijin Hospital, not a product release. We keep the listing because it sat on the newsroom.",
    ],
    sourcePath: "/component/content/article/huaming-in-action",
  },
];

export function newsBySlug(slug: string): NewsItem | undefined {
  return news.find((n) => n.slug === slug);
}

/** Article photography only. Product stills are not 16:6 cover art. */
export function newsArticlePhoto(slug: string): string | null {
  if (slug === "indonesia-twenty-years") {
    return "/images/00_HuaMing/articles/7-Twenty Years of Deep Engagement in Indonesia/7-5.png";
  }
  return null;
}

/** 3:2 contain plates on cards. Existing files only. */
export function newsBandSrc(slug: string): string | null {
  if (slug.startsWith("chvt-")) return "/images/products/chvt.png";
  return newsArticlePhoto(slug);
}
