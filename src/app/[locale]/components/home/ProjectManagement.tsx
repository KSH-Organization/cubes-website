import { useTranslations } from "next-intl"; // Import hooks for translations

export default function ProjectManagement() {
  const t = useTranslations("projectManagement");
  const tData = useTranslations("projectManagement.data"); // Separate key for array

  const images = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
  ];

  // Dynamic data loading
  const data = Array.from({ length: 8 }).map((_, i) => ({
    title: tData(`${i}.title`),
    description: tData(`${i}.description`),
    image: images[i],
  }));

  return (
    <section className="bg-gray-100 py-16 md:py-28" >
      <div className="container mx-auto px-4 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-white mb-4 inline-block px-8 py-3"
          style={{ backgroundColor: "hsla(209, 74%, 24%, 1)" }}
        >
          {t("title")}
        </h2>

        <p className="text-gray-700 mb-12 max-w-3xl mx-auto mt-6 leading-relaxed">
          {t("subtitle")}
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((item, i) => (
            <div className="relative pt-8 text-right" key={i}>
              <span
                className="absolute top-0 left-4 font-black text-5xl"
                style={{
                  color: "hsla(32, 100%, 35%, 1)",
                  textShadow: "8px 8px 0px rgba(223, 193, 106, 0.2)",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-300">
                <div className="mb-4 mt-4 h-32 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                <h3
                  className="font-bold mb-3 text-base"
                  style={{ color: "hsla(209, 74%, 24%, 1)" }}
                >
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}