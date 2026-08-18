import Link from "next/link";
import { familyById, productsInFamily, type Family } from "@/lib/catalog";

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
      {blocks.map(({ family, rows }) => (
        <section key={family.id} className="mt-12">
          <h2 className="font-serif text-2xl">{family.name}</h2>
          <p className="mt-1 text-sm text-muted">{family.blurb}</p>
          <ul className="mt-4 divide-y divide-rule border-y border-rule">
            {rows.map((p) => (
              <li
                key={p.slug}
                className="flex flex-col gap-1 py-3 md:flex-row md:items-baseline md:justify-between"
              >
                <Link href={`/products/${p.slug}/`} className="font-mono underline">
                  {p.name}
                </Link>
                <span className="max-w-2xl text-sm">{p.oneLiner}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
