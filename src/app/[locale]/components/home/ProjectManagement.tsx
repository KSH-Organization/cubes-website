export default function ProjectManagement() {
  const data = [
    "END-TO-END PROJECT MANAGEMENT",
    "STRATEGIC PLANNING & SCHEDULING",
    "RISK MANAGEMENT & MITIGATION STRATEGIES",
    "PERFORMANCE MONITORING & QUALITY ASSURANCE",
    "BUDGET & COST MANAGEMENT",
    "STAKEHOLDER & COMMUNICATION MANAGEMENT",
    "CONTRACT & VENDOR MANAGEMENT",
    "PROJECT MANAGEMENT CONSULTING & TRAINING",
  ];

  return (
    <section className="bg-gray-100 py-16 md:py-28">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Project Management Services</h2>
        <p className="text-gray-700 mb-12 max-w-3xl mx-auto">
          At KSHC Construction & Real Estate, we understand that the success of any project depends on meticulous
          planning, efficient management, and flawless execution. We offer a comprehensive range of project management
          services designed to help you achieve your goals with high quality, on time, and within budget.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((title, i) => (
            <div className="bg-white rounded-3xl p-8 shadow-md relative border border-gray-300" key={i}>
              <span className="absolute top-2 right-3 text-amber-700 font-bold text-xl">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-bold text-slate-900 mb-3 text-lg">{title}</h3>
              <p className="text-blue-400 text-sm">
                We help you deliver with excellence through detailed planning, risk management,
                and strong coordination.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
