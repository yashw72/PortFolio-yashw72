// components/HeroSection.jsx
// Hero with status badges, name heading, tagline, tech badges, CTA buttons,
// stats bar, and the Developer Pass lanyard ID card on the right
import { useState } from 'react';
import { PERSONAL, HERO_STATS, HERO_TECH_BADGES } from '../data/portfolioData';

// Generate a CSS barcode-like pattern
const BARCODE = [3,1,2,1,3,2,1,2,3,1,2,3,1,1,3,2,1,2,1,3,2,1,2];

function DeveloperPass() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="hero-right">
      <div className="lanyard-wrap">
        {/* Clip */}
        <div className="lanyard-clip" />
        {/* Cord */}
        <div className="lanyard-cord" />

        {/* ID Card */}
        <div className="dev-pass" title="Drag me!">
          {/* Card header */}
          <div className="pass-header-row">
            <div className="pass-title-text">
              DEVELOPER PASS<br />// {PERSONAL.passYear}
            </div>
            <div className="pass-year-badge">CORE DEV</div>
          </div>

          {/* Photo */}
          <div className="pass-photo-wrap">
            {imgError ? (
              <div className="pass-photo-fallback" aria-label="Initials YW">
                YW
              </div>
            ) : (
              <img
                src={PERSONAL.profileImage}
                alt={PERSONAL.name}
                className="pass-photo"
                onError={() => setImgError(true)}
              />
            )}
          </div>

          {/* Access ID */}
          <div className="pass-access-id">{PERSONAL.passAccess}</div>

          {/* Name */}
          <div className="pass-name-full">{PERSONAL.name}</div>

          {/* Specialization */}
          <div className="pass-spec-tag">
            SPECIALIZATION<br />
            {PERSONAL.role}
          </div>

          {/* Barcode area */}
          <div className="pass-barcode-area">
            <div className="barcode-visual" aria-hidden="true">
              {BARCODE.map((w, i) => (
                <div
                  key={i}
                  className="barcode-bar"
                  style={{
                    width: `${w}px`,
                    height: `${14 + (i % 3 === 0 ? 8 : i % 2 === 0 ? 4 : 0)}px`,
                  }}
                />
              ))}
            </div>
            <div className="pass-pid">{PERSONAL.passId}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section id="hero" className="hero dot-bg">
      {/* Faint background watermark */}
      <div className="hero-watermark" aria-hidden="true">FULLSTACK</div>

      <div className="container">
        <div className="hero-inner">
          {/* Left: All main content */}
          <div className="hero-left">
            {/* Status + Location badges */}
            <div className="hero-badges">
              <span className="status-badge badge-lime">
                <span style={{ fontSize: '10px' }}>●</span>
                {PERSONAL.status}
              </span>
              <span className="status-badge badge-white">
                {PERSONAL.location} 📍 {PERSONAL.locationCoords}
              </span>
            </div>

            {/* Role sub-label */}
            <p className="hero-role">// {PERSONAL.role}</p>

            {/* Main heading */}
            <h1 className="hero-heading">
              HEY, I'M{' '}
              <span className="hero-name-colored">{PERSONAL.firstName}</span>
              <span className="hero-name-outline">{PERSONAL.lastName}</span>
            </h1>

            {/* Tagline */}
            <p className="hero-tagline">
              {PERSONAL.tagline}{' '}
              <span className="hl">[{PERSONAL.taglineHighlight}]</span>{' '}
              {PERSONAL.taglineEnd}
            </p>

            {/* Tech stack badges */}
            <div className="hero-tech-badges" aria-label="Primary technologies">
              {HERO_TECH_BADGES.map((t) => (
                <span key={t.label} className="tech-badge">
                  {t.icon} {t.label}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hero-btns">
              <a href="#projects" className="btn btn-coral">
                VIEW MY WORK →
              </a>
              <a href="#contact" className="btn btn-white">
                LET'S CONNECT ↗
              </a>
            </div>

            {/* Stats bar */}
            <div className="hero-stats" role="list" aria-label="Key stats">
              {HERO_STATS.map((s) => (
                <div key={s.label} className="hero-stat" role="listitem">
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Scroll hint */}
            <div className="hero-scroll" aria-hidden="true">
              ✦ SCROLL DOWN
              <span className="scroll-arrow">↓</span>
            </div>
          </div>

          {/* Right: Developer Pass / Lanyard */}
          <DeveloperPass />
        </div>
      </div>
    </section>
  );
}
