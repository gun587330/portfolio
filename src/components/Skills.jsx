import React from 'react'

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">기술 스택</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skill-items">
              <div className="skill-item">
                <i className="fab fa-react"></i>
                <span>React</span>
              </div>
              <div className="skill-item">
                <i className="fab fa-vuejs"></i>
                <span>Vue.js</span>
              </div>
              <div className="skill-item">
                <i className="fab fa-js-square"></i>
                <span>JavaScript</span>
              </div>
              <div className="skill-item">
                <i className="fab fa-html5"></i>
                <span>HTML5</span>
              </div>
              <div className="skill-item">
                <i className="fab fa-css3-alt"></i>
                <span>CSS3</span>
              </div>
              <div className="skill-item">
                <i className="fab fa-sass"></i>
                <span>Sass</span>
              </div>
            </div>
          </div>
          <div className="skill-category">
            <h3>Backend & Tools</h3>
            <div className="skill-items">
              <div className="skill-item">
                <i className="fab fa-node-js"></i>
                <span>Node.js</span>
              </div>
              <div className="skill-item">
                <i className="fab fa-git-alt"></i>
                <span>Git</span>
              </div>
              <div className="skill-item">
                <i className="fab fa-docker"></i>
                <span>Docker</span>
              </div>
              <div className="skill-item">
                <i className="fab fa-aws"></i>
                <span>AWS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 