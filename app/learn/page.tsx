import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import path from "node:path";

export const metadata: Metadata = { title: "What a tap changer is" };

function mdToBlocks(src: string) {
  return src
    .replace(/^# .+\n+/, "")
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean);
}

export default function LearnPage() {
  const raw = readFileSync(path.join(process.cwd(), "content/learn.md"), "utf8");
  const blocks = mdToBlocks(raw);
  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <p className="text-[12px] uppercase tracking-[0.16em] text-muted">Learn</p>
      <article className="prose-hm mt-4 space-y-5 text-[17px] leading-7">
        {blocks.map((block, i) => {
          if (block.startsWith("## ")) {
            return (
              <h2 key={i} className="font-serif pt-4 text-2xl">
                {block.replace(/^## /, "")}
              </h2>
            );
          }
          const html = block
            .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
            .replace(
              /\[([^\]]+)\]\(([^)]+)\)/g,
              '<a class="underline" href="$2">$1</a>',
            )
            .replace(/\n/g, "<br />");
          return <p key={i} dangerouslySetInnerHTML={{ __html: html }} />;
        })}
      </article>
    </main>
  );
}
