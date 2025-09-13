export const projects = {
  'ecommerce': {
    title: 'Now Sale?(지금 살래?)',
    description: "동작구 소상공인의 유휴 시간과 자원을 소비자에게 연결하는 AI 기반 타임커머스 플랫폼",
    duration: '2025.08(LikeLion 13th HackerThon)',
    tech: ['React', 'Node.js', 'REST API', 'JWT', 'FireBaseAPI'],
    fullDescription: `
      <h3>프로젝트 개요</h3>
      <p>동작구 지역 소상공인의 빈 시간과 남은 재고를 실시간으로 소비자에게 연결하여,
         소상공인은 추가 수익을 창출하고 소비자는 합리적인 가격으로 서비스를 이용할 수 있도록 하는 플랫폼
      </p>
      
     <h3>제품 중심 요약</h3>
<ul>
  <li>동작구 소상공인 유휴시간·재고 타임특가 매칭</li>
  <li>소비자-점포 실시간 매칭 기반 타임커머스</li>
  <li>AI 다이나믹 프라이싱(가설 기반 규칙 → 모델 전환 로드맵)</li>
  <li>네이버/카카오 지도·검색 이중 체크로 신뢰도 확보</li>
  <li>채널톡 연동 고객상담 + 다국어 자동응답 설계</li>
  <li>MVP 기준 핵심 동선 우선: 리스트/카드 재사용 UI</li>
  <li>지역 경제 활성화 목표의 실험 주도형 프로젝트</li>
</ul>

<h3>기술 중심 요약</h3>
<ul>
  <li>React 기반 SPA, Netlify CI/CD, 브랜치 전략(main/develop/feature/*)</li>
  <li>재사용 가능한 카드/네브바 컴포넌트 분리, 상태 최소 공유</li>
  <li>필터 → 오프셋 페이징(5개 단위) 구현, API 통신 에러/로딩 표준화</li>
  <li>PWA 준비(알림·오프라인 캐시 설계 초안)</li>
  <li>외부 API: 네이버/카카오 장소검색·길찾기 연동 스펙 정의</li>
  <li>Secrets 관리/배포 이슈 해결(CRA 환경변수, 빌드 파이프라인 정리)</li>
</ul>

<h3>검증/데이터 전략</h3>
<ul>
  <li>초반 수동 큐레이션 → 로그 기반 추천 규칙 고도화</li>
  <li>리뷰 신뢰도 필터(출처·중복·신뢰 점수) 로드맵</li>
  <li>가설: “퇴근 전 2시간·우천 시 수요 급증” 시간대별 특가 실험</li>
</ul>

<h3>역할/기여</h3>
<ul>
  <li>FE 리드: 핵심 사용자 동선 설계·컴포넌트화·배포 파이프라인 구축</li>
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
    image: '/src/assets/images/projectsImage/NowSale.png',
    demoUrl: '#',
    githubUrl: 'https://github.com/gun587330/NowSale_frontend'
  },
  
  'task-management': {
    title: 'Task Management App',
    description: 'Vue.js와 Firebase를 사용한 실시간 협업 태스크 관리 애플리케이션입니다.',
    duration: '2023년 7월 ~ 2023년 9월 (3개월)',
    tech: ['Vue.js 3', 'Composition API', 'Firebase', 'Firestore', 'Vuex', 'Vuetify', 'Vue Router', 'Vue Draggable'],
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
    duration: '2023년 10월 ~ 2024년 1월 (4개월)',
    tech: ['React', 'TypeScript', 'D3.js', 'Chart.js', 'Recharts', 'Socket.io', 'Styled Components', 'Webpack'],
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