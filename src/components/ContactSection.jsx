// components/ContactSection.jsx
// Two parts:
//   Part 1 (05): 4 Connect cards — GitHub, LinkedIn, LeetCode, Email
//   Part 2 (06): Contact form + direct contact details
import { useState } from 'react';
import { PERSONAL, SOCIAL_LINKS } from '../data/portfolioData';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Opens mail client with pre-filled content
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body    = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`);
    window.open(`mailto:${PERSONAL.email}?subject=${subject}&body=${body}`);
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="contact-section section-pad">
      <div className="container">

        {/* ── Part 1: Find Me Online ── */}
        <div className="connect-header">
          <p className="section-label">05 / LET'S CONNECT</p>
          <h2 className="connect-title">FIND ME ONLINE.</h2>
          <p className="connect-subtitle">
            Always open to interesting projects, collaborations, and conversations.
          </p>
        </div>

        <div className="connect-grid" role="list" aria-label="Social profiles">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target={link.url.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="connect-card"
              role="listitem"
              aria-label={`${link.label}: ${link.description}`}
            >
              <div className="connect-icon">{link.icon}</div>
              <div className="connect-label">{link.label}</div>
              <div className="connect-desc">{link.description}</div>
              <div className="connect-arrow">{link.arrow}</div>
            </a>
          ))}
        </div>

        {/* ── Part 2: Get In Touch ── */}
        <div className="contact-form-section">
          {/* Left: header + direct details */}
          <div>
            <p className="section-label">06 / GET IN TOUCH</p>
            <h2 className="cf-left-title">
              HAVE AN IDEA?<br />
              LET'S BUILD{' '}
              <span
                style={{
                  WebkitTextStroke: '3px #000',
                  color: 'transparent',
                  fontWeight: 800,
                }}
              >
                SOMETHING.
              </span>
            </h2>

            <div className="contact-details-list">
              <div className="cd-item">
                <div className="cd-label">EMAIL</div>
                <div className="cd-value">
                  <a href={`mailto:${PERSONAL.email}`}>{PERSONAL.email}</a>
                </div>
              </div>
              <div className="cd-item">
                <div className="cd-label">PHONE</div>
                <div className="cd-value">{PERSONAL.phone}</div>
              </div>
              <div className="cd-item">
                <div className="cd-label">LOCATION</div>
                <div className="cd-value">Pune, Maharashtra, India</div>
              </div>
              {PERSONAL.whatsapp && (
                <div className="cd-item">
                  <div className="cd-label">WHATSAPP</div>
                  <div className="cd-value">
                    <a
                      href={PERSONAL.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-lime"
                      style={{ fontSize: '11px', padding: '10px 20px', marginTop: '6px' }}
                    >
                      Chat on WhatsApp →
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Contact form */}
          <div>
            <form
              className="contact-form"
              onSubmit={handleSubmit}
              aria-label="Contact form"
            >
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">
                  YOUR NAME *
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">
                  YOUR EMAIL *
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">
                  YOUR MESSAGE *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-textarea"
                  placeholder="Hey Yash, I'd like to collaborate on..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-lime" style={{ width: '100%' }}>
                {sent ? 'MESSAGE SENT! ✓' : 'SEND MESSAGE →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
