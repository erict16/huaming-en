"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { formatKind, parseDocMeta } from "@/lib/doc-meta";
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
  const params = useSearchParams();
  const [q, setQ] = useState(() => params.get("q") ?? "");
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
      <label className="block text-sm" htmlFor="dl-q">
        Search by type (CV2, SHZV, CMA7…)
        <input
          id="dl-q"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="field mt-1 max-w-md"
        />
      </label>
      <div className="ledger-wrap mt-8">
        <table className="ledger">
          <thead>
            <tr>
              <th>Document</th>
              <th>Type</th>
              <th>Kind</th>
              <th>Lang</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((f) => {
              const meta = parseDocMeta(f.file, f.title);
              return (
                <tr key={f.file}>
                  <td>
                    <a href={`/downloads/${encodeURIComponent(f.file)}`}>{f.title}</a>
                    {meta.docNo || meta.year ? (
                      <span className="doc-meta">
                        {[meta.docNo, meta.year].filter(Boolean).join(" · ")}
                      </span>
                    ) : null}
                  </td>
                  <td className="font-mono text-xs tracking-[0.04em]">
                    {f.products.length ? f.products.join(", ").toUpperCase() : "—"}
                  </td>
                  <td className="capitalize">{formatKind(f.kind)}</td>
                  <td className="uppercase">{f.lang}</td>
                  <td>{formatBytes(f.bytes ?? 0)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-4 font-mono text-xs tracking-[0.08em] text-muted" role="status" aria-atomic="true">
        {filtered.length} file{filtered.length === 1 ? "" : "s"}
      </p>
    </div>
  );
}
