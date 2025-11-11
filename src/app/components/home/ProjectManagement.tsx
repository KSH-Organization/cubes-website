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
    <section className="pm-services">
      <div className="container text-center">
        <h2>Project Management Services</h2>
        <p>
          At KSHC Construction & Real Estate, we understand that the success of any project depends on meticulous
          planning, efficient management, and flawless execution. We offer a comprehensive range of project management
          services designed to help you achieve your goals with high quality, on time, and within budget.
        </p>
        <div className="pm-grid">
          {data.map((title, i) => (
            <div className="pm-card" key={i}>
              <span className="pm-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>
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
