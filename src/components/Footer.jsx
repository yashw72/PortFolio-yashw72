// components/Footer.jsx
// Dark footer with brand, social icon links, and copyright
import { PERSONAL } from '../data/portfolioData';

const FOOTER_SOCIALS = [
  { label: 'GH',  url: PERSONAL.github,   title: 'GitHub' },
  { label: 'LI',  url: PERSONAL.linkedin,  title: 'LinkedIn' },
  { label: '@',   url: `mailto:${PERSONAL.email}`, title: 'Email' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo-badge">YW</div>
            <div className="footer-brand-info">
              <div className="footer-name">YASH WARUNGASE</div>
              <div className="footer-role">Full Stack Developer</div>
            </div>
          </div>

          {/* Social icons */}
          <div className="footer-socials" aria-label="Social links">
            {FOOTER_SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target={s.url.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="footer-social"
                title={s.title}
                aria-label={s.title}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="footer-bottom">
          <p className="footer-copy">
            YASH © {year}
          </p>
          <p className="footer-copy">|</p>
          <p className="footer-copy">BUILT WITH CODE + COFFEE ☕</p>
          <p className="footer-copy">|</p>
          <p className="footer-copy">DESIGNED &amp; DEVELOPED BY YASH WARUNGASE</p>
        </div>
      </div>
    </footer>
  );
}
