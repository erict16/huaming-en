import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <p className="text-[12px] uppercase tracking-[0.16em] text-muted">Field</p>
      <h1 className="font-serif mt-2 text-4xl">Projects we can name</h1>
      <p className="mt-5 text-[17px] leading-7">
        We will not draw a fake world map. These are the jobs the live English site actually names.
      </p>
      <ul className="mt-10 divide-y divide-rule border-y border-rule">
        <li className="py-5">
          <p className="font-mono text-xs text-muted">2025-05-28</p>
          <p className="font-serif mt-1 text-2xl">Longdong ±800 kV HVDC</p>
          <p className="mt-2">
            CHVT converter-transformer on-load tap changer commissioned at Longdong, China.
          </p>
          <p className="mt-2 text-sm">
            <Link href="/news/chvt-longdong-800kv/" className="underline">
              News note
            </Link>
            {" · "}
            <Link href="/products/chvt/" className="underline">
              CHVT
            </Link>
          </p>
        </li>
        <li className="py-5">
          <p className="font-serif text-2xl">North Sea / offshore wind</p>
          <p className="mt-2">
            The chairman letter on the live about page says Huaming tap changers run on North Sea
            platforms and now sit with offshore wind towers. No project list beyond that sentence.
          </p>
        </li>
        <li className="py-5">
          <p className="font-serif text-2xl">Indonesia, two decades</p>
          <p className="mt-2">
            Live newsroom article: twenty years of work with Indonesian customers. Plant there
            started in 2025 (history page).
          </p>
          <p className="mt-2 text-sm">
            <Link href="/news/indonesia-twenty-years/" className="underline">
              News note
            </Link>
          </p>
        </li>
      </ul>
    </main>
  );
}
