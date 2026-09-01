// Contact page — placeholder (no form/backend yet)
export default function Contact() {
  return (
    <section className="section">
      <div className="section-title-line">
        <span style={{ color: 'var(--color-accent-secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>06.</span>
        <h1 className="section-title">Contact</h1>
      </div>
      <p className="section-subtitle">Get in touch.</p>

      <div className="card" style={{ maxWidth: '520px' }}>
        <h2 className="heading-md" style={{ marginBottom: '0.75rem' }}>
          Let's work together!
        </h2>
        <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
          🚧 <strong style={{ color: 'var(--color-text-primary)' }}>Contact form coming soon.</strong>{' '}
          For now, feel free to reach out via email.
        </p>
        <a
          href="mailto:yash@example.com"
          className="btn-primary"
          id="contact-email-btn"
        >
          Say Hello →
        </a>
      </div>
    </section>
  );
}
