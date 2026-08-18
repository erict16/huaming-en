import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  downloadsFor,
  familyById,
  productBySlug,
  products,
} from "@/lib/catalog";
import { formatBytes } from "@/lib/format";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) return { title: "Type" };
  return { title: product.name, description: product.oneLiner };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) notFound();
  const family = familyById(product.family);
  const files = downloadsFor(product.slug);
  const siblings = product.siblings
    .map((s) => productBySlug(s))
    .filter(Boolean);

  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <p className="text-[12px] uppercase tracking-[0.16em] text-muted">
        {family?.name ?? "Type"} · plate
      </p>
      <h1 className="font-serif mt-2 text-5xl">{product.name}</h1>
      <p className="mt-4 max-w-2xl text-lg">{product.oneLiner}</p>

      <dl className="mt-10 grid gap-4 border-y border-rule py-6 sm:grid-cols-2">
        {product.ratings.map((r) => (
          <div key={r}>
            <dt className="sr-only">Rating</dt>
            <dd className="text-sm leading-6">{r}</dd>
          </div>
        ))}
      </dl>

      {typeof (product as { note?: string }).note === "string" ? (
        <p className="mt-6 text-sm text-muted">{(product as { note?: string }).note}</p>
      ) : null}

      <section className="mt-12">
        <h2 className="font-serif text-2xl">Downloads</h2>
        {files.length === 0 ? (
          <p className="mt-3 text-sm text-muted">
            No English technical data on file yet. Ask{" "}
            <a className="underline" href={`mailto:intl@huaming.com?subject=${product.name}`}>
              intl@huaming.com
            </a>
            .
          </p>
        ) : (
          <ul className="mt-4 divide-y divide-rule border-y border-rule">
            {files.map((f) => (
              <li key={f.file} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between">
                <a href={`/downloads/${encodeURIComponent(f.file)}`} className="underline">
                  {f.title}
                </a>
                <span className="text-sm text-muted">
                  {f.kind} · {f.lang.toUpperCase()}
                  {"bytes" in f && f.bytes ? ` · ${formatBytes(f.bytes)}` : ""}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <p className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link href={`/contact/?product=${product.name}`} className="inline-flex min-h-11 items-center bg-cta px-4 text-white">
          Talk to us
        </Link>
        <a href="https://erict16.github.io/oltc-selector/" className="inline-flex min-h-11 items-center underline">
          Type selector
        </a>
      </p>

      {siblings.length ? (
        <section className="mt-14">
          <h2 className="font-serif text-2xl">Related types</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {siblings.map((s) =>
              s ? (
                <li key={s.slug}>
                  <Link href={`/products/${s.slug}/`} className="font-mono underline">
                    {s.name}
                  </Link>
                  <span className="text-muted"> — {s.oneLiner}</span>
                </li>
              ) : null,
            )}
          </ul>
        </section>
      ) : null}
    </main>
  );
}
