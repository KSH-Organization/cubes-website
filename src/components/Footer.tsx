import Link from "next/link";
import SmartImage from "./SmartImage";
import { MapPin, Mail, Phone } from "lucide-react";
import {
  LinkedInIcon,
  InstagramIcon,
  TwitterIcon,
} from "@/components/SocialIcons";
import RowIcon from "./RowIcon";
import { localePath, type Locale } from "@/lib/site-config";

type LinkRow = { key: string; label: string; href: string };
type SocialRow = { key: string; label: string; href: string; icon?: string };

export type FooterProps = {
  brand: { name: string; tagline: string; logo: string };
  footer: {
    blurb: string;
    location: string;
    email: string;
    phone: string;
    companyHeading: string;
    servicesHeading: string;
    company: LinkRow[];
    services: LinkRow[];
    social: SocialRow[];
  };
  copyright: string;
  locale: Locale;
};

// Built-in social marks per row `key`; an uploaded icon wins.
const SOCIAL_ICONS: Record<string, typeof LinkedInIcon> = {
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
};

export default function Footer({
  brand,
  footer,
  copyright,
  locale,
}: FooterProps) {
  const { company, services, social } = footer;
  // CMS link rows store locale-independent paths (`/about`); prefix them so a
  // visitor reading Arabic stays in Arabic when they follow one.
  const localize = (href: string) =>
    href.startsWith("/") ? localePath(locale, href) : href;
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-[1200px] px-5 pt-16 pb-10 lg:px-0">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto_auto_360px] lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <SmartImage
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
              <span className="leading-tight">
                <span className="block text-lg font-bold">{brand.name}</span>
                <span className="block text-sm text-slate-300">
                  {brand.tagline}
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-[360px] text-[15px] leading-relaxed text-slate-200">
              {footer.blurb}
            </p>
            <ul className="mt-6 space-y-3 text-[15px]">
              <li className="flex items-center gap-4">
                <MapPin size={20} className="shrink-0 text-orange" />
                <span>{footer.location}</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={20} className="shrink-0 text-orange" />
                <span>{footer.email}</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={20} className="shrink-0 text-orange" />
                <span>{footer.phone}</span>
              </li>
            </ul>
            <div className="mt-6 flex gap-4">
              {social.map((s) => {
                const Fallback = SOCIAL_ICONS[s.key] ?? LinkedInIcon;
                return (
                  <a
                    key={s.key}
                    href={s.href || "#"}
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-mid text-white transition-transform hover:scale-105"
                  >
                    <RowIcon
                      src={s.icon}
                      fallback={Fallback as never}
                      size={18}
                      alt={s.label}
                    />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold text-orange">
              {footer.companyHeading}
            </h3>
            <ul className="mt-5 space-y-4 text-[15px]">
              {company.map((l) => (
                <li key={l.key}>
                  <Link href={localize(l.href)} className="transition-colors hover:text-orange">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-orange">
              {footer.servicesHeading}
            </h3>
            <ul className="mt-5 space-y-4 text-[15px]">
              {services.map((l) => (
                <li key={l.key}>
                  <Link href={localize(l.href)} className="transition-colors hover:text-orange">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-orange">Stay Updated</h3>
            <form className="mt-5" action="#">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-12 w-full rounded-lg bg-white px-4 text-[15px] text-navy placeholder:text-slate-400 focus:outline-2 focus:outline-orange"
              />
              <button
                type="submit"
                className="mt-4 h-12 w-full rounded-lg bg-orange-dark text-[15px] font-bold text-white transition-colors hover:bg-orange-mid"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 border-t border-white/15 pt-8 text-center text-sm text-slate-200">
          {copyright}
        </div>
      </div>
    </footer>
  );
}
