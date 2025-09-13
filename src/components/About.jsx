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
              저는 "세상이 돌아가는 메커니즘에 기여하는 시스템"을 만들고 싶다는 꿈을 가지고 있습니다.
              이를 위해 다양한 창업 아이디어와 해커톤, 경진대회에 도전하며 실전 경험을 쌓아왔습니다.
            </p>
            <p>
              도전과 실행을 두려워하지 않고, 문제 해결 과정에서 배우며 성장하는 것을 즐기고자 노력하고 있습니다.
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