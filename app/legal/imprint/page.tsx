import type { Metadata } from "next";

export const metadata: Metadata = { title: "Imprint" };

export default function ImprintPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <h1 className="font-serif text-4xl">Imprint</h1>
      <p className="mt-5 text-[17px] leading-7">
        Shanghai Huaming Power Equipment Co., Ltd.
        <br />
        Unified social credit code 913101076076323035
        <br />
        No. 977 Tongpu Road, Putuo District, Shanghai 200333, China
      </p>
      <p className="mt-4 text-[17px] leading-7">
        International headquarters
        <br />
        Huaming Power Equipment Singapore Pte. Ltd
        <br />
        Tai Seng Exchange (TSX) Tower A #03-13
        <br />
        1 Tai Seng Ave, Singapore 536464
      </p>
      <p className="mt-4 text-[17px] leading-7">
        Mail:{" "}
        <a className="underline" href="mailto:intl@huaming.com">
          intl@huaming.com
        </a>
      </p>
      <p className="mt-4 text-sm text-muted">
        This repository is an unreleased rebuild of the public English site intl-huaming.com. It is
        not a substitute for Chinese statutory filings.
      </p>
    </main>
  );
}
