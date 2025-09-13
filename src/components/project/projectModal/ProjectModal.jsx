import React, { useEffect, useRef } from 'react'
import { animate } from 'animejs'
import { projects } from '../../../data/projectData.js'
import ModalNavBar from './modalNavBar/ModalNavBar.jsx'
import './ProjectModal.css'

function ProjectModal({ projectId, cardPosition, onClose }) {
  const DetailModalRef = useRef(null);
  const closeRef = useRef(null);
  
  const project = projects[projectId]
  
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }
    
    document.addEventListener('keydown', handleEscape)
    
    // 모달 나타나는 애니메이션
    if (cardPosition) {
      // 초기 상태 설정
      DetailModalRef.current.style.opacity = '0'
      closeRef.current.style.opacity = '0'
      closeRef.current.style.transform = 'translateY(100%)'
      
      // 모달 컨텐츠 영역 가져오기
      const modalContent = DetailModalRef.current.querySelector('.modal-content');

      // CSS props로 모달 컨텐츠 초기 위치 설정 (카드 위치에서 시작)
    modalContent.style.position = 'fixed';
    modalContent.style.setProperty('--card-left', `${cardPosition.left}px`);
    modalContent.style.setProperty('--card-top', `${cardPosition.top}px`);
    modalContent.style.setProperty('--card-width', `${cardPosition.width}px`);
    modalContent.style.setProperty('--card-height', `${cardPosition.height}px`);
    
    const invert = {
        scaleX: window.innerWidth / cardPosition.width * 0.6,
        scaleY: cardPosition.height / window.innerHeight,
    }
      
    DetailModalRef.current.style.opacity = '1';

    // 모달 컨텐츠 확장 애니메이션 (카드 → 모달)
      animate(modalContent, {
        //opacity: [0, 1],
        transition: 'all 0.5s ease',
        //transform: `scale(${invert.scaleX}, ${invert.scaleY})`,
        transform: "scale(1,1)",
        duration: 500,
      })
      
      modalContent.classList.add('expanded');
      
      // 닫기 버튼 애니메이션
      animate(closeRef.current, {
        opacity: [0, 1],
        duration: 2000,
        ease: 'outSine',
        //delay: 2000
      })
    }
    
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])
  
  if (!project) return null
  
  const handleClose = () => {
    
    // 모달 닫기 애니메이션
    if (DetailModalRef.current && cardPosition) {
      // 닫기 버튼 숨기기
    //  animate(closeRef.current, {
    //    translateY: '100%',
    //    opacity: 0,
    //    duration: 250,
    //    ease: 'outSine'
    //  })

      
      // 모달 컨텐츠 영역 가져오기
      const modalContent = DetailModalRef.current.querySelector('.modal-content');

    // 모달 컨텐츠 축소 애니메이션 (모달 → 카드)
    //  animate(modalContent, {
    //    //left: `${cardPosition.left}px`,
    //    //top: `${cardPosition.top}px`,
    //    //width: `${cardPosition.width}px`,
    //    //height: `${cardPosition.height}px`,
    //    duration: 2000,
    //    ease: 'inQuad',
        
        //onComplete: () => {
          // 스타일 초기화
        //  modalContent.style.position = '';
        //  modalContent.style.left = '';
        //  modalContent.style.top = '';
        //  modalContent.style.width = '';
        //  modalContent.style.height = '';
        //  modalContent.style.transform = '';
        //  onClose()
        //}
    //  })
      
      
      modalContent.classList.remove('expanded');
    //  if(DetailModalRef.current.style.opacity === '0'){
    //    onClose()
    //  }
        setTimeout(() => {
            modalContent.style.opacity = '0';
            setTimeout(() => onClose(), 500); // transition 시간만큼 대기
        }, 0);
    } else {
      onClose()
    }
    //DetailModalRef.current.style.opacity = '0';
  }
  
  return (
    <div className="project-modal" ref={DetailModalRef}>
      <div className="modal-overlay" onClick={handleClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <ModalNavBar 
            project={project} 
            onClose={handleClose} 
            closeRef={closeRef} 
          />
          
          <div className="modal-body">
            <div 
              className="modal-description"
              dangerouslySetInnerHTML={{ __html: project.fullDescription }}
            />
          </div>
          
          <div className="modal-footer">
            <a href={project.demoUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt"></i>
              Live Demo 보기
            </a>
            <a href={project.githubUrl} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
              GitHub 코드
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal 