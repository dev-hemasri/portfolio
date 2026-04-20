import { experience } from '../data/portfolioData'
import './Experience.css';
import { useState, useEffect, useRef } from 'react'

export default function Experience() {
  return (
    <section id="experiences" className="experience-section">
      <div className="section-wrapper">

        <div className="section-header">
          <span className="section-tag">Career Journey</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            6+ years across government and enterprise applications.
          </p>
        </div>

        <div className="timeline">
          {experience
            .filter(job => job) // safety
            .map(job => (
              <TimelineItem key={job.id} job={job} />
            ))}
        </div>

      </div>
    </section>
  )
}

/* Timeline Item */
function TimelineItem({ job }) {
  const itemRef = useRef(null)
  const [expanded, setExpanded] = useState(false)
useEffect(() => {
  const el = itemRef.current
  if (!el) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.timeline-item')
          .forEach(i => i.classList.remove('active'))

        el.classList.add('active')
        el.classList.add('visible')
      }
    },
    {
      threshold: 0.6, // smoother focus (no flicker)
    }
  )

  observer.observe(el)
  return () => observer.disconnect()
}, [])
  // Safe data handling
  const previewCount = 2
  const achievements = job?.achievements || []

  const isLong = achievements.length > previewCount

  const visiblePoints = expanded
    ? achievements
    : achievements.slice(0, previewCount)

  const remaining = achievements.length - previewCount

  return (
    <div ref={itemRef} className="timeline-item">
      <div className="timeline-content">

        {/* Header */}
        <div className="timeline-header">

          <div className="company-info">
            {job?.type === 'current' && (
              <span className="current-badge">● Current</span>
            )}

            <h3>{job?.company}</h3>

            <div className="meta-row">
              <span className="role">{job?.role}</span>
              <span className="dot">•</span>
              <span className="location">{job?.location}</span>
            </div>
          </div>

          <div className="timeline-meta">
            <span className="timeline-date">{job?.period}</span>
          </div>

        </div>

        {/* Achievements */}
        <ul className="achievements">
          {visiblePoints.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>

        {/* Show More / Less */}
        {isLong && (
          <button
            className="toggle-btn"
            onClick={() => setExpanded(prev => !prev)}
          >
            {expanded ? 'Show less ↑' : `+${remaining} more contributions`}
          </button>
        )}

      </div>
    </div>
  )
}