import type { Metadata } from "next";
import Link from "next/link";
import {
  Archive,
  Check,
  ClipboardList,
  Home,
  LayoutPanelTop,
  PencilLine,
  ShieldCheck,
  Landmark,
  TrendingUp,
  CircleDot,
  BookOpenCheck,
} from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Services | KSHC Construction & Real Estate",
};

const offers = [
  {
    icon: ClipboardList,
    title: "Project Management Services",
    body: "End-to-end project planning, execution, and delivery aligned with global best practices.",
  },
  {
    icon: Home,
    title: "Real Estate Development",
    body: "Creating integrated communities that reflect innovation, quality, and sustainability.",
  },
  {
    icon: Archive,
    title: "Digital Transformation & Document Management",
    body: "Modern technology-driven systems for digital archiving, workflow automation, and analytics.",
  },
  {
    icon: LayoutPanelTop,
    title: "PMO Support Services",
    body: "Strengthening organizational governance through PMO setup, KPIs, and portfolio management.",
  },
];

const pmItems = [
  {
    title: "End-to-End Project Management",
    body: "Full lifecycle execution aligned with PMI frameworks",
  },
  {
    title: "Strategic Planning & Scheduling",
    body: "Primavera P6, CPM analysis, and EVM reporting",
  },
  {
    title: "Risk Management & Business Continuity",
    body: "Proactive risk identification and mitigation",
  },
  {
    title: "Quality Assurance & Compliance",
    body: "QA/QC plans, audits, and ISO-aligned processes",
  },
  {
    title: "Budgeting & Cost Control",
    body: "Cost estimation, cash flow planning, and value engineering",
  },
  {
    title: "Stakeholder Communication & Reporting",
    body: "Dashboards, executive summaries, and escalation workflows",
  },
  {
    title: "Contract & Procurement Management",
    body: "Tender evaluation, vendor scoring, and SLA compliance",
  },
  {
    title: "Training & Capacity Building",
    body: "Primavera P6, Agile, Scrum, and leadership training",
  },
  {
    title: "PM Consulting & Advisory",
    body: "PMO setup, governance frameworks, and process optimization",
  },
];

const reItems = [
  {
    icon: CircleDot,
    title: "Market Research & Strategic Planning",
    body: "In-depth market analysis for prime locations and investment opportunities",
  },
  {
    icon: PencilLine,
    title: "Design & Architectural Planning",
    body: "Modern sustainable designs balancing aesthetics and functionality",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance & Permits",
    body: "Full compliance with regulations and efficient permit processing",
  },
  {
    icon: BookOpenCheck,
    title: "High-Quality Project Execution",
    body: "Latest construction technologies for on-time, on-budget delivery",
  },
  {
    icon: TrendingUp,
    title: "Marketing & Sales Strategies",
    body: "Comprehensive marketing with flexible financing solutions",
  },
  {
    icon: Landmark,
    title: "Post-Delivery Property Management",
    body: "Smooth operations maximizing asset value for clients",
  },
];

const digitalItems = [
  "Digital Archiving Solutions",
  "Document Control Systems",
  "Workflow Automation",
  "Real-time Dashboards",
  "Data Analytics & Reporting Tools",
];

const pmoItems = [
  "PMO Setup & Structure",
  "KPI Development",
  "Performance Monitoring Systems",
  "Project Portfolio Management",
  "Policy & Process Documentation",
];

function ChecklistGrid({ items }: { items: string[] }) {
  return (
    <div className="mt-12 grid gap-5 md:grid-cols-2">
      {items.map((item) => (
        <div
          key={item}
          className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream">
            <Check size={18} className="text-orange-mid" />
          </span>
          <span className="font-bold text-navy">{item}</span>
        </div>
      ))}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Hero
        image="/images/hero-services.jpg"
        badge="EXPERT SOLUTIONS"
        dot={false}
        size="sm"
        title="Our Services"
        subtitle="Comprehensive project management and construction solutions delivered with precision and excellence."
      />

      {/* What We Offer */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionHeading title="What We Offer" underline />
          <div className="mt-14 grid gap-7 md:grid-cols-2">
            {offers.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="flex flex-col gap-5 rounded-2xl bg-gray-100 p-8 sm:flex-row sm:items-start"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-orange-mid text-white">
                  <Icon size={26} />
                </span>
                <div>
                  <h3 className="text-[22px] leading-snug font-extrabold text-navy">
                    {title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-gray-500">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Management Services */}
      <section className="bg-gray-100 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionHeading align="left" title="Project Management Services" underline />
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {pmItems.map((item, i) => (
              <div
                key={item.title}
                className="rounded-xl bg-white p-7 shadow-md"
              >
                <p className="text-lg font-bold text-orange-mid">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg leading-snug font-extrabold text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Estate Development */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionHeading align="left" title="Real Estate Development" underline />
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {reItems.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-xl border border-gray-100 bg-white p-7 shadow-sm"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-cream">
                  <Icon size={22} className="text-orange-mid" />
                </span>
                <h3 className="mt-4 text-lg leading-snug font-extrabold text-navy">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Transformation */}
      <section className="bg-gray-100 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionHeading
            align="left"
            title="Digital Transformation & Document Management"
            underline
          />
          <ChecklistGrid items={digitalItems} />
        </div>
      </section>

      {/* PMO Support Services */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionHeading align="left" title="PMO Support Services" underline />
          <ChecklistGrid items={pmoItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-dark py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-5 text-center lg:px-0">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-[44px]">
            Ready to Partner with Cube?
          </h2>
          <Link
            href="/contact"
            className="mt-10 inline-block rounded-lg bg-navy px-8 py-4 text-lg font-bold text-white shadow-lg transition-transform hover:scale-[1.03]"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
