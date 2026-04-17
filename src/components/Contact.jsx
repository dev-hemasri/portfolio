import { useState } from 'react'
import { personal } from '../data/portfolioData'
import './Contact.css'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="section-wrapper">
        <div className="contact-box">
          {/* Animated bg orb */}
          <div className="contact-orb" aria-hidden="true" />

          <div className="contact-content">
            <span className="section-tag">Let's Connect</span>
            <h2 className="contact-title">Open to Opportunities</h2>
            <p className="contact-text">
              I'm actively looking for Senior Frontend Developer and Angular Lead roles —
              remote, hybrid, or relocation. If you have a project or position that fits,
              let's talk.
            </p>

            {/* Contact methods */}
            <div className="contact-methods">
              <button className="contact-method" onClick={copyEmail}>
                <div className="contact-icon">✉</div>
                <div className="contact-method__info">
                  <span className="contact-method__label">Email</span>
                  <span className="contact-method__value">
                    {copied ? '✓ Copied!' : personal.email}
                  </span>
                </div>
              </button>

              <a href={`tel:${personal.phone}`} className="contact-method">
                <div className="contact-icon">📞</div>
                <div className="contact-method__info">
                  <span className="contact-method__label">Phone</span>
                  <span className="contact-method__value">{personal.phone}</span>
                </div>
              </a>

              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="contact-method">
                <div className="contact-icon">in</div>
                <div className="contact-method__info">
                  <span className="contact-method__label">LinkedIn</span>
                  <span className="contact-method__value">hemasriofficial</span>
                </div>
              </a>
            </div>

            {/* Social links */}
            <div className="social-links">
              <a href={personal.github} target="_blank" rel="noreferrer" className="social-btn">
                <i className="devicon-github-original" /> GitHub
              </a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="social-btn">
                <i className="si si-linkedin" /> LinkedIn
              </a>
              <a href={personal.portfolio} target="_blank" rel="noreferrer" className="social-btn">
                🌐 Portfolio
              </a>
            </div>

            {/* Resume CTA */}
            <a href={personal.resumeUrl} target="_blank" rel="noreferrer" className="btn btn-primary resume-cta">
              ↓ Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
