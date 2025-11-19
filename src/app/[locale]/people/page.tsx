import Image from "next/image";
import Footer from "../components/Footer";

export default function PeoplePage() {
  const departments = [
    {
      title: "Real Estate Development",
      desc: "Responsible for identifying and evaluating property opportunities, conducting feasibility studies, and planning projects from concept to execution to maximize investment returns.",
      img: "/images/real estate.jpg",
    },
    {
      title: "Project Management Office",
      desc: "Oversees the planning and execution of all projects, ensuring they meet timelines and budgets, while setting standards, tracking performance, and managing risks for quality delivery.",
      img: "/images/PM-h.jpg",
    },
    {
      title: "Quality and Control",
      desc: "Focuses on establishing and monitoring quality policies and standards, performing audits, and driving continuous improvement across processes, products, and services.",
      img: "/images/qc.jpg",
    },
    {
      title: "Customer Service",
      desc: "Handles all customer interactions before, during, and after service delivery; addressing inquiries and complaints to ensure customer satisfaction and enhance their overall experience.",
      img: "/images/customer-services.jpg",
    },
  ];

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
            Departments That Deliver, People Who Inspire
          </h1>
        </div>
      </section>

      {/* ===== DEPARTMENTS ===== */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-10">
            Our Departments
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
      <Footer />
    </main>
  );
}
