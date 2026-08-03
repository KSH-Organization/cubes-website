/**
 * One place that turns "which page, which language" into a complete Next.js
 * `Metadata` object: canonical, hreflang alternates, Open Graph, Twitter card.
 *
 * Pages call `pageMetadata()` rather than hand-assembling these, because the
 * parts that matter for search are the easy ones to forget — a canonical that
 * points at the wrong locale, or an hreflang set that omits `x-default`, does
 * more harm than having none at all.
 */
import type { Metadata } from "next";
import {
    DEFAULT_LOCALE,
    LOCALES,
    OG_LOCALE,
    absoluteUrl,
    localePath,
    type Locale,
} from "./site-config";
import { text, type Json } from "./cms";

/** Share-card image. 1200x630 is the size both Facebook and X crop cleanly. */
export const OG_IMAGE = {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
} as const;

/**
 * hreflang set for one page: every locale plus `x-default`.
 *
 * `x-default` points at the default locale — it tells Google what to serve a
 * user whose language matches none of the alternates, and its absence is the
 * single most common bilingual-SEO mistake.
 */
function alternates(path: string) {
    const languages: Record<string, string> = {};
    for (const locale of LOCALES) {
        languages[locale] = absoluteUrl(localePath(locale, path));
    }
    languages["x-default"] = absoluteUrl(localePath(DEFAULT_LOCALE, path));
    return languages;
}

export type PageMetaOptions = {
    locale: Locale;
    /** Locale-independent route, e.g. `/about`. */
    path: string;
    title: string;
    description: string;
    /** Page-specific share image; falls back to the site-wide OG image. */
    image?: string;
    /** Set on pages that should stay out of the index (thin or duplicate). */
    noIndex?: boolean;
};

export function pageMetadata({
    locale,
    path,
    title,
    description,
    image,
    noIndex,
}: PageMetaOptions): Metadata {
    const canonical = absoluteUrl(localePath(locale, path));
    const ogImage = image
        ? { url: image, width: OG_IMAGE.width, height: OG_IMAGE.height }
        : OG_IMAGE;

    return {
        title,
        description,
        alternates: { canonical, languages: alternates(path) },
        openGraph: {
            type: "website",
            url: canonical,
            title,
            description,
            siteName: SITE_NAME,
            locale: OG_LOCALE[locale],
            alternateLocale: LOCALES.filter((l) => l !== locale).map(
                (l) => OG_LOCALE[l],
            ),
            images: [ogImage],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [ogImage.url],
        },
        ...(noIndex
            ? { robots: { index: false, follow: true } }
            : {}),
    };
}

/** Brand name used in OG `siteName` and titles. Matches the CMS brand name but
 *  is needed at module scope, where the async CMS read isn't available. */
export const SITE_NAME = "Cubes";

/**
 * Pulls a page's title/description out of the merged CMS tree.
 *
 * `meta.description` is a new field: when the CMS has nothing for it (an editor
 * hasn't filled it, or the Arabic side is still empty) we fall back to the
 * page's hero subtitle, which is already a decent one-sentence summary of the
 * page — better than shipping a page with no description at all.
 */
export function metaFromContent(
    c: Json,
    base: string,
): { title: string; description: string } {
    return {
        title: text(c, `${base}.meta.title`),
        description:
            text(c, `${base}.meta.description`) ||
            text(c, `${base}.hero.subtitle`),
    };
}
