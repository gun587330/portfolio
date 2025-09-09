import React, { useEffect, useRef } from 'react'
import { animate } from 'animejs'

function ProjectModal({ projectId, cardPosition, onClose }) {
  const DetailModalRef = useRef(null);
  const closeRef = useRef(null);
  const projects = {
    'ecommerce': {
      title: 'E-Commerce Platform',
      description: 'React와 Node.js를 활용한 풀스택 이커머스 플랫폼입니다.',
      fullDescription: `
        <h3>프로젝트 개요</h3>
        <p>현대적인 온라인 쇼핑몰 플랫폼으로, 사용자 경험을 최우선으로 설계했습니다. 
        결제 시스템, 관리자 대시보드, 사용자 인증 기능을 포함한 완전한 이커머스 솔루션입니다.</p>
        
        <h3>주요 기능</h3>
        <ul>
          <li>사용자 회원가입/로그인 시스템</li>
          <li>상품 검색 및 필터링</li>
          <li>장바구니 및 주문 관리</li>
          <li>Stripe를 통한 안전한 결제 시스템</li>
          <li>관리자 대시보드 (상품 관리, 주문 관리)</li>
          <li>실시간 재고 관리</li>
          <li>사용자 리뷰 및 평점 시스템</li>
        </ul>
        
        <h3>기술 스택</h3>
        <div class="tech-stack">
          <span class="tech-tag">React</span>
          <span class="tech-tag">Node.js</span>
          <span class="tech-tag">Express</span>
          <span class="tech-tag">MongoDB</span>
          <span class="tech-tag">Stripe API</span>
          <span class="tech-tag">JWT</span>
          <span class="tech-tag">Redux</span>
          <span class="tech-tag">Material-UI</span>
        </div>
        
        <h3>프로젝트 기간</h3>
        <p>2023년 3월 ~ 2023년 6월 (4개월)</p>
        
        <h3>팀 구성</h3>
        <p>프론트엔드 2명, 백엔드 2명, 디자이너 1명</p>
      `,
      image: 'fas fa-shopping-cart',
      demoUrl: '#',
      githubUrl: '#'
    },
    
    'task-management': {
      title: 'Task Management App',
      description: 'Vue.js와 Firebase를 사용한 실시간 협업 태스크 관리 애플리케이션입니다.',
      fullDescription: `
        <h3>프로젝트 개요</h3>
        <p>팀 협업을 위한 실시간 태스크 관리 애플리케이션입니다. 
        드래그 앤 드롭 기능과 실시간 업데이트를 통해 효율적인 프로젝트 관리를 지원합니다.</p>
        
        <h3>주요 기능</h3>
        <ul>
          <li>칸반 보드 스타일의 태스크 관리</li>
          <li>드래그 앤 드롭으로 태스크 이동</li>
          <li>실시간 협업 (여러 사용자 동시 편집)</li>
          <li>태스크 우선순위 설정</li>
          <li>마감일 알림 시스템</li>
          <li>팀 멤버 관리</li>
          <li>태스크 히스토리 추적</li>
          <li>데이터 백업 및 복원</li>
        </ul>
        
        <h3>기술 스택</h3>
        <div class="tech-stack">
          <span class="tech-tag">Vue.js 3</span>
          <span class="tech-tag">Composition API</span>
          <span class="tech-tag">Firebase</span>
          <span class="tech-tag">Firestore</span>
          <span class="tech-tag">Vuex</span>
          <span class="tech-tag">Vuetify</span>
          <span class="tech-tag">Vue Router</span>
          <span class="tech-tag">Vue Draggable</span>
        </div>
        
        <h3>프로젝트 기간</h3>
        <p>2023년 7월 ~ 2023년 9월 (3개월)</p>
        
        <h3>팀 구성</h3>
        <p>프론트엔드 1명, 백엔드 1명, 디자이너 1명</p>
      `,
      image: 'fas fa-tasks',
      demoUrl: '#',
      githubUrl: '#'
    },
    
    'dashboard': {
      title: 'Dashboard Analytics',
      description: 'React와 D3.js를 활용한 데이터 시각화 대시보드입니다.',
      fullDescription: `
        <h3>프로젝트 개요</h3>
        <p>복잡한 데이터를 직관적으로 시각화하는 분석 대시보드입니다. 
        실시간 데이터 업데이트와 인터랙티브 차트를 통해 비즈니스 인사이트를 제공합니다.</p>
        
        <h3>주요 기능</h3>
        <ul>
          <li>다양한 차트 타입 (막대, 선, 파이, 도넛 차트)</li>
          <li>실시간 데이터 업데이트</li>
          <li>데이터 필터링 및 검색</li>
          <li>반응형 대시보드 레이아웃</li>
          <li>데이터 내보내기 (PDF, Excel)</li>
          <li>사용자 정의 위젯</li>
          <li>다크/라이트 모드</li>
          <li>모바일 최적화</li>
        </ul>
        
        <h3>기술 스택</h3>
        <div class="tech-stack">
          <span class="tech-tag">React</span>
          <span class="tech-tag">TypeScript</span>
          <span class="tech-tag">D3.js</span>
          <span class="tech-tag">Chart.js</span>
          <span class="tech-tag">Recharts</span>
          <span class="tech-tag">Socket.io</span>
          <span class="tech-tag">Styled Components</span>
          <span class="tech-tag">Webpack</span>
        </div>
        
        <h3>프로젝트 기간</h3>
        <p>2023년 10월 ~ 2024년 1월 (4개월)</p>
        
        <h3>팀 구성</h3>
        <p>프론트엔드 2명, 데이터 엔지니어 1명, UX 디자이너 1명</p>
      `,
      image: 'fas fa-chart-line',
      demoUrl: '#',
      githubUrl: '#'
    }
  }
  
  const project = projects[projectId]
  

  
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }
    
    document.addEventListener('keydown', handleEscape)
    
    console.log("=== MODAL OPENING DEBUG ===")
    console.log("Card Position received:", cardPosition)
    console.log("DetailModalRef exists:", !!DetailModalRef.current)
    
    // 모달 나타나는 애니메이션
    if (DetailModalRef.current && cardPosition) {
      // 초기 상태 설정
      DetailModalRef.current.style.opacity = '0'
      closeRef.current.style.opacity = '0'
      closeRef.current.style.transform = 'translateY(100%)'
      
      // 모달 컨텐츠 영역 가져오기
      const modalContent = DetailModalRef.current.querySelector('.modal-content');
      

      // 정확한 카드 위치 가져오기
    //  const cardPosition = document.querySelector(`[data-project-id="${projectId}"]`);
    //  const cardPosition = cardElement.getBoundingClientRect();
      console.log("Modal Content:", modalContent)
      console.log("Card Position:", cardPosition)

      // CSS props로 모달 컨텐츠 초기 위치 설정 (카드 위치에서 시작)
      modalContent.style.position = 'fixed';
      modalContent.style.setProperty('left', `${cardPosition.left}px`, 'important');
      modalContent.style.setProperty('top', `${cardPosition.top}px`, 'important');
      modalContent.style.width = `${cardPosition.width}px`;
      modalContent.style.height = `${cardPosition.height}px`;
      console.log("모달 초기위치 설정 이후", modalContent)
    //  modalContent.style.transform = 'none';
      setTimeout(() => {
      DetailModalRef.current.style.opacity = '1';
    }, 300);
      
      
      // 모달 컨텐츠 확장 애니메이션 (카드 → 모달)
      animate(modalContent, {
        left: 'auto',
        top: 'auto',
        width: '90vw',
        height: '90vh',
        duration: 5000,
        ease: 'outBack'
      })
      
      // 닫기 버튼 애니메이션
      animate(closeRef.current, {
        translateY: ['100%', 0],
        opacity: [0, 1],
        duration: 2000,
        ease: 'outSine',
        delay: 2000
      })
    }
    
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])
  
  if (!project) return null
  
  const handleClose = () => {
    console.log("=== MODAL CLOSING DEBUG ===")
    console.log("Card Position for close:", cardPosition)
    
    // 모달 닫기 애니메이션
    if (DetailModalRef.current && cardPosition) {
      // 닫기 버튼 숨기기
      animate(closeRef.current, {
        translateY: '100%',
        opacity: 0,
        duration: 250,
        ease: 'outSine'
      })
      
      // 모달 컨텐츠 영역 가져오기
      const modalContent = DetailModalRef.current.querySelector('.modal-content');
      console.log("Modal Content for close:", modalContent)
      
      // 모달 컨텐츠 축소 애니메이션 (모달 → 카드)
      animate(modalContent, {
        left: `${cardPosition.left}px`,
        top: `${cardPosition.top}px`,
        width: `${cardPosition.width}px`,
        height: `${cardPosition.height}px`,
        duration: 400,
        ease: 'inQuad',
        onComplete: () => {
          // 스타일 초기화
          modalContent.style.position = '';
          modalContent.style.left = '';
          modalContent.style.top = '';
          modalContent.style.width = '';
          modalContent.style.height = '';
          modalContent.style.transform = '';
          onClose()
        }
      })

    } else {
      onClose()
    }
  }
  
  return (
    <div className="project-modal" ref={DetailModalRef}>
      <div className="modal-overlay" onClick={handleClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <div className="modal-icon">
              <i className={project.image}></i>
            </div>
            <div className="modal-title">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
            <button className="modal-close" ref={closeRef} onClick={handleClose}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          
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