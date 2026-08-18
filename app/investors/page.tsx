import type { Metadata } from "next";

export const metadata: Metadata = { title: "Investors" };

export default function InvestorsPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <p className="text-[12px] uppercase tracking-[0.16em] text-muted">Investors</p>
      <h1 className="font-serif mt-2 text-4xl">Listed company</h1>
      <p className="mt-5 text-[17px] leading-7">
        Shanghai Huaming Power Equipment Co., Ltd. is listed on the Shenzhen Stock Exchange.
        Stock code 002270.SZ. Credit code 913101076076323035.
      </p>
      <p className="mt-4 text-[17px] leading-7">
        The live English investor page, as fetched on 19 August 2026, had no filings, no annual
        report, and no English IR pack. We are not going to invent one.
      </p>
      <p className="mt-4 text-[17px] leading-7">
        Chinese disclosures sit with the exchange. Start at{" "}
        <a className="underline" href="http://www.szse.cn/">
          szse.cn
        </a>{" "}
        and search 002270.
      </p>
    </main>
  );
}
