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
    <main className="about-page">
      {/* ===== HERO ===== */}
      <section className="about-hero">
        <Image
          src="/images/about-hero.jpg"
          alt="Construction Site"
          width={1920}
          height={1080}
          className="hero-bg"
        />
        <div className="hero-overlay">
          <h1>Redefining Real Estate with Innovation and Integrity</h1>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="about-intro container md:grid md:grid-cols-2 gap-12 py-12">
        <div>
          <h2 className="h2 mb-4">About Us</h2>
          <p className="text-muted">
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
            className="about-image"
          />
        </div>
      </section>

      {/* ===== VISION & MISSION ===== */}
      <section className="vision-mission container md:grid md:grid-cols-2 gap-8 py-12">
        <div className="card text-center">
          <h3 className="h2 color-primary">Vision</h3>
          <p className="mt-4 text-muted">
            To be the leading company in project management and real estate
            development by providing integrated, innovative, and
            technology-driven solutions that meet the highest standards of
            quality and sustainability, contributing to the growth of modern and
            thriving communities.
          </p>
        </div>
        <div className="card text-center">
          <h3 className="h2 color-primary">Mission</h3>
          <p className="mt-4 text-muted">
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
      </section>

      {/* ===== WHY US ===== */}
      <section className="why-us py-12">
        <div className="container md:grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="h2 text-white mb-6">Why Us</h2>
            <ul className="why-list">
                <li>
                <span className="golden-check" style={{ color: "gold" }}>✔</span>Proven Expertise in real estate, commercial, and tech project management.
                </li>
              <li><span className="golden-check" style={{ color: "gold" }}>✔</span>Tailor-Made Solutions designed to meet each client’s unique needs.</li>
              <li><span className="golden-check" style={{ color: "gold" }}>✔</span> Commitment to Excellence with quality, cost control, and on-time delivery.</li>
              <li><span className="golden-check" style={{ color: "gold" }}>✔</span> Transparency & Trust through clear reporting and project insights.</li>
              <li><span className="golden-check" style={{ color: "gold" }}>✔</span> Innovative Vision aligned with evolving market trends.</li>
              <li><span className="golden-check" style={{ color: "gold" }}>✔</span> Modern & Functional Designs combining elegance with practicality.</li>
              <li><span className="golden-check" style={{ color: "gold" }}>✔</span> Comprehensive Services from planning to delivery and management.</li>
              <li><span className="golden-check" style={{ color: "gold" }}>✔</span> Highest Standards in construction, finishing, and sustainability.</li>
            </ul>
          </div>
          <div className="why-images">
            <div className="grid grid-cols-2 gap-4">
              <Image src="/images/why1.jpg" alt="Work 1" width={250} height={200} />
              <Image src="/images/why2.jpg" alt="Work 2" width={250} height={200} />
              <Image src="/images/why3.jpg" alt="Work 3" width={250} height={200} />
              <Image src="/images/why4.jpg" alt="Work 4" width={250} height={200} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS CAROUSEL ===== */}
      <section className="projects py-12 text-center">
        <div className="container">
          <h2 className="h2 mb-10">Project Management Projects</h2>

          <div className="carousel">
            <button className="arrow left" onClick={prev}>
              ‹
            </button>

            <div className="carousel-card">
              <div className="card-inner">
                <Image
                  src={projects[index].image}
                  alt={projects[index].title}
                  width={350}
                  height={250}
                />
                <h3 className="mt-4">{projects[index].title}</h3>
                <p className="text-muted mt-2">
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

            <button className="arrow right" onClick={next}>
              ›
            </button>
          </div>
        </div>
      </section>
           <Footer />
      
    </main>
  );
}
