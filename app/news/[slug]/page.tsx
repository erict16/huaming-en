import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { news, newsBySlug } from "@/lib/news";

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = newsBySlug(slug);
  return { title: item?.title ?? "News" };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = newsBySlug(slug);
  if (!item) notFound();
  const source = `https://www.intl-huaming.com${item.sourcePath}`;

  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <p className="font-mono text-xs text-muted">{item.date}</p>
      <h1 className="font-serif mt-2 text-4xl">{item.title}</h1>
      <p className="mt-6 text-[17px] leading-7">{item.summary}</p>
      <p className="mt-6 text-sm">
        Source on the previous English site:{" "}
        <a href={source} className="underline">
          {source}
        </a>
      </p>
      <p className="mt-10 text-sm">
        <Link href="/news/" className="underline">
          All news
        </Link>
      </p>
    </main>
  );
}
