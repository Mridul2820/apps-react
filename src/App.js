// import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import ProjectGrid from './components/ProjectGrid/ProjectGrid'
import data from './data.json'
import './App.scss'

const App = () => {
    // const [projects, setProjects] = useState([])

    // setProjects(data);

    return (
        <div className="container">
            <Navbar />
            <Header />
            <ProjectGrid projects={data} />
        </div>
    )
}

export default App
