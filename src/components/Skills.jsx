import { skills } from '../data/portfolioData'
import './Skills.css'

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-wrapper">
        <div className="section-header">
          <span className="section-tag">What I Work With</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            6+ years across the Angular ecosystem, with active expansion into React and modern tooling.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((cat, i) => (
            <div className="skill-category" key={i}>
              <div className="skill-header">
                <div className="skill-icon">
                  <i className={cat.iconClass} title={cat.category} />
                </div>
                <h3>{cat.category}</h3>
              </div>
              <div className="skill-list">
                {cat.items.map((item, j) => (
                  <span className="skill-pill" key={j}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
