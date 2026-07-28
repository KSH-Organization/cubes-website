import type { MetadataRoute } from "next";
import { SITE_URL, absoluteUrl } from "@/lib/site-config";

/**
 * Crawling rules.
 *
 * Non-production origins disallow everything: a staging copy that gets indexed
 * competes with the real site for the same content, and cleaning that up after
 * the fact is far harder than preventing it.
 */
export default function robots(): MetadataRoute.Robots {
    const isProduction = SITE_URL === "https://cubes.kshcholding.com";

    if (!isProduction) {
        return { rules: [{ userAgent: "*", disallow: "/" }] };
    }

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                // Nothing to hide, but the form endpoints have no index value.
                disallow: ["/api/"],
            },
        ],
        sitemap: absoluteUrl("/sitemap.xml"),
        host: SITE_URL,
    };
}
