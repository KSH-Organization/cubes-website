"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_LABEL,
  localePath,
  type Locale,
} from "@/lib/site-config";

/**
 * Switches language while staying on the same page.
 *
 * Landing on the home page instead would be both a worse experience and a
 * weaker signal: the hreflang pair for `/about` claims `/ar/about` exists, so
 * the visible link should agree with it.
 */
export default function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() || "/";
  const other = LOCALES.find((l) => l !== locale) ?? DEFAULT_LOCALE;

  // Strip any locale prefix to recover the locale-independent route.
  const bare =
    LOCALES.reduce(
      (p, l) => (p === `/${l}` ? "/" : p.replace(new RegExp(`^/${l}/`), "/")),
      pathname,
    ) || "/";

  return (
    <Link
      href={localePath(other, bare)}
      hrefLang={other}
      lang={other}
      aria-label={`Switch language to ${LOCALE_LABEL[other]}`}
      className="flex items-center gap-1.5 rounded-full border border-white/25 px-3 py-2 text-sm font-semibold text-white transition-colors hover:border-orange hover:text-orange"
    >
      <Languages size={16} aria-hidden="true" />
      <span>{LOCALE_LABEL[other]}</span>
    </Link>
  );
}
