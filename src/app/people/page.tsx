import Image from "next/image";
import Footer from "../components/Footer";

export default function PeoplePage() {
  const departments = [
    {
      title: "Real Estate Development",
      desc: "Responsible for identifying and evaluating property opportunities, conducting feasibility studies, and planning projects from concept to execution to maximize investment returns.",
      img: "/images/departments/realestate.jpg",
    },
    {
      title: "Project Management Office",
      desc: "Oversees the planning and execution of all projects, ensuring they meet timelines and budgets, while setting standards, tracking performance, and managing risks for quality delivery.",
      img: "/images/departments/pmo.jpg",
    },
    {
      title: "Quality and Control",
      desc: "Focuses on establishing and monitoring quality policies and standards, performing audits, and driving continuous improvement across processes, products, and services.",
      img: "/images/departments/quality.jpg",
    },
    {
      title: "Customer Service",
      desc: "Handles all customer interactions before, during, and after service delivery; addressing inquiries and complaints to ensure customer satisfaction and enhance their overall experience.",
      img: "/images/departments/customer.jpg",
    },
  ];

  return (
    <main className="people-page">
      {/* ===== HERO ===== */}
      <section className="people-hero">
        <Image
          src="/images/people-hero.jpg"
          alt="Construction Crane"
          width={1920}
          height={1080}
          className="hero-bg"
        />
        <div className="hero-overlay">
          <h1>Departments That Deliver, People Who Inspire</h1>
        </div>
      </section>

      {/* ===== DEPARTMENTS ===== */}
      <section className="departments-section py-12">
        <div className="container text-center">
          <h2 className="h2 mb-10">Our Departments</h2>
          <div className="departments-grid">
            {departments.map((dept, i) => (
              <div key={i} className="dept-card">
                <h3>{dept.title}</h3>
                <div className="dept-img">
                  <Image src={dept.img} alt={dept.title} width={320} height={200} />
                </div>
                <p>{dept.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      
    </main>
  );
}
