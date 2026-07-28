/**
 * Everything the SEO layer needs to know about *where* this site lives and
 * *which languages* it speaks. Kept apart from `src/content/site.ts` (which is
 * editable copy) because none of this is a thing an editor should change from
 * the CMS — a wrong origin silently breaks canonicals and every share card.
 */

/**
 * Production origin, no trailing slash.
 *
 * Overridable via NEXT_PUBLIC_SITE_URL so preview deploys can advertise their
 * own origin instead of claiming to be production (two hosts serving identical
 * pages under the same canonical is how you get the wrong one indexed).
 */
export const SITE_URL = (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://cubes.kshcholding.com"
).replace(/\/+$/, "");

export const LOCALES = ["en", "ar"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const isLocale = (v: string): v is Locale =>
    (LOCALES as readonly string[]).includes(v);

/** `<html lang>` / hreflang values. Region-less: the site targets Arabic and
 *  English speakers generally, not one country's variant. */
export const HTML_LANG: Record<Locale, string> = { en: "en", ar: "ar" };

export const HTML_DIR: Record<Locale, "ltr" | "rtl"> = { en: "ltr", ar: "rtl" };

/** Open Graph `locale` wants the underscored territory form. */
export const OG_LOCALE: Record<Locale, string> = { en: "en_US", ar: "ar_AR" };

export const LOCALE_LABEL: Record<Locale, string> = {
    en: "English",
    ar: "العربية",
};

/**
 * The default locale is served from the root (`/about`), the others under a
 * prefix (`/ar/about`). Keeping English un-prefixed preserves the URLs the site
 * already has, so nothing that is already indexed or linked has to redirect.
 */
export function localePath(locale: Locale, path: string): string {
    const clean = path === "/" ? "" : path.replace(/\/+$/, "");
    if (locale === DEFAULT_LOCALE) return clean === "" ? "/" : clean;
    return `/${locale}${clean}`;
}

export function absoluteUrl(path: string): string {
    return `${SITE_URL}${path === "/" ? "" : path}`;
}

/** Every routable page, as a locale-independent path. Drives the sitemap, the
 *  hreflang pairs, and the language switcher — one list, so they can't drift. */
export const ROUTES = [
    "/",
    "/about",
    "/people",
    "/services",
    "/news",
    "/career",
    "/career/apply",
    "/contact",
] as const;
