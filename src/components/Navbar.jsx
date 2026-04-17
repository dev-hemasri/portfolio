import { useState, useEffect } from 'react'
import { personal } from '../data/portfolioData'
import './Navbar.css'

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="nav-container">
        <span className="brand">{personal.name}</span>

        {/* Desktop links */}
        <ul className="nav-links">
          {navLinks.map(link => (
            <li key={link.label}>
              <a href={link.href} onClick={e => handleNavClick(e, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href={personal.resumeUrl} className="nav-resume-btn" target="_blank" rel="noreferrer">
              Resume ↗
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map(link => (
            <a key={link.label} href={link.href} onClick={e => handleNavClick(e, link.href)}>
              {link.label}
            </a>
          ))}
          <a href={personal.resumeUrl} className="nav-resume-btn" target="_blank" rel="noreferrer">
            Resume ↗
          </a>
        </div>
      )}
    </nav>
  )
}
