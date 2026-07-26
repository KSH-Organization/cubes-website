import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";
import {
  LinkedInIcon,
  InstagramIcon,
  TwitterIcon,
} from "@/components/SocialIcons";

const company = [
  { href: "/about", label: "About Us" },
  { href: "/people", label: "People" },
  { href: "/news", label: "News & Events" },
];

const services = [
  { href: "/services", label: "Project Management" },
  { href: "/services", label: "Real Estate" },
  { href: "/services", label: "Consulting" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-[1200px] px-5 pt-16 pb-10 lg:px-0">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto_auto_360px] lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="KSHC logo"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
              <span className="leading-tight">
                <span className="block text-lg font-bold">KSHC</span>
                <span className="block text-sm text-slate-300">
                  Construction &amp; Real Estate
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-[360px] text-[15px] leading-relaxed text-slate-200">
              Building the future of Sudan through sustainable development and
              innovative construction solutions.
            </p>
            <ul className="mt-6 space-y-3 text-[15px]">
              <li className="flex items-center gap-4">
                <MapPin size={20} className="shrink-0 text-orange" />
                <span>Location</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={20} className="shrink-0 text-orange" />
                <span>Email Address</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={20} className="shrink-0 text-orange" />
                <span>+24990000000</span>
              </li>
            </ul>
            <div className="mt-6 flex gap-4">
              {[
                { Icon: LinkedInIcon, label: "LinkedIn" },
                { Icon: InstagramIcon, label: "Instagram" },
                { Icon: TwitterIcon, label: "Twitter" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-mid text-white transition-transform hover:scale-105"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold text-orange">Company</h3>
            <ul className="mt-5 space-y-4 text-[15px]">
              {company.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="transition-colors hover:text-orange">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-orange">Services</h3>
            <ul className="mt-5 space-y-4 text-[15px]">
              {services.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="transition-colors hover:text-orange">
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
          © 2026 KSHC Construction &amp; Real Estate. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
