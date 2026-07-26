import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About | KSHC Construction & Real Estate",
};

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "500M+", label: "SQM Developed" },
  { value: "100%", label: "Client Satisfaction" },
];

const pillars = [
  {
    title: "Proven Expertise",
    body: "Decades of experience managing complex real estate and construction projects across Sudan.",
  },
  {
    title: "Tailored Solutions",
    body: "We design projects that meet each client's unique needs, ensuring maximum value and efficiency.",
  },
  {
    title: "Commitment to Excellence",
    body: "Quality, cost control, and on-time delivery are the pillars of our operational excellence.",
  },
];

const projects = [
  {
    title: "KCHS Warehouse",
    body: "Industrial Area, Sudan. A comprehensive logistics facility designed for maximum efficiency and sustainability.",
    image: "/images/about-kchs.jpg",
  },
  {
    title: "Call Center",
    body: "Bashir Elnefeidi Street, Khartoum. A state-of-the-art administration building with integrated smart systems.",
    image: "/images/about-callcenter.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        image="/images/hero-about.jpg"
        badge="Our Expertise"
        size="xl"
        title={
          <>
            Building the future,
            <br className="hidden sm:block" /> one site at a time.
          </>
        }
        subtitle="We're a construction and real estate company that treats every project like a legacy. From site planning to final handover, we combine precision engineering with a relentless pursuit of quality."
      />

      {/* Company Overview */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionHeading
            eyebrow="Company Overview"
            title={
              <>
                Transforming infrastructure.
                <br className="hidden lg:block" /> Enhancing lives.
              </>
            }
            subtitle="We operate at the intersection of precision engineering, sustainable design, and long-term value. Our teams move fast, but we never compromise on quality - because the buildings we build are the cities people will live in tomorrow."
          />
          <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="max-w-[520px] leading-relaxed text-gray-600">
                From feasibility studies to final handover, we manage complexity
                with a clear, repeatable process. We partner with clients who
                value transparency, technical excellence, and a commitment to
                sustainability.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-gray-200 bg-slate-50 p-6 text-center shadow-sm"
                  >
                    <p className="text-3xl font-extrabold text-orange-mid sm:text-4xl">
                      {s.value}
                    </p>
                    <p className="mt-3 text-[13px] font-bold text-navy">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/about-approach.jpg"
                alt="KSHC team on site at night"
                width={1200}
                height={840}
                className="w-full rounded-2xl object-cover shadow-xl"
              />
              <div className="absolute bottom-6 left-6 max-w-[320px] rounded-lg bg-white/95 p-4 shadow-lg backdrop-blur-sm">
                <p className="text-xs font-bold tracking-wide text-orange-mid uppercase">
                  Our Approach
                </p>
                <p className="mt-1 text-sm font-semibold text-navy">
                  Precision planning. Sustainable execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose KSHC */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionHeading
            eyebrow="Why Choose KSHC"
            title="A partner built for complexity."
            subtitle="We're structured to move fast, adapt quickly, and deliver consistently - across large-scale construction and real estate development."
          />
          <div className="mt-14 space-y-6">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="flex flex-col gap-5 rounded-2xl bg-white p-8 shadow-md sm:flex-row sm:items-start sm:gap-8"
              >
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-orange-mid text-xl font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl font-extrabold text-navy">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-gray-500">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionHeading
            eyebrow="Selected Projects"
            title="A selection of our recent work."
            subtitle="From industrial facilities to residential developments, we deliver projects that combine scale, quality, and speed."
          />
          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:gap-14">
            {projects.map((p) => (
              <div
                key={p.title}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md"
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  width={1040}
                  height={756}
                  className="h-[280px] w-full object-cover sm:h-[378px]"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-extrabold text-navy">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-gray-500">{p.body}</p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-2 font-bold text-orange-mid transition-colors hover:text-orange-dark"
                  >
                    View Details <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
