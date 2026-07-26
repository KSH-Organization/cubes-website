import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | KSHC Construction & Real Estate",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        image="/images/hero-contact.jpg"
        badge="Contact Us"
        size="lg"
        title="Get in Touch With Us"
        subtitle="We're here to help. Send us a message and our team will get back to you as soon as possible."
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionHeading
            title="Contact Information"
            subtitle="Reach out to our team for inquiries, partnerships, or to learn more about our services."
          />
          <div className="mt-14">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
