import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "CUBES Real Estate",
  description: "Building Sudan’s Future — CUBES Construction & Real Estate",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="container flex items-center justify-between py-6">
            <Link href="/" className="flex items-center gap-4">
              <Image src="/images/logo.png" alt="CUBES" width={40} height={40} />
              <span className="sr-only">CUBES Real Estate</span>
            </Link>
            <div className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/people">People</Link>
              <Link href="/contact" className="btn">Contact Us</Link>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
