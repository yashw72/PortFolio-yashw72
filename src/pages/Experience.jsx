// Experience page — placeholder
export default function Experience() {
  return (
    <section className="section">
      <div className="section-title-line">
        <span style={{ color: 'var(--color-accent-secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>03.</span>
        <h1 className="section-title">Experience</h1>
      </div>
      <p className="section-subtitle">Where I've worked.</p>

      <div className="card" style={{ maxWidth: '600px' }}>
        <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.9 }}>
          🚧 <strong style={{ color: 'var(--color-text-primary)' }}>Coming soon.</strong>{' '}
          This section will show a timeline of my professional experience,
          internships, and freelance work.
        </p>
      </div>
    </section>
  );
}
