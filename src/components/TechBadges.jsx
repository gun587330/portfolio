import React, { useRef } from 'react'
import './TechBadges.css'

function TechBadges() {
  const frontendSliderRef = useRef(null)
  const backendSliderRef = useRef(null)
  const designSliderRef = useRef(null)
  const communicationSliderRef = useRef(null)

  const scrollSlider = (sliderRef, direction) => {
    if (sliderRef.current) {
      const scrollAmount = 300 // 스크롤할 픽셀 수
      const currentScroll = sliderRef.current.scrollLeft
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount
      
      sliderRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      })
    }
  }
  const frontendBadges = [
    {
      name: 'HTML5',
      url: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white'
    },
    {
      name: 'CSS3',
      url: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white'
    },
    {
      name: 'JavaScript',
      url: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black'
    },
    {
      name: 'React',
      url: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB'
    },
    {
      name: 'Next.js',
      url: 'https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white'
    },
    {
      name: 'Tailwind CSS',
      url: 'https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white'
    },
    {
      name: 'Styled Components',
      url: 'https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white'
    },
    {
      name: 'React Query',
      url: 'https://img.shields.io/badge/React%20Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white'
    }
  ]

  const backendBadges = [
    {
      name: 'Node.js',
      url: 'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white'
    },
    {
      name: 'Python',
      url: 'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white'
    },
    {
      name: 'Docker',
      url: 'https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white'
    },
    {
      name: 'AWS',
      url: 'https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white'
    },
    {
      name: 'Firebase',
      url: 'https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white'
    }
  ]

  const designBadges = [
    {
      name: 'Figma',
      url: 'https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white'
    },
    {
      name: 'AutoCAD',
      url: 'https://img.shields.io/badge/AutoCAD-000000?style=for-the-badge&logo=autodesk&logoColor=white'
    },
    {
      name: 'Canva',
      url: 'https://img.shields.io/badge/Canva-00C4CC?style=for-the-badge&logo=canva&logoColor=white'
    }
  ]

  const communicationBadges = [
    {
      name: 'GitHub',
      url: 'https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white'
    },
    {
      name: 'Slack',
      url: 'https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white'
    },
    {
      name: 'Notion',
      url: 'https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white'
    },
    {
      name: 'Channel Talk',
      url: 'https://img.shields.io/badge/Channel%20Talk-FF6B6B?style=for-the-badge&logo=channel&logoColor=white'
    }
  ]

  return (
    <div className="tech-badges-container">
      {/* 첫 번째 행: Frontend | Backend */}
      <div className="tech-row">
        <div className="tech-category">
          <h3>Frontend</h3>
          <div className="tech-slider-wrapper">
            <button 
              className="slider-btn slider-btn-left"
              onClick={() => scrollSlider(frontendSliderRef, 'left')}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="tech-slider" ref={frontendSliderRef}>
              <div className="tech-slider-track">
                {frontendBadges.map((badge, index) => (
                  <a key={index} href="#" className="tech-badge-link">
                    <img 
                      src={badge.url} 
                      alt={badge.name} 
                      className="tech-badge-img"
                    />
                  </a>
                ))}
              </div>
            </div>
            <button 
              className="slider-btn slider-btn-right"
              onClick={() => scrollSlider(frontendSliderRef, 'right')}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <div className="tech-category">
          <h3>Backend</h3>
          <div className="tech-slider-wrapper">
            <button 
              className="slider-btn slider-btn-left"
              onClick={() => scrollSlider(backendSliderRef, 'left')}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="tech-slider" ref={backendSliderRef}>
              <div className="tech-slider-track">
                {backendBadges.map((badge, index) => (
                  <a key={index} href="#" className="tech-badge-link">
                    <img 
                      src={badge.url} 
                      alt={badge.name} 
                      className="tech-badge-img"
                    />
                  </a>
                ))}
              </div>
            </div>
            <button 
              className="slider-btn slider-btn-right"
              onClick={() => scrollSlider(backendSliderRef, 'right')}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>

      {/* 두 번째 행: Design | Communication */}
      <div className="tech-row">
        <div className="tech-category">
          <h3>Design</h3>
          <div className="tech-slider-wrapper">
            <button 
              className="slider-btn slider-btn-left"
              onClick={() => scrollSlider(designSliderRef, 'left')}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="tech-slider" ref={designSliderRef}>
              <div className="tech-slider-track">
                {designBadges.map((badge, index) => (
                  <a key={index} href="#" className="tech-badge-link">
                    <img 
                      src={badge.url} 
                      alt={badge.name} 
                      className="tech-badge-img"
                    />
                  </a>
                ))}
              </div>
            </div>
            <button 
              className="slider-btn slider-btn-right"
              onClick={() => scrollSlider(designSliderRef, 'right')}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <div className="tech-category">
          <h3>Communication</h3>
          <div className="tech-slider-wrapper">
            <button 
              className="slider-btn slider-btn-left"
              onClick={() => scrollSlider(communicationSliderRef, 'left')}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="tech-slider" ref={communicationSliderRef}>
              <div className="tech-slider-track">
                {communicationBadges.map((badge, index) => (
                  <a key={index} href="#" className="tech-badge-link">
                    <img 
                      src={badge.url} 
                      alt={badge.name} 
                      className="tech-badge-img"
                    />
                  </a>
                ))}
              </div>
            </div>
            <button 
              className="slider-btn slider-btn-right"
              onClick={() => scrollSlider(communicationSliderRef, 'right')}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechBadges