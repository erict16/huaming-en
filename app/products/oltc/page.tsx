import type { Metadata } from "next";
import { FamilyList } from "@/components/FamilyList";
import { familyGroups } from "@/lib/catalog";

export const metadata: Metadata = { title: "On-load tap changers" };

export default function OltcPage() {
  return (
    <main className="sheet">
      <div className="folio">
        <span>
          <span className="folio-mark">HM / 02</span>
          <span> · OLTC</span>
        </span>
      </div>
      <hr className="rule-strong mt-3" />
      <h1 className="display-sm mt-8">On-load tap changers</h1>
      <p className="lede mt-4">
        An OLTC changes taps while the transformer is live. Oil types break the arc in oil. Vacuum
        types break it in a bottle. HWV sits on the tank; the rest sit in it.
      </p>
      <FamilyList familyIds={familyGroups.oltc} />
    </main>
  );
}
