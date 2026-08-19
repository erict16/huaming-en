import Link from "next/link";
import { Stamp } from "@/components/Stamp";
import { families, products } from "@/lib/catalog";
import { padIndex } from "@/lib/doc-meta";
import { productImageSrc } from "@/lib/product-image";

const featured = ["cv2", "cm2", "shzv", "hwv", "wsl", "cma7"];
const CV2_PDF = "/downloads/CV2-OLTC-Technical-Data-HM0.154.4101-2025.pdf";

export default function HomePage() {
  const plates = featured
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean);
  const cv2 = products.find((p) => p.slug === "cv2");
  const cv2Family = families.find((f) => f.id === cv2?.family);

  return (
    <main className="sheet sheet-wide">
      <div className="folio">
        <span>
          <span className="folio-mark">HM / 01</span>
          <span> · Technical catalogue</span>
        </span>
        <span>Shanghai</span>
      </div>
      <hr className="rule-strong mt-3" />

      <h1 className="display mt-6">Tap changers for power transformers</h1>
      <p className="lede mt-4">
        On-load and de-energized types, vacuum and oil. Technical data as PDF. Standard lead time
        about 4–6 weeks.
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-4">
        <Link href="/products/" className="btn-cta">
          Find a type
        </Link>
        <Link href="/downloads/" className="btn-ghost">
          Download brochures
        </Link>
      </div>

      {cv2 ? (
        <article className="plate plate-inset mt-8">
          <span className="plate-tab">Plate · {cv2.name}</span>
          <div className="p-6 pt-9 md:p-9 md:pt-11">
            <div className="plate-meta">
              <span>Type {cv2.name}</span>
              <span>{cv2Family?.name ?? "OLTC"}</span>
            </div>
            <hr className="rule mt-3" />
            <div className="mt-4 grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end">
              <div className="figure-well">
                <Stamp src="/images/products/cv2.png" alt="CV2 vacuum on-load tap changer" size="hero" />
              </div>
              <div className="min-w-0 pb-1">
                <p className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">Designation</p>
                <h2 className="display-sm mt-1">{cv2.name}</h2>
                <p className="mt-3 text-[16px] leading-6">{cv2.oneLiner}</p>
                <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                  <Link href="/products/cv2/" className="link-ink">
                    Open CV2
                  </Link>
                  <a href={CV2_PDF} className="link-ink">
                    Technical data (PDF)
                  </a>
                </p>
              </div>
            </div>
          </div>
        </article>
      ) : null}

      <ol className="what-strip mt-12 border-t border-rule pt-8">
        <li>
          <span className="what-n">01</span>
          <strong className="font-serif mt-1 block text-lg font-normal">Name the family</strong>
          <p className="mt-1 text-sm leading-6">OLTC, OCTC, or motor drive.</p>
        </li>
        <li>
          <span className="what-n">02</span>
          <strong className="font-serif mt-1 block text-lg font-normal">Open the type</strong>
          <p className="mt-1 text-sm leading-6">CV2, CM2, SHZV, HWV…</p>
        </li>
        <li>
          <span className="what-n">03</span>
          <strong className="font-serif mt-1 block text-lg font-normal">Take the PDF</strong>
          <p className="mt-1 text-sm leading-6">
            Same technical data the factory uses.{" "}
            <Link href="/learn/" className="link-ink">
              How it works
            </Link>
          </p>
        </li>
      </ol>

      <section className="mt-16">
        <div className="folio">
          <span className="folio-mark">Types on the plate</span>
          <Link href="/products/" className="link-ink normal-case tracking-normal">
            Full list
          </Link>
        </div>
        <hr className="rule mt-3" />
        <div className="contents-list mt-0">
          {plates.map((p, i) => {
            if (!p) return null;
            const family = families.find((f) => f.id === p.family);
            const photo = productImageSrc(p.slug);
            return (
              <div key={p.slug} className="type-row">
                {photo ? <Stamp src={photo} alt="" size="row" /> : <span className="stamp stamp--row" aria-hidden />}
                <div>
                  <p className="type-name">
                    <span className="mr-2 text-[11px] tracking-[0.12em] text-muted">{padIndex(i + 1)}</span>
                    <Link href={`/products/${p.slug}/`} className="link-ink">
                      {p.name}
                    </Link>
                  </p>
                  <p className="mt-1 text-sm leading-5">{p.oneLiner}</p>
                  {family ? (
                    <p className="mt-1 font-mono text-[11px] tracking-[0.08em] text-muted">{family.name}</p>
                  ) : null}
                </div>
                <ul className="rating-col">
                  {p.ratings.slice(0, 3).map((r, ri) => (
                    <li key={r}>
                      <span className="n">{padIndex(ri + 1)}</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
