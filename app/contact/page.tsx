import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { offices } from "@/lib/catalog";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <p className="text-[12px] uppercase tracking-[0.16em] text-muted">Mail</p>
      <h1 className="font-serif mt-2 text-4xl">Contact</h1>
      <p className="mt-4 max-w-2xl text-[17px] leading-7">
        International inquiries:{" "}
        <a className="underline" href="mailto:intl@huaming.com">
          intl@huaming.com
        </a>
        . Singapore is the international headquarters. Shanghai is the factory.
      </p>
      <Suspense>
        <ContactForm />
      </Suspense>
      <section className="mt-16">
        <h2 className="font-serif text-2xl">Offices</h2>
        <ul className="mt-6 grid gap-8 md:grid-cols-2">
          {offices.map((o) => (
            <li key={o.id} className="border-t border-rule pt-4">
              <p className="text-[12px] uppercase tracking-[0.12em] text-muted">{o.role}</p>
              <p className="mt-1 font-medium">{o.name}</p>
              {o.lines.map((line) => (
                <p key={line} className="text-sm">
                  {line}
                </p>
              ))}
              {o.email ? (
                <p className="mt-2 text-sm">
                  <a className="underline" href={`mailto:${o.email}`}>
                    {o.email}
                  </a>
                </p>
              ) : null}
              {o.web ? (
                <p className="text-sm">
                  <a className="underline" href={o.web}>
                    {o.web.replace(/^https?:\/\//, "")}
                  </a>
                </p>
              ) : null}
              {"phone" in o && o.phone ? <p className="text-sm">{o.phone}</p> : null}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
