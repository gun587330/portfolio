import React from 'react'
import ProjectCard from './project/projectCard/ProjectCard.jsx'

function Projects({ onProjectClick }) {
  const projects = [
    {
      id: 'ecommerce',
      title: 'E-Commerce Platform',
      description: 'React와 Node.js를 활용한 풀스택 이커머스 플랫폼입니다. 결제 시스템, 관리자 대시보드, 사용자 인증 기능을 포함합니다.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      icon: 'fas fa-shopping-cart'
    },
    {
      id: 'task-management',
      title: 'Task Management App',
      description: 'Vue.js와 Firebase를 사용한 실시간 협업 태스크 관리 애플리케이션입니다. 드래그 앤 드롭 기능과 실시간 업데이트를 지원합니다.',
      tech: ['Vue.js', 'Firebase', 'Vuex', 'Vuetify'],
      icon: 'fas fa-tasks'
    },
    {
      id: 'dashboard',
      title: 'Dashboard Analytics',
      description: 'React와 D3.js를 활용한 데이터 시각화 대시보드입니다. 실시간 데이터 업데이트와 인터랙티브 차트를 제공합니다.',
      tech: ['React', 'D3.js', 'TypeScript', 'Chart.js'],
      icon: 'fas fa-chart-line'
    }
  ]

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
              tech={project.tech}
              icon={project.icon}
              onProjectClick={onProjectClick}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 