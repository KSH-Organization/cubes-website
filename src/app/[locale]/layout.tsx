import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import Navbar from "./components/Navbar";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "CUBES Real Estate",
  description:
    "Building Sudan&apos;s Future - CUBES Construction & Real Estate",
};





export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
 const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body >
        <NextIntlClientProvider>
          <Navbar />

          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
