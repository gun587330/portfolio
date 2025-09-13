import React from 'react'
import ProjectCard from './project/projectCard/ProjectCard.jsx'
import { projects as projectData } from '../data/projectData.js'

function Projects({ onProjectClick }) {
  // 객체를 배열로 변환
  const projects = Object.entries(projectData).map(([id, data]) => ({
    id,
    ...data
  }))

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">프로젝트</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              projectId={project.id}
              title={project.title}
              description={project.description}
              duration={project.duration}
              tech={project.tech}
              image={project.image}
              githubUrl={project.githubUrl}
              onProjectClick={onProjectClick}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 