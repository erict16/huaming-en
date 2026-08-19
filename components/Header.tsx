import Link from "next/link";

const links = [
  { href: "/products/", label: "Products" },
  { href: "/downloads/", label: "Downloads" },
  { href: "/about/", label: "About" },
  { href: "/news/", label: "News" },
];

export function Header() {
  return (
    <header className="masthead">
      <div className="masthead-inner">
        <Link href="/" className="wordmark">
          <img src="/brand/logo.png" alt="" width={28} height={28} />
          <span>
            <span className="wordmark-name">Huaming</span>
            <span className="wordmark-sub">Technical catalogue</span>
          </span>
        </Link>
        <nav className="mast-nav hidden md:flex" aria-label="Primary">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="mast-tools">
          <form action="/downloads/" method="get" role="search" className="hidden lg:block">
            <label className="sr-only" htmlFor="mast-q">
              Search types and PDFs
            </label>
            <input
              id="mast-q"
              name="q"
              type="search"
              placeholder="CV2, SHZV…"
              className="field field-slim"
            />
          </form>
          <a href="https://www.huaming.com" className="hidden text-[13px] text-muted sm:inline" lang="zh">
            中文
          </a>
          <Link href="/contact/" className="btn-cta">
            Contact
          </Link>
        </div>
      </div>
      <nav
        className="flex gap-5 overflow-x-auto border-t border-rule px-5 py-2 text-[13px] md:hidden"
        aria-label="Primary"
      >
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="whitespace-nowrap py-2">
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
