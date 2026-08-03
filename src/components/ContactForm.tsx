"use client";

import { useState, type FormEvent } from "react";
import { Loader2 } from "lucide-react";
import { submitEntry } from "@/lib/submit";

const fieldClass =
  "w-full border-b border-gray-200 bg-transparent py-4 text-navy placeholder:text-gray-400 focus:border-orange focus:outline-none";

export type ContactStrings = Record<string, string>;

export default function ContactForm({ t }: { t: ContactStrings }) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setSending(true);
    setError(null);
    const result = await submitEntry("contact-messages", data);
    setSending(false);
    if (result.ok) {
      setSent(true);
      form.reset();
    } else {
      // Keep what they typed so a failed send loses nothing.
      setError(result.error);
    }
  }

  return (
    <form className="max-w-[630px]" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        required
        placeholder={t.name}
        className={fieldClass}
      />
      <input
        type="email"
        name="email"
        required
        placeholder={t.email}
        className={`${fieldClass} mt-4`}
      />
      <input
        type="tel"
        name="phone"
        placeholder={t.phone}
        className={`${fieldClass} mt-4`}
      />
      <textarea
        name="message"
        required
        placeholder={t.message}
        rows={5}
        className={`${fieldClass} mt-4 resize-none`}
      />
      <button
        type="submit"
        disabled={sending}
        aria-busy={sending}
        className="mt-9 inline-flex items-center gap-2 rounded-lg bg-gradient-to-b from-orange to-orange-mid px-7 py-4 font-bold text-white shadow-[0_6px_16px_rgba(232,135,30,0.35)] transition-transform hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
      >
        {sending ? t.sending : t.submit}
        {sending && <Loader2 size={18} className="animate-spin" aria-hidden />}
      </button>
      {error && (
        <p className="mt-5 font-semibold text-red-600" role="alert">
          {error}
        </p>
      )}
      {sent && (
        <p className="mt-5 font-semibold text-green-700" role="status">
          {t.success}
        </p>
      )}
    </form>
  );
}
