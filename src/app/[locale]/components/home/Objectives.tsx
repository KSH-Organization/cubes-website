import { FaRegLightbulb, FaHandshake, FaGlobe, FaLeaf, FaFolderOpen, FaBuilding, FaAward } from "react-icons/fa";
import { ReactElement } from "react";
import { useTranslations } from "next-intl"; // Import hooks for translations

interface ObjectiveItem {
  icon: ReactElement;
  title: string;
  text: string;
}

export default function Objectives() {
  const t = useTranslations("objectives");
  const tData = useTranslations("objectives.data"); // Separate key for array

  // Icons array remains the same since they are React elements
  const icons: ReactElement[] = [
    <FaAward key="award" />,
    <FaFolderOpen key="folder" />,
    <FaHandshake key="handshake" />,
    <FaRegLightbulb key="bulb" />,
    <FaGlobe key="globe" />,
    <FaLeaf key="leaf" />,
    <FaBuilding key="building" />,
  ];

  // Dynamic data loading
  const data: ObjectiveItem[] = Array.from({ length: 7 }).map((_, i) => ({
    icon: icons[i],
    title: tData(`${i}.title`),
    text: tData(`${i}.text`),
  }));


  return (
    <section className="bg-slate-900 text-white py-16 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">{t("title")}</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item, i) => (
            <div className="bg-white text-gray-800 rounded-3xl p-8 text-right shadow-lg" key={i}>
              <div className="text-amber-700 text-4xl mb-4">{item.icon}</div>
              <h3 className="font-bold mb-3 text-lg">{item.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}