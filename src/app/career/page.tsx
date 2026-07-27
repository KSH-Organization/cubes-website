import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, CheckCircle2, MapPin } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { getContent, list, text } from "@/lib/cms";

export async function generateMetadata(): Promise<Metadata> {
  const c = await getContent();
  return { title: text(c, "career.meta.title") };
}

type CultureRow = { key: string; title: string; body: string };
type BulletRow = { key: string; text: string };
type VacancyRow = {
  key: string;
  title: string;
  location: string;
  deadline: string;
  qualifications: string;
};

export default async function CareerPage() {
  const c = await getContent();
  const culture = list<CultureRow>(c, "career.culture.items");
  const whyUs = list<BulletRow>(c, "career.whyUs.items");
  const weOffer = list<BulletRow>(c, "career.weOffer.items");
  const vacancies = list<VacancyRow>(c, "career.vacancies");

  return (
    <>
      <Hero
        image={text(c, "career.hero.image")}
        badge={text(c, "career.hero.badge")}
        size="md"
        title={text(c, "career.hero.title")}
        subtitle={text(c, "career.hero.subtitle")}
      >
        <Link
          href="#vacancies"
          className="mt-9 inline-block rounded-full bg-gradient-to-b from-orange to-orange-mid px-7 py-4 font-bold text-white shadow-[0_6px_18px_rgba(232,135,30,0.45)] transition-transform hover:scale-[1.03]"
        >
          {text(c, "career.hero.button")}
        </Link>
      </Hero>

      {/* Our Culture */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionHeading
            title={text(c, "career.culture.title")}
            underline
            subtitle={text(c, "career.culture.subtitle")}
          />
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {culture.map((item, i) => (
              <div key={item.key} className="rounded-xl bg-gray-100 p-8">
                <p className="text-[40px] leading-none font-extrabold text-orange/40">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 text-[22px] leading-snug font-extrabold text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-gray-500">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us / What We Offer */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-16 px-5 md:grid-cols-2 lg:px-0">
          {[
            { heading: text(c, "career.whyUs.heading"), items: whyUs },
            { heading: text(c, "career.weOffer.heading"), items: weOffer },
          ].map((col) => (
            <div key={col.heading}>
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  {col.heading}
                </h2>
                <span
                  className="mx-auto mt-5 block h-1 w-14 rounded-full bg-orange"
                  aria-hidden
                />
              </div>
              <ul className="mt-10 space-y-5">
                {col.items.map((item) => (
                  <li key={item.key} className="flex items-start gap-4">
                    <CheckCircle2 size={24} className="mt-0.5 shrink-0 text-white" />
                    <span className="font-semibold text-white">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Open Vacancies */}
      <section id="vacancies" className="bg-gray-100 py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionHeading
            title={text(c, "career.vacanciesSection.title")}
            underline
            subtitle={text(c, "career.vacanciesSection.subtitle")}
          />
          <div className="mt-14 space-y-8">
            {vacancies.map((v) => (
              <div
                key={v.key}
                className="rounded-xl bg-white p-8 shadow-md sm:p-10"
              >
                <h3 className="text-2xl font-extrabold text-navy">{v.title}</h3>
                <div className="mt-3 flex flex-wrap gap-x-8 gap-y-2 text-[15px] text-gray-500">
                  <span className="flex items-center gap-2">
                    <MapPin size={17} className="text-orange-mid" />
                    {v.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <CalendarDays size={17} className="text-orange-mid" />
                    {text(c, "career.vacanciesSection.deadlineLabel")}: {v.deadline}
                  </span>
                </div>
                <p className="mt-6 text-[13px] font-bold tracking-wider text-orange-mid uppercase">
                  {text(c, "career.vacanciesSection.qualificationsLabel")}
                </p>
                <p className="mt-2 leading-relaxed text-gray-500">
                  {v.qualifications}
                </p>
                <Link
                  href="/career/apply"
                  className="mt-7 inline-block rounded-full bg-gradient-to-b from-orange to-orange-mid px-7 py-3.5 font-bold text-white shadow-[0_6px_16px_rgba(232,135,30,0.35)] transition-transform hover:scale-[1.03]"
                >
                  {text(c, "career.vacanciesSection.applyButton")}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="bg-orange-dark py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 text-center lg:px-0">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-[40px]">
            {text(c, "career.howToApply.title")}
          </h2>
          <span className="mx-auto mt-5 block h-1 w-14 rounded-full bg-orange" aria-hidden />
          <p className="mt-6 text-lg text-orange-100">
            {text(c, "career.howToApply.lead")}
          </p>
          <p className="mt-8 text-lg text-white">
            {text(c, "career.howToApply.body")}
          </p>
          <a
            href={`mailto:${text(c, "career.howToApply.email")}`}
            className="mt-4 inline-block rounded-lg bg-white/15 px-8 py-4 text-xl font-bold text-orange-200 transition-colors hover:bg-white/25 sm:text-2xl"
          >
            {text(c, "career.howToApply.email")}
          </a>
          <p className="mt-6 text-orange-100">
            {text(c, "career.howToApply.note")}
          </p>
          <Link
            href="/career/apply"
            className="mt-8 inline-block rounded-lg bg-navy px-8 py-4 text-lg font-bold text-white shadow-lg transition-transform hover:scale-[1.03]"
          >
            {text(c, "career.howToApply.button")}
          </Link>
        </div>
      </section>
    </>
  );
}
