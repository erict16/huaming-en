import type { Metadata } from "next";

export const metadata: Metadata = { title: "Careers" };

export default function CareersPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <p className="text-[12px] uppercase tracking-[0.16em] text-muted">Careers</p>
      <h1 className="font-serif mt-2 text-4xl">Work</h1>
      <p className="mt-5 text-[17px] leading-7">
        The live English career page is a values page. It does not list open roles. We will not
        invent vacancies.
      </p>
      <p className="mt-4 text-[17px] leading-7">
        If you want to write, send a short note and a CV to{" "}
        <a className="underline" href="mailto:intl@huaming.com?subject=Career">
          intl@huaming.com
        </a>{" "}
        and pick Career on the contact form.
      </p>
      <p className="mt-4 text-sm text-muted">
        Factory hiring in Shanghai is usually handled in Chinese on huaming.com. That site returned
        HTTP 500 when we last checked it (19 August 2026).
      </p>
    </main>
  );
}
