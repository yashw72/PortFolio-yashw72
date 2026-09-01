// Projects page — placeholder
export default function Projects() {
  return (
    <section className="section">
      <div className="section-title-line">
        <span style={{ color: 'var(--color-accent-secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>04.</span>
        <h1 className="section-title">Projects</h1>
      </div>
      <p className="section-subtitle">Things I've built.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
        {/* Placeholder project cards */}
        {[1, 2, 3].map((n) => (
          <div key={n} className="card">
            <h2 className="heading-md" style={{ marginBottom: '0.5rem' }}>Project {n}</h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
              🚧 Project description coming soon.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
              <span className="tag">React</span>
              <span className="tag">Node.js</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
