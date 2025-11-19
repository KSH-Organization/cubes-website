export default function RealEstate() {
  const data = [
    {
      title: "MARKET RESEARCH & STRATEGIC PLANNING",
      description:
        "We conduct in-depth market analysis to identify prime locations and promising investment opportunities, ensuring the success and sustainability of our projects.",
      image: "/images/r01.jpg",
    },
    {
      title: "DESIGN & ARCHITECTURAL PLANNING",
      description:
        "Our team of top architects and designers develops modern, sustainable designs that balance aesthetics and functionality to provide a comfortable and seamless user experience.",
      image: "/images/r02.jpg",
    },
    {
      title: "REGULATORY COMPLIANCE & PERMITS",
      description:
        "We ensure full compliance with regulations and obtain all necessary permits efficiently, guaranteeing that our projects meet the highest legal and engineering standards.",
      image: "/images/r03.png",
    },
    {
      title: "HIGH-QUALITY PROJECT EXECUTION",
      description:
        "Utilizing the latest construction technologies and collaborating with top contractors and suppliers, we ensure that our projects are completed with precision, on time, and within budget.",
      image: "/images/r04.jpg",
    },
    {
      title: "EFFECTIVE MARKETING & SALES STRATEGIES",
      description:
        "We implement comprehensive marketing strategies to reach the right audience, offering flexible financing solutions and payment plans that make investing in our projects easy and accessible.",
      image: "/images/r05.jpg",
    },
    {
      title: "POST-DELIVERY PROPERTY MANAGEMENT",
      description:
        "Our property management services ensure smooth operations, maximizing asset value and providing a seamless experience for clients and investors.",
      image: "/images/r06.jpg",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-28">
      <div className="container mx-auto px-4 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-white mb-4 inline-block px-8 py-3"
          style={{ backgroundColor: "hsla(209, 74%, 24%, 1)" }}
        >
          Real Estate Services
        </h2>
        <p className="text-gray-700 mb-12 max-w-3xl mx-auto mt-6">
          At KSHC Construction & Real Estate, we don&apos;t just develop
          properties—we create integrated communities that reflect innovation,
          quality, and sustainability.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item, i) => (
            <div className="relative pt-8" key={i}>
              <span
                className="absolute top-0 right-4 font-black text-5xl"
                style={{
                  color: "hsla(32, 100%, 35%, 1)",
                  textShadow: "8px 8px 0px rgba(223, 193, 106, 0.2)",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-300">
                <div className="mb-4 mt-4 h-32 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3
                  className="font-bold mb-3 text-base"
                  style={{ color: "hsla(209, 74%, 24%, 1)" }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
