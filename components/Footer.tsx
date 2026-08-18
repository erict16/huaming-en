import Link from "next/link";
import { offices } from "@/lib/catalog";

export function Footer() {
  const shanghai = offices.find((o) => o.id === "shanghai");
  const singapore = offices.find((o) => o.id === "singapore");
  return (
    <footer className="mt-20 border-t border-rule">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-3">
        <div>
          <p className="text-[13px] uppercase tracking-[0.12em] text-muted">Legal</p>
          <p className="mt-2 font-medium">{shanghai?.name}</p>
          <p className="mt-1 text-sm text-muted">Credit code {shanghai?.creditCode}</p>
          <p className="mt-4 text-sm">
            <Link href="/legal/privacy/" className="underline">
              Privacy
            </Link>
            {" · "}
            <Link href="/legal/imprint/" className="underline">
              Imprint
            </Link>
          </p>
        </div>
        <div>
          <p className="text-[13px] uppercase tracking-[0.12em] text-muted">Shanghai</p>
          {shanghai?.lines.map((line) => (
            <p key={line} className="mt-1 text-sm">
              {line}
            </p>
          ))}
          <p className="mt-6 text-[13px] uppercase tracking-[0.12em] text-muted">Singapore</p>
          {singapore?.lines.map((line) => (
            <p key={line} className="mt-1 text-sm">
              {line}
            </p>
          ))}
          <p className="mt-2 text-sm">
            <a href="mailto:intl@huaming.com" className="underline">
              intl@huaming.com
            </a>
          </p>
        </div>
        <div>
          <p className="text-[13px] uppercase tracking-[0.12em] text-muted">Also</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <Link href="/learn/" className="underline">
                What a tap changer is
              </Link>
            </li>
            <li>
              <a href="https://erict16.github.io/oltc-selector/" className="underline">
                Type selector
              </a>
            </li>
            <li>
              <a href="https://erict16.github.io/huaming-hub/" className="underline">
                Buyer docs (Hub)
              </a>
            </li>
            <li>
              <Link href="/contact/" className="underline">
                Offices
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
