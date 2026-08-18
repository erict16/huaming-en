import type { Metadata } from "next";

export const metadata: Metadata = { title: "Why Huaming" };

export default function WhyPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <p className="text-[12px] uppercase tracking-[0.16em] text-muted">About</p>
      <h1 className="font-serif mt-2 text-4xl">Why buyers write</h1>
      <ul className="mt-8 space-y-6 text-[17px] leading-7">
        <li>
          <strong className="font-serif block text-xl">The range is one place.</strong>
          Vacuum and oil. In-tank and on-tank. Dry and gas. OCTC. Motor drives. You can name a type
          and take the PDF tonight.
        </li>
        <li>
          <strong className="font-serif block text-xl">Lead time about 4–6 weeks.</strong>
          That is the figure on the live Why-us page. Shorter on inquiry.
        </li>
        <li>
          <strong className="font-serif block text-xl">A standing export desk.</strong>
          International mail goes to Singapore. Factory is Shanghai. Plants and desks in Turkey,
          Indonesia, Brazil, and the United States.
        </li>
        <li>
          <strong className="font-serif block text-xl">Type tests, not slogans.</strong>
          CNAS lab from 2009. ISO 9001 / 14001 / 18001 as the current public pages claim. SHM-XE
          type-test reports sit on Downloads.
        </li>
      </ul>
      <p className="mt-10 text-sm text-muted">
        The live page also advertises an extended standard warranty. We will not invent the number
        of years. No prices on this site.
      </p>
    </main>
  );
}
