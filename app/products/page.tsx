import type { Metadata } from "next";
import Link from "next/link";
import { families, products } from "@/lib/catalog";

export const metadata: Metadata = { title: "Products" };

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <p className="text-[12px] uppercase tracking-[0.16em] text-muted">Catalogue</p>
      <h1 className="font-serif mt-2 text-4xl">Products</h1>
      <p className="mt-4 max-w-2xl">
        Three jobs: on-load tap changers, de-energized tap changers, and accessories (motor drives,
        monitors). Vacuum is a technology inside OLTC, not a third family.
      </p>
      <p className="mt-3 text-sm">
        <Link href="/products/oltc/" className="underline">
          OLTC
        </Link>
        {" · "}
        <Link href="/products/octc/" className="underline">
          OCTC
        </Link>
        {" · "}
        <Link href="/products/accessories/" className="underline">
          Accessories
        </Link>
      </p>
      {families.map((family) => {
        const rows = products.filter((p) => p.family === family.id);
        if (!rows.length) return null;
        return (
          <section key={family.id} className="mt-12">
            <h2 className="font-serif text-2xl">{family.name}</h2>
            <p className="mt-1 text-sm text-muted">{family.blurb}</p>
            <ul className="mt-4 divide-y divide-rule border-y border-rule">
              {rows.map((p) => (
                <li key={p.slug} className="flex flex-col gap-1 py-3 md:flex-row md:items-baseline md:justify-between">
                  <Link href={`/products/${p.slug}/`} className="font-mono underline">
                    {p.name}
                  </Link>
                  <span className="max-w-2xl text-sm">{p.oneLiner}</span>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </main>
  );
}
