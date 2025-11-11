import Image from "next/image";

export default function Services() {
  const services = [
    { img: "/images/service-project.jpg", title: "Project Management" },
    { img: "/images/service-realestate.jpg", title: "Real Estate" },
  ];

  return (
    <section className="services">
      <div className="container text-center">
        <h2>KSHC Construction & Real Estate Services</h2>
        <div className="service-grid">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <Image src={s.img} alt={s.title} width={500} height={350} />
              <h3>{s.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
