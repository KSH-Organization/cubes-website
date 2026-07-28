import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Montserrat, Manrope } from "next/font/google";
import { Cairo } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getContent, list, pick, text } from "@/lib/cms";
import {
  HTML_DIR,
  HTML_LANG,
  LOCALES,
  isLocale,
  localePath,
} from "@/lib/site-config";
import { SITE_NAME, metaFromContent, pageMetadata } from "@/lib/seo";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-manrope",
});

// Montserrat and Manrope have no Arabic glyphs — without an Arabic face the
// browser falls back to a default that clashes with the design. Cairo is
// metrically close and covers the script.
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-cairo",
});

/** Pre-renders `/` and `/ar` variants at build time instead of on demand. */
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

type LayoutParams = { params: Promise<{ locale: string }> };

export async function generateMetadata({
  params,
}: LayoutParams): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const c = await getContent(locale);
  const { title, description } = metaFromContent(c, "home");
  return pageMetadata({ locale, path: "/", title, description });
}

type Json = Record<string, unknown>;
type SocialRow = { key: string; label: string; href: string };

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode }> & LayoutParams) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  // Site chrome comes from the CMS too (brand, nav labels, footer links).
  const c = await getContent(locale);
  const brand = {
    name: text(c, "globals.brand.name"),
    tagline: text(c, "globals.brand.tagline"),
    logo: text(c, "globals.brand.logo"),
  };
  const nav = (pick(c, "globals.nav") ?? {}) as Record<string, string>;
  const footer = (pick(c, "globals.footer") ?? {}) as Json;

  // Placeholder hrefs ("#") must not reach schema.org `sameAs` — an unresolvable
  // profile URL invalidates the node.
  const sameAs = list<SocialRow>(c, "globals.footer.social")
    .map((s) => s.href)
    .filter((href) => href && href !== "#" && /^https?:\/\//.test(href));

  const orgDescription = text(c, "globals.footer.blurb");

  return (
    <html lang={HTML_LANG[locale]} dir={HTML_DIR[locale]}>
      <body
        className={`${montserrat.variable} ${manrope.variable} ${cairo.variable} antialiased`}
      >
        <JsonLd
          data={organizationSchema({
            locale,
            name: `${brand.name} ${brand.tagline}`.trim() || SITE_NAME,
            description: orgDescription,
            logo: brand.logo,
            email: text(c, "globals.footer.email"),
            phone: text(c, "globals.footer.phone"),
            sameAs,
          })}
        />
        <JsonLd
          data={websiteSchema({
            locale,
            name: brand.name || SITE_NAME,
            description: orgDescription,
          })}
        />
        <Navbar brand={brand} nav={nav} locale={locale} />
        <main>{children}</main>
        <Footer
          brand={brand}
          footer={footer as never}
          copyright={text(c, "globals.footer.copyright")}
          locale={locale}
        />
      </body>
    </html>
  );
}
