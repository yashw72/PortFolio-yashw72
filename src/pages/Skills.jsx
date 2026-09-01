// Skills page — placeholder
export default function Skills() {
  // Sample skill tags — will be replaced with real data later
  const placeholderSkills = ['React', 'JavaScript', 'Node.js', 'Python', 'Django', 'HTML', 'CSS', 'Git', 'SQL'];

  return (
    <section className="section">
      <div className="section-title-line">
        <span style={{ color: 'var(--color-accent-secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>02.</span>
        <h1 className="section-title">Skills</h1>
      </div>
      <p className="section-subtitle">Technologies I work with.</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
        {placeholderSkills.map((skill) => (
          <span key={skill} className="tag">{skill}</span>
        ))}
      </div>

      <div className="card" style={{ marginTop: '2rem', maxWidth: '480px' }}>
        <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.9 }}>
          🚧 <strong style={{ color: 'var(--color-text-primary)' }}>Coming soon.</strong>{' '}
          This section will display skill categories with proficiency levels.
        </p>
      </div>
    </section>
  );
}
