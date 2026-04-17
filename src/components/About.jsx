import { personal } from '../data/portfolioData'
import './About.css'

const techStack = [
  { label: 'Angular', icon: 'devicon-angularjs-plain colored' },
  { label: 'TypeScript', icon: 'devicon-typescript-plain colored' },
  { label: 'RxJS', icon: 'devicon-rxjs-plain' },
  { label: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { label: 'React', icon: 'devicon-react-original colored' },
  { label: 'HTML5', icon: 'devicon-html5-plain colored' },
  { label: 'CSS3', icon: 'devicon-css3-plain colored' },
  { label: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
  { label: 'Tailwind', icon: 'devicon-tailwindcss-plain colored' },
  { label: 'Git', icon: 'devicon-git-plain colored' },
  { label: 'Node.js', icon: 'devicon-nodejs-plain colored' },
  { label: 'MySQL', icon: 'devicon-mysql-plain colored' },
]

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-wrapper">
        <div className="section-header">
          <span className="section-tag">Get to Know Me</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          {/* Text */}
          <div className="about-text">
            <p>
              I'm a <span className="highlight">Senior Frontend Developer</span> based in Salem, Tamil Nadu,
              with 6+ years of experience building scalable web applications for government and enterprise clients.
              My core expertise is in <span className="highlight">Angular (14–17), TypeScript, RxJS, and NgRx</span> —
              architecting SPAs that handle real-world complexity.
            </p>
            <p>
              I've delivered portals used by <span className="highlight">200+ daily government users</span>,
              achieving measurable results like 30% bundle size reduction and 30% improvement in API reliability
              through performance-first engineering.
            </p>
            <p>
              Currently I'm actively <span className="highlight">upskilling in React</span> — studying Hooks,
              Context API, and React Router while building portfolio projects for deployment on Netlify and Vercel.
              I'm looking for Senior Frontend or Angular Lead roles where I can drive architecture decisions
              and mentor junior developers.
            </p>

            <div className="about-actions">
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="btn btn-primary">
                LinkedIn ↗
              </a>
              <a href={personal.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
                GitHub
              </a>
            </div>
          </div>

          {/* Tech stack pills */}
          <div>
            <p className="tech-heading">Technologies I work with</p>
            <div className="tech-stack">
              {techStack.map((t, i) => (
                <div className="tech-item" key={i}>
                  <i className={t.icon} style={{ fontSize: 20 }} />
                  {t.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
