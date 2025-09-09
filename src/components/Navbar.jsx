import React, { useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home') }}>
            Geon's Portfolio
          </a>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('home') }}>
              홈
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>
              소개
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('skills') }}>
              기술스택
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}>
              프로젝트
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>
              연락처
            </a>
          </li>
        </ul>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 