// components/BuildLogs.jsx
// Interactive expandable project experiences showcasing CLICKNGO, FITNEXUS, and LOCALKART.

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUILD_LOGS } from '../data/portfolioData';
import AnimatedCodeBackground from './AnimatedCodeBackground';
import MagneticButton from './MagneticButton';

export default function BuildLogs() {
  const [expandedId, setExpandedId] = useState('clickngo');

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="build-logs" className="build-logs-section">
      <AnimatedCodeBackground variant="logs" interactive={true} />

      <div className="container">
        {/* Section Header */}
        <div className="section-narrative-header">
          <span className="section-index-tag">05 // PRODUCTION</span>
          <h2 className="section-main-title">BUILD LOGS</h2>
          <p className="section-main-desc">
            Deep-dive production blueprints: real-time transit concurrency, intelligent fitness telemetry, and hyperlocal commerce engines.
          </p>
        </div>

        {/* Project Cards Stream */}
        <div className="build-logs-list">
          {BUILD_LOGS.map((project, idx) => {
            const isExpanded = expandedId === project.id;

            return (
              <motion.article
                key={project.id}
                layout
                className={`build-log-card project-interactive-card ${isExpanded ? 'expanded' : ''}`}
                transition={{ layout: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } }}
              >
                {/* Minimalist Card Header / Toggle Row */}
                <div
                  className="build-log-summary-row"
                  onClick={() => toggleExpand(project.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && toggleExpand(project.id)}
                  aria-expanded={isExpanded}
                >
                  <div className="summary-left">
                    <span className="project-code-tag">{project.code}</span>
                    <span className="project-category-tag">{project.category}</span>
                    <h3 className="project-heading-title">{project.title}</h3>
                  </div>

                  <div className="summary-middle">
                    <p className="project-short-summary">{project.subtitle}</p>
                  </div>

                  <div className="summary-right">
                    <span className="project-expand-indicator">
                      {isExpanded ? '[COLLAPSE -]' : '[INSPECT +]'}
                    </span>
                  </div>
                </div>

                {/* Expanded Deep-Dive Drawer */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      className="build-log-expanded-body"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="expanded-content-grid">
                        {/* Left: Detailed Overview & Metrics */}
                        <div className="expanded-left-col">
                          <h4 className="detail-section-label">SYSTEM ARCHITECTURE</h4>
                          <p className="project-full-desc">{project.description}</p>

                          <div className="project-metrics-strip">
                            {Object.entries(project.metrics).map(([key, val]) => (
                              <div key={key} className="metric-pill">
                                <span className="metric-key">{key.toUpperCase()}</span>
                                <span className="metric-val">{val}</span>
                              </div>
                            ))}
                          </div>

                          {/* Tech Stack Chips */}
                          <div className="project-tech-stack-row">
                            <h4 className="detail-section-label">STACK DEPENDENCIES</h4>
                            <div className="tech-tags-wrap">
                              {project.stack.map((tech) => (
                                <span key={tech} className="tech-stack-pill">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right: Key Features & External Actions */}
                        <div className="expanded-right-col">
                          <h4 className="detail-section-label">ENGINEERING LOGS & FEATURES</h4>
                          <ul className="project-feature-list">
                            {project.features.map((feat, fIdx) => (
                              <li key={fIdx} className="feature-list-item">
                                <span className="feat-bullet">◈</span>
                                <span className="feat-text">{feat}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Action Links */}
                          <div className="project-actions-row">
                            {project.github && (
                              <MagneticButton
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                strength={0.25}
                              >
                                <span>VIEW SOURCE CODE</span>
                                <span>↗</span>
                              </MagneticButton>
                            )}

                            {project.demo ? (
                              <MagneticButton
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-ghost"
                                strength={0.25}
                              >
                                <span>LIVE DEPLOYMENT</span>
                                <span>→</span>
                              </MagneticButton>
                            ) : (
                              <span className="deployment-pending-badge">
                                PROD DEPLOYMENT IN PROGRESS
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
