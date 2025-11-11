export default function RealEstate() {
  const data = [
    "MARKET RESEARCH & STRATEGIC PLANNING",
    "DESIGN & ARCHITECTURAL PLANNING",
    "REGULATORY COMPLIANCE & PERMITS",
    "HIGH-QUALITY PROJECT EXECUTION",
    "EFFECTIVE MARKETING & SALES STRATEGIES",
    "POST-DELIVERY PROPERTY MANAGEMENT",
  ];

  return (
    <section className="re-services">
      <div className="container text-center">
        <h2>Real Estate Services</h2>
        <p>
          At KSHC Construction & Real Estate, we don’t just develop properties—we create integrated communities that reflect innovation, quality, and sustainability.
        </p>
        <div className="re-grid">
          {data.map((title, i) => (
            <div className="re-card" key={i}>
              <span className="re-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>We ensure quality, compliance, and design excellence across all our projects.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
