"use client";

import { useState } from "react";

const fieldClass =
  "w-full border-b border-gray-200 bg-transparent py-4 text-navy placeholder:text-gray-400 focus:border-orange focus:outline-none";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="max-w-[630px]"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        e.currentTarget.reset();
      }}
    >
      <input
        type="text"
        name="name"
        required
        placeholder="Your Name"
        className={fieldClass}
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Email Address"
        className={`${fieldClass} mt-4`}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number (optional)"
        className={`${fieldClass} mt-4`}
      />
      <textarea
        name="message"
        required
        placeholder="Message"
        rows={5}
        className={`${fieldClass} mt-4 resize-none`}
      />
      <button
        type="submit"
        className="mt-9 rounded-lg bg-gradient-to-b from-orange to-orange-mid px-7 py-4 font-bold text-white shadow-[0_6px_16px_rgba(232,135,30,0.35)] transition-transform hover:scale-[1.03]"
      >
        Leave us a Message
      </button>
      {sent && (
        <p className="mt-5 font-semibold text-green-700" role="status">
          Thank you! Your message has been received — our team will get back to
          you shortly.
        </p>
      )}
    </form>
  );
}
