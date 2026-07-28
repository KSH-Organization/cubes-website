/**
 * Sitemap covering both locales.
 *
 * Each entry carries an `alternates.languages` map, which is the XML form of
 * hreflang. Declaring the pairs here as well as in the page `<head>` is what
 * Google recommends for bilingual sites: it lets the crawler learn about the
 * Arabic URLs without first having to fetch and parse the English ones.
 */
import type { MetadataRoute } from "next";
import {
    DEFAULT_LOCALE,
    LOCALES,
    ROUTES,
    absoluteUrl,
    localePath,
} from "@/lib/site-config";

/** Rough editorial priority. The home page outranks everything; `/career/apply`
 *  is a form, so it sits at the bottom. */
function priorityFor(route: string): number {
    if (route === "/") return 1;
    if (route === "/career/apply") return 0.3;
    if (route === "/about" || route === "/services") return 0.9;
    return 0.7;
}

function changeFrequencyFor(
    route: string,
): MetadataRoute.Sitemap[number]["changeFrequency"] {
    // News and vacancies turn over; the corporate pages rarely change.
    if (route === "/news" || route === "/career") return "weekly";
    return "monthly";
}

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    return ROUTES.flatMap((route) =>
        LOCALES.map((locale) => ({
            url: absoluteUrl(localePath(locale, route)),
            lastModified,
            changeFrequency: changeFrequencyFor(route),
            priority: priorityFor(route),
            alternates: {
                languages: Object.fromEntries([
                    ...LOCALES.map((l) => [l, absoluteUrl(localePath(l, route))]),
                    ["x-default", absoluteUrl(localePath(DEFAULT_LOCALE, route))],
                ]),
            },
        })),
    );
}
