export type NewsItem = {
  slug: string;
  date: string;
  title: string;
  summary: string;
  sourcePath: string;
};

export const news: NewsItem[] = [
  {
    slug: "chvt-longdong-800kv",
    date: "2025-05-28",
    title: "CHVT commissioned at Longdong ±800 kV HVDC",
    summary:
      "Huaming’s CHVT converter-transformer on-load tap changer went into service at Longdong ±800 kV in China.",
    sourcePath:
      "/component/content/article/huaming-chvt-converter-transformer-on-load-tap-changer-has-successfully-commissioned-at-longdong-800kv-hvdc-converter-station-in-china",
  },
  {
    slug: "singapore-international-hq",
    date: "2025-04-30",
    title: "International headquarters opens in Singapore",
    summary:
      "Huaming Power Equipment Singapore Pte. Ltd opened at Tai Seng Exchange on 29 April 2025.",
    sourcePath:
      "/component/content/article/huaming-power-equipment-opens-international-headquarters-in-singapore-to-leverage-opportunities-in-the-energy-transition-2",
  },
  {
    slug: "t-and-d-dubai-2025",
    date: "2025-02-18",
    title: "Sustainable Development Strategies for T&D, Dubai",
    summary: "Industry Navigator conference, 9–11 April 2025, Dubai.",
    sourcePath: "/newsroom",
  },
  {
    slug: "oltc-course-transformer-magazine",
    date: "2025-02-18",
    title: "Free basic OLTC course with Transformer Magazine",
    summary: "First basic-level lesson, hosted with Dr Raka Levi.",
    sourcePath:
      "/component/content/article/course-on-load-tap-changers-oltc-free-basic-level---brought-to-you-by-transformer-magazine-and-huaming",
  },
  {
    slug: "tap-changer-comic",
    date: "2025-01-14",
    title: "A comic that explains tap changers",
    summary: "Plain-language comic on the live newsroom for readers new to the device.",
    sourcePath:
      "/component/content/article/not-familiar-with-tap-changers-this-comic-will-make-it-easy-to-understand-5",
  },
  {
    slug: "indonesia-twenty-years",
    date: "2024-06-07",
    title: "Twenty years in Indonesia",
    summary: "Shanghai Huaming on two decades of work with Indonesian customers.",
    sourcePath:
      "/component/content/article/shanghai-huaming-twenty-years-of-deep-engagement-in-indonesia-building-a-trusted-brand-for-customers",
  },
  {
    slug: "nigeria-tcn-seminar",
    date: "2024-06-06",
    title: "Technical seminar for TCN, Nigeria",
    summary: "Huaming held a tap-changer seminar for Transmission Company of Nigeria.",
    sourcePath:
      "/component/content/article/huaming-technical-seminar-successfully-held-in-nigeria-for-tcn",
  },
  {
    slug: "chvt-factory-test",
    date: "2024-04-23",
    title: "CHVT passes UHV converter-transformer factory test",
    summary: "Vacuum CHVT cleared the factory test on an ultra-high-voltage converter transformer.",
    sourcePath: "/component/content/article/milestone-achievement",
  },
  {
    slug: "pakistan-seminar",
    date: "2024-01-30",
    title: "Technical seminar in Pakistan",
    summary: "Tap-changer seminar with local utility and OEM staff.",
    sourcePath:
      "/component/content/article/huaming-technical-seminar-on-tap-changer-successfully-held-in-pakistan",
  },
  {
    slug: "municipal-technology-center",
    date: "2024-01-01",
    title: "Municipal-level enterprise technology centre",
    summary: "Huaming named a distinguished municipal-level enterprise technology centre (live newsroom).",
    sourcePath:
      "/component/content/article/huaming-awarded-distinguished-municipal-level-enterprise-technology-center",
  },
  {
    slug: "outstanding-supplier-2023",
    date: "2024-01-01",
    title: "Outstanding supplier of 2023",
    summary: "Huaming Power awarded outstanding supplier of 2023 (live newsroom title).",
    sourcePath: "/component/content/article/huaming-power-awarded-outstanding-supplier-of-2023",
  },
  {
    slug: "huaming-in-action",
    date: "2024-01-01",
    title: "Huaming in action",
    summary: "Field photo essay listed on the live newsroom. No extra claims added here.",
    sourcePath: "/component/content/article/huaming-in-action",
  },
];

export function newsBySlug(slug: string): NewsItem | undefined {
  return news.find((n) => n.slug === slug);
}
