import Image from "next/image";
import {
  BadgeCheck,
  CheckCircle2,
  FolderCog,
  Globe,
  Handshake,
  Leaf,
  Lightbulb,
} from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";

const objectives = [
  {
    icon: BadgeCheck,
    title: "Achieve excellence in project management",
    body: "by applying best practices and standardized formats for streamlined operations.",
  },
  {
    icon: FolderCog,
    title: "Enhance document management and archiving efficiency",
    body: "through a modern digital system that ensures accessibility and governance.",
  },
  {
    icon: Handshake,
    title: "Increase client satisfaction rates",
    body: "by offering tailored consulting and technological support to help them achieve their goals.",
  },
  {
    icon: Lightbulb,
    title: "Leverage technology and innovation",
    body: "to enhance project execution efficiency and reduce operational costs.",
  },
  {
    icon: Globe,
    title: "Expand our network of partners and clients",
    body: "by building sustainable strategic relationships that drive Cube's market growth.",
  },
  {
    icon: Leaf,
    title: "Meet sustainability standards",
    body: "by developing projects that minimize environmental impact and promote smart resource utilization.",
  },
];

const pmServices = [
  {
    title: "End-to-End Project Management",
    body: "We provide full-cycle project management, from initiation to successful completion, following international standards.",
    image: "/images/pm-01.jpg",
  },
  {
    title: "Strategic Planning & Scheduling",
    body: "We help you develop comprehensive project plans based on in-depth analysis, ensuring smooth execution without delays.",
    image: "/images/pm-02.jpg",
  },
  {
    title: "Risk Management & Mitigation Strategies",
    body: "We identify potential risks and implement proactive strategies to prevent disruptions.",
    image: "/images/pm-03.jpg",
  },
  {
    title: "Performance Monitoring & Quality Assurance",
    body: "We implement robust quality control mechanisms to ensure compliance with industry standards.",
    image: "/images/pm-04.jpg",
  },
  {
    title: "Budget & Cost Management",
    body: "We assist in precise budgeting and financial control to prevent cost overruns.",
    image: "/images/pm-05.jpg",
  },
  {
    title: "Stakeholder & Communication Management",
    body: "We ensure seamless collaboration between all stakeholders for a unified project vision.",
    image: "/images/pm-06.jpg",
  },
  {
    title: "Contract & Vendor Management",
    body: "We help you select the right vendors and manage contracts to guarantee high-quality service delivery.",
    image: "/images/pm-07.jpg",
  },
  {
    title: "Project Management Consulting & Training",
    body: "We offer expert consulting and training programs to enhance your team's project management skills.",
    image: "/images/pm-08.jpg",
  },
];

const reServices = [
  {
    title: "Market Research & Strategic Planning",
    body: "We conduct in-depth market analysis to identify prime locations and promising investment opportunities, ensuring the success and sustainability of our projects.",
    image: "/images/re-01.jpg",
  },
  {
    title: "Design & Architectural Planning",
    body: "Our team of top architects and designers develops modern, sustainable designs that balance aesthetics and functionality to provide a comfortable and seamless user experience.",
    image: "/images/re-02.jpg",
  },
  {
    title: "Regulatory Compliance & Permits",
    body: "We ensure full compliance with regulations and obtain all necessary permits efficiently, guaranteeing that our projects meet the highest legal and engineering standards.",
    image: "/images/re-03.jpg",
  },
  {
    title: "High-Quality Project Execution",
    body: "Utilizing the latest construction technologies and collaborating with top contractors and suppliers, we ensure that our projects are completed with precision, on time, and within budget.",
    image: "/images/re-04.jpg",
  },
  {
    title: "Effective Marketing & Sales Strategies",
    body: "We implement comprehensive marketing strategies to reach the right audience, offering flexible financing solutions and payment plans that make investing in our projects easy and accessible.",
    image: "/images/re-05.jpg",
  },
  {
    title: "Post-Delivery Property Management",
    body: "Our property management services ensure smooth operations, maximizing asset value and providing a seamless experience for clients and investors.",
    image: "/images/re-06.jpg",
  },
];

