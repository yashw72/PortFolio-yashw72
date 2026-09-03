// components/JourneyTimeline.jsx
// Vertical interactive milestone timeline combining Education and Internship Experience.

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { JOURNEY } from '../data/portfolioData';
import AnimatedCodeBackground from './AnimatedCodeBackground';

export default function JourneyTimeline() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const pathHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="journey" ref={containerRef} className="journey-timeline-section">
      <AnimatedCodeBackground variant="journey" interactive={false} />

      <div className="container">
        {/* Section Header */}
        <div className="section-narrative-header">
          <span className="section-index-tag">06 // EVOLUTION</span>
          <h2 className="section-main-title">MY JOURNEY</h2>
          <p className="section-main-desc">
            The chronological growth trajectory: foundational systems diploma, industrial AI/ML internship, and current Bachelor's in Information Technology.
          </p>
        </div>

        {/* Timeline Track & Milestones */}
        <div className="timeline-interactive-wrapper">
          {/* Vertical Progress Spine */}
          <div className="timeline-spine-track">
            <motion.div
              className="timeline-spine-fill"
              style={{ height: pathHeight }}
            />
          </div>

          {/* Timeline Milestone Cards */}
          <div className="timeline-milestones-list">
            {JOURNEY.map((item, index) => (
              <motion.div
                key={item.id}
                className="timeline-milestone-node"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Milestone Node Marker */}
                <div className="milestone-marker-point">
                  <span className="marker-ring" />
                  <span className="marker-dot" />
                </div>

                {/* Milestone Content Card */}
                <div className="milestone-content-card">
                  <div className="milestone-card-top">
                    <span className="milestone-badge">{item.badge}</span>
                    <span className="milestone-year-tag">{item.year}</span>
                  </div>

                  <h3 className="milestone-role-title">{item.role}</h3>
                  <div className="milestone-org-name">{item.institution}</div>

                  <p className="milestone-description">{item.description}</p>

                  {item.highlights && item.highlights.length > 0 && (
                    <div className="milestone-highlights-wrap">
                      <span className="highlights-label">KEY FOCUS & OUTCOMES:</span>
                      <div className="highlights-pills">
                        {item.highlights.map((hl) => (
                          <span key={hl} className="hl-pill">
                            {hl}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
