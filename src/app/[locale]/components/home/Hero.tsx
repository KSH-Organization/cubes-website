import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
          {/* Left column - Text */}
          <div className="w-full md:w-auto md:flex-1">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Building Sudan&apos;s Future
            </h1>
            <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-200">
              Driving Sustainable Growth
              <br />
              Through Innovative Construction
              <br />
              and Real Estate.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-amber-600 text-white font-semibold rounded-lg px-8 py-3 transition-all hover:bg-amber-700"
            >
              Contact us
            </Link>
          </div>

          {/* Right column - Images */}
          <div
            className="relative shrink-0 hidden md:block"
            style={{ width: "539px", height: "470px" }}
          >
            {/* Tall left image */}
            <div
              className="absolute overflow-hidden"
              style={{
                width: "176px",
                height: "320px",
                left: "92px",
                top: "60px",
                borderRadius: "100px 100px 0 100px",
              }}
            >
              <img
                src="/images/home1.jpg"
                alt="City view 1"
                loading="eager"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Top right image */}
            <div
              className="absolute overflow-hidden"
              style={{
                width: "192px",
                height: "160px",
                left: "288px",
                top: "60px",
                borderRadius: "100px 100px 100px 0",
              }}
            >
              <img
                src="/images/home2.jpg"
                alt="City view 2"
                loading="eager"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Bottom right image */}
            <div
              className="absolute overflow-hidden"
              style={{
                width: "176px",
                height: "176px",
                left: "288px",
                top: "241px",
                borderRadius: "100px 0 100px 100px",
              }}
            >
              <img
                src="/images/home3.jpg"
                alt="City view 3"
                loading="eager"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Diagonal white section at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 50%, 100% 100%, 0 100%)" }}
      ></div>
    </section>
  );
}
