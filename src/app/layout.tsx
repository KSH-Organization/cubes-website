import type { Metadata } from "next";
import { Montserrat, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getContent, pick, text } from "@/lib/cms";

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

export const metadata: Metadata = {
  title: "KSHC | Construction & Real Estate",
  description:
    "KSHC Construction & Real Estate — driving sustainable growth through innovative construction and real estate across Sudan.",
};

type Json = Record<string, unknown>;

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Site chrome comes from the CMS too (brand, nav labels, footer links).
  const c = await getContent();
  const brand = {
    name: text(c, "globals.brand.name"),
    tagline: text(c, "globals.brand.tagline"),
    logo: text(c, "globals.brand.logo"),
  };
  const nav = (pick(c, "globals.nav") ?? {}) as Record<string, string>;
  const footer = (pick(c, "globals.footer") ?? {}) as Json;

  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${manrope.variable} antialiased`}
      >
        <Navbar brand={brand} nav={nav} />
        <main>{children}</main>
        <Footer
          brand={brand}
          footer={footer as never}
          copyright={text(c, "globals.footer.copyright")}
        />
      </body>
    </html>
  );
}
