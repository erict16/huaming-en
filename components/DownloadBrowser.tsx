"use client";

import { useMemo, useState } from "react";
import { formatBytes } from "@/lib/format";

type Row = {
  file: string;
  title: string;
  products: string[];
  kind: string;
  lang: string;
  bytes?: number;
};

export function DownloadBrowser({ rows }: { rows: Row[] }) {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return rows;
    return rows.filter((r) =>
      [r.file, r.title, r.kind, r.lang, ...r.products].join(" ").toLowerCase().includes(needle),
    );
  }, [q, rows]);

  return (
    <div>
      <label className="block text-sm">
        Search type string
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="CV2, SHZV, CMA7…"
          className="mt-2 min-h-11 w-full max-w-md border border-rule bg-paper px-3 font-mono text-sm"
        />
      </label>
      <p className="mt-3 text-sm text-muted">
        {filtered.length} file{filtered.length === 1 ? "" : "s"}
      </p>
      {filtered.length === 0 ? (
        <p className="mt-6 text-sm">No files match. Try a type code or clear the search.</p>
      ) : (
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-rule text-muted">
                <th className="py-2 pr-3 font-medium">File</th>
                <th className="py-2 pr-3 font-medium">Product</th>
                <th className="py-2 pr-3 font-medium">Kind</th>
                <th className="py-2 pr-3 font-medium">Lang</th>
                <th className="py-2 font-medium">Size</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r) => (
                <tr key={r.file} className="border-b border-rule">
                  <td className="py-3 pr-3">
                    <a href={`/downloads/${r.file}`} className="underline">
                      {r.title}
                    </a>
                  </td>
                  <td className="py-3 pr-3 font-mono text-xs uppercase">
                    {r.products.join(", ") || "—"}
                  </td>
                  <td className="py-3 pr-3">{r.kind}</td>
                  <td className="py-3 pr-3 uppercase">{r.lang}</td>
                  <td className="py-3">{formatBytes(r.bytes ?? 0)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
