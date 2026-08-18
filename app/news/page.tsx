import type { Metadata } from "next";
import Link from "next/link";
import { news } from "@/lib/news";

export const metadata: Metadata = { title: "News" };

export default function NewsPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <p className="text-[12px] uppercase tracking-[0.16em] text-muted">Newsroom</p>
      <h1 className="font-serif mt-2 text-4xl">News</h1>
      <p className="mt-4 text-[17px] leading-7">
        Articles listed on the live English newsroom as of August 2026. We rewrote the titles. We
        did not invent extra stories.
      </p>
      <ul className="mt-10 divide-y divide-rule border-y border-rule">
        {news.map((item) => (
          <li key={item.slug} className="py-5">
            <p className="font-mono text-xs text-muted">{item.date}</p>
            <Link href={`/news/${item.slug}/`} className="font-serif mt-1 block text-2xl underline">
              {item.title}
            </Link>
            <p className="mt-2 text-sm">{item.summary}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
