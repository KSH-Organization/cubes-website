import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import NewsTabs from "@/components/NewsTabs";
import EventsCarousel from "@/components/EventsCarousel";
import { getContent, list, pick, text } from "@/lib/cms";
import { isLocale, localePath } from "@/lib/site-config";
import { metaFromContent, pageMetadata } from "@/lib/seo";

type PageParams = { params: Promise<{ locale: string }> };

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const c = await getContent(locale);
  const { title, description } = metaFromContent(c, "news");
  return pageMetadata({ locale, path: "/news", title, description });
}

type TabRow = {
  key: string;
  label: string;
  title: string;
  intro: string;
  bullets: string;
  icon?: string;
};

type EventRow = {
  key: string;
  title: string;
  date: string;
  location: string;
  organizer: string;
  overview: string;
  activities: string;
  outcome: string;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
};

export default async function NewsPage({ params }: PageParams) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const c = await getContent(locale);
  const tabs = list<TabRow>(c, "newsTabs.items");
  const events = list<EventRow>(c, "news.events");

  return (
    <>
      <Hero
        image={text(c, "news.hero.image")}
        badge={text(c, "news.hero.badge")}
        size="md"
        title={text(c, "news.hero.title")}
        subtitle={text(c, "news.hero.subtitle")}
      />

      {/* Latest News */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionHeading title={text(c, "news.latest.title")} underline />
          <NewsTabs tabs={tabs} />
        </div>
      </section>

      {/* Events */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionHeading title={text(c, "news.eventsSection.title")} underline />
          <EventsCarousel
            events={events}
            t={(pick(c, "news.eventsSection") ?? {}) as Record<string, string>}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-dark py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-[40px]">
            {text(c, "news.cta.title")}
          </h2>
          <p className="font-manrope mt-5 max-w-[620px] leading-relaxed text-orange-100">
            {text(c, "news.cta.body")}
          </p>
          <Link
            href={localePath(locale, "/contact")}
            className="mt-8 inline-block rounded-lg bg-navy px-7 py-4 font-bold text-white shadow-lg transition-transform hover:scale-[1.03]"
          >
            {text(c, "news.cta.button")}
          </Link>
        </div>
      </section>
    </>
  );
}
