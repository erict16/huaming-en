import type { Metadata } from "next";
import { FamilyList } from "@/components/FamilyList";
import { familyGroups } from "@/lib/catalog";

export const metadata: Metadata = { title: "De-energized tap changers" };

export default function OctcPage() {
  return (
    <main className="sheet">
      <div className="folio">
        <span>
          <span className="folio-mark">HM / 02</span>
          <span> · OCTC / DETC</span>
        </span>
      </div>
      <hr className="rule-strong mt-3" />
      <h1 className="display-sm mt-8">De-energized tap changers</h1>
      <p className="lede mt-4">
        Change taps only with the transformer off. Cage (WSL / WDL), drum (WDG), linear (ZWC). Not
        on-load. Not a vacuum filter.
      </p>
      <FamilyList familyIds={familyGroups.octc} />
    </main>
  );
}
