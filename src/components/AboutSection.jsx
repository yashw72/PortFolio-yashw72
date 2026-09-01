import React from 'react';
import { ABOUT_DATA } from '../data/aboutData';
import {
  IconGraduation,
  IconCheck,
  IconArrowRight,
  IconSparkles,
  IconTerminal,
  IconCode
} from './icons/TechIcons';

export default function AboutSection({ showHeading = true }) {
  const { header, narrative, education, pillars, highlights } = ABOUT_DATA;

  return (
    <div className="about-section-wrapper" id="about-section">
      {showHeading && (
        <div className="section-header-block">
          <div className="section-title-line">
            <span className="section-number">01.</span>
            <h2 className="section-title">{header.title}</h2>
          </div>
          <p className="section-subtitle">{header.subtitle}</p>
        </div>
      )}

      {/* Two-Column Desktop Layout & Responsive Mobile */}
      <div className="about-grid-container">
        {/* Left Column: Developer Story & Education */}
        <div className="about-left-column">
          {/* Narrative Card */}
          <div className="about-narrative-card">
            <div className="about-badge-pill">
              <IconSparkles size={16} />
              <span>Full-Stack & Applied AI Enthusiast</span>
            </div>

            <div className="about-paragraphs">
              {narrative.map((item) => (
                <p key={item.id} className="about-text-p">
                  {item.paragraph}
                </p>
              ))}
            </div>

            {/* Quick Metrics Bar */}
            <div className="about-highlights-grid">
              {highlights.map((item, idx) => (
                <div key={idx} className="about-highlight-chip">
                  <span className="chip-label">{item.label}</span>
                  <span className="chip-value">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="about-actions-row">
              <a href="/skills" className="btn-primary" id="about-btn-skills">
                Explore Skills <IconArrowRight size={16} />
              </a>
              <a href="/projects" className="btn-outline" id="about-btn-projects">
                View My Projects
              </a>
            </div>
          </div>

          {/* Education Card */}
          <div className="about-education-card" id="about-education">
            <div className="education-card-header">
              <div className="education-icon-box">
                <IconGraduation size={24} color="var(--color-accent-secondary)" />
              </div>
              <div>
                <div className="education-status-badge">{education.status}</div>
                <h3 className="education-degree-title">{education.degree}</h3>
                <p className="education-institution">{education.institution}</p>
                <span className="education-duration">{education.duration}</span>
              </div>
            </div>

            <p className="education-focus-text">
              <strong>Core Focus:</strong> {education.focus}
            </p>

            <ul className="education-highlights-list">
              {education.highlights.map((point, index) => (
                <li key={index} className="education-highlight-item">
                  <span className="education-check-icon">
                    <IconCheck size={14} color="var(--color-accent-primary)" />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Key Focus Pillars & Interactive Terminal Card */}
        <div className="about-right-column">
          {/* Key Engineering Pillars Grid */}
          <div className="about-pillars-grid">
            {pillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="about-pillar-card"
                  style={{
                    '--pillar-accent': pillar.color,
                  }}
                >
                  <div
                    className="pillar-icon-box"
                    style={{
                      color: pillar.color,
                      backgroundColor: `${pillar.color}15`,
                      borderColor: `${pillar.color}35`,
                    }}
                  >
                    <PillarIcon size={22} />
                  </div>
                  <h4 className="pillar-title">{pillar.title}</h4>
                  <p className="pillar-desc">{pillar.description}</p>
                </div>
              );
            })}
          </div>

          {/* Interactive Developer Terminal / Bio Snapshot Card */}
          <div className="about-terminal-card">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="terminal-title">
                <IconTerminal size={14} /> yash@developer-workspace: ~
              </div>
            </div>
            <div className="terminal-body">
              <p className="terminal-line">
                <span className="terminal-prompt">$</span> <span className="terminal-cmd">cat profile.json</span>
              </p>
              <pre className="terminal-code">
{`{
  "name": "Yash Kumar",
  "role": "Full-Stack Developer",
  "focus": [
    "Full-Stack Web Engineering",
    "Data Structures & Algorithms",
    "Applied AI / ML & Data Insights"
  ],
  "mindset": "Building scalable, practical solutions",
  "availableForWork": true
}`}
              </pre>
              <div className="terminal-status-line">
                <span className="terminal-live-pulse"></span>
                <span>Active & Ready for Engineering Challenges</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
