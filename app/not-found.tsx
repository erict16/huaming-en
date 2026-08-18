import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-20">
      <h1 className="font-serif text-4xl">Page missing</h1>
      <p className="mt-4">That URL is not in this catalogue.</p>
      <p className="mt-4 text-sm">
        <Link href="/" className="underline">
          Home
        </Link>
        {" · "}
        <Link href="/products/" className="underline">
          Products
        </Link>
        {" · "}
        <Link href="/downloads/" className="underline">
          Downloads
        </Link>
      </p>
    </main>
  );
}
