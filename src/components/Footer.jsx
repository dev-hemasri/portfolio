import { personal } from '../data/portfolioData'
import { useState, useEffect } from 'react'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  const [showTop, setShowTop] = useState(false)

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300) // show after scroll
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-left">
            <span className="brand">{personal.name}</span>
            <p>Senior Frontend Developer</p>
          </div>

          <div className="footer-center">
            <p>Built with using React + Vite</p>
            <p>© {year} Hemasri. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Scroll Button */}
      {showTop && (
        <button
          className="scroll-top-btn"
          onClick={scrollTop}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </>
  )
}