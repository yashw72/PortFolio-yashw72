// components/ContactExperience.jsx
// "LET'S BUILD SOMETHING TOGETHER" — High-tech interactive contact console with animated feedback.

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL } from '../data/portfolioData';
import AnimatedCodeBackground from './AnimatedCodeBackground';
import MagneticButton from './MagneticButton';

export default function ContactExperience() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Prepare mailto fallback while maintaining interactive UI
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);

      const subjectLine = encodeURIComponent(
        `[PORTFOLIO CONTACT] ${formData.subject || 'New Collaboration'} — from ${formData.name}`
      );
      const emailBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
      );

      window.open(`mailto:${PERSONAL.email}?subject=${subjectLine}&body=${emailBody}`);

      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }, 1000);
    }, 700);
  };

  return (
    <section id="contact" className="contact-experience-section">
      <AnimatedCodeBackground variant="contact" interactive={true} />

      <div className="container">
        {/* Section Header */}
        <div className="section-narrative-header">
          <span className="section-index-tag">08 // TRANSMISSION</span>
          <h2 className="section-main-title">LET'S BUILD SOMETHING TOGETHER</h2>
          <p className="section-main-desc">
            Initiate direct contact for software engineering opportunities, collaborative builds, or technical architecture inquiries.
          </p>
        </div>

        {/* Console Grid Layout */}
        <div className="contact-console-grid">
          {/* Left Column: Direct System Channels */}
          <div className="contact-channels-column">
            <div className="channel-card">
              <span className="channel-tag">DIRECT CHANNEL // 01</span>
              <h3 className="channel-title">PRIMARY INBOX</h3>
              <p className="channel-desc">Direct line for engineering inquiries & contract discussions.</p>
              <a href={`mailto:${PERSONAL.email}`} className="channel-link">
                {PERSONAL.email} ↗
              </a>
            </div>

            <div className="channel-card">
              <span className="channel-tag">DIRECT CHANNEL // 02</span>
              <h3 className="channel-title">BASE TELEMETRY</h3>
              <p className="channel-desc">Location & active timezone coordination.</p>
              <div className="channel-meta-pill">
                <span>{PERSONAL.location}</span>
                <span>•</span>
                <span>IST (UTC+5:30)</span>
              </div>
            </div>

            <div className="channel-card status-box">
              <span className="channel-tag">RESPONSE LATENCY</span>
              <div className="latency-val">
                <span className="latency-dot" />
                <span>Typically under 12 hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Console Form */}
          <div className="contact-form-column">
            <div className="console-form-panel">
              {/* Form Window Header */}
              <div className="form-panel-header">
                <span className="panel-title">DISPATCH_MESSAGE // PROTOCOL_HTTPS</span>
                <span className="panel-badge">ENCRYPTED</span>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    className="form-success-banner"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="success-icon">✓</div>
                    <h3 className="success-title">TRANSMISSION RECEIVED</h3>
                    <p className="success-desc">
                      Thank you for reaching out, <strong>{formData.name || 'Developer'}</strong>. The mail client has been loaded with your message parameters.
                    </p>
                    <button
                      type="button"
                      className="btn btn-ghost success-reset-btn"
                      onClick={() => setSubmitted(false)}
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    className="console-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="form-row two-cols">
                      <div className="console-field-group">
                        <label htmlFor="input-name" className="console-label">
                          [01] FULL NAME *
                        </label>
                        <input
                          id="input-name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Ada Lovelace"
                          className="console-input"
                        />
                      </div>

                      <div className="console-field-group">
                        <label htmlFor="input-email" className="console-label">
                          [02] WORK EMAIL *
                        </label>
                        <input
                          id="input-email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="ada@computing.org"
                          className="console-input"
                        />
                      </div>
                    </div>

                    <div className="form-row two-cols">
                      <div className="console-field-group">
                        <label htmlFor="input-phone" className="console-label">
                          [03] CONTACT PHONE
                        </label>
                        <input
                          id="input-phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="console-input"
                        />
                      </div>

                      <div className="console-field-group">
                        <label htmlFor="input-subject" className="console-label">
                          [04] SUBJECT / SCOPE *
                        </label>
                        <input
                          id="input-subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Full Stack Opportunity / Build"
                          className="console-input"
                        />
                      </div>
                    </div>

                    <div className="console-field-group">
                      <label htmlFor="input-message" className="console-label">
                        [05] MESSAGE SPECIFICATION *
                      </label>
                      <textarea
                        id="input-message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Detail your engineering requirements, project vision, or team opportunity..."
                        className="console-textarea"
                      />
                    </div>

                    <MagneticButton
                      as="button"
                      type="submit"
                      disabled={submitting}
                      className="btn btn-primary form-submit-btn"
                      strength={0.25}
                    >
                      <span>{submitting ? 'TRANSMITTING...' : 'DISPATCH TRANSMISSION'}</span>
                      <span>→</span>
                    </MagneticButton>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
