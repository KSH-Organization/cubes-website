import Image from "next/image";

export default function Services() {
  const services = [
    { img: "/images/service-project.jpg", title: "Project Management" },
    { img: "/images/service-realestate.jpg", title: "Real Estate" },
  ];

  return (
    <section className="bg-white py-16 md:py-28">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">KSHC Construction & Real Estate Services</h2>
        <div className="grid gap-10 md:grid-cols-2 justify-center">
          {services.map((s, i) => (
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow" key={i}>
              <Image src={s.img} alt={s.title} width={500} height={350} className="w-full h-64 object-cover" />
              <h3 className="text-xl font-bold text-slate-900 p-6">{s.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
