import { skills } from '../data/portfolioData'
import { useState } from 'react'
import './Skills.css'

export default function Skills() {
  const [active, setActive] = useState('All')

  const categories = [
    { name: 'All', icon: 'devicon-devicon-plain' },
    ...skills.map(s => ({
      name: s.category,
      icon: s.iconClass
    }))
  ]

  const activeItems =
    active === 'All'
      ? skills.flatMap(s => s.items)
      : skills.find(s => s.category === active)?.items || []

  return (
    <section className="skills-section">
      <div className="section-wrapper">

        <div className="section-header center">
          <span className="section-tag">What I Work With</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            6+ years of experience in Angular, with hands-on experience in React and modern frontend tooling.
          </p>
        </div>

        {/* Segmented Tabs */}
        <div className="segmented-control">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`segment ${active === cat.name ? 'active' : ''}`}
              onClick={() => setActive(cat.name)}
            >
              <i className={`segment-icon ${cat.icon}`}></i>
              <span className="segment-label">{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Skills */}
        <div className="skills-card">
          <div className="skill-list">
            {activeItems.map((item, i) => (
              <span key={i} className="skill-pill">
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}