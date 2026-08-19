import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Stamp } from "@/components/Stamp";
import { TypeRow } from "@/components/FamilyList";
import { familyById, productBySlug, products } from "@/lib/catalog";
import { formatKind, padIndex, parseDocMeta } from "@/lib/doc-meta";
import { allDownloads } from "@/lib/downloads.server";
import { formatBytes } from "@/lib/format";
import { productImageSrc } from "@/lib/product-image";

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
  const files = allDownloads().filter((d) => d.products.includes(product.slug));
  const siblings = product.siblings.map((s) => productBySlug(s)).filter(Boolean);
  const photo = productImageSrc(product.slug);
  const note = typeof (product as { note?: string }).note === "string" ? (product as { note: string }).note : null;

  return (
    <main className="sheet">
      <div className="folio">
        <span>
          <span className="folio-mark">HM / 03</span>
          <span> · {family?.name ?? "Type"} · plate</span>
        </span>
        <span>{product.name}</span>
      </div>
      <hr className="rule-strong mt-3" />

      <article className="plate plate-inset mt-10">
        <span className="plate-tab">Type · {product.name}</span>
        <div className="p-6 pt-10 md:p-10 md:pt-12">
          <div className="plate-meta">
            <span>Designation {product.name}</span>
            <span>{family?.name ?? "Type"}</span>
          </div>
          <hr className="rule mt-3" />
          <div className="mt-4 grid gap-8 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:items-end md:gap-12">
            {photo ? (
              <div className="figure-well">
                <Stamp src={photo} alt={`${product.name} tap changer`} size="plate" />
              </div>
            ) : (
              <div />
            )}
            <div className="min-w-0">
              <h1 className="display-sm">{product.name}</h1>
              <p className="mt-4 text-[17px] leading-7">{product.oneLiner}</p>
              <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                <Link href={`/contact/?product=${product.name}`} className="btn-cta">
                  Talk to us
                </Link>
                <a href="https://erict16.github.io/oltc-selector/" className="btn-ghost">
                  Type selector
                </a>
              </p>
            </div>
          </div>
        </div>
      </article>

      <section className="mt-14">
        <div className="folio">
          <span className="folio-mark">Rating</span>
          <span>{product.ratings.length} row{product.ratings.length === 1 ? "" : "s"} from the plate</span>
        </div>
        <div className="rating-strip mt-4">
          <ol>
            {product.ratings.map((r, i) => (
              <li key={r}>
                <span className="n">{padIndex(i + 1)}</span>
                <span>{r}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mt-12">
        <div className="folio">
          <span className="folio-mark">Use when</span>
        </div>
        <p className="lede mt-3">{product.oneLiner}</p>
        {note ? <p className="mt-4 max-w-2xl text-sm text-muted">{note}</p> : null}
      </section>

      <section className="mt-14">
        <div className="folio">
          <span className="folio-mark">Downloads</span>
          <span>{files.length ? `${files.length} file${files.length === 1 ? "" : "s"}` : "None on file"}</span>
        </div>
        {files.length === 0 ? (
          <p className="mt-4 max-w-2xl text-sm text-muted">
            No English technical data on file yet. Ask{" "}
            <a className="link-ink" href={`mailto:intl@huaming.com?subject=${product.name}`}>
              intl@huaming.com
            </a>
            .
          </p>
        ) : (
          <div className="ledger-wrap mt-4">
            <table className="ledger">
              <thead>
                <tr>
                  <th>Document</th>
                  <th>Kind</th>
                  <th>Lang</th>
                  <th>Size</th>
                </tr>
              </thead>
              <tbody>
                {files.map((f) => {
                  const meta = parseDocMeta(f.file, f.title);
                  return (
                    <tr key={f.file}>
                      <td>
                        <a href={`/downloads/${encodeURIComponent(f.file)}`}>{f.title}</a>
                        {meta.docNo || meta.year ? (
                          <span className="doc-meta">
                            {[meta.docNo, meta.year].filter(Boolean).join(" · ")}
                          </span>
                        ) : null}
                      </td>
                      <td className="capitalize">{formatKind(f.kind)}</td>
                      <td className="uppercase">{f.lang}</td>
                      <td>{"bytes" in f && f.bytes ? formatBytes(f.bytes) : "—"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {siblings.length ? (
        <section className="mt-16">
          <div className="folio">
            <span className="folio-mark">Related types</span>
          </div>
          <div className="contents-list mt-4">
            {siblings.map((s) =>
              s ? <TypeRow key={s.slug} product={s} family={familyById(s.family)} /> : null,
            )}
          </div>
        </section>
      ) : null}
    </main>
  );
}
