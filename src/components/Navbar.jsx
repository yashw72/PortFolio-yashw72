// components/Navbar.jsx
// Fixed top navbar with logo, nav links, CTA button, and mobile menu
import { useState, useEffect } from 'react';
import { PERSONAL } from '../data/portfolioData';

const NAV_LINKS = [
  { label: 'HOME',     href: '#hero' },
  { label: 'ABOUT',   href: '#about' },
  { label: 'SKILLS',  href: '#skills' },
  { label: 'PROJECTS',href: '#projects' },
  { label: 'JOURNEY', href: '#journey' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleMobileClick = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="navbar"
      style={scrolled ? { boxShadow: '0 4px 0 rgba(0,0,0,0.06)' } : {}}
      aria-label="Main navigation"
    >
      <div className="navbar-inner">
        {/* Logo */}
        <a href="#hero" className="navbar-logo" aria-label="Go to top">
          <span className="logo-badge">YW /&gt;</span>
          <span className="logo-name">YASH</span>
        </a>

        {/* Desktop nav links */}
        <ul className="navbar-links" role="menubar">
          {NAV_LINKS.map((link) => (
            <li key={link.label} role="none">
              <a href={link.href} className="nav-link" role="menuitem">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume CTA star */}
        <a
          href={PERSONAL.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-cta"
          title="Download Resume"
          aria-label="Download Resume"
        >
          ✦
        </a>

        {/* Mobile menu toggle */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown nav */}
      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`} role="menu">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="mobile-nav-link"
            role="menuitem"
            onClick={() => handleMobileClick(link.href)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
