"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const kinds = [
  "General inquiry",
  "Sales",
  "Service",
  "Technical support",
  "Career",
  "Feedback",
  "Other",
];

export function ContactForm({ product }: { product?: string }) {
  const params = useSearchParams();
  const fromQuery = product || params.get("product") || "";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [kind, setKind] = useState(kinds[0]);
  const [type, setType] = useState(fromQuery);
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const body = useMemo(() => {
    return [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Inquiry: ${kind}`,
      type ? `Product: ${type}` : "",
      "",
      message,
    ]
      .filter((line, i, arr) => line !== "" || arr[i - 1] !== "")
      .join("\n");
  }, [name, email, phone, kind, type, message]);

  const mailto = `mailto:intl@huaming.com?subject=${encodeURIComponent(
    type ? `Inquiry — ${type}` : "Inquiry from huaming-en",
  )}&body=${encodeURIComponent(body)}`;

  async function copySummary() {
    try {
      await navigator.clipboard.writeText(body);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <form
      className="mt-8 max-w-xl space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailto;
      }}
    >
      <label className="block text-sm">
        Name
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 min-h-11 w-full border border-rule bg-paper px-3"
        />
      </label>
      <label className="block text-sm">
        Email
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 min-h-11 w-full border border-rule bg-paper px-3"
        />
      </label>
      <label className="block text-sm">
        Phone
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1 min-h-11 w-full border border-rule bg-paper px-3"
        />
      </label>
      <label className="block text-sm">
        Type of inquiry
        <select
          value={kind}
          onChange={(e) => setKind(e.target.value)}
          className="mt-1 min-h-11 w-full border border-rule bg-paper px-3"
        >
          {kinds.map((k) => (
            <option key={k}>{k}</option>
          ))}
        </select>
      </label>
      <label className="block text-sm">
        Product (if you already have a type)
        <input
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="mt-1 min-h-11 w-full border border-rule bg-paper px-3"
        />
      </label>
      <label className="block text-sm">
        Message
        <textarea
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 w-full border border-rule bg-paper px-3 py-2"
        />
      </label>
      <div className="flex flex-wrap gap-3">
        <button type="submit" className="min-h-11 bg-cta px-5 text-sm text-white">
          Open email to intl@huaming.com
        </button>
        <button type="button" onClick={copySummary} className="min-h-11 border border-rule px-5 text-sm">
          {copied ? "Copied" : "Copy summary"}
        </button>
      </div>
      <p className="text-sm text-muted">
        This page does not send mail from the server. It opens your mail app, or you can copy the
        text.
      </p>
    </form>
  );
}
