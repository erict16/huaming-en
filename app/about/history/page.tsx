import type { Metadata } from "next";

export const metadata: Metadata = { title: "History" };

const milestones = [
  ["1995", "Shanghai Huaming Power Equipment Co., Ltd. established as a PRC limited liability company."],
  ["1999", "First tap-changer exports to Italy and Germany."],
  ["2003", "Fengxian, Shanghai manufacturing base expanded."],
  ["2007", "Named a Shanghai Patent Demonstration Enterprise."],
  ["2008", "OLTC named a Shanghai Famous Brand."],
  ["2009", "Tap-changer testing centre received CNAS laboratory accreditation."],
  ["2015", "Listed on the Shenzhen Stock Exchange after a major asset restructuring (002270.SZ)."],
  ["2016", "Turkey production base started. Shandong Fin CNC brought under the listed company name."],
  ["2019", "Sales and service outlets in Brazil and the United States."],
  ["2022", "Wholly-owned Singapore subsidiary. MIIT “Little Giant” recognition."],
  ["2023", "Tap-changer named among the first set of major technical equipment in the energy field (NEA)."],
  ["2024", "National Manufacturing Champion Enterprise (MIIT)."],
  ["2025", "Vacuum OLTC in commercial service on Longdong–Shandong ±800 kV UHV DC. Indonesia plant started."],
];

export default function HistoryPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <p className="text-[12px] uppercase tracking-[0.16em] text-muted">About</p>
      <h1 className="font-serif mt-2 text-4xl">History</h1>
      <p className="mt-4 text-[17px] leading-7">
        Dates below come from the live English history page. We did not add years that page does
        not print.
      </p>
      <ol className="mt-10 divide-y divide-rule border-y border-rule">
        {milestones.map(([year, text]) => (
          <li key={year} className="grid gap-2 py-4 sm:grid-cols-[5rem_1fr]">
            <span className="font-mono text-sm">{year}</span>
            <span>{text}</span>
          </li>
        ))}
      </ol>
    </main>
  );
}
