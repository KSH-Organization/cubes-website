import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import NewsTabs from "@/components/NewsTabs";
import EventsCarousel from "@/components/EventsCarousel";

export const metadata: Metadata = {
  title: "News & Events | KSHC Construction & Real Estate",
};

export default function NewsPage() {
  return (
    <>
      <Hero
        image="/images/hero-news.jpg"
        badge="News & Events"
        size="md"
        title={
          <>
            Stay Updated with
            <br className="hidden sm:block" /> KSHC-Cube
          </>
        }
        subtitle="We believe in transparency and continuous communication with our clients, partners, and community. Through this page, you can explore our latest news, project updates, corporate announcements, milestones, and participation in major industry events."
      />

      {/* Latest News */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionHeading title="Latest News" underline />
          <NewsTabs />
        </div>
      </section>

      {/* Events */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionHeading title="Events" underline />
          <EventsCarousel />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-dark py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-[40px]">
            Building the Future Together
          </h2>
          <p className="font-manrope mt-5 max-w-[620px] leading-relaxed text-orange-100">
            Stay connected with KSHC-Cube for the latest updates in engineering
            excellence and project management. Join us as we shape the skyline
            and set new standards in construction.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-navy px-7 py-4 font-bold text-white shadow-lg transition-transform hover:scale-[1.03]"
          >
            Connect With Us
          </Link>
        </div>
      </section>
    </>
  );
}
