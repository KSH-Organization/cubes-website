import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import SmartImage from "@/components/SmartImage";
import { getContent, list, text } from "@/lib/cms";
import { isLocale } from "@/lib/site-config";
import { metaFromContent, pageMetadata } from "@/lib/seo";

type PageParams = { params: Promise<{ locale: string }> };

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const c = await getContent(locale);
  const { title, description } = metaFromContent(c, "people");
  return pageMetadata({ locale, path: "/people", title, description });
}

type DepartmentRow = { key: string; title: string; body: string; image?: string };

export default async function PeoplePage({ params }: PageParams) {
  const { locale } = await params;
  const c = await getContent(locale);
  const departments = list<DepartmentRow>(c, "people.departments");

  return (
    <>
      <Hero
        image={text(c, "people.hero.image")}
        badge={text(c, "people.hero.badge")}
        size="lg"
        title={text(c, "people.hero.title")}
        subtitle={text(c, "people.hero.subtitle")}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionHeading
            title={text(c, "people.departmentsSection.title")}
            subtitle={text(c, "people.departmentsSection.subtitle")}
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:gap-x-20 lg:gap-y-10">
            {departments.map((d) => (
              <div
                key={d.key}
                className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md"
              >
                <SmartImage
                  src={d.image ?? ""}
                  alt={d.title}
                  width={910}
                  height={440}
                  className="h-[220px] w-full object-cover"
                />
                <div className="p-7">
                  <h3 className="text-[22px] font-bold text-royal">{d.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-gray-500">
                    {d.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
