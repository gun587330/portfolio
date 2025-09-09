import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ProjectModal from './components/ProjectModal.jsx'

function App() {
  const [modalState, setModalState] = useState({ isOpen: false, projectId: null, cardPosition: null })

  const openModal = async (projectId, cardPositionTmp) => {
    console.log("=== OPEN MODAL DEBUG ===")
    console.log("Project ID:", projectId)
    console.log("Card Position:", cardPositionTmp)
    console.log("Card Left:", cardPositionTmp.left)
    console.log("Card Top:", cardPositionTmp.top)
    console.log("Card Width:", cardPositionTmp.width)
    console.log("Card Height:", cardPositionTmp.height)
    
    // 먼저 cardPosition 설정
    setModalState(prev => ({ ...prev, cardPosition: cardPositionTmp }))
    
    // cardPosition이 설정될 때까지 대기
    await new Promise(resolve => setTimeout(resolve, 0))
    
    // 그 다음 isOpen과 projectId 설정
    setModalState(prev => ({ ...prev, isOpen: true, projectId }))
  }

  const closeModal = () => {
    setModalState({ isOpen: false, projectId: null, cardPosition: null })
  }
//  console.log("2",modalState.cardPosition ? modalState.cardPosition.left : "Null")

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects onProjectClick={openModal} />
        <Contact />
      </main>
      <Footer />
      
      {modalState.isOpen && modalState.cardPosition && (
        <ProjectModal 
          projectId={modalState.projectId}
          cardPosition={modalState.cardPosition}
          onClose={closeModal} 
        />
      )}
    </>
  )
}

export default App 