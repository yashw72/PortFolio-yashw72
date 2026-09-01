import React, { useState, useMemo } from 'react';
import { SKILL_CATEGORIES } from '../data/skillsData';
import SkillCard from './SkillCard';
import { IconSparkles, IconLayers } from './icons/TechIcons';

export default function SkillsSection({ showHeading = true }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter categories and skills based on active category & search query
  const filteredCategories = useMemo(() => {
    let list = SKILL_CATEGORIES;

    if (selectedCategory !== 'all') {
      list = list.filter((cat) => cat.id === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list
        .map((cat) => {
          const matchingSkills = cat.skills.filter(
            (s) =>
              s.name.toLowerCase().includes(q) ||
              (s.tag && s.tag.toLowerCase().includes(q)) ||
              (s.description && s.description.toLowerCase().includes(q))
          );
          return { ...cat, skills: matchingSkills };
        })
        .filter((cat) => cat.skills.length > 0);
    }

    return list;
  }, [selectedCategory, searchQuery]);

  const totalSkillCount = useMemo(() => {
    return SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, []);

  return (
    <div className="skills-section-wrapper" id="skills-section">
      {showHeading && (
        <div className="section-header-block">
          <div className="section-title-line">
            <span className="section-number">02.</span>
            <h2 className="section-title">Technical Skills</h2>
          </div>
          <p className="section-subtitle">
            A comprehensive overview of my technical stack, frameworks, developer tools, and data competencies.
          </p>
        </div>
      )}

      {/* Filter & Search Bar */}
      <div className="skills-controls-container">
        {/* Category Pills */}
        <div className="skills-category-filters" role="tablist" aria-label="Skill Categories">
          <button
            type="button"
            role="tab"
            aria-selected={selectedCategory === 'all'}
            onClick={() => setSelectedCategory('all')}
            className={`category-filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            id="skill-filter-all"
          >
            All Skills <span className="filter-count-badge">{totalSkillCount}</span>
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`category-filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              id={`skill-filter-${cat.id}`}
            >
              {cat.shortName || cat.name}
              <span className="filter-count-badge">{cat.skills.length}</span>
            </button>
          ))}
        </div>

        {/* Search Box */}
        <div className="skills-search-wrapper">
          <input
            type="text"
            placeholder="Search technologies (e.g. React, Python, Docker)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="skills-search-input"
            aria-label="Search skills"
            id="skills-search-input"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="skills-search-clear-btn"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Skills Cards Grid */}
      {filteredCategories.length > 0 ? (
        <div className="skills-cards-grid">
          {filteredCategories.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </div>
      ) : (
        <div className="skills-empty-state">
          <p>No technologies matched "<strong>{searchQuery}</strong>".</p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="btn-outline"
            style={{ marginTop: '1rem' }}
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Skill Philosophy Footer Callout */}
      <div className="skills-philosophy-banner">
        <div className="skills-philosophy-icon">
          <IconSparkles size={24} color="var(--color-accent-secondary)" />
        </div>
        <div className="skills-philosophy-content">
          <h4>Hands-On Engineering & Problem Solving</h4>
          <p>
            Every skill listed above has been applied across real-world full-stack applications, algorithmic challenges, and data pipelines. I prioritize deep conceptual understanding, clean syntax, and practical problem solving over superficial percentages.
          </p>
        </div>
      </div>
    </div>
  );
}
