/**
 * Root layout.
 *
 * Deliberately thin: `<html lang>` and `dir` depend on the locale, which only
 * `[locale]/layout.tsx` knows, so this file exists to satisfy Next's
 * requirement for a root layout and to carry the metadata that is identical in
 * every language (icons, PWA manifest, metadataBase).
 */
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site-config";
import { SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  // Makes every relative URL in a child page's metadata (OG images, canonicals)
  // resolve against the production origin instead of being dropped.
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  formatDetection: { telephone: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
