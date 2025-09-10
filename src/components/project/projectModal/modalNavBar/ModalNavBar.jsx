import React from 'react'
import './ModalNavBar.css'

function ModalNavBar({ project, onClose, closeRef }) {
  return (
    <div className="modal-navbar">
      <div className="modal-icon">
        <i className={project.image}></i>
      </div>

      <div className="modal-title">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>

      <div className='modal-close-wrapper'>
      <button className="modal-close" ref={closeRef} onClick={onClose}>
        <i className="fas fa-times"></i>
      </button>
      </div>
    </div>
  )
}

export default ModalNavBar