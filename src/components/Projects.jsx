import { useEffect, useRef } from 'react'
import { projects } from '../data/portfolioData'
import './Projects.css'

const INTERVAL = 3200

function Carousel({ slides }) {
  const trackRef = useRef(null)
  const dotsRef = useRef([])
  const progressRef = useRef(null)
  const curRef = useRef(0)
  const rafRef = useRef(null)
  const timerRef = useRef(null)
  const total = slides.length

  useEffect(() => {
    if (total <= 1) {
      if (progressRef.current) progressRef.current.style.width = '100%'
      return
    }
     const initialDelay = Math.random() * 2500
  const initTimer = setTimeout(() => startProgress(), initialDelay)

    function goTo(idx) {
      curRef.current = (idx + total) % total
      if (trackRef.current)
        trackRef.current.style.transform = `translateX(-${curRef.current * 100}%)`
      dotsRef.current.forEach((d, i) =>
        d?.classList.toggle('on', i === curRef.current)
      )
      startProgress()
    }

    function startProgress() {
      cancelAnimationFrame(rafRef.current)
      clearTimeout(timerRef.current)
      let val = 0
      const bar = progressRef.current
      if (!bar) return
      bar.style.width = '0%'

      const step = () => {
        val += 100 / (INTERVAL / 16)
        if (val >= 100) {
          bar.style.width = '100%'
          timerRef.current = setTimeout(() => goTo(curRef.current + 1), 100)
          return
        }
        bar.style.width = val + '%'
        rafRef.current = requestAnimationFrame(step)
      }
      rafRef.current = requestAnimationFrame(step)
    }

    startProgress()

    return () => {
      clearTimeout(initTimer)          // ✅ clean up initial delay too
    cancelAnimationFrame(rafRef.current)
    clearTimeout(timerRef.current)
    }
  }, [total])

  return (
    <div className="carousel">
      <div className="carousel-track" ref={trackRef}>
        {slides.map((slide, i) => (
          <div className="carousel-slide" key={i}>
            <img
              src={slide.image}
              alt={slide.badge}
              className="slide-img"
              loading="lazy"
            />
            <span className="slide-badge">{slide.badge}</span>
          </div>
        ))}
      </div>

      {total > 1 && (
        <div className="carousel-dots">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`cdot${i === 0 ? ' on' : ''}`}
              ref={el => (dotsRef.current[i] = el)}
              onClick={() => {
                curRef.current = i
                if (trackRef.current)
                  trackRef.current.style.transform = `translateX(-${i * 100}%)`
                dotsRef.current.forEach((d, j) =>
                  d?.classList.toggle('on', j === i)
                )
              }}
            />
          ))}
        </div>
      )}

      <div className="carousel-progress" ref={progressRef} />
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <Carousel slides={project.slides} />

      <div className="card-body">
        <div className="card-accent" style={{ background: project.accentColor }} />
        <h3 className="project-name">{project.name}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, i) => (
            <span className="project-tag" key={i}>{tag}</span>
          ))}
        </div>
        <div className="card-footer">
          <span className="footer-org">{project.org}</span>
          {project.liveUrl
            ? <a href={project.liveUrl} target="_blank" rel="noreferrer" className="live-btn">Live ↗</a>
            : <span className="private-lbl">Restricted access</span>
          }
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-wrapper">
        <div className="section-header reveal">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            From concept to deployment — applications that solve real-world problems.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}