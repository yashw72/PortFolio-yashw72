// components/Navbar.jsx
// Sticky technical command bar with active section spy, mobile drawer, and resume CTA.

import { useState, useEffect, useCallback } from 'react';
import { PERSONAL } from '../data/portfolioData';

const NAV_ITEMS = [
  { label: 'WORKSPACE', id: 'hero', href: '#hero' },
  { label: 'IDENTITY', id: 'identity', href: '#identity' },
  { label: 'ARSENAL', id: 'arsenal', href: '#arsenal' },
  { label: 'BUILD LOGS', id: 'build-logs', href: '#build-logs' },
  { label: 'JOURNEY', id: 'journey', href: '#journey' },
  { label: 'CODE LAB', id: 'code-lab', href: '#code-lab' },
  { label: 'CONNECT', id: 'contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const scrollPos = window.scrollY + 140;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const scrollTo = useCallback((e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const navOffset = 70;
      const targetPos = element.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({
        top: targetPos,
        behavior: 'smooth',
      });
      setActiveSection(targetId);
      window.history.pushState(null, '', href);
    }
  }, []);

  return (
    <header className={`workspace-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Terminal Identifier */}
        <a
          href="#hero"
          className="navbar-brand-tag"
          onClick={(e) => scrollTo(e, '#hero')}
          aria-label="Yash Warungase Workspace Top"
        >
          <span className="brand-bracket">[</span>
          <span className="brand-text">YASH.DEV</span>
          <span className="brand-bracket">]</span>
          <span className="brand-pulse-dot" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-desktop-nav" aria-label="Workspace Navigation">
          <ul className="nav-links-list">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="nav-item">
                  <a
                    href={item.href}
                    className={`nav-anchor ${isActive ? 'active' : ''}`}
                    onClick={(e) => scrollTo(e, item.href)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span className="anchor-text">{item.label}</span>
                    {isActive && <span className="anchor-pill" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right CTA Actions */}
        <div className="navbar-actions">
          <a
            href={PERSONAL.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-resume-cta"
            title="Download Developer Resume"
          >
            <span>RESUME</span>
            <span className="resume-icon">↗</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className={`navbar-mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span className="line top" />
            <span className="line mid" />
            <span className="line bot" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`navbar-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-backdrop" onClick={() => setMobileMenuOpen(false)} />
        <div className="mobile-drawer-panel">
          <div className="drawer-header">
            <span className="drawer-title">// WORKSPACE_INDEX</span>
            <button
              type="button"
              className="drawer-close-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              ✕
            </button>
          </div>

          <ul className="drawer-links-list">
            {NAV_ITEMS.map((item, idx) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`drawer-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => scrollTo(e, item.href)}
                  >
                    <span className="drawer-link-idx">0{idx + 1}</span>
                    <span className="drawer-link-label">{item.label}</span>
                    {isActive && <span className="drawer-active-dot">●</span>}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="drawer-footer">
            <a
              href={PERSONAL.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary drawer-resume-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>DOWNLOAD RESUME</span>
              <span>↓</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
