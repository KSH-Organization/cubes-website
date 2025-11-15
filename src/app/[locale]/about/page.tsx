"use client";
import Image from "next/image";
import { useState } from "react";
import Footer from "../components/Footer";

export default function AboutPage() {
  const [index, setIndex] = useState(0);

  const projects = [
    {
      title: "CALL CENTER - 001",
      image: "/images/projects/project1.jpg",
      location: "Plot No 16, Block 01, Bashir Elnefeidi Street, Khartoum, Sudan.",
      functions: "Administration",
      details:
        "Building consists of basement, ground floor, seven floors and roof.",
      area: "805 m²",
      status: "Completed",
    },
    {
      title: "HEAD OFFICE - 002",
      image: "/images/projects/project2.jpg",
      location: "Khartoum South, Sudan.",
      functions: "Office Building",
      details: "Administration building with basement, GF, and 5 floors.",
      area: "1200 m²",
      status: "Ongoing",
    },
  ];

  const next = () => setIndex((i) => (i + 1) % projects.length);
  const prev = () => setIndex((i) => (i - 1 + projects.length) % projects.length);

  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="relative h-96 md:h-screen overflow-hidden">
        <Image
          src="/images/about-hero.jpg"
          alt="Construction Site"
          width={1920}
          height={1080}
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center max-w-2xl px-4">Redefining Real Estate with Innovation and Integrity</h1>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Us</h2>
            <p className="text-blue-400 leading-relaxed">
              KSHC plays a significant role in construction projects in Sudan,
              undertaking large-scale real estate and construction projects that
              contribute to improving infrastructure and meeting local market
              demands. Through its Project Management Office (PMO), the company
              ensures the successful execution of these projects according to
              established standards, monitoring quality, risks, and ensuring
              adherence to timelines and budgets. This helps achieve sustainable
              development goals, improve infrastructure, and expand commercial
              growth in Sudan.
            </p>
          </div>
          <div>
            <Image
              src="/images/about-site.jpg"
              alt="Construction Work"
              width={500}
              height={400}
              className="w-full h-auto rounded-3xl shadow-lg"
              style={{borderRadius: "80px 0 80px 0"}}
            />
          </div>
        </div>
      </section>

      {/* ===== VISION & MISSION ===== */}
      <section className="py-12 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl border border-gray-300 shadow-lg p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-amber-700 mb-4">Vision</h3>
            <p className="text-blue-400 leading-relaxed">
              To be the leading company in project management and real estate
              development by providing integrated, innovative, and
              technology-driven solutions that meet the highest standards of
              quality and sustainability, contributing to the growth of modern and
              thriving communities.
            </p>
          </div>
          <div className="bg-white rounded-3xl border border-gray-300 shadow-lg p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-amber-700 mb-4">Mission</h3>
            <p className="text-blue-400 leading-relaxed">
              We believe project success comes from precise planning, efficient
              execution, and smart resource management. We deliver integrated
              project management and real estate services with a focus on quality,
              timeliness, and cost efficiency. Through standardized processes,
              advanced document systems, and digital innovation, we ensure clarity
              and informed decision-making. Committed to sustainability, we create
              eco-friendly projects while providing exceptional client experiences
              through tailored solutions and expert consulting.
            </p>
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="bg-slate-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Us</h2>
            <ul className="space-y-3">
              <li><span className="text-amber-400 mr-2">✔</span>Proven Expertise in real estate, commercial, and tech project management.</li>
              <li><span className="text-amber-400 mr-2">✔</span>Tailor-Made Solutions designed to meet each client&apos;s unique needs.</li>
              <li><span className="text-amber-400 mr-2">✔</span>Commitment to Excellence with quality, cost control, and on-time delivery.</li>
              <li><span className="text-amber-400 mr-2">✔</span>Transparency & Trust through clear reporting and project insights.</li>
              <li><span className="text-amber-400 mr-2">✔</span>Innovative Vision aligned with evolving market trends.</li>
              <li><span className="text-amber-400 mr-2">✔</span>Modern & Functional Designs combining elegance with practicality.</li>
              <li><span className="text-amber-400 mr-2">✔</span>Comprehensive Services from planning to delivery and management.</li>
              <li><span className="text-amber-400 mr-2">✔</span>Highest Standards in construction, finishing, and sustainability.</li>
            </ul>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4">
              <Image src="/images/why1.jpg" alt="Work 1" width={250} height={200} className="w-full h-40 object-cover rounded-lg" />
              <Image src="/images/why2.jpg" alt="Work 2" width={250} height={200} className="w-full h-40 object-cover rounded-lg" />
              <Image src="/images/why3.jpg" alt="Work 3" width={250} height={200} className="w-full h-40 object-cover rounded-lg" />
              <Image src="/images/why4.jpg" alt="Work 4" width={250} height={200} className="w-full h-40 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS CAROUSEL ===== */}
      <section className="py-12 md:py-20 text-center bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">Project Management Projects</h2>

          <div className="flex items-center justify-center gap-4">
            <button className="text-4xl font-light text-amber-700 cursor-pointer hover:text-amber-900 transition-colors" onClick={prev}>
              ‹
            </button>

            <div className="bg-white border-2 border-amber-700 rounded-3xl p-8 w-96 shadow-lg">
              <div>
                <Image
                  src={projects[index].image}
                  alt={projects[index].title}
                  width={350}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="text-slate-900 font-bold mt-4">{projects[index].title}</h3>
                <p className="text-blue-400 text-sm mt-2 leading-relaxed">
                  LOCATIONS: {projects[index].location}
                  <br />
                  FUNCTIONS: {projects[index].functions}
                  <br />
                  {projects[index].details}
                  <br />
                  AREA: {projects[index].area}
                  <br />
                  STATUS: {projects[index].status}
                </p>
              </div>
            </div>

            <button className="text-4xl font-light text-amber-700 cursor-pointer hover:text-amber-900 transition-colors" onClick={next}>
              ›
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
