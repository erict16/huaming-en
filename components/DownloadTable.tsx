"use client";

import { useMemo, useState } from "react";
import { formatBytes } from "@/lib/format";

type Download = {
  file: string;
  title: string;
  products: string[];
  kind: string;
  lang: string;
  bytes?: number;
};

export function DownloadTable({ files }: { files: Download[] }) {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return files;
    return files.filter((f) => {
      const hay = [f.file, f.title, f.kind, f.lang, ...f.products].join(" ").toLowerCase();
      return hay.includes(needle);
    });
  }, [files, q]);

  return (
    <div>
      <label className="block text-sm">
        Search by type (CV2, SHZV, CMA7…)
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="mt-2 min-h-11 w-full max-w-md border border-rule bg-paper px-3"
        />
      </label>
      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-rule text-[12px] uppercase tracking-[0.08em] text-muted">
              <th className="py-2 pr-4 font-medium">Document</th>
              <th className="py-2 pr-4 font-medium">Type</th>
              <th className="py-2 pr-4 font-medium">Kind</th>
              <th className="py-2 pr-4 font-medium">Lang</th>
              <th className="py-2 font-medium">Size</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((f) => (
              <tr key={f.file} className="border-b border-rule">
                <td className="py-3 pr-4">
                  <a href={`/downloads/${encodeURIComponent(f.file)}`} className="underline">
                    {f.title}
                  </a>
                </td>
                <td className="py-3 pr-4 font-mono text-xs">
                  {f.products.length ? f.products.join(", ").toUpperCase() : "—"}
                </td>
                <td className="py-3 pr-4">{f.kind}</td>
                <td className="py-3 pr-4 uppercase">{f.lang}</td>
                <td className="py-3">{formatBytes(f.bytes ?? 0)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-muted">
        {filtered.length} file{filtered.length === 1 ? "" : "s"}
      </p>
    </div>
  );
}
