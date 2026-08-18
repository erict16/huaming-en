import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <h1 className="font-serif text-4xl">Privacy</h1>
      <p className="mt-5 text-[17px] leading-7">
        This site is a public catalogue. It does not run an account system. The contact form opens
        your own mail app and sends to{" "}
        <a className="underline" href="mailto:intl@huaming.com">
          intl@huaming.com
        </a>
        . We do not store that form on a server tonight.
      </p>
      <p className="mt-4 text-[17px] leading-7">
        If you mail us, we use your name, address, and message to answer the inquiry. We do not sell
        that list.
      </p>
      <p className="mt-4 text-[17px] leading-7">
        Controller: Shanghai Huaming Power Equipment Co., Ltd., No. 977 Tongpu Road, Putuo
        District, Shanghai 200333, China. International desk: Huaming Power Equipment Singapore
        Pte. Ltd.
      </p>
    </main>
  );
}
