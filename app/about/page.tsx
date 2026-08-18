import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <p className="text-[12px] uppercase tracking-[0.16em] text-muted">Company</p>
      <h1 className="font-serif mt-2 text-4xl">About Huaming</h1>
      <p className="mt-5 text-[17px] leading-7">
        Shanghai Huaming Power Equipment Co., Ltd. makes tap changers for power transformers:
        on-load (OLTC) and de-energized (OCTC), vacuum and oil, plus the motor drive.
      </p>
      <p className="mt-4 text-[17px] leading-7">
        Legal name: Shanghai Huaming Power Equipment Co., Ltd. Credit code 913101076076323035.
        Factory at No. 977 Tongpu Road, Putuo District, Shanghai 200333. International mail:{" "}
        <a className="underline" href="mailto:intl@huaming.com">
          intl@huaming.com
        </a>
        .
      </p>
      <p className="mt-4 text-[17px] leading-7">
        International headquarters: Huaming Power Equipment Singapore Pte. Ltd, Tai Seng Exchange
        (TSX) Tower A #03-13, 1 Tai Seng Ave, Singapore 536464. The company announced that office
        on 29 April 2025.
      </p>

      <h2 className="font-serif mt-12 text-2xl">Facts</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-[17px] leading-7">
        <li>Shanghai company. The live home says founded 1989; the history page starts the listed subsidiary in 1995.</li>
        <li>Listed Shenzhen 2015, stock code 002270.SZ. Acquired Changzheng Electric in 2018.</li>
        <li>Chairman: Xiao Yi (肖毅), general manager since 1995.</li>
        <li>Tap changers in 150+ countries, including North Sea platforms and offshore wind (chairman letter).</li>
        <li>Standard lead time about 4–6 weeks.</li>
        <li>CNAS laboratory accreditation, 2009. Public pages list ISO 9001, ISO 14001, and ISO 18001.</li>
        <li>Turkey plant 2016. Brazil and USA outlets 2019. Singapore subsidiary 2022. Indonesia plant 2025.</li>
        <li>CHVT at Longdong ±800 kV HVDC, commissioned 28 May 2025.</li>
        <li>About page: about 600 MW of photovoltaic investment. Home: nearly 1 GWp of solar EPC since 2016.</li>
      </ul>

      <h2 className="font-serif mt-12 text-2xl">From the chairman</h2>
      <p className="mt-4 text-[17px] leading-7">
        Xiao Yi has run Huaming since 1995. The company ships tap changers to 150+ countries. He
        writes that quality and after-sales service are what the company is for.
      </p>

      <p className="mt-10 text-sm">
        <Link href="/about/history/" className="underline">
          History
        </Link>
        {" · "}
        <Link href="/about/why/" className="underline">
          Why Huaming
        </Link>
      </p>
    </main>
  );
}
