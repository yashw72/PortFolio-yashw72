// components/SkillsSection.jsx
// Dark #121212 background with 5-row Neo-Brutalist skill grid
import { SKILL_CATEGORIES } from '../data/portfolioData';

export default function SkillsSection() {
  return (
    <section id="skills" className="skills-section">
      {/* Faint watermark */}
      <div className="skills-watermark" aria-hidden="true">STACK</div>

      <div className="container">
        {/* Section label */}
        <p className="skills-label-dark">02 / SKILLS</p>

        {/* Header row */}
        <div className="skills-header-row">
          <h2 className="skills-title">TECH STACK.</h2>
          <p className="skills-subtitle">
            Technologies and tools I use to build scalable products.
          </p>
        </div>

        {/* Skills grid table */}
        <div className="skills-grid" role="list" aria-label="Tech skills by category">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.id} className="skills-row" role="listitem">
              {/* Category badge */}
              <div className="skill-category-cell">
                <span
                  className="skill-cat-badge"
                  style={{ color: cat.accentColor, borderColor: cat.accentColor }}
                >
                  {cat.label}
                </span>
              </div>

              {/* Skill chips */}
              <div className="skill-items-cell">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
