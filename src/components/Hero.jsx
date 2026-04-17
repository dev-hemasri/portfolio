import { personal, stats } from '../data/portfolioData'
import './Hero.css'

export default function Hero() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true" />

      <div className="hero-content">
        {/* Left: Text */}
        <div className="hero-text">
          <div className="hero-badge">
            <span className="hero-badge__dot" />
            Available for opportunities
          </div>

          <h1>
            Hi, I'm <span className="gradient-text">{personal.name}</span>
            <br />
            {personal.title}
          </h1>

          <p className="hero-subtitle">{personal.summary}</p>

          {/* Stats */}
          <div className="hero-stats">
            {stats.map((stat, i) => (
              <div className="stat" key={i}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => scrollTo('#projects')}>
              View My Work →
            </button>
            <button className="btn btn-secondary" onClick={() => scrollTo('#contact')}>
              Get in Touch
            </button>
            <a href={personal.resumeUrl} className="btn btn-resume" target="_blank" rel="noreferrer">
              ↓ Resume
            </a>
          </div>
        </div>

        {/* Right: Code window */}
        <div className="hero-visual">
          <div className="code-window">
            <div className="code-header">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="code-filename">hemasri.ts</span>
            </div>
            <div className="code-content">
              <CodeLine n={1}><span className="code-keyword">const</span> <span className="code-function">developer</span> = {'{'}</CodeLine>
              <CodeLine n={2}>&nbsp;&nbsp;<span className="code-string">"name"</span>: <span className="code-string">"Hemasri"</span>,</CodeLine>
              <CodeLine n={3}>&nbsp;&nbsp;<span className="code-string">"role"</span>: <span className="code-string">"Senior Frontend Dev"</span>,</CodeLine>
              <CodeLine n={4}>&nbsp;&nbsp;<span className="code-string">"stack"</span>: [</CodeLine>
              <CodeLine n={5}>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"Angular 14–17"</span>,</CodeLine>
              <CodeLine n={6}>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"TypeScript"</span>,</CodeLine>
              <CodeLine n={7}>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"RxJS / NgRx"</span>,</CodeLine>
              <CodeLine n={8}>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"React ⚛ (learning)"</span></CodeLine>
              <CodeLine n={9}>&nbsp;&nbsp;],</CodeLine>
              <CodeLine n={10}>&nbsp;&nbsp;<span className="code-string">"experience"</span>: <span className="code-string">"6+ years"</span>,</CodeLine>
              <CodeLine n={11}>&nbsp;&nbsp;<span className="code-string">"available"</span>: <span className="code-keyword">true</span></CodeLine>
              <CodeLine n={12}>{'}'}</CodeLine>
              <CodeLine n={13}><span className="code-comment">// Let's build something great!</span></CodeLine>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CodeLine({ n, children }) {
  return (
    <div className="code-line">
      <span className="line-number">{n}</span>
      <span>{children}</span>
    </div>
  )
}
