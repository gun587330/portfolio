import React, { useRef } from 'react'

function ProjectCard({ 
  title, 
  description, 
  tech, 
  icon, 
  projectId, 
  onProjectClick 
}) {
  const cardRef = useRef(null)

  const handleClick = () => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()
      console.log("건체크", cardRef.current)
      const position = {
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height
      }
      console.log(position)
      onProjectClick(projectId, position)
    }
  }

  return (
    <div className="project-card" ref={cardRef}>
      <div className="project-image">
        <div className="project-placeholder">
          <i className={icon}></i>
        </div>
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tech">
          {tech.map((techItem, index) => (
            <span key={index}>{techItem}</span>
          ))}
        </div>
        <div className="project-links">
          <button 
            className="btn btn-small" 
            onClick={handleClick}
          >
            Live Demo
          </button>
          <a href="#" className="btn btn-small btn-outline">
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard