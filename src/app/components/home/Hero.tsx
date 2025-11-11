import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        {/* Left column */}
        <div className="hero-text">
          <h1>Building Sudan’s Future</h1>
          <p>
            Driving Sustainable Growth Through Innovative Construction and Real
            Estate.
          </p>
          <Link href="/contact" className="btn hero-btn">
            Contact us
          </Link>
        </div>

        {/* Right column (3 rounded images) */}
        <div className="hero-images">
          <div className="img-shape">
            <Image
              src="/images/home1.jpg"
              alt="City view 1"
              width={280}
              height={280}
              className="hero-img"
            />
          </div>
          <div className="img-shape">
            <Image
              src="/images/home3.jpg"
              alt="City view 2"
              width={280}
              height={280}
              className="hero-img"
            />
          </div>
          <div className="img-shape">
            <Image
              src="/images/hero-3.jpg"
              alt="City view 3"
              width={280}
              height={280}
              className="hero-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
