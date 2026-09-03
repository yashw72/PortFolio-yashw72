// components/JourneySection.jsx
// GitHub CTA banner + timeline cards — monochrome theme
import { PERSONAL, JOURNEY } from '../data/portfolioData';

function JourneyCard({ item }) {
  return (
    <article className="journey-card" aria-labelledby={`journey-title-${item.id}`}>
      {/* Left meta column */}
      <div className="journey-meta">
        <span className="journey-type-badge">{item.type}</span>
        <p className="journey-period">{item.period}</p>
        {item.highlight && (
          <div className="journey-hl">{item.highlight}</div>
        )}
      </div>

      {/* Right content column */}
      <div className="journey-content">
        <h3 className="journey-card-title" id={`journey-title-${item.id}`}>
          {item.title}
        </h3>
        <p className="journey-org">{item.organization}</p>
        <p className="journey-desc">{item.description}</p>

        {item.link && (
          <div style={{ marginTop: '12px' }}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-white"
              style={{ fontSize: '11px', padding: '10px 20px' }}
            >
              {item.linkLabel} →
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

export default function JourneySection() {
  return (
    <section id="journey" className="journey-section">
      <div className="container">
        {/* GitHub CTA Banner */}
        <div className="github-banner">
          <span className="github-banner-text">MORE PROJECTS ON GITHUB →</span>
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lime"
            style={{ fontSize: '11px' }}
          >
            VIEW ALL WORK ↗
          </a>
        </div>

        {/* Header */}
        <div className="journey-header">
          <p className="section-label">04 / JOURNEY</p>
          <h2 className="journey-title">
            WHERE I'VE{' '}
            <span style={{
              WebkitTextStroke: '2px rgba(255,255,255,0.3)',
              color: 'transparent',
              fontWeight: 800,
            }}>
              BEEN.
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="journey-list">
          {JOURNEY.map((item) => (
            <JourneyCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
