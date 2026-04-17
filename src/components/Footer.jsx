import { personal } from '../data/portfolioData'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <span className="brand">{personal.name}</span>
          <p>Senior Frontend Developer · Angular Specialist</p>
        </div>

        <div className="footer-center">
          <p>Built with <span className="heart">♥</span> using React + Vite</p>
          <p>© {year} Hemasri. All rights reserved.</p>
        </div>

        <div className="footer-right">
          <button className="scroll-top" onClick={scrollTop} aria-label="Back to top">
            ↑ Top
          </button>
        </div>
      </div>
    </footer>
  )
}
