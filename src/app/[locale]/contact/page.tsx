"use client";
import Image from "next/image";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <main>
      {/* ===== HERO / FORM SECTION ===== */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src="/images/contact-bg.jpg"
          alt="Laptop background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-700 bg-opacity-90 p-12 md:p-16 rounded-3xl max-w-4xl w-11/12 shadow-2xl">
          <h1 className="text-center text-3xl md:text-5xl font-bold text-white mb-10">Get in Touch With Us</h1>

          <form className="flex flex-col gap-7">
            <div className="flex flex-wrap gap-6">
              <input type="text" placeholder="Your Name" required className="flex-1 min-w-[200px] bg-transparent border-b border-white border-opacity-70 text-white text-lg py-2 outline-none transition-colors placeholder-white placeholder-opacity-85 focus:border-white" />
              <input type="email" placeholder="Email Address" required className="flex-1 min-w-[200px] bg-transparent border-b border-white border-opacity-70 text-white text-lg py-2 outline-none transition-colors placeholder-white placeholder-opacity-85 focus:border-white" />
              <input type="text" placeholder="Phone Number (optional)" className="flex-1 min-w-[200px] bg-transparent border-b border-white border-opacity-70 text-white text-lg py-2 outline-none transition-colors placeholder-white placeholder-opacity-85 focus:border-white" />
            </div>

            <div>
              <textarea placeholder="Message" rows={4} required className="w-full bg-transparent border-b border-white border-opacity-70 text-white text-lg py-2 outline-none resize-none transition-colors placeholder-white placeholder-opacity-85 focus:border-white"></textarea>
            </div>

            <button type="submit" className="self-end bg-slate-900 text-white text-lg font-medium px-8 py-2.25 rounded-lg hover:bg-slate-950 transition-colors">
              Leave us a Message
            </button>
          </form>
        </div>
      </section>
      <Footer />      
    </main>
  );
}
