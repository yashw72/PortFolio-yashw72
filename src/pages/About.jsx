// About page — placeholder
export default function About() {
  return (
    <section className="section">
      <div className="section-title-line">
        <span style={{ color: 'var(--color-accent-secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>01.</span>
        <h1 className="section-title">About Me</h1>
      </div>
      <p className="section-subtitle">A little bit about who I am.</p>

      <div className="card" style={{ maxWidth: '640px' }}>
        <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.9 }}>
          🚧 <strong style={{ color: 'var(--color-text-primary)' }}>Coming soon.</strong>{' '}
          This section will include my background, interests, and what drives me
          as a developer. Stay tuned!
        </p>
      </div>
    </section>
  );
}
