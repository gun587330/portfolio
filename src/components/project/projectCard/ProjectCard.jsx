import React, { useRef } from 'react'
import './ProjectCard.css'

function ProjectCard({ 
  title, 
  description, 
  duration,
  tech, 
  image, 
  projectId, 
  githubUrl,
  onProjectClick 
}) {
  const cardRef = useRef(null)

  const handleClick = () => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()
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
        {image && !image.includes('fas fa-') ? (
          <img src={image} alt={title} className="project-img" />
        ) : (
          <div className="project-placeholder">
            <i className={image || 'fas fa-code'}></i>
          </div>
        )}
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <div className="project-duration">
            {duration}
            <div className="divide-line"></div>
        </div>
        
        <p>{description}</p>
        <div className="project-tech">
          {tech.slice(0, 3).map((techItem, index) => (
            <span key={index}>{techItem}</span>
          ))}
          {tech.length > 3 && <span className="tech-more">...</span>}
          {/*{tech.length > 3 && <span className="tech-more">{".".repeat(50)}</span>}*/}
        </div>
        <div className="project-links">
          <button 
            className="btn btn-small" 
            onClick={handleClick}
          >
            Detail
          </button>
          <a href={githubUrl} className="btn btn-small btn-outline" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard