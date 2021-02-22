import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import ProjectGrid from './components/ProjectGrid/ProjectGrid'
import Modal from './components/Modal/Modal'
import data from './data.json'
import './App.scss'

const App = () => {
    const [selectedImg, setSelectedimg] = useState(null)

    return (
        <div className="container">
            <Navbar />
            <Header />
            <ProjectGrid projects={data} setSelectedimg={setSelectedimg} />
            { selectedImg && <Modal selectedImg={selectedImg} setSelectedimg={setSelectedimg} />}
            {
                selectedImg ? document.body.classList.add('modal-open') : document.body.classList.remove('modal-open')
            }
        </div>
    )
}

export default App
