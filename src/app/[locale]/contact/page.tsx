import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { getContent, text } from "@/lib/cms";
import { isLocale } from "@/lib/site-config";
import { metaFromContent, pageMetadata } from "@/lib/seo";

type PageParams = { params: Promise<{ locale: string }> };

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const c = await getContent(locale);
  const { title, description } = metaFromContent(c, "contact");
  return pageMetadata({ locale, path: "/contact", title, description });
}

export default async function ContactPage({ params }: PageParams) {
  const { locale } = await params;
  const c = await getContent(locale);

  return (
    <>
      <Hero
        image={text(c, "contact.hero.image")}
        badge={text(c, "contact.hero.badge")}
        size="lg"
        title={text(c, "contact.hero.title")}
        subtitle={text(c, "contact.hero.subtitle")}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionHeading
            title={text(c, "contact.info.title")}
            subtitle={text(c, "contact.info.subtitle")}
          />
          <div className="mt-14">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
