"use client";

import { useState } from "react";
import Image from "next/image";
// Assuming these imports correctly point to the next-intl wrapper functions
import { Link, useRouter, usePathname } from "@/i18n/navigation"; 
import { useLocale, useTranslations } from "next-intl";
import { Menu, X, Globe } from "lucide-react"; // Using lucide-react for icons

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Note: isDropdownOpen and isMobileDropdownOpen states were unused in the original code, 
  // so I'm simplifying by only using isMenuOpen for the mobile toggle.

  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("navbar"); 

  const handleLanguageChange = () => {
    const newLocale = locale === "ar" ? "en" : "ar";
    // This is the core logic for changing the language
    router.replace(pathname, { locale: newLocale });
  };
  
  // Define menu items statically for mapping
  const navItems = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/people", label: t("people") },
    // Contact is handled as a primary button, so we exclude it here
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-200 shadow-md">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-4">
          
          {/* Logo/Brand Link */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-90 transition-opacity"
            onClick={() => setIsMenuOpen(false)} // Close menu on navigation
          >
            <Image
              src="/images/logo.png"
              alt="CUBES"
              width={100}
              height={100}
              className="h-12 w-auto" // Adjusted size for a cleaner look
            />
            <span className="sr-only">CUBES Real Estate</span>
          </Link>
          
          {/* Desktop Menu and Controls */}
          <div className="hidden md:flex items-center gap-6">
            
            {/* Primary Nav Links */}
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate-700 font-medium text-lg hover:text-amber-600 transition-colors relative group"
              >
                {item.label}
                 {/* Underline effect */}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* Contact Button (Primary CTA) */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-amber-600 text-white font-semibold rounded-lg px-6 py-3 shadow-md hover:bg-amber-700 transition-all transform hover:scale-105"
            >
              {t("contactUs")}
            </Link>

            {/* Language Switcher */}
            <button 
              onClick={handleLanguageChange} 
              className="flex items-center gap-1 px-3 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium border border-gray-300 hover:bg-slate-200 transition-colors"
              aria-label={t("language")}
            >
                <Globe className="w-4 h-4"/>
                {t("language")}
            </button>
          </div>

          {/* Mobile Menu Button (Hamburger/X) */}
          <button
            className="md:hidden text-slate-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Content (Transition effect for smooth opening) */}
      <div 
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-max-height duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{
          // Use max-height transition trick for smooth open/close
          maxHeight: isMenuOpen ? '500px' : '0px',
          paddingBottom: isMenuOpen ? '16px' : '0px',
        }}
      >
        <div className="flex flex-col space-y-2 px-4 pb-4">
          {/* Mobile Nav Links */}
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-slate-700 font-medium py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          
          {/* Mobile Contact Button */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-amber-600 text-white font-semibold rounded-lg px-6 py-3 mt-2 shadow-md hover:bg-amber-700 transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("contactUs")}
          </Link>
          
          {/* Mobile Language Switcher */}
          <button 
            onClick={() => {
              handleLanguageChange();
              setIsMenuOpen(false);
            }} 
            className="flex items-center justify-center gap-2 px-3 py-3 rounded-lg bg-slate-100 text-slate-700 font-medium border border-gray-300 hover:bg-slate-200 transition-colors mt-2"
          >
              <Globe className="w-5 h-5"/>
              {t("language")}
          </button>
        </div>
      </div>
    </nav>
  );
}