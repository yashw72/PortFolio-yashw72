// components/DigitalIdentity.jsx
// "WHO IS YASH?" — Interactive developer identity and telemetry interface.

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL, DIGITAL_IDENTITY } from '../data/portfolioData';
import AnimatedCodeBackground from './AnimatedCodeBackground';

export default function DigitalIdentity() {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'interests' | 'telemetry'
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <section id="identity" className="digital-identity-section">
      <AnimatedCodeBackground variant="arsenal" interactive={false} />

      <div className="container">
        {/* Section Index Header */}
        <div className="section-narrative-header">
          <span className="section-index-tag">03 // EXPLORATION</span>
          <h2 className="section-main-title">WHO IS YASH?</h2>
          <p className="section-main-desc">
            Deconstructing the engineer behind the code: architecture philosophy, technical telemetry, and problem-solving DNA.
          </p>
        </div>

        {/* Identity Interface Board */}
        <div className="identity-interface-grid">
          {/* Left Column: Developer Hologram & Quick Status */}
          <div className="identity-profile-panel">
            <div className="profile-hologram-card">
              {/* Corner Grid Accents */}
              <span className="hologram-bracket tl" />
              <span className="hologram-bracket tr" />
              <span className="hologram-bracket bl" />
              <span className="hologram-bracket br" />

              <div className="profile-avatar-area">
                <div className="avatar-monogram">{PERSONAL.avatarInitials}</div>
                <div className="avatar-scan-line" />
              </div>

              <div className="profile-identity-details">
                <div className="identity-handle">{DIGITAL_IDENTITY.codename}</div>
                <h3 className="identity-name">{PERSONAL.name}</h3>
                <div className="identity-role-badge">{PERSONAL.role}</div>
              </div>

              <div className="profile-mini-specs">
                <div className="mini-spec-row">
                  <span className="spec-label">BASE</span>
                  <span className="spec-value">{PERSONAL.location}</span>
                </div>
                <div className="mini-spec-row">
                  <span className="spec-label">COORDS</span>
                  <span className="spec-value">{PERSONAL.coordinates}</span>
                </div>
                <div className="mini-spec-row">
                  <span className="spec-label">STATUS</span>
                  <span className="spec-value highlight">{PERSONAL.statusShort}</span>
                </div>
              </div>

              <button
                type="button"
                className="profile-copy-email-btn"
                onClick={handleCopyEmail}
              >
                {copiedEmail ? '✓ EMAIL COPIED' : 'COPY DIRECT EMAIL ↗'}
              </button>
            </div>
          </div>

          {/* Right Column: Telemetry & Tabbed Information Modules */}
          <div className="identity-data-panel">
            {/* Tab Navigation */}
            <div className="identity-nav-tabs">
              <button
                type="button"
                className={`identity-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                [01] CORE OVERVIEW
              </button>
              <button
                type="button"
                className={`identity-tab-btn ${activeTab === 'interests' ? 'active' : ''}`}
                onClick={() => setActiveTab('interests')}
              >
                [02] TECHNICAL INTERESTS
              </button>
              <button
                type="button"
                className={`identity-tab-btn ${activeTab === 'telemetry' ? 'active' : ''}`}
                onClick={() => setActiveTab('telemetry')}
              >
                [03] LIVE TELEMETRY
              </button>
            </div>

            {/* Tab Contents */}
            <div className="identity-tab-content-area">
              <AnimatePresence mode="wait">
                {activeTab === 'overview' && (
                  <motion.div
                    key="overview"
                    className="tab-view overview-view"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="identity-quote-card">
                      <span className="quote-mark" aria-hidden="true">“</span>
                      {DIGITAL_IDENTITY.bioLines.map((line, idx) => (
                        <p key={idx} className="identity-bio-paragraph">
                          {line}
                        </p>
                      ))}
                    </div>

                    <div className="identity-highlights-grid">
                      <div className="highlight-pill">
                        <span className="pill-code">01.</span>
                        <div className="pill-body">
                          <strong>High Scalability</strong>
                          <span>Engineered for traffic concurrency</span>
                        </div>
                      </div>
                      <div className="highlight-pill">
                        <span className="pill-code">02.</span>
                        <div className="pill-body">
                          <strong>Clean Modularity</strong>
                          <span>Maintainable architectures</span>
                        </div>
                      </div>
                      <div className="highlight-pill">
                        <span className="pill-code">03.</span>
                        <div className="pill-body">
                          <strong>AI/ML Integration</strong>
                          <span>Bridging models with web APIs</span>
                        </div>
                      </div>
                      <div className="highlight-pill">
                        <span className="pill-code">04.</span>
                        <div className="pill-body">
                          <strong>Algorithmic Rigor</strong>
                          <span>Optimized time/space complexities</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'interests' && (
                  <motion.div
                    key="interests"
                    className="tab-view interests-view"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="interests-card-list">
                      {DIGITAL_IDENTITY.interests.map((item, idx) => (
                        <div key={item.title} className="interest-item-card">
                          <span className="interest-seq">0{idx + 1}</span>
                          <div className="interest-body">
                            <h4 className="interest-title">{item.title}</h4>
                            <p className="interest-desc">{item.desc}</p>
                          </div>
                          <span className="interest-arrow" aria-hidden="true">→</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'telemetry' && (
                  <motion.div
                    key="telemetry"
                    className="tab-view telemetry-view"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="telemetry-table-grid">
                      {DIGITAL_IDENTITY.telemetry.map((t) => (
                        <div key={t.label} className="telemetry-field-cell">
                          <span className="field-label">{t.label}</span>
                          <span className="field-value">{t.value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
