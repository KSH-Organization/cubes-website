"use client";
import Image from "next/image";
import Footer from "../components/Footer";
import { useTranslations } from "next-intl"; // Import hooks for translations

export default function PeoplePage() {
  const t = useTranslations("peoplePage");
  const tDept = useTranslations("peoplePage.departments");

  // The image paths remain static, but the titles and descriptions are dynamic.
  const imagePaths = [
    "/images/real estate.jpg",
    "/images/PM-h.jpg",
    "/images/qc.jpg",
    "/images/customer-services.jpg",
  ];

  // Dynamically map department data from translations
  const departments = Array.from({ length: 4 }).map((_, i) => ({
    title: tDept(`${i}.title`),
    desc: tDept(`${i}.desc`),
    img: imagePaths[i],
  }));

  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="relative h-96 md:h-screen overflow-hidden">
        <Image
          src="/images/crane.png"
          alt="Construction Crane"
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

      {/* ===== DEPARTMENTS ===== */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-10">
            {t("departmentsTitle")}
          </h2>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {departments.map((dept, i) => (
              <div
                key={i}
                className="bg-slate-900 text-white rounded-3xl p-6 shadow-lg hover:shadow-xl hover:bg-slate-800 transition-all hover:-translate-y-1 flex flex-col items-center justify-between"
                style={{
                  minWidth: "260px",
                  maxWidth: "300px",
                  minHeight: "400px",
                  height: "100%",
                }}
              >
                <h3 className="font-bold text-lg mb-4 text-center">
                  {dept.title}
                </h3>

                <div className="mb-4 w-full flex justify-center">
                  <Image
                    src={dept.img}
                    alt={dept.title}
                    width={220}
                    height={140}
                    className="object-cover rounded-lg"
                  />
                </div>

                <p className="text-gray-300 text-sm leading-relaxed text-center">
                  {dept.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
    </main>
  );
}