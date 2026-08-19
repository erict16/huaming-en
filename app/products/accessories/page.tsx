import type { Metadata } from "next";
import { FamilyList } from "@/components/FamilyList";
import { familyGroups } from "@/lib/catalog";

export const metadata: Metadata = { title: "Accessories" };

export default function AccessoriesPage() {
  return (
    <main className="sheet">
      <div className="folio">
        <span>
          <span className="folio-mark">HM / 02</span>
          <span> · Accessories</span>
        </span>
      </div>
      <hr className="rule-strong mt-3" />
      <h1 className="display-sm mt-8">Motor drives and accessories</h1>
      <p className="lede mt-4">
        The motor drive turns the tap changer. Monitors and relays sit beside it. Not a fourth
        tap-changer family. Do not add CMA7 a second time on HWV.
      </p>
      <FamilyList familyIds={familyGroups.accessories} />
    </main>
  );
}
