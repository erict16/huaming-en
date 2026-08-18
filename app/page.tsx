import Link from "next/link";
import { products } from "@/lib/catalog";

const featured = ["cv2", "cm2", "shzv", "hwv", "wsl", "cma7"];

export default function HomePage() {
  const plates = featured
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <main className="mx-auto max-w-6xl px-5 pb-20 pt-8">
      <p className="text-[12px] uppercase tracking-[0.16em] text-muted">HM / 01 · Technical catalogue</p>
      <h1 className="font-serif mt-3 max-w-[16ch] text-[clamp(32px,5.5vw,56px)] leading-[1.05] font-semibold">
        Tap changers for power transformers
      </h1>
      <p className="mt-4 max-w-xl text-lg">
        On-load and de-energized types, vacuum and oil. Technical data as PDF. Standard lead time
        about 4–6 weeks.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/products/"
          className="inline-flex min-h-11 items-center bg-cta px-5 text-sm font-medium text-white"
        >
          Find a type
        </Link>
        <Link href="/downloads/" className="inline-flex min-h-11 items-center px-5 text-sm underline">
          Download brochures
        </Link>
      </div>

      <div className="mt-10 grid items-end gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div className="flex min-h-[280px] flex-col border border-rule p-6">
          <p className="text-[12px] uppercase tracking-[0.16em] text-muted">Plate · CV2</p>
          <img
            src="/images/products/cv2.png"
            alt="CV2 vacuum on-load tap changer"
            className="mt-4 max-h-44 w-auto"
          />
          <p className="font-serif mt-4 text-3xl">CV2</p>
          <p className="mt-auto pt-4 text-sm">
            <Link href="/products/cv2/" className="underline">
              Open CV2
            </Link>
            {" · "}
            <a href="/downloads/CV2-OLTC-Technical-Data-HM0.154.4101-2025.pdf" className="underline">
              Technical data (PDF)
            </a>
          </p>
        </div>
        <div>
          <p className="text-[13px] uppercase tracking-[0.12em] text-muted">What this is</p>
          <p className="mt-3 text-[17px] leading-7">
            A transformer changes voltage. A tap changer picks which winding tap is live, so the
            voltage stays in range. On-load (OLTC) does this while the transformer is energised.
            De-energized (OCTC) only with the transformer off.
          </p>
          <p className="mt-4 text-sm">
            <Link href="/learn/" className="underline">
              How it works
            </Link>
          </p>
        </div>
      </div>

      <ol className="mt-16 grid gap-6 border-t border-rule pt-10 text-sm md:grid-cols-3">
        <li>
          <strong className="font-serif block text-base">1. Name the family</strong>
          OLTC, OCTC, or motor drive.
        </li>
        <li>
          <strong className="font-serif block text-base">2. Open the type</strong>
          CV2, CM2, SHZV, HWV…
        </li>
        <li>
          <strong className="font-serif block text-base">3. Take the PDF</strong>
          Same technical data the factory uses.
        </li>
      </ol>

      <section className="mt-16 border-t border-rule pt-10">
        <h2 className="font-serif text-2xl">Types on the plate</h2>
        <ul className="mt-6 divide-y divide-rule border-y border-rule">
          {plates.map((p) =>
            p ? (
              <li key={p.slug} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between">
                <Link href={`/products/${p.slug}/`} className="font-mono text-sm underline">
                  {p.name}
                </Link>
                <span className="max-w-xl text-sm text-muted">{p.oneLiner}</span>
              </li>
            ) : null,
          )}
        </ul>
        <p className="mt-4 text-sm">
          <Link href="/products/" className="underline">
            Full list
          </Link>
        </p>
      </section>
    </main>
  );
}
