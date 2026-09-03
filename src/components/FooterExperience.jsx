// components/FooterExperience.jsx
// Cinematic terminal exit footer with bold typography and network links.

import { motion } from 'framer-motion';
import { PERSONAL, SOCIAL_LINKS } from '../data/portfolioData';
import AnimatedCodeBackground from './AnimatedCodeBackground';
import MagneticButton from './MagneticButton';

export default function FooterExperience() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-experience-section">
      <AnimatedCodeBackground variant="contact" interactive={false} />

      <div className="container footer-container">
        {/* Giant Final Typography Invitation */}
        <div className="footer-hero-callout">
          <span className="footer-sys-tag">09 // SYSTEM_EXIT</span>
          <h2 className="footer-huge-title">
            <span className="footer-title-line">HAVE AN IDEA?</span>
            <span className="footer-title-line outline">LET'S BUILD IT.</span>
          </h2>

          <div className="footer-cta-wrapper">
            <MagneticButton href="#contact" className="btn btn-primary" strength={0.35}>
              <span>START CONVERSATION</span>
              <span>→</span>
            </MagneticButton>
          </div>
        </div>

        {/* Social Matrix Grid */}
        <div className="footer-social-matrix">
          {SOCIAL_LINKS.map((item) => (
            <MagneticButton
              key={item.label}
              href={item.url}
              target={item.url.startsWith('mailto:') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="footer-social-card"
              strength={0.2}
            >
              <div className="social-card-top">
                <span className="social-icon">{item.icon}</span>
                <span className="social-arrow" aria-hidden="true">↗</span>
              </div>
              <div className="social-card-name">{item.label}</div>
              <div className="social-card-note">{item.note}</div>
            </MagneticButton>
          ))}
        </div>

        {/* Bottom Technical Exit Strip */}
        <div className="footer-bottom-strip">
          <div className="strip-left">
            <span className="footer-brand-badge">YASH.DEV // 2025</span>
            <span className="footer-legal">
              DESIGNED &amp; ARCHITECTED BY YASH WARUNGASE &bull; {currentYear}
            </span>
          </div>

          <div className="strip-right">
            <button
              type="button"
              onClick={scrollToTop}
              className="footer-back-to-top"
              aria-label="Scroll back to top of workspace"
            >
              <span>[RE-ENTER WORKSPACE]</span>
              <span>↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
