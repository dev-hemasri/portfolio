import { useState, useEffect, useRef } from 'react'
import { experience } from '../data/portfolioData'
import './Experience.css'

export default function Experience() {
  const [openId, setOpenId] = useState(1)
  const toggle = (id) => setOpenId(prev => (prev === id ? null : id))

  return (
    <section id="experience" className="experience-section">
      <div className="section-wrapper">
        <div className="section-header">
          <span className="section-tag">Career Journey</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            6+ years across government portals, product startups, and freelance projects.
          </p>
        </div>

        <div className="timeline visible">
         {experience.map((job) => {
  const isOpen = openId === job.id
  console.log('Job:', job.id, 'isOpen:', isOpen)

  return (
    <TimelineItem
      key={job.id}
      job={job}
      isOpen={isOpen}
      onToggle={() => toggle(job.id)}
    />
  )
})}
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ job, isOpen, onToggle }) {
  const detailsRef = useRef(null)
  const itemRef = useRef(null)

  // Scroll-based fade-in via IntersectionObserver
  useEffect(() => {
    const el = itemRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // FIX: use two nested requestAnimationFrames so the browser has
  // fully painted the content before we read scrollHeight.
  // One rAF is sometimes not enough on first open — the second frame
  // guarantees the layout pass is complete and scrollHeight is accurate.
  useEffect(() => {
    const el = detailsRef.current
    if (!el) return
    if (isOpen) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.maxHeight = el.scrollHeight + 'px'
        })
      })
    } else {
      el.style.maxHeight = '0px'
    }
  }, [isOpen])

  // Keep height in sync when viewport resizes while expanded
  useEffect(() => {
    const el = detailsRef.current
    if (!el) return
    const onResize = () => {
      if (isOpen) {
        requestAnimationFrame(() => {
          el.style.maxHeight = el.scrollHeight + 'px'
        })
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [isOpen])

  return (
    <div
      ref={itemRef}
      className={`timeline-item ${isOpen ? 'expanded' : ''}`}
    >
      <div className="timeline-content">
        <div
          className="timeline-header"
          onClick={onToggle}
          role="button"
          tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && onToggle()}
        >
          <div className="company-info">
            {job.type === 'current' && (
              <span className="current-badge">● Current</span>
            )}
            <h3>{job.company}</h3>
            <div className="role">{job.role}</div>
          </div>
          <div className="timeline-meta">
            <span className="timeline-date">{job.period}</span>
            <span className="expand-icon">{isOpen ? '▲' : '▼'}</span>
          </div>
        </div>

        {/* Location */}
        <div className="timeline-location">
          <span>📍</span> {job.location}
        </div>

        {/* Expandable body */}
        <div
          ref={detailsRef}
          className="timeline-details"
        >
          <ul className="achievements">
            {job.achievements.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  )
}
