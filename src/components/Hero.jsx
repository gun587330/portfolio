import React from 'react'

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="highlight">Frontend Portfolio </span> <br />
          </h1>
          <p className="hero-description">
            안녕하세요, <br />
            아이디어를 실현하기 위한 핵심 본질에 집중하고자 노력하는 개발자,<br />
            정건입니다.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}>
              프로젝트 보기
            </a>
            <a href="#contact" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>
              연락하기
            </a>
          </div>
        </div>

          <div className="profile-card">
            <div className="profile-avatar">
              {/*<i className="fas fa-user"></i>*/}
              <img src="/images/profile.png" alt="profile" style={{width: "360px", height: "360px"}} />
            </div>
            <h3>정건</h3>
            <p>Frontend Developer</p>
          </div>

      </div>
    </section>
  )
}

export default Hero 