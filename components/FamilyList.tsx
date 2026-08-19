import Link from "next/link";
import { Stamp } from "@/components/Stamp";
import { familyById, productsInFamily, type Family, type Product } from "@/lib/catalog";
import { padIndex } from "@/lib/doc-meta";
import { productImageSrc } from "@/lib/product-image";

export function TypeRow({
  product,
  family,
  index,
}: {
  product: Product;
  family?: Family;
  index?: number;
}) {
  const photo = productImageSrc(product.slug);
  return (
    <div className="type-row">
      {photo ? <Stamp src={photo} alt="" size="row" /> : <span className="stamp--row block" aria-hidden />}
      <div>
        <p className="type-name">
          {typeof index === "number" ? (
            <span className="mr-2 text-[11px] tracking-[0.12em] text-muted">{padIndex(index)}</span>
          ) : null}
          <Link href={`/products/${product.slug}/`} className="link-ink">
            {product.name}
          </Link>
        </p>
        <p className="mt-1 text-sm leading-5">{product.oneLiner}</p>
        {family ? <p className="mt-1 font-mono text-[11px] tracking-[0.08em] text-muted">{family.name}</p> : null}
      </div>
      <ul className="rating-col">
        {product.ratings.map((r, i) => (
          <li key={r}>
            <span className="n">{padIndex(i + 1)}</span>
            <span>{r}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FamilyList({ familyIds }: { familyIds: readonly string[] }) {
  const blocks = familyIds
    .map((id) => {
      const family = familyById(id);
      const rows = productsInFamily(id);
      if (!family || !rows.length) return null;
      return { family, rows };
    })
    .filter(Boolean) as { family: Family; rows: ReturnType<typeof productsInFamily> }[];

  return (
    <div>
      {blocks.map(({ family, rows }, fi) => (
        <section key={family.id} className="mt-14">
          <div className="folio">
            <span className="folio-mark">{padIndex(fi + 1)}</span>
          </div>
          <h2 className="section-kicker mt-2">{family.name}</h2>
          <p className="mt-1 max-w-2xl text-sm text-muted">{family.blurb}</p>
          <div className="contents-list mt-5">
            {rows.map((p) => (
              <TypeRow key={p.slug} product={p} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
