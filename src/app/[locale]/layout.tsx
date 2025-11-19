import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { locales } from "@/i18n";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "CUBES Real Estate",
  description:
    "Building Sudan&apos;s Future - CUBES Construction & Real Estate",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

function LanguageSwitcher({ locale }: { locale: string }) {
  const otherLocale = locale === "en" ? "ar" : "en";
  return (
    <Link
      href={`/${otherLocale}`}
      className="px-3 py-1 rounded bg-amber-700 text-white text-sm font-medium hover:bg-amber-800 transition-colors"
    >
      {locale === "en" ? "العربية" : "English"}
    </Link>
  );
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();
  const isArabic = locale === "ar";

  return (
    <html lang={locale} dir={isArabic ? "rtl" : "ltr"}>
      <body className={isArabic ? "rtl" : "ltr"}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <nav className="bg-white sticky top-0 z-10 border-b border-gray-300">
            <div className="container mx-auto px-4 flex items-center justify-between py-6">
              <Link
                href={`/${locale}`}
                className="flex items-center gap-4 hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/logo.png"
                  alt="CUBES"
                  width={120}
                  height={120}
                  className="h-16 w-auto"
                />
                <span className="sr-only">CUBES Real Estate</span>
              </Link>
              <div className="flex items-center gap-6">
                <Link
                  href={`/${locale}`}
                  className="text-slate-900 font-medium hover:text-amber-700 transition-colors"
                >
                  {locale === "en" ? "Home" : "الرئيسية"}
                </Link>
                <Link
                  href={`/${locale}/about`}
                  className="text-slate-900 font-medium hover:text-amber-700 transition-colors"
                >
                  {locale === "en" ? "About" : "من نحن"}
                </Link>
                <Link
                  href={`/${locale}/people`}
                  className="text-slate-900 font-medium hover:text-amber-700 transition-colors"
                >
                  {locale === "en" ? "People" : "الفريق"}
                </Link>
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center justify-center bg-amber-700 text-white font-semibold rounded-lg px-6 py-2 hover:bg-amber-900 transition-all"
                >
                  {locale === "en" ? "Contact Us" : "اتصل بنا"}
                </Link>
                <LanguageSwitcher locale={locale} />
              </div>
            </div>
          </nav>

          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
