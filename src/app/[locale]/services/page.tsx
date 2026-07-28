import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Archive,
  Check,
  ClipboardList,
  Home,
  LayoutPanelTop,
  PencilLine,
  ShieldCheck,
  Landmark,
  TrendingUp,
  CircleDot,
  BookOpenCheck,
  type LucideIcon,
} from "lucide-react";
import Hero from "@/components/Hero";
import RowIcon from "@/components/RowIcon";
import SectionHeading from "@/components/SectionHeading";
import { getContent, list, text } from "@/lib/cms";
import { isLocale, localePath } from "@/lib/site-config";
import { metaFromContent, pageMetadata } from "@/lib/seo";

type PageParams = { params: Promise<{ locale: string }> };

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const c = await getContent(locale);
  const { title, description } = metaFromContent(c, "services");
  return pageMetadata({ locale, path: "/services", title, description });
}

// Built-in icons per row `key`; an icon uploaded in the CMS for that row wins.
const OFFER_ICONS: Record<string, LucideIcon> = {
  pm: ClipboardList,
  re: Home,
  digital: Archive,
  pmo: LayoutPanelTop,
};

const RE_ICONS: Record<string, LucideIcon> = {
  market: CircleDot,
  design: PencilLine,
  compliance: ShieldCheck,
  execution: BookOpenCheck,
  marketing: TrendingUp,
  management: Landmark,
};

type OfferRow = { key: string; title: string; body: string; icon?: string };
type ItemRow = { key: string; title: string; body: string; icon?: string };
type CheckRow = { key: string; text: string };

function ChecklistGrid({ items }: { items: CheckRow[] }) {
  return (
    <div className="mt-12 grid gap-5 md:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.key}
          className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream">
            <Check size={18} className="text-orange-mid" />
          </span>
          <span className="font-bold text-navy">{item.text}</span>
        </div>
      ))}
    </div>
  );
}

export default async function ServicesPage({ params }: PageParams) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const c = await getContent(locale);
  const offers = list<OfferRow>(c, "services.offers.items");
  const pmItems = list<ItemRow>(c, "services.pm.items");
  const reItems = list<ItemRow>(c, "services.re.items");
  const digitalItems = list<CheckRow>(c, "services.digital.items");
  const pmoItems = list<CheckRow>(c, "services.pmo.items");

  return (
    <>
      <Hero
        image={text(c, "services.hero.image")}
        badge={text(c, "services.hero.badge")}
        dot={false}
        size="sm"
        title={text(c, "services.hero.title")}
        subtitle={text(c, "services.hero.subtitle")}
      />

      {/* What We Offer */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionHeading title={text(c, "services.offers.title")} underline />
          <div className="mt-14 grid gap-7 md:grid-cols-2">
            {offers.map(({ key, title, body, icon }) => (
              <div
                key={key}
                className="flex flex-col gap-5 rounded-2xl bg-gray-100 p-8 sm:flex-row sm:items-start"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-orange-mid text-white">
                  <RowIcon
                    src={icon}
                    fallback={OFFER_ICONS[key] ?? ClipboardList}
                    size={26}
                    alt={title}
                  />
                </span>
                <div>
                  <h3 className="text-[22px] leading-snug font-extrabold text-navy">
                    {title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-gray-500">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Management Services */}
      <section className="bg-gray-100 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionHeading align="left" title={text(c, "services.pm.title")} underline />
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {pmItems.map((item, i) => (
              <div key={item.key} className="rounded-xl bg-white p-7 shadow-md">
                <p className="text-lg font-bold text-orange-mid">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg leading-snug font-extrabold text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Estate Development */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionHeading align="left" title={text(c, "services.re.title")} underline />
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {reItems.map(({ key, title, body, icon }) => (
              <div
                key={key}
                className="rounded-xl border border-gray-100 bg-white p-7 shadow-sm"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-cream">
                  <RowIcon
                    src={icon}
                    fallback={RE_ICONS[key] ?? CircleDot}
                    size={22}
                    className="text-orange-mid"
                    alt={title}
                  />
                </span>
                <h3 className="mt-4 text-lg leading-snug font-extrabold text-navy">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Transformation */}
      <section className="bg-gray-100 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionHeading
            align="left"
            title={text(c, "services.digital.title")}
            underline
          />
          <ChecklistGrid items={digitalItems} />
        </div>
      </section>

      {/* PMO Support Services */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionHeading align="left" title={text(c, "services.pmo.title")} underline />
          <ChecklistGrid items={pmoItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-dark py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-5 text-center lg:px-0">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-[44px]">
            {text(c, "services.cta.title")}
          </h2>
          <Link
            href={localePath(locale, "/contact")}
            className="mt-10 inline-block rounded-lg bg-navy px-8 py-4 text-lg font-bold text-white shadow-lg transition-transform hover:scale-[1.03]"
          >
            {text(c, "services.cta.button")}
          </Link>
        </div>
      </section>
    </>
  );
}
