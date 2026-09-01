// Home page — the landing / hero section
export default function Home() {
  return (
    <section className="section" style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      {/* Greeting */}
      <p style={{ color: 'var(--color-accent-secondary)', fontFamily: 'var(--font-mono)', fontSize: '1rem', marginBottom: '1rem' }}>
        Hi, my name is
      </p>

      {/* Name */}
      <h1 className="heading-xl" style={{ marginBottom: '0.5rem' }}>
        Yash Kumar.
      </h1>

      {/* Tagline */}
      <h2 className="heading-lg" style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
        I build things for the{' '}
        <span className="text-gradient">web.</span>
      </h2>

      {/* Short bio */}
      <p style={{
        maxWidth: '540px',
        color: 'var(--color-text-secondary)',
        fontSize: '1.05rem',
        lineHeight: 1.8,
        marginBottom: '2.5rem',
      }}>
        I'm a full-stack developer passionate about creating clean, performant,
        and user-friendly web applications. Currently focused on React, Node.js,
        and modern UI/UX principles.
      </p>

      {/* CTA buttons */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <a href="/projects" className="btn-primary" id="home-cta-projects">
          View My Work →
        </a>
        <a href="/contact" className="btn-outline" id="home-cta-contact">
          Get In Touch
        </a>
      </div>
    </section>
  );
}
