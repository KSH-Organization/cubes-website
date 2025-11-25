import Image from "next/image";
import { useTranslations } from "next-intl"; // Import hooks for translations

export default function WhoWeAre() {
  const t = useTranslations("whoWeAre");
  
  return (
    <section className="bg-white py-16 md:py-28">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "hsla(209, 74%, 24%, 1)" }}
          >
            {t("title")}
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            {t("text")}
          </p>
        </div>

        <div>
          <Image
            src="/images/who-we-are.jpg"
            alt="Construction illustration"
            width={450}
            height={350}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}