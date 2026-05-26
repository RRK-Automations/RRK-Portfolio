import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner container">
        {/* Column 1 — Brand */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo" aria-label="RRK Automations Home">
            <img
              src="https://rrkautomations.com/logorrk.png"
              alt="RRK Automations"
              height="32"
            />
          </Link>
          <p className="footer__tagline">
            AI &amp; WhatsApp Automation Agency
          </p>
          <a
            href="https://rrkautomations.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__website-link"
          >
            Visit our main website
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M6 3H13V10M13 3L3 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Column 2 — Quick Links */}
        <div className="footer__links">
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__link-list">
            <li>
              <Link to="/projects" className="footer__link">Projects</Link>
            </li>
            <li>
              <Link to="/about" className="footer__link">About</Link>
            </li>
            <li>
              <Link to="/contact" className="footer__link">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Column 3 — Connect */}
        <div className="footer__connect">
          <h4 className="footer__heading">Connect</h4>
          <div className="footer__socials">
            {/* WhatsApp */}
            <a
              href="https://wa.me/918341374436"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-icon"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.01a9.865 9.865 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374A9.86 9.86 0 012.16 12.05C2.16 6.599 6.599 2.16 12.05 2.16c2.646 0 5.13 1.03 6.996 2.9a9.827 9.827 0 012.9 6.994c-.003 5.45-4.44 9.89-9.896 9.89v-.16zm8.413-18.298A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.414z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/rrk-automations"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-icon"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:rrkautomations@gmail.com"
              className="footer__social-icon"
              aria-label="Email"
              title="Email"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4L12 13L2 4" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container">
          <p className="footer__copyright">
            &copy; {currentYear} RRK Automations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
