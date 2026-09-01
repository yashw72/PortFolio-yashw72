import React from 'react';

export default function SkillBadge({ skill }) {
  const IconComponent = skill.icon;

  return (
    <div
      className="skill-badge-item"
      title={`${skill.name} - ${skill.description || skill.tag}`}
    >
      <div
        className="skill-badge-icon-wrapper"
        style={{
          backgroundColor: `${skill.color}15`,
          borderColor: `${skill.color}35`,
        }}
      >
        <IconComponent size={22} color={skill.color} />
      </div>

      <div className="skill-badge-info">
        <span className="skill-badge-name">{skill.name}</span>
        {skill.tag && <span className="skill-badge-tag">{skill.tag}</span>}
      </div>
    </div>
  );
}
