/**
 * schema.org JSON-LD builders.
 *
 * These are what let Google show something richer than a blue link: the
 * Organization node backs the knowledge panel and puts the logo next to the
 * brand, BreadcrumbList replaces the URL line in results with a readable trail,
 * and JobPosting makes the career page's vacancies eligible for Google Jobs.
 *
 * Each returns a plain object; render it with <JsonLd data={...} />.
 */
import {
    HTML_LANG,
    SITE_URL,
    absoluteUrl,
    localePath,
    type Locale,
} from "./site-config";

type Json = Record<string, unknown>;

/** Stable @id values, so nodes on different pages refer to the same entity
 *  rather than looking like many separate organizations. */
const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

export function organizationSchema(opts: {
    locale: Locale;
    name: string;
    description: string;
    logo: string;
    email?: string;
    phone?: string;
    sameAs?: string[];
}): Json {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": ORG_ID,
        name: opts.name,
        url: absoluteUrl(localePath(opts.locale, "/")),
        description: opts.description,
        // The generated /icon.png is cropped tight to the mark; the bundled
        // logo.png is ~50% transparent padding, which Google renders as a
        // shrunken logo in the knowledge panel.
        logo: {
            "@type": "ImageObject",
            url: absoluteUrl("/icon.png"),
            width: 512,
            height: 512,
        },
        image: absoluteUrl(opts.logo),
        ...(contactPoint(opts.email, opts.phone) ?? {}),
        address: {
            "@type": "PostalAddress",
            addressCountry: "SD",
        },
        // Only real profile URLs belong here — `sameAs: ["#"]` is worse than
        // omitting it, so callers filter placeholders out first.
        ...(opts.sameAs?.length ? { sameAs: opts.sameAs } : {}),
    };
}

/**
 * Builds the ContactPoint node, but only from values that are actually contact
 * details.
 *
 * The CMS `footer.email` / `footer.phone` blocks currently hold placeholder
 * *labels* ("Email Address") rather than data, and publishing a label as a
 * machine-readable email is worse than publishing nothing — it feeds Google a
 * fact that is plainly wrong. These checks let the node appear on its own the
 * moment an editor replaces the placeholder with a real value.
 */
function contactPoint(email?: string, phone?: string): Json | null {
    const realEmail = email && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())
        ? email.trim()
        : null;
    // A placeholder like "+24990000000" is all zeroes after the country code.
    const digits = (phone ?? "").replace(/[^\d]/g, "");
    const realPhone =
        phone && digits.length >= 9 && !/^0+$/.test(digits.slice(4))
            ? phone.trim()
            : null;

    if (!realEmail && !realPhone) return null;
    return {
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            ...(realEmail ? { email: realEmail } : {}),
            ...(realPhone ? { telephone: realPhone } : {}),
            availableLanguage: ["en", "ar"],
        },
    };
}

export function websiteSchema(opts: {
    locale: Locale;
    name: string;
    description: string;
}): Json {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": SITE_ID,
        name: opts.name,
        url: absoluteUrl(localePath(opts.locale, "/")),
        description: opts.description,
        inLanguage: HTML_LANG[opts.locale],
        publisher: { "@id": ORG_ID },
    };
}

export function breadcrumbSchema(
    locale: Locale,
    trail: { name: string; path: string }[],
): Json {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: trail.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.name,
            item: absoluteUrl(localePath(locale, item.path)),
        })),
    };
}

export type VacancyRow = {
    key: string;
    title: string;
    location?: string;
    deadline?: string;
    qualifications?: string;
};

/**
 * Google Jobs requires `datePosted`; we don't track one, so the build date
 * stands in. `validThrough` only appears when the row's deadline parses as a
 * real date — a malformed value there invalidates the whole node.
 */
export function jobPostingSchema(
    vacancy: VacancyRow,
    opts: { locale: Locale; orgName: string; logo: string },
): Json {
    const validThrough = parseDeadline(vacancy.deadline);
    return {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        title: vacancy.title,
        description: vacancy.qualifications || vacancy.title,
        datePosted: new Date().toISOString().slice(0, 10),
        ...(validThrough ? { validThrough } : {}),
        employmentType: "FULL_TIME",
        hiringOrganization: {
            "@type": "Organization",
            name: opts.orgName,
            sameAs: SITE_URL,
            logo: absoluteUrl(opts.logo),
        },
        jobLocation: {
            "@type": "Place",
            address: {
                "@type": "PostalAddress",
                addressCountry: "SD",
                ...(vacancy.location
                    ? { addressLocality: vacancy.location }
                    : {}),
            },
        },
        directApply: true,
        url: absoluteUrl(localePath(opts.locale, "/career")),
    };
}

function parseDeadline(raw?: string): string | null {
    if (!raw) return null;
    const parsed = new Date(raw);
    return Number.isNaN(parsed.getTime())
        ? null
        : parsed.toISOString().slice(0, 10);
}