function NumberedCard({
  number,
  title,
  body,
  image,
}: {
  number: string;
  title: string;
  body: string;
  image: string;
}) {
  return (
    <div className="relative pt-7">
      <span
        aria-hidden
        className="absolute top-0 right-4 z-10 text-[40px] leading-none font-extrabold text-orange-mid drop-shadow-[2px_3px_0_rgba(7,54,77,0.15)]"
      >
        {number}
      </span>
      <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <Image
          src={image}
          alt={title}
          width={466}
          height={274}
          className="h-[137px] w-full rounded-md object-cover"
        />
        <h3 className="mt-5 text-sm font-extrabold tracking-wide text-navy uppercase">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-400">{body}</p>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero
        image="/images/hero-home.jpg"
        badge="Our Expertise"
        size="lg"
        title={
          <>
            Innovative Solutions
            <br className="hidden sm:block" /> for Sudan&apos;s Urban
            <br className="hidden sm:block" /> Landscape.
          </>
        }
        subtitle="Driving Sustainable Growth Through Innovative Construction and Real Estate. We deliver projects that elevate living standards and enhance local infrastructure."
      />

      {/* Who We Are */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionHeading
            title="Who We Are"
            subtitle="KSHC Construction & Real Estate is a leading construction and real estate company in Sudan, dedicated to building sustainable communities and delivering high-quality projects. We are committed to innovation, excellence, and client satisfaction. Our approach is built on precision, quality, and trust in every project."
          />
          <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Image
              src="/images/home-who-we-are.jpg"
              alt="KSHC construction site"
              width={1136}
              height={960}
              className="w-full rounded-2xl object-cover shadow-xl"
            />
            <div>
              <h3 className="text-2xl font-extrabold text-royal sm:text-[28px] sm:leading-snug">
                A vision built on excellence and local expertise.
              </h3>
              <p className="mt-5 leading-relaxed text-gray-500">
                With deep roots in the Sudanese market and a commitment to
                international project management standards, we provide a bridge
                between traditional values and modern engineering solutions.
                Every project we undertake is an opportunity to contribute to
                the nation&apos;s progress.
              </p>
              <ul className="mt-7 space-y-4">
                {[
                  "Precision in Every Measurement",
                  "Sustainability as a Standard",
                  "Unwavering Client Focus",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={22} className="shrink-0 text-orange" />
                    <span className="font-bold text-navy">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Objectives */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionHeading
            dark
            title="Our Objectives"
            subtitle="We're focused on building a better future through excellence in project management, real estate development, and sustainable growth."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {objectives.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-xl bg-white p-8 text-center shadow-lg"
              >
                <Icon size={44} strokeWidth={1.6} className="mx-auto text-orange-mid" />
                <h3 className="mt-5 text-lg font-bold text-orange-mid">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionHeading
            title="KSHC Construction & Real Estate Services"
            subtitle="We offer a comprehensive range of services designed to help you achieve your goals with high quality, on time, and within budget."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {[
              { title: "Project Management", image: "/images/home-svc-pm.jpg" },
              { title: "Real Estate", image: "/images/home-svc-re.jpg" },
            ].map((card) => (
              <div
                key={card.title}
                className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={1168}
                  height={684}
                  className="h-[240px] w-full object-cover sm:h-[330px]"
                />
                <p className="py-6 text-center text-xl font-bold text-navy">
                  {card.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Management Services */}
      <section className="bg-gray-100 py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionHeading
            title="Project Management Services"
            subtitle="At KSHC, we understand that success depends on meticulous planning and flawless execution. We follow international standards to ensure precision."
          />
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {pmServices.map((s, i) => (
              <NumberedCard
                key={s.title}
                number={String(i + 1).padStart(2, "0")}
                {...s}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Real Estate Services */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionHeading
            title="Real Estate Services"
            subtitle="We don't just develop properties-we create integrated communities that reflect innovation, quality, and sustainability."
          />
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {reServices.map((s, i) => (
              <NumberedCard
                key={s.title}
                number={String(i + 1).padStart(2, "0")}
                {...s}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
