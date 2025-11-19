export default function ProjectManagement() {
  const data = [
    {
      title: "END-TO-END PROJECT MANAGEMENT",
      description:
        "We provide full-cycle project management, from initiation to successful completion, following international standards.",
      image: "/images/1.png",
    },
    {
      title: "STRATEGIC PLANNING & SCHEDULING",
      description:
        "We help you develop comprehensive project plans based on in-depth analysis, ensuring smooth execution without delays.",
      image: "/images/2.png",
    },
    {
      title: "RISK MANAGEMENT & MITIGATION STRATEGIES",
      description:
        "We identify potential risks and implement proactive strategies to prevent disruptions.",
      image: "/images/3.jpg",
    },
    {
      title: "PERFORMANCE MONITORING & QUALITY ASSURANCE",
      description:
        "We implement robust quality control mechanisms to ensure compliance with industry standards.",
      image: "/images/4.jpg",
    },
    {
      title: "BUDGET & COST MANAGEMENT",
      description:
        "We assist in precise budgeting and financial control to prevent cost overruns.",
      image: "/images/5.jpg",
    },
    {
      title: "STAKEHOLDER & COMMUNICATION MANAGEMENT",
      description:
        "We ensure seamless collaboration between all stakeholders for a unified project vision.",
      image: "/images/6.jpg",
    },
    {
      title: "CONTRACT & VENDOR MANAGEMENT",
      description:
        "We help you select the right vendors and manage contracts to guarantee high-quality service delivery.",
      image: "/images/7.jpg",
    },
    {
      title: "PROJECT MANAGEMENT CONSULTING & TRAINING",
      description:
        "We offer expert consulting and training programs to enhance your team's project management skills.",
      image: "/images/8.jpg",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 md:py-28">
      <div className="container mx-auto px-4 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-white mb-4 inline-block px-8 py-3"
          style={{ backgroundColor: "hsla(209, 74%, 24%, 1)" }}
        >
          Project Management Services
        </h2>
        <p className="text-gray-700 mb-12 max-w-3xl mx-auto mt-6">
          At KSHC Construction & Real Estate, we understand that the success of
          any project depends on meticulous planning, efficient management, and
          flawless execution. We offer a comprehensive range of project
          management services designed to help you achieve your goals with high
          quality, on time, and within budget.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
