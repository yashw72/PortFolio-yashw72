// components/AboutSection.jsx
// "I TURN IDEAS → REAL PRODUCTS." display + bio card + 2×2 meta grid + CTA buttons
import { PERSONAL, ABOUT_BIO } from '../data/portfolioData';

// Renders bio text with inline <chip> highlighting
function BioText({ parts }) {
  return (
    <p className="bio-text">
      {parts.map((part, i) =>
        typeof part === 'string' ? (
          <span key={i}>{part}</span>
        ) : (
          <span key={i} className="bio-chip">{part.chip}</span>
        )
      )}
    </p>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="about section-pad">
      <div className="container">
        {/* Section label */}
        <p className="section-label">01 / ABOUT ME</p>

        <div className="about-grid">
          {/* Left: Large display text */}
          <div className="about-display">
            <div className="display-line">I TURN IDEAS</div>
            <div className="display-arrow">⟶</div>
            <div className="display-line">
              REAL{' '}
              <span className="display-outline">PRODUCTS.</span>
            </div>
          </div>

          {/* Right: Bio card + meta + buttons */}
          <div className="about-right">
            {/* Quote / bio card */}
            <div className="about-bio-card">
              <div className="bio-quote-icon" aria-hidden="true">"</div>
              <BioText parts={ABOUT_BIO.quote1Parts} />
              <BioText parts={ABOUT_BIO.quote2Parts} />
            </div>

            {/* 2×2 meta grid */}
            <div className="about-meta-grid" role="list" aria-label="About details">
              {ABOUT_BIO.meta.map((item) => (
                <div key={item.label} className="meta-cell" role="listitem">
                  <div className="meta-key">{item.label}</div>
                  <div className="meta-val">{item.value}</div>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="about-btns">
              <a
                href={PERSONAL.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-white"
                aria-label="Download Resume"
              >
                RESUME →
              </a>
              <a
                href={PERSONAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-black"
                aria-label="Visit GitHub profile"
              >
                GITHUB ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
