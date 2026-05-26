import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const navItems = [
    { label: 'Projects', to: '/projects' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--open' : ''}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <Link to="/" className="navbar__logo" aria-label="RRK Automations Home">
          <img
            src="https://rrkautomations.com/logorrk.png"
            alt="RRK Automations"
            height="36"
            width="auto"
          />
        </Link>

        {/* Nav links */}
        <div className={`navbar__menu ${menuOpen ? 'navbar__menu--open' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`navbar__link ${location.pathname === item.to ? 'navbar__link--active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          {/* CTA inside mobile menu */}
          <a
            href="https://rrkautomations.com"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__cta navbar__cta--mobile btn btn-primary"
          >
            Visit Our Website
          </a>
        </div>

        {/* Desktop CTA */}
        <a
          href="https://rrkautomations.com"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__cta navbar__cta--desktop btn btn-primary"
        >
          Visit Our Website
        </a>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--active' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
        </button>
      </div>

      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div
          className="navbar__overlay"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default Navbar;
