import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "People | KSHC Construction & Real Estate",
};

const departments = [
  {
    title: "Real Estate Development",
    body: "Responsible for identifying and evaluating property opportunities, conducting feasibility studies, and planning projects from concept to execution to maximize investment returns.",
    image: "/images/dept-realestate.jpg",
  },
  {
    title: "Project Management Office",
    body: "Oversees the planning and execution of all projects, ensuring they meet timelines and budgets, while setting standards, tracking performance, and managing risks for quality delivery.",
    image: "/images/dept-pmo.jpg",
  },
  {
    title: "Quality and Control",
    body: "Focuses on establishing and monitoring quality policies and standards, performing audits, and driving continuous improvement across processes, products, and services.",
    image: "/images/dept-quality.jpg",
  },
  {
    title: "Customer Service",
    body: "Handles all customer interactions before, during, and after service delivery, addressing inquiries and complaints to ensure customer satisfaction and enhance their overall experience.",
    image: "/images/dept-customer.jpg",
  },
];

export default function PeoplePage() {
  return (
    <>
      <Hero
        image="/images/hero-people.jpg"
        badge="Our Expertise"
        size="lg"
        title={
          <>
            Departments That
            <br className="hidden sm:block" /> Deliver, People Who
            <br className="hidden sm:block" /> Inspire
          </>
        }
        subtitle="We are organized into specialized departments that work together to ensure every project is executed with precision, quality, and long-term value."
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionHeading
            title="Our Departments"
            subtitle="Our organizational structure is designed to maximize efficiency and collaboration. Each department plays a critical role in delivering high-quality projects and exceptional client experiences."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:gap-x-20 lg:gap-y-10">
            {departments.map((d) => (
              <div
                key={d.title}
                className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md"
              >
                <Image
                  src={d.image}
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
