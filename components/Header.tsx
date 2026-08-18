import Link from "next/link";

const links = [
  { href: "/products/", label: "Products" },
  { href: "/downloads/", label: "Downloads" },
  { href: "/about/", label: "About" },
  { href: "/news/", label: "News" },
];

export function Header() {
  return (
    <header className="border-b border-rule">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="flex items-center gap-3 text-[15px] font-semibold tracking-[0.14em]">
          <img src="/brand/logo.png" alt="" width={32} height={32} />
          HUAMING
        </Link>
        <nav className="hidden items-center gap-6 text-[13px] uppercase tracking-[0.08em] md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:underline">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://www.huaming.com"
            className="hidden text-[13px] text-muted sm:inline"
            lang="zh"
          >
            中文
          </a>
          <Link
            href="/contact/"
            className="inline-flex min-h-11 items-center bg-cta px-4 text-[13px] font-medium text-white"
          >
            Contact
          </Link>
        </div>
      </div>
      <nav className="flex gap-4 overflow-x-auto border-t border-rule px-5 py-2 text-[13px] uppercase tracking-[0.06em] md:hidden">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="whitespace-nowrap">
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
