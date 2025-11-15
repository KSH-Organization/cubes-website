import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 md:py-20">
      <div className="container mx-auto px-4 grid gap-10 md:grid-cols-3 mb-10">
        {/* Column 1 */}
        <div>
          <Image src="/images/logo-footer.png" alt="CUBES Logo" width={140} height={56} className="w-36 mb-6" />
          <ul className="space-y-2">
            <li>📍 Location</li>
            <li>📧 Email Address</li>
            <li>📞 +249900000000</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-amber-700 mb-4 font-bold">Company</h4>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-amber-700 transition-colors">About Us</Link></li>
            <li><Link href="/people" className="hover:text-amber-700 transition-colors">People</Link></li>
            <li><Link href="/contact" className="hover:text-amber-700 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-amber-700 mb-4 font-bold">Contact Us</h4>
          <textarea placeholder="Enter message" className="w-full px-3 py-2 mb-3 rounded-xl border border-white bg-transparent text-white placeholder-opacity-85 placeholder-white focus:border-white focus:outline-none transition-colors"></textarea>
          <button className="bg-amber-700 text-white px-6 py-2 rounded-xl mb-4 hover:bg-amber-900 transition-colors font-semibold">Send</button>
          <div className="flex gap-3">
            <span className="bg-amber-700 rounded-full w-9 h-9 flex items-center justify-center font-semibold">Dr</span>
            <span className="bg-amber-700 rounded-full w-9 h-9 flex items-center justify-center font-semibold">Be</span>
            <span className="bg-amber-700 rounded-full w-9 h-9 flex items-center justify-center font-semibold">Ig</span>
          </div>
        </div>
      </div>
      <div className="text-center border-t border-white border-opacity-20 pt-4 mt-10 text-sm text-gray-300">
        Copyright © KSHC Construction & Real Estate
      </div>
    </footer>
  );
}
