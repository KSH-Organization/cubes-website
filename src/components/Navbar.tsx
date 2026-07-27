"use client";

import { useState } from "react";
import Link from "next/link";
import SmartImage from "./SmartImage";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export type NavbarProps = {
  brand: { name: string; tagline: string; logo: string };
  nav: Record<string, string>;
};

export default function Navbar({ brand, nav }: NavbarProps) {
  const links = [
    { href: "/", label: nav.home },
    { href: "/about", label: nav.about },
    { href: "/people", label: nav.people },
    { href: "/services", label: nav.services },
    { href: "/news", label: nav.news },
    { href: "/career", label: nav.career },
  ];

  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-navy">
      <div className="mx-auto flex h-[88px] max-w-[1200px] items-center justify-between px-5 lg:px-0">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <SmartImage
            src={brand.logo}
            alt={`${brand.name} logo`}
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
          />
          <span className="leading-tight">
            <span className="block text-base font-bold text-white">
              {brand.name}
            </span>
            <span className="block text-xs text-slate-300">{brand.tagline}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-semibold transition-colors hover:text-orange ${
                pathname === l.href ? "text-white" : "text-white/90"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-gradient-to-b from-orange to-orange-mid px-6 py-3 text-sm font-bold text-white shadow-[0_6px_18px_rgba(232,135,30,0.45)] transition-transform hover:scale-[1.03] sm:inline-block"
          >
            {nav.contact}
          </Link>
          <button
            type="button"
            aria-label={open ? nav.closeMenu : nav.openMenu}
            onClick={() => setOpen(!open)}
            className="text-white lg:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-navy px-5 pb-6 lg:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block border-b border-white/10 py-4 text-base font-semibold ${
                pathname === l.href ? "text-orange" : "text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-5 inline-block rounded-full bg-gradient-to-b from-orange to-orange-mid px-6 py-3 text-sm font-bold text-white"
          >
            {nav.contact}
          </Link>
        </nav>
      )}
    </header>
  );
}
