import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, CheckCircle2, MapPin } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Career | KSHC Construction & Real Estate",
};

const culture = [
  {
    title: "Professionalism & Integrity",
    body: "We uphold the highest ethical standards in all our interactions, ensuring trust and reliability with our clients and within our teams.",
  },
  {
    title: "Innovation & Digital Transformation",
    body: "We leverage cutting-edge technology and modern engineering software to lead the digital transformation of Sudan's construction industry.",
  },
  {
    title: "Teamwork & Collaboration",
    body: "Success is a collective effort. We foster a supportive environment where diverse skills converge to solve complex project challenges.",
  },
  {
    title: "Learning & Growth",
    body: "Our commitment to excellence includes the continuous development of our people through training and advancement opportunities.",
  },
  {
    title: "Quality & Sustainability",
    body: "We build for the future, prioritizing environmental impact and the highest standards of construction and finishing.",
  },
];

const whyUs = [
  "A strong career path with opportunities for advancement",
  "Competitive salaries and performance benefits",
  "Exposure to large-scale national projects in Sudan",
  "Continuous training in PM, engineering, and digital tools",
  "A supportive environment that values your ideas",
];

const weOffer = [
  "Professional development programs and certifications",
  "Specialized workshops and technical engineering training",
  "Cross-functional project exposure for holistic learning",
  "Modern office environment with advanced digital tools",
  "Employee recognition and achievement awards",
];

const vacancies = [
  {
    title: "Senior Structural Engineer",
    location: "Khartoum Office",
    deadline: "Oct 15, 2026",
    qualifications:
      "B.Sc in Civil Engineering, 8+ years experience in high-rise construction, proficiency in ETABS/SAFE/SAP2000.",
  },
  {
    title: "Project Manager – Infrastructure",
    location: "Al-Riyadh District",
    deadline: "Oct 30, 2026",
    qualifications:
      "PMP certification, 10+ years in urban infrastructure, proven track record of on-time delivery and stakeholder management.",
  },
  {
    title: "QA/QC Inspector",
    location: "On-Site Project",
    deadline: "Nov 05, 2026",
    qualifications:
      "Degree in Engineering, ISO standard knowledge, 5+ years in site inspection, meticulous attention to material quality and structural safety.",
  },
];

export default function CareerPage() {
  return (
    <>
      <Hero
        image="/images/hero-career.jpg"
        badge="CAREER OPPORTUNITIES"
        size="md"
        title="Join KSHC–Cube"
        subtitle="At KSHC–Cube, our people are the foundation of our success. We are committed to attracting, developing, and retaining talented professionals who are passionate about innovation, quality, and excellence."
      >
        <Link
          href="#vacancies"
          className="mt-9 inline-block rounded-full bg-gradient-to-b from-orange to-orange-mid px-7 py-4 font-bold text-white shadow-[0_6px_18px_rgba(232,135,30,0.45)] transition-transform hover:scale-[1.03]"
        >
          View Open Roles
        </Link>
      </Hero>

      {/* Our Culture */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionHeading
            title="Our Culture"
            underline
            subtitle="We cultivate a workplace built on values that drive excellence and meaningful impact."
          />
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {culture.map((c, i) => (
              <div key={c.title} className="rounded-xl bg-gray-100 p-8">
                <p className="text-[40px] leading-none font-extrabold text-orange/40">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 text-[22px] leading-snug font-extrabold text-navy">
                  {c.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-gray-500">
                  {c.body}
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
            { heading: "Why Work With Us?", items: whyUs },
            { heading: "What We Offer", items: weOffer },
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
                  <li key={item} className="flex items-start gap-4">
                    <CheckCircle2 size={24} className="mt-0.5 shrink-0 text-white" />
                    <span className="font-semibold text-white">{item}</span>
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
            title="Open Vacancies"
            underline
            subtitle="Find your next challenge and build Sudan's urban landscape with us."
          />
          <div className="mt-14 space-y-8">
            {vacancies.map((v) => (
              <div
                key={v.title}
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
                    Deadline: {v.deadline}
                  </span>
                </div>
                <p className="mt-6 text-[13px] font-bold tracking-wider text-orange-mid uppercase">
                  Required Qualifications
                </p>
                <p className="mt-2 leading-relaxed text-gray-500">
                  {v.qualifications}
                </p>
                <Link
                  href="/career/apply"
                  className="mt-7 inline-block rounded-full bg-gradient-to-b from-orange to-orange-mid px-7 py-3.5 font-bold text-white shadow-[0_6px_16px_rgba(232,135,30,0.35)] transition-transform hover:scale-[1.03]"
                >
                  Apply Now
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
            How to Apply
          </h2>
          <span className="mx-auto mt-5 block h-1 w-14 rounded-full bg-orange" aria-hidden />
          <p className="mt-6 text-lg text-orange-100">
            Ready to start your journey with KSHC–Cube?
          </p>
          <p className="mt-8 text-lg text-white">
            Submit your CV and cover letter to:
          </p>
          <a
            href="mailto:careers@kshc-cube.com"
            className="mt-4 inline-block rounded-lg bg-white/15 px-8 py-4 text-xl font-bold text-orange-200 transition-colors hover:bg-white/25 sm:text-2xl"
          >
            careers@kshc-cube.com
          </a>
          <p className="mt-6 text-orange-100">
            or apply directly through the website application form.
          </p>
          <Link
            href="/career/apply"
            className="mt-8 inline-block rounded-lg bg-navy px-8 py-4 text-lg font-bold text-white shadow-lg transition-transform hover:scale-[1.03]"
          >
            Submit Application
          </Link>
        </div>
      </section>
    </>
  );
}
