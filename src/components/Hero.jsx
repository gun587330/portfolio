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
            안녕하세요! <br />
            <span className="highlight">프론트엔드 개발자</span> <br />
            정건입니다
          </h1>
          <p className="hero-description">
            사용자 경험을 중시하는 웹 애플리케이션을 만드는 것을 좋아합니다.
            React, Vue.js, TypeScript를 활용한 현대적인 웹 개발에 전문성을 가지고 있습니다.
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
        <div className="hero-image">
          <div className="profile-card">
            <div className="profile-avatar">
              <i className="fas fa-user"></i>
            </div>
            <h3>정건</h3>
            <p>Frontend Developer</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 