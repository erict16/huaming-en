import type { Metadata } from "next";
import { FamilyList } from "@/components/FamilyList";
import { familyGroups } from "@/lib/catalog";

export const metadata: Metadata = { title: "De-energized tap changers" };

export default function OctcPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <p className="text-[12px] uppercase tracking-[0.16em] text-muted">OCTC / DETC</p>
      <h1 className="font-serif mt-2 text-4xl">De-energized tap changers</h1>
      <p className="mt-4 max-w-2xl">
        Change taps only with the transformer off. Cage (WSL / WDL), drum (WDG), linear (ZWC). Not
        on-load. Not a vacuum filter.
      </p>
      <FamilyList familyIds={familyGroups.octc} />
    </main>
  );
}
