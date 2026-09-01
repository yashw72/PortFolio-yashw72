import React from 'react';
import SkillBadge from './SkillBadge';

export default function SkillCard({ category }) {
  const IconComponent = category.icon;

  return (
    <div className="skill-category-card" id={`skill-category-${category.id}`}>
      {/* Category Header */}
      <div className="skill-category-header">
        <div className="skill-category-title-group">
          <div
            className="skill-category-icon-box"
            style={{
              color: category.accentColor,
              backgroundColor: `${category.accentColor}18`,
              borderColor: `${category.accentColor}35`,
            }}
          >
            {IconComponent && <IconComponent size={22} />}
          </div>
          <div>
            <h3 className="skill-category-title">{category.name}</h3>
            <span className="skill-category-count">
              {category.skills.length} Technologies
            </span>
          </div>
        </div>
      </div>

      {/* Category Description */}
      {category.description && (
        <p className="skill-category-description">{category.description}</p>
      )}

      {/* Skills Grid */}
      <div className="skill-badges-grid">
        {category.skills.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}
