import Image from "next/image";
import { useTranslations } from "next-intl"; // Import hooks for translations

export default function Services() {
  const t = useTranslations("services");

  // Services data is static apart from the title
  const services = [
    { img: "/images/PM-h.jpg", titleKey: "projectManagement" },
    { img: "/images/real estate.jpg", titleKey: "realEstate" },
  ];

  return (
    <section className="bg-white py-16 md:py-28">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
          {t("title")}
        </h2>

        <div className="grid gap-10 md:grid-cols-2 justify-center max-w-3xl mx-auto">
          {services.map((s, i) => (
            <div
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              key={i}
            >
              <Image
                src={s.img}
                alt={t(s.titleKey)}
                width={500}
                height={350}
                className="w-full h-64 object-cover object-center"
                style={{ objectFit: "cover", aspectRatio: "1/1" }}
              />
              <h3 className="text-xl font-bold text-slate-900 p-6">
                {t(s.titleKey)}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}