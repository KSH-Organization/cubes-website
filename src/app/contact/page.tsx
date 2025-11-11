"use client";
import Image from "next/image";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <main className="contact-page">
      {/* ===== HERO / FORM SECTION ===== */}
      <section className="contact-hero">
        <Image
          src="/images/contact-bg.jpg"
          alt="Laptop background"
          width={1920}
          height={1080}
          className="hero-bg"
        />
        <div className="contact-form-wrapper">
          <h1>Get in Touch With Us</h1>

          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="text" placeholder="Phone Number (optional)" />
            </div>

            <div className="form-message">
              <textarea placeholder="Message" rows={4} required></textarea>
            </div>

            <button type="submit" className="btn-blue">
              Leave us a Message
            </button>
          </form>
        </div>
      </section>
      <Footer />      
    </main>
  );
}
