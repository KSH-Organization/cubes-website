import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="bg-white py-16 md:py-28">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "hsla(209, 74%, 24%, 1)" }}
          >
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            KSHC Construction & Real Estate is a leading construction and real
            estate company in Sudan, committed to shaping the country&apos;s
            urban landscape through high-quality projects. We specialize in
            residential, commercial, and mixed-use developments, delivering
            solutions that enhance infrastructure, elevate living standards, and
            meet local market demands. With a strong Project Management Office
            (PMO) overseeing quality, timelines, and budgets, we ensure every
            project is executed with precision. Through strategic investments
            and innovative construction practices, CUBES drives sustainable
            growth, contributing to Sudan&apos;s development and positioning
            itself as a key player in the real estate and construction sectors.
          </p>
        </div>

        <div>
          <Image
            src="/images/who-we-are.jpg"
            alt="Construction illustration"
            width={450}
            height={350}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
