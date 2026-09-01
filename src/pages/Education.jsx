// Education page — placeholder
export default function Education() {
  return (
    <section className="section">
      <div className="section-title-line">
        <span style={{ color: 'var(--color-accent-secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>05.</span>
        <h1 className="section-title">Education</h1>
      </div>
      <p className="section-subtitle">My academic background.</p>

      <div className="card" style={{ maxWidth: '600px' }}>
        <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.9 }}>
          🚧 <strong style={{ color: 'var(--color-text-primary)' }}>Coming soon.</strong>{' '}
          This section will include degrees, certifications, and relevant coursework.
        </p>
      </div>
    </section>
  );
}
