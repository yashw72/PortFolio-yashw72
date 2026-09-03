// components/HeroSection.jsx
// Premium monochrome hero — left: typing animation, badges, CTAs, stats
//                          right: Developer ID Card with barcode
import { useState, useEffect, useRef } from 'react';
import { PERSONAL, HERO_STATS, HERO_TECH_BADGES } from '../data/portfolioData';
import TechBackground from './TechBackground';

// Barcode-like pattern bars
const BARCODE = [3, 1, 2, 1, 3, 2, 1, 2, 3, 1, 2, 3, 1, 1, 3, 2, 1, 2, 1, 3, 2, 1, 2];

// ─── Typing Hook ─────────────────────────────────────────────────
const ROLES = [
  'FULL STACK DEVELOPER',
  'REACT & NODE.JS ENGINEER',
  'REST API ARCHITECT',
  'BACKEND SYSTEMS BUILDER',
  'OPEN SOURCE CONTRIBUTOR',
];

function useTypingEffect(words, typeSpeed = 65, deleteSpeed = 38, pauseMs = 1800) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setText(words[0]);
      return;
    }

    const tick = () => {
      const currentWord = words[wordIndex];

      if (!isDeleting) {
        setText(currentWord.slice(0, text.length + 1));
        if (text.length + 1 === currentWord.length) {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseMs);
          return;
        }
      } else {
        setText(currentWord.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
          return;
        }
      }

      timeoutRef.current = setTimeout(tick, isDeleting ? deleteSpeed : typeSpeed);
    };

    timeoutRef.current = setTimeout(tick, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timeoutRef.current);
  }, [text, wordIndex, isDeleting, words, typeSpeed, deleteSpeed, pauseMs]);

  return text;
}

// ─── Developer ID Card ───────────────────────────────────────────
function DeveloperPass() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="hero-right">
      <div className="lanyard-wrap">
        <div className="lanyard-clip" />
        <div className="lanyard-cord" />

        <div className="dev-pass" role="complementary" aria-label="Developer ID Card">
          {/* Header */}
          <div className="pass-header-row">
            <div className="pass-title-text">
              DEVELOPER PASS<br />
              <span style={{ fontSize: '8px', letterSpacing: '0.06em', color: 'var(--text-faint)', marginTop: '2px', display: 'block' }}>
                // {PERSONAL.passYear}
              </span>
            </div>
            <div className="pass-year-badge">CORE DEV</div>
          </div>

          {/* Photo */}
          <div className="pass-photo-wrap">
            {imgError ? (
              <div className="pass-photo-fallback" aria-label="Initials YW">YW</div>
            ) : (
              <img
                src={PERSONAL.profileImage}
                alt={PERSONAL.name}
                className="pass-photo"
                onError={() => setImgError(true)}
              />
            )}
          </div>

          {/* Access line */}
          <div className="pass-access-id">{PERSONAL.passAccess}</div>

          {/* Name */}
          <div className="pass-name-full">{PERSONAL.name}</div>

          {/* Role tag */}
          <div className="pass-spec-tag">
            SPECIALIZATION<br />
            FULL STACK DEVELOPER
          </div>

          {/* Barcode */}
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

// ─── Hero Section ─────────────────────────────────────────────────
export default function HeroSection() {
  const typedRole = useTypingEffect(ROLES);

  return (
    <section id="hero" className="hero">
      {/* Canvas background */}
      <TechBackground />

      {/* Faint watermark */}
      <div className="hero-watermark" aria-hidden="true">FULLSTACK</div>

      <div className="container">
        <div className="hero-inner">

          {/* ── LEFT COLUMN ── */}
          <div className="hero-left">

            {/* Greeting label */}
            <p className="hero-greeting">HELLO, WORLD</p>

            {/* Main heading */}
            <h1 className="hero-heading">
              HEY, I'M{' '}
              <span className="hero-name-colored">{PERSONAL.firstName}</span>
              <span className="hero-name-outline"> {PERSONAL.lastName}</span>
            </h1>

            {/* Typed role */}
            <div className="hero-role" aria-live="polite" aria-label="Current role">
              <span className="hero-role-prefix">&gt;&nbsp;</span>
              <span>{typedRole}</span>
              <span className="typed-cursor" aria-hidden="true" />
            </div>

            {/* Tagline */}
            <p className="hero-tagline">
              {PERSONAL.tagline}{' '}
              <span className="hl">[{PERSONAL.taglineHighlight}]</span>{' '}
              {PERSONAL.taglineEnd}
            </p>

            {/* Status badges */}
            <div className="hero-badges">
              <span className="status-badge badge-lime">
                <span>●</span>
                {PERSONAL.status}
              </span>
              <span className="status-badge badge-white">
                📍 {PERSONAL.location}
              </span>
            </div>

            {/* CTA buttons */}
            <div className="hero-btns">
              <a href="#projects" className="btn btn-coral">
                VIEW MY WORK →
              </a>
              <a
                href={PERSONAL.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-white"
              >
                DOWNLOAD RESUME ↓
              </a>
            </div>

            {/* Social links row */}
            <div className="hero-socials" aria-label="Social profiles">
              <a
                href={PERSONAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="GitHub"
              >
                ⌥ GITHUB
              </a>
              <a
                href={PERSONAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="LinkedIn"
              >
                in LINKEDIN
              </a>
              <a
                href={PERSONAL.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="LeetCode"
              >
                {'{ }'} LEETCODE
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

          {/* ── RIGHT COLUMN: ID Card ── */}
          <DeveloperPass />
        </div>
      </div>
    </section>
  );
}
