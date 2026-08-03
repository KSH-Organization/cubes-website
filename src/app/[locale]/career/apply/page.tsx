import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ApplicationForm from "@/components/ApplicationForm";
import JsonLd from "@/components/JsonLd";
import { getContent, list, pick, text } from "@/lib/cms";
import { isLocale, localePath } from "@/lib/site-config";
import { metaFromContent, pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

type PageParams = { params: Promise<{ locale: string }> };

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const c = await getContent(locale);
  const { title, description } = metaFromContent(c, "career.apply");
  return pageMetadata({
    locale,
    path: "/career/apply",
    title,
    description: description || text(c, "career.apply.body"),
  });
}

export default async function ApplyPage({ params }: PageParams) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const c = await getContent(locale);
  const careerHref = localePath(locale, "/career");

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: text(c, "globals.nav.home"), path: "/" },
          { name: text(c, "career.apply.breadcrumbParent"), path: "/career" },
          {
            name: text(c, "career.apply.breadcrumbCurrent"),
            path: "/career/apply",
          },
        ])}
      />
      <section className="bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <nav className="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
            <Link href={careerHref} className="text-gray-500 hover:text-orange-mid">
              {text(c, "career.apply.breadcrumbParent")}
            </Link>
            <ChevronRight size={15} className="rtl-flip text-gray-400" />
            <span className="font-semibold text-orange-mid">
              {text(c, "career.apply.breadcrumbCurrent")}
            </span>
          </nav>
          <h1 className="mt-6 text-4xl font-extrabold text-navy lg:text-[44px]">
            {text(c, "career.apply.title")}
          </h1>
          <p className="mt-4 max-w-[640px] leading-relaxed text-gray-500">
            {text(c, "career.apply.body")}
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-[1040px] px-5 lg:px-0">
          <ApplicationForm
            t={(pick(c, "career.apply.form") ?? {}) as Record<string, string>}
            jobs={list<{ key: string; title: string }>(c, "career.vacancies")}
          />
        </div>
      </section>
    </>
  );
}
