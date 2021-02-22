import React from 'react'
import './Modal.scss'

const Modal = ({ selectedImg, setSelectedimg }) => {
    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')) {
            setSelectedimg(null)
        }
    }

    return (
        <div className="backdrop" onClick={handleClick} >
            <img src={selectedImg} alt="modal pic"/>
        </div>
    )
}

export default Modal
