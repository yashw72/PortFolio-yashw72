// components/Navbar.jsx
// Interactive & professional sticky navigation bar with active section spy,
// animated hamburger menu, smooth scrolling, resume CTA, and keyboard accessibility.

import { useState, useEffect, useCallback } from 'react';
import { PERSONAL } from '../data/portfolioData';

const NAV_LINKS = [
  { label: 'HOME',     href: '#hero',     id: 'hero' },
  { label: 'ABOUT',   href: '#about',    id: 'about' },
  { label: 'SKILLS',  href: '#skills',   id: 'skills' },
  { label: 'PROJECTS',href: '#projects', id: 'projects' },
  { label: 'JOURNEY', href: '#journey',  id: 'journey' },
  { label: 'CONTACT', href: '#contact',  id: 'contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll state for navbar appearance and active section spy
  useEffect(() => {
    const handleScroll = () => {
      // 1. Scrolled style trigger
      setScrolled(window.scrollY > 25);

      // 2. Section spy logic
      const scrollPosition = window.scrollY + 120; // Offset for navbar height

      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const sectionId = NAV_LINKS[i].id;
        const sectionEl = document.getElementById(sectionId);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  // Smooth scroll handler
  const scrollToSection = useCallback((e, href) => {
    e.preventDefault();
    setMenuOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      setActiveSection(targetId);
      window.history.pushState(null, '', href);
    }
  }, []);

  return (
    <nav
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      aria-label="Main navigation"
    >
      <div className="navbar-inner">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="navbar-logo"
          onClick={(e) => scrollToSection(e, '#hero')}
          aria-label="Yash Warungase - Back to top"
        >
          <span className="logo-badge">YW /&gt;</span>
          <span className="logo-name">
            YASH<span className="logo-dot">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="navbar-links" role="menubar">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.label} role="none">
                <a
                  href={link.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  role="menuitem"
                  aria-current={isActive ? 'page' : undefined}
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  <span className="nav-link-text">{link.label}</span>
                  {isActive && <span className="nav-active-pill" />}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Action Controls: Resume Button & Mobile Toggle */}
        <div className="navbar-actions">
          {/* Desktop Resume CTA Button */}
          <a
            href={PERSONAL.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-resume-btn"
            title="View Yash's Resume"
            aria-label="View Resume (opens in new tab)"
          >
            <span>RESUME</span>
            <span className="resume-icon" aria-hidden="true">↗</span>
          </a>

          {/* Mobile Animated Hamburger Button */}
          <button
            className={`mobile-menu-btn ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation-menu"
          >
            <span className="hamburger-line top" />
            <span className="hamburger-line middle" />
            <span className="hamburger-line bottom" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu with Backdrop */}
      <div
        id="mobile-navigation-menu"
        className={`mobile-nav-wrapper ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-nav-backdrop" onClick={() => setMenuOpen(false)} />
        <div className="mobile-nav" role="menu">
          <div className="mobile-nav-header">
            <span className="mobile-nav-label">// NAVIGATION</span>
          </div>

          <div className="mobile-nav-links">
            {NAV_LINKS.map((link, idx) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  role="menuitem"
                  aria-current={isActive ? 'page' : undefined}
                  style={{ animationDelay: `${idx * 0.04}s` }}
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  <span className="mobile-link-idx">0{idx + 1}</span>
                  <span className="mobile-link-text">{link.label}</span>
                  {isActive && <span className="mobile-active-dot">●</span>}
                </a>
              );
            })}
          </div>

          {/* Mobile Resume CTA Button */}
          <div className="mobile-nav-footer">
            <a
              href={PERSONAL.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-coral mobile-resume-btn"
              onClick={() => setMenuOpen(false)}
            >
              <span>DOWNLOAD RESUME</span>
              <span>↓</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
