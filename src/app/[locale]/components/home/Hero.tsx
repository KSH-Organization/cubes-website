import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-800 to-slate-900 text-white py-20 md:py-32 clip-path-polygon">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Left column */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Building Sudan&apos;s Future</h1>
          <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-300 max-w-xs">
            Driving Sustainable Growth Through Innovative Construction and Real
            Estate.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-amber-700 text-white font-semibold rounded-lg px-7 py-2.25 transition-all duration-250 hover:bg-amber-900">
            Contact us
          </Link>
        </div>

        {/* Right column (3 rounded images) */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 justify-items-center">
          <div className="w-40 h-40 overflow-hidden rounded-full" style={{borderRadius: "50% 50% 0 50%"}}>
            <Image
              src="/images/home1.jpg"
              alt="City view 1"
              width={280}
              height={280}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-40 h-40 overflow-hidden rounded-full" style={{borderRadius: "50% 50% 0 50%"}}>
            <Image
              src="/images/home3.jpg"
              alt="City view 2"
              width={280}
              height={280}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-40 h-40 overflow-hidden rounded-full col-span-2" style={{borderRadius: "50% 50% 0 50%"}}>
            <Image
              src="/images/hero-3.jpg"
              alt="City view 3"
              width={280}
              height={280}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
