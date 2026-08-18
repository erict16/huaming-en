import type { Metadata } from "next";
import { DownloadTable } from "@/components/DownloadTable";
import { allDownloads } from "@/lib/downloads.server";

export const metadata: Metadata = { title: "Downloads" };

export default function DownloadsPage() {
  const files = allDownloads();
  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <p className="text-[12px] uppercase tracking-[0.16em] text-muted">Library</p>
      <h1 className="font-serif mt-2 text-4xl">Downloads</h1>
      <p className="mt-4 max-w-2xl">
        Technical data, leaflets, operating instructions, and type-test reports. No email gate.
        Brochure wins if the old shop text disagrees.
      </p>
      <div className="mt-10">
        <DownloadTable files={files} />
      </div>
    </main>
  );
}
