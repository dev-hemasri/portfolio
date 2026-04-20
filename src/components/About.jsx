import { personal } from '../data/portfolioData'
import './About.css'

// const techStack = [
//   { label: 'Angular', icon: 'devicon-angularjs-plain colored' },
//   { label: 'TypeScript', icon: 'devicon-typescript-plain colored' },
//   { label: 'RxJS', icon: 'devicon-rxjs-plain' },
//   { label: 'JavaScript', icon: 'devicon-javascript-plain colored' },
//   { label: 'React', icon: 'devicon-react-original colored' },
//   { label: 'HTML5', icon: 'devicon-html5-plain colored' },
//   { label: 'CSS3', icon: 'devicon-css3-plain colored' },
//   { label: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
//   { label: 'Tailwind', icon: 'devicon-tailwindcss-plain colored' },
//   { label: 'Git Hub', icon: 'devicon-github-plain colored' },
//   { label: 'PHP', icon: 'devicon-php-plain colored' },
//   { label: 'MySQL', icon: 'devicon-mysql-plain colored' },
// ]

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
  I'm a <span className="highlight">Senior Frontend Developer</span> with 6+ years of experience building scalable web applications for government and enterprise clients. I specialize in <span className="highlight">Angular, TypeScript, and modern JavaScript</span>, with hands-on experience in <span className="highlight">React</span> and component-driven architecture.
</p>

<p>
  I’ve delivered production-grade applications used by <span className="highlight">200+ daily users</span>, focusing on performance, scalability, and maintainability — achieving significant improvements in load time and API efficiency.
</p>

<p>
  I mentor developers, contribute to architectural decisions, and actively participate in Agile delivery processes. I focus on clean code, unit testing, and performance optimization to ensure high-quality outcomes. I’m open to Senior Frontend and Lead roles where I can drive impactful solutions and team growth.
</p>

            <div className="about-actions">
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="btn btn-primary">
    <i className="devicon-linkedin-plain"></i> LinkedIn ↗
</a>

<a href={personal.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
    <i className="devicon-github-plain"></i> GitHub ↗
</a>
            </div>
          </div>

          {/* Tech stack pills */}
          {/* <div>
            <p className="tech-heading">Technologies I work with</p>
            <div className="tech-stack">
              {techStack.map((t, i) => (
                <div className="tech-item" key={i}>
                  <i className={t.icon} style={{ fontSize: 20 }} />
                  {t.label}
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
