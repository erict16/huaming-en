import type { Metadata } from "next";

export const metadata: Metadata = { title: "Renewable energy" };

export default function RenewablePage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <p className="text-[12px] uppercase tracking-[0.16em] text-muted">Other businesses</p>
      <h1 className="font-serif mt-2 text-4xl">Solar EPC and CNC</h1>
      <p className="mt-5 text-[17px] leading-7">
        Tap changers are the company. After the 2015 listing the group also built a solar EPC desk
        and a CNC machine business (Shandong FIN).
      </p>
      <p className="mt-4 text-[17px] leading-7">
        The live home says nearly 1 GWp of solar EPC since 2016 (poverty-alleviation, fishery-solar,
        ground mount, micro-grid, wind-farm booster stations). The live about page says about 600 MW
        of photovoltaic investment. Those are quotes from that site. We do not raise them.
      </p>
      <p className="mt-4 text-[17px] leading-7">
        This English site does not sell solar modules and does not take EPC inquiries as its first
        job. Write to{" "}
        <a className="underline" href="mailto:intl@huaming.com">
          intl@huaming.com
        </a>{" "}
        if that is why you came.
      </p>
    </main>
  );
}
