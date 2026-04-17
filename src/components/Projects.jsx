import { projects } from '../data/portfolioData'
import './Projects.css'

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-wrapper">
        <div className="section-header">
          <span className="section-tag">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Government-scale Angular SPAs and web applications — built for real users.
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

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {/* Image / gradient placeholder */}
      <div className="project-image" style={{ background: project.gradient }}>
        {project.image
          ? <img src={project.image} alt={project.title} loading="lazy" />
          : <span className="project-image__icon">{'</>'}</span>
        }

        {/* Hover overlay with links */}
        <div className="project-overlay">
          <div className="project-links">
            {project.liveUrl && project.liveUrl !== '#' && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link">
                Live ↗
              </a>
            )}
            {project.githubUrl && project.githubUrl !== '#' && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-link">
                GitHub
              </a>
            )}
            {project.liveUrl === '#' && (
              <span className="project-link project-link--private">Private / Govt Project</span>
            )}
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, i) => (
            <span className="tag" key={i}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
