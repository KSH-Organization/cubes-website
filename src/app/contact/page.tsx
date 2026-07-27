import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { getContent, text } from "@/lib/cms";

export async function generateMetadata(): Promise<Metadata> {
  const c = await getContent();
  return { title: text(c, "contact.meta.title") };
}

export default async function ContactPage() {
  const c = await getContent();

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
