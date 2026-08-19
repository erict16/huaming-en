import type { Metadata } from "next";
import Link from "next/link";
import { FamilyList } from "@/components/FamilyList";
import { families } from "@/lib/catalog";

export const metadata: Metadata = { title: "Products" };

export default function ProductsPage() {
  return (
    <main className="sheet">
      <div className="folio">
        <span>
          <span className="folio-mark">HM / 02</span>
          <span> · Catalogue</span>
        </span>
        <span>OLTC · OCTC · Accessories</span>
      </div>
      <hr className="rule-strong mt-3" />
      <h1 className="display-sm mt-8">Products</h1>
      <p className="lede mt-4">
        Three jobs: on-load tap changers, de-energized tap changers, and accessories (motor drives,
        monitors). Vacuum is a technology inside OLTC, not a third family.
      </p>
      <nav className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm" aria-label="Families">
        <Link href="/products/oltc/" className="link-ink">
          OLTC
        </Link>
        <Link href="/products/octc/" className="link-ink">
          OCTC
        </Link>
        <Link href="/products/accessories/" className="link-ink">
          Accessories
        </Link>
      </nav>
      <FamilyList familyIds={families.map((f) => f.id)} />
    </main>
  );
}
