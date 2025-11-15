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
    <section className="bg-white py-16 md:py-28">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Real Estate Services</h2>
        <p className="text-gray-700 mb-12 max-w-3xl mx-auto">
          At KSHC Construction & Real Estate, we don&apos;t just develop properties—we create integrated communities that reflect innovation, quality, and sustainability.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map((title, i) => (
            <div className="bg-white rounded-3xl p-8 shadow-md relative border border-gray-300" key={i}>
              <span className="absolute top-2 right-3 text-amber-700 font-bold text-xl">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-bold text-slate-900 mb-3 text-lg">{title}</h3>
              <p className="text-blue-400 text-sm">We ensure quality, compliance, and design excellence across all our projects.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
