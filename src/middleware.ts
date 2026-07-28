/**
 * Maps the public URL shape onto the `[locale]` route segment.
 *
 * English is served un-prefixed (`/about`) and Arabic under `/ar/about`, but
 * both render from `src/app/[locale]/...`. This rewrites an un-prefixed request
 * to `/en/...` internally — the browser URL never changes, so English keeps the
 * exact URLs the site already had and nothing already indexed has to redirect.
 */
import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALES } from "@/lib/site-config";

const PREFIXED = LOCALES.filter((l) => l !== DEFAULT_LOCALE);

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Already addressed to a prefixed locale (`/ar/...`) → hits [locale] as-is.
    if (PREFIXED.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)))
        return NextResponse.next();

    // `/en/about` would render the same page as `/about` under a second URL,
    // which is a duplicate-content split. Redirect it away permanently.
    if (
        pathname === `/${DEFAULT_LOCALE}` ||
        pathname.startsWith(`/${DEFAULT_LOCALE}/`)
    ) {
        const url = request.nextUrl.clone();
        url.pathname = pathname.slice(`/${DEFAULT_LOCALE}`.length) || "/";
        return NextResponse.redirect(url, 308);
    }

    const url = request.nextUrl.clone();
    url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
    return NextResponse.rewrite(url);
}

export const config = {
    /**
     * Skip everything that isn't a page: API routes, Next's build output, and
     * the SEO/icon files that must stay at the origin root (`/sitemap.xml`,
     * `/robots.txt`, `/favicon.ico`, …). Rewriting those into `/en/...` would
     * 404 them, which is why the matcher lists them explicitly.
     */
    matcher: [
        "/((?!api|_next/static|_next/image|images|favicon.ico|icon.png|icon-maskable.png|apple-icon.png|opengraph-image|manifest.webmanifest|robots.txt|sitemap.xml).*)",
    ],
};
