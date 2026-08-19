import type { Metadata } from "next";
import { Suspense } from "react";
import { DownloadTable } from "@/components/DownloadTable";
import { allDownloads } from "@/lib/downloads.server";

export const metadata: Metadata = { title: "Downloads" };

export default function DownloadsPage() {
  const files = allDownloads();
  return (
    <main className="sheet sheet-wide">
      <div className="folio">
        <span>
          <span className="folio-mark">HM / 04</span>
          <span> · Library</span>
        </span>
        <span>No email gate</span>
      </div>
      <hr className="rule-strong mt-3" />
      <h1 className="display-sm mt-8">Downloads</h1>
      <p className="lede mt-4">
        Technical data, leaflets, operating instructions, and type-test reports. No email gate.
        Brochure wins if the old shop text disagrees.
      </p>
      <div className="mt-10">
        <Suspense fallback={<p className="text-sm text-muted">Loading the ledger…</p>}>
          <DownloadTable files={files} />
        </Suspense>
      </div>
    </main>
  );
}
