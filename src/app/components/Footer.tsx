import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Column 1 */}
        <div className="footer-col">
          <img src="/images/logo-footer.png" alt="CUBES Logo" className="footer-logo" />
          <ul className="footer-contact">
            <li>📍 Location</li>
            <li>📧 Email Address</li>
            <li>📞 +249900000000</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/people">People</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <textarea placeholder="Enter message" className="footer-textarea"></textarea>
          <button className="btn footer-btn">Send</button>
          <div className="footer-socials">
            <span>Dr</span><span>Be</span><span>Ig</span>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        Copyright © KSHC Construction & Real Estate
      </div>
    </footer>
  );
}
