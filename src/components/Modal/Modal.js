import React from 'react'
import './Modal.scss'

const Modal = ({ selectedModal, setSelectedModal }) => {
    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')) {
            setSelectedModal(null)
        }
    }

    return (
        <div className="backdrop" onClick={handleClick} >
            {/* <iframe src={selectedModal}  frameborder="0" width="100%" height="100%"></iframe> */}
            <img src={selectedModal} alt="modal pic"/>
        </div>
    )
}

export default Modal
