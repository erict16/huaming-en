import Link from "next/link";
import { offices } from "@/lib/catalog";

export function Footer() {
  const shanghai = offices.find((o) => o.id === "shanghai");
  const singapore = offices.find((o) => o.id === "singapore");
  return (
    <footer className="colophon">
      <div className="colophon-inner">
        <div className="folio">
          <span className="folio-mark">HM · Technical catalogue</span>
          <span>Shanghai · Singapore</span>
        </div>
        <hr className="rule mt-4" />
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          <div>
            <p className="folio">Legal</p>
            <p className="mt-3 font-medium">{shanghai?.name}</p>
            <p className="mt-1 text-sm text-muted">Credit code {shanghai?.creditCode}</p>
            <p className="mt-4 text-sm">
              <Link href="/legal/privacy/" className="link-ink">
                Privacy
              </Link>
              {" · "}
              <Link href="/legal/imprint/" className="link-ink">
                Imprint
              </Link>
            </p>
          </div>
          <div>
            <p className="folio">Shanghai</p>
            {shanghai?.lines.map((line) => (
              <p key={line} className="mt-1 text-sm">
                {line}
              </p>
            ))}
            <p className="folio mt-7">Singapore</p>
            {singapore?.lines.map((line) => (
              <p key={line} className="mt-1 text-sm">
                {line}
              </p>
            ))}
            <p className="mt-2 text-sm">
              <a href="mailto:intl@huaming.com" className="link-ink">
                intl@huaming.com
              </a>
            </p>
          </div>
          <div>
            <p className="folio">Also</p>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li>
                <Link href="/learn/" className="link-ink">
                  What a tap changer is
                </Link>
              </li>
              <li>
                <a href="https://erict16.github.io/oltc-selector/" className="link-ink">
                  Type selector
                </a>
              </li>
              <li>
                <a href="https://erict16.github.io/huaming-hub/" className="link-ink">
                  Buyer docs (Hub)
                </a>
              </li>
              <li>
                <Link href="/contact/" className="link-ink">
                  Offices
                </Link>
              </li>
              <li>
                <a href="https://www.huaming.com" className="link-ink" lang="zh">
                  中文 huaming.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
