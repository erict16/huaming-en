import type { Metadata } from "next";
import { FamilyList } from "@/components/FamilyList";
import { familyGroups } from "@/lib/catalog";

export const metadata: Metadata = { title: "Accessories" };

export default function AccessoriesPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <p className="text-[12px] uppercase tracking-[0.16em] text-muted">Accessories</p>
      <h1 className="font-serif mt-2 text-4xl">Motor drives and monitors</h1>
      <p className="mt-4 max-w-2xl">
        The tap changer is the switch. The motor drive turns it. HWV already includes a drive on the
        commercial list — do not add CMA7 twice.
      </p>
      <FamilyList familyIds={familyGroups.accessories} />
    </main>
  );
}
