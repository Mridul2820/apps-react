import { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import ProjectGrid from './components/ProjectGrid'
import Modal from './components/Modal'
import data from './data.json'
import './styles/app.scss'

const App = () => {
    const [selectedModal, setSelectedModal] = useState(null)

    return (
        <div className="container">
            <Navbar />
            <Header projects={data} />

            <ProjectGrid projects={data} setSelectedModal={setSelectedModal} />
            
            { selectedModal && <Modal selectedModal={selectedModal} setSelectedModal={setSelectedModal} />}

            {
                selectedModal ? document.body.classList.add('modal-open') : document.body.classList.remove('modal-open')
            }
        </div>
    )
}

export default App
