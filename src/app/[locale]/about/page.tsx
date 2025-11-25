"use client";
import Image from "next/image";
import { useState } from "react";
// Import Footer from your components folder
import Footer from "../components/Footer"; 
// Import hooks for translations
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const [index, setIndex] = useState(0);
  const t = useTranslations("aboutPage");
  const tProjectData = useTranslations("projectData"); // Separate key for array

  // Dynamically load project data from translations
  // Assuming projects are 0 and 1 index in projectData array
  const projects = [
    {
      title: tProjectData("0.title"),
      image: "/images/1.png",
      location: tProjectData("0.location"),
      functions: tProjectData("0.functions"),
      details: tProjectData("0.details"),
      area: tProjectData("0.area"),
      status: tProjectData("0.status"),
    },
    {
      title: tProjectData("1.title"),
      image: "/images/2.png",
      location: tProjectData("1.location"),
      functions: tProjectData("1.functions"),
      details: tProjectData("1.details"),
      area: tProjectData("1.area"),
      status: tProjectData("1.status"),
    },
  ];

  const next = () => setIndex((i) => (i + 1) % projects.length);
  const prev = () =>
    setIndex((i) => (i - 1 + projects.length) % projects.length);

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
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center max-w-2xl px-4">
            {t("heroTitle")}
          </h1>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t("whoWeAreTitle")}
            </h2>
            <p className="text-blue-400 leading-relaxed">
              {t("whoWeAreText")}
            </p>
          </div>
          <div>
            <Image
              src="/images/about-us.jpg"
              alt="Construction Work"
              width={500}
              height={400}
              className="w-full h-auto rounded-3xl shadow-lg"
              style={{ borderRadius: "80px 0 80px 0" }}
            />
          </div>
        </div>
      </section>

      {/* ===== VISION & MISSION ===== */}
      <section className="py-12 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl border border-gray-300 shadow-lg p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-amber-700 mb-4">
              {t("visionTitle")}
            </h3>
            <p className="text-blue-400 leading-relaxed">
              {t("visionText")}
            </p>
          </div>
          <div className="bg-white rounded-3xl border border-gray-300 shadow-lg p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-amber-700 mb-4">
              {t("missionTitle")}
            </h3>
            <p className="text-blue-400 leading-relaxed">
              {t("missionText")}
            </p>
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="bg-slate-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("whyUsTitle")}</h2>
            <ul className="space-y-3">
              {/* Loop through the array of points */}
              {Array.from({ length: 8 }).map((_, i) => (
                <li key={i}>
                  <span className="text-amber-400 mr-2">✔</span>
                  {t(`whyUsPoints.${i}`)}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4">
              <Image src="/images/home1.jpg" alt="Work 1" width={250} height={200} className="w-full h-40 object-cover rounded-lg" />
              <Image src="/images/home2.jpg" alt="Work 2" width={250} height={200} className="w-full h-40 object-cover rounded-lg" />
              <Image src="/images/home3.jpg" alt="Work 3" width={250} height={200} className="w-full h-40 object-cover rounded-lg" />
              <Image src="/images/real estate.jpg" alt="Work 4" width={250} height={200} className="w-full h-40 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS CAROUSEL ===== */}
      <section className="py-12 md:py-20 text-center bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">
            {t("projectsTitle")}
          </h2>

          <div className="flex items-center justify-center gap-4">
            <button
              className="text-4xl font-light text-amber-700 cursor-pointer hover:text-amber-900 transition-colors"
              onClick={prev}
            >
              ‹
            </button>

            <div className="bg-white border-2 border-amber-700 rounded-3xl p-8 w-96 shadow-lg">
              <Image
                src={projects[index].image}
                alt={projects[index].title}
                width={350}
                height={250}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-slate-900 font-bold mt-4">
                {projects[index].title}
              </h3>
              <p className="text-blue-400 text-sm mt-2 leading-relaxed">
                {t("projectLocation")}: {projects[index].location}<br />
                {t("projectFunctions")}: {projects[index].functions}<br />
                {projects[index].details}<br />
                {t("projectArea")}: {projects[index].area}<br />
                {t("projectStatus")}: {projects[index].status}
              </p>
            </div>

            <button
              className="text-4xl font-light text-amber-700 cursor-pointer hover:text-amber-900 transition-colors"
              onClick={next}
            >
              ›
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}