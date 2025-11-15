import { FaRegLightbulb, FaHandshake, FaGlobe, FaLeaf, FaFolderOpen, FaBuilding, FaAward } from "react-icons/fa";
import { ReactElement } from "react";

interface ObjectiveItem {
  icon: ReactElement;
  title: string;
  text: string;
}

export default function Objectives() {
  const data: ObjectiveItem[] = [
    { icon: <FaAward />, title: "Achieve excellence in project management", text: "by applying best practices and standardized formats for streamlined operations." },
    { icon: <FaFolderOpen />, title: "Enhance document management and archiving efficiency", text: "through a modern digital system that ensures accessibility and governance." },
    { icon: <FaHandshake />, title: "Increase client satisfaction rates", text: "by offering tailored consulting and technological support to help them achieve their goals." },
    { icon: <FaRegLightbulb />, title: "Leverage technology and innovation", text: "to enhance project execution efficiency and reduce operational costs." },
    { icon: <FaGlobe />, title: "Expand our network of partners and clients", text: "by building sustainable strategic relationships that drive Cube’s market growth." },
    { icon: <FaLeaf />, title: "Meet sustainability standards", text: "by developing projects that minimize environmental impact and promote smart resource utilization." },
    { icon: <FaBuilding />, title: "Invest in workforce development", text: "through continuous training on the latest project management tools and real estate technologies." },
  ];

  return (
    <section className="bg-slate-900 text-white py-16 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">Our Objectives</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item, i) => (
            <div className="bg-white text-gray-800 rounded-3xl p-8 text-left shadow-lg" key={i}>
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
