"use client";
import Image from "next/image";
import Footer from "../components/Footer";
import { useTranslations } from "next-intl"; // Import hooks for translations

export default function ContactPage() {
  const t = useTranslations("contactPage");
  // Assuming a 'send' key exists in the 'common' or 'footer' namespace for the button text
  const tCommon = useTranslations("common"); 

  // Tailwind CSS classes for consistent input styling
  const inputClass = "w-full p-4 rounded-lg border border-gray-300 text-slate-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all";

  return (
    <main>
      {/* ===== HERO / FORM SECTION ===== */}
      {/* FIX APPLIED: Added bg-slate-900 to the section. This covers the vertical padding area, 
          preventing the main white background from showing and closing the gap to the footer. */}
      <section className="relative flex items-center justify-center pt-24 pb-20 md:pt-32 md:pb-28 bg-slate-900">
        <Image
          src="/images/contact-us.jpg"
          alt="Contact background"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover brightness-50" // Dim the background slightly
          priority 
        />
        
        {/* Form Container */}
        <div className="relative bg-white/95 p-8 md:p-12 lg:p-16 rounded-3xl max-w-4xl w-11/12 mx-auto shadow-2xl z-10 backdrop-blur-sm">
          
          {/* Header Section */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">
              {t("title")}
            </h1>
            <p className="text-gray-600 text-lg">
              {t("subtitle")}
            </p>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-6">
            
            {/* Name and Email in one row */}
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                placeholder={t("namePlaceholder")}
                required
                className={`${inputClass} md:flex-1`}
              />
              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                required
                className={`${inputClass} md:flex-1`}
              />
            </div>
            
            {/* Subject */}
            <input
                type="text"
                placeholder={t("subjectPlaceholder")}
                required
                className={inputClass}
            />
            
            {/* Message Textarea */}
            <textarea
                placeholder={t("messagePlaceholder")}
                rows={5}
                required
                className={inputClass}
            ></textarea>
            
            {/* Submit Button */}
            <button 
                type="submit"
                className="bg-amber-600 text-white font-bold text-lg tracking-wider uppercase py-4 rounded-lg transition-all shadow-md hover:bg-amber-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-amber-500 focus:ring-opacity-50 mt-4"
            >
                {tCommon("send")}
            </button>
          </form>
        </div>
      </section>


    </main>
  );
}