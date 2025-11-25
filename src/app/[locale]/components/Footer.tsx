import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl"; // Import hooks for translations

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-slate-900 text-white py-12 md:py-20">
      <div className="container mx-auto px-4 grid gap-10 md:grid-cols-3 mb-10">

        {/* Column 1 */}
        <div>
          <Image
            src="/images/logo.png"
            alt="KSHC Logo"
            width={140}
            height={140}
            className="w-36 mb-6"
          />
          <ul className="space-y-2">
            <li>📍 {t("location")}</li>
            <li>📧 {t("email")}</li>
            <li>📞 ‎+249900000000</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-amber-700 mb-4 font-bold">{t("company")}</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/about"
                className="hover:text-amber-700 transition-colors"
              >
                {/* Nested lookup for 'من نحن' translation from navbar/about */}
                {useTranslations("navbar")("about")} 
              </Link>
            </li>
            <li>
              <Link
                href="/people"
                className="hover:text-amber-700 transition-colors"
              >
                {t("team")}
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-amber-700 transition-colors"
              >
                {/* Nested lookup for 'تواصل معنا' translation from navbar/contactUs */}
                {useTranslations("navbar")("contactUs")} 
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-amber-700 mb-4 font-bold">{t("contactUsTitle")}</h4>
          <textarea
            placeholder={t("placeholder")}
            className="w-full px-3 py-2 mb-3 rounded-xl border border-white bg-transparent text-white placeholder-opacity-85 placeholder-white focus:border-white focus:outline-none transition-colors"
          ></textarea>
          <button className="bg-amber-700 text-white px-6 py-2 rounded-xl mb-4 hover:bg-amber-900 transition-colors font-semibold">
            {t("send")}
          </button>

          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-700 rounded-full w-9 h-9 flex items-center justify-center"
            >
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
                style={{ filter: "invert(1) brightness(2)" }}
              />
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-700 rounded-full w-9 h-9 flex items-center justify-center"
            >
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
                style={{ filter: "invert(1) brightness(2)" }}
              />
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-700 rounded-full w-9 h-9 flex items-center justify-center"
            >
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg"
                alt="X"
                width={24}
                height={24}
                style={{ filter: "invert(1) brightness(2)" }}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center border-t border-white border-opacity-20 pt-4 mt-10 text-sm text-gray-300">
        {t("copyright")}
      </div>
    </footer>
  );
}