import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="who">
      <div className="container who-grid">
        <div className="who-text">
          <h2>Who We Are</h2>
          <p>
            KSHC Construction & Real Estate is a leading construction and real
            estate company in Sudan, committed to shaping the country’s urban
            landscape through high-quality projects. We specialize in
            residential, commercial, and mixed-use developments, delivering
            solutions that enhance infrastructure, elevate living standards, and
            meet local market demands. With a strong Project Management Office
            (PMO) overseeing quality, timelines, and budgets, we ensure every
            project is executed with precision. Through strategic investments
            and innovative construction practices, CUBES drives sustainable
            growth, contributing to Sudan’s development and positioning itself
            as a key player in the real estate and construction sectors.
          </p>
        </div>

        <div className="who-img">
          <Image
            src="/images/who-we-are.png"
            alt="Construction illustration"
            width={450}
            height={350}
          />
        </div>
      </div>
    </section>
  );
}
