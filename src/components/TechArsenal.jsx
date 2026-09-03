// components/TechArsenal.jsx
// Interactive technical exploration hub with category switching and animated skill inspection.

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TECH_ARSENAL } from '../data/portfolioData';
import AnimatedCodeBackground from './AnimatedCodeBackground';

export default function TechArsenal() {
  const [activeCategory, setActiveCategory] = useState('programming');
  const [selectedSkill, setSelectedSkill] = useState(null);

  const currentSkills = TECH_ARSENAL.skills[activeCategory] || [];

  return (
    <section id="arsenal" className="tech-arsenal-section">
      <AnimatedCodeBackground variant="arsenal" interactive={true} />

      <div className="container">
        {/* Section Header */}
        <div className="section-narrative-header">
          <span className="section-index-tag">04 // CAPABILITIES</span>
          <h2 className="section-main-title">TECH ARSENAL</h2>
          <p className="section-main-desc">
            An interactive repository of programming languages, full-stack frameworks, data pipelines, and developer tooling.
          </p>
        </div>

        {/* Category Navigation Ribbon */}
        <div className="arsenal-category-ribbon" role="tablist">
          {TECH_ARSENAL.categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                className={`arsenal-category-btn ${isActive ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSelectedSkill(null);
                }}
              >
                <span className="category-btn-label">{cat.label}</span>
                <span className="category-btn-count">0{cat.count}</span>
                {isActive && (
                  <motion.span
                    layoutId="category-active-underline"
                    className="category-active-indicator"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Skills Interactive Grid */}
        <div className="arsenal-interactive-stage">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="skills-orbit-grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {currentSkills.map((skill, index) => {
                const isSelected = selectedSkill?.name === skill.name;
                return (
                  <motion.div
                    key={skill.name}
                    className={`tech-interactive-chip ${isSelected ? 'selected' : ''}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.25, delay: index * 0.05 }}
                    onClick={() => setSelectedSkill(skill)}
                    whileHover={{ y: -4 }}
                  >
                    <div className="tech-chip-top">
                      <span className="tech-chip-icon">{skill.icon}</span>
                      <span className="tech-chip-seq">0{index + 1}</span>
                    </div>

                    <div className="tech-chip-body">
                      <h4 className="tech-chip-name">{skill.name}</h4>
                      <span className="tech-chip-tag">{skill.tag}</span>
                    </div>

                    <div className="tech-chip-footer">
                      <span className="tech-chip-level">{skill.level}</span>
                      <span className="tech-chip-corner-code">SYS_OK</span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Detailed Inspection Drawer (if selected) */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              className="arsenal-inspector-card"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="inspector-inner">
                <div className="inspector-badge">
                  <span>INSPECTING:</span>
                  <strong>{selectedSkill.name}</strong>
                </div>
                <p className="inspector-text">
                  Role: <strong>{selectedSkill.level}</strong> &bull; Domain: <strong>{selectedSkill.tag}</strong>.
                  Optimized for scalable production systems, high-efficiency execution, and test-driven maintainability.
                </p>
                <button
                  type="button"
                  className="inspector-close-btn"
                  onClick={() => setSelectedSkill(null)}
                >
                  ✕ CLOSE INSPECTOR
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
