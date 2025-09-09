import React from 'react'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-info">
            <div className="info-item">
              <i className="fas fa-user"></i>
              <div>
                <h3>이름</h3>
                <p>정건</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-birthday-cake"></i>
              <div>
                <h3>생년월일</h3>
                <p>2001년 2월 12일</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>위치</h3>
                <p>서울특별시 동작구</p>
              </div>
            </div>
          </div>
          <div className="about-text">
            <p>
              3년간의 프론트엔드 개발 경험을 바탕으로 사용자 중심의 웹 애플리케이션을 개발하고 있습니다.
              React, Vue.js, TypeScript 등 최신 기술 스택을 활용하여 성능과 사용성을 모두 고려한 
              웹 서비스를 만들어왔습니다.
            </p>
            <p>
              지속적인 학습과 새로운 기술 도입에 적극적이며, 팀 협업을 통해 더 나은 결과물을 
              만들어내는 것을 중요하게 생각합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 