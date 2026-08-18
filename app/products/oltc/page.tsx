import type { Metadata } from "next";
import { FamilyList } from "@/components/FamilyList";
import { familyGroups } from "@/lib/catalog";

export const metadata: Metadata = { title: "On-load tap changers" };

export default function OltcPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <p className="text-[12px] uppercase tracking-[0.16em] text-muted">OLTC</p>
      <h1 className="font-serif mt-2 text-4xl">On-load tap changers</h1>
      <p className="mt-4 max-w-2xl">
        An OLTC changes taps while the transformer is live. Oil types break the arc in oil. Vacuum
        types break it in a bottle. HWV sits on the tank; the rest sit in it.
      </p>
      <FamilyList familyIds={familyGroups.oltc} />
    </main>
  );
}
