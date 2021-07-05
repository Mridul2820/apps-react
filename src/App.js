import { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import GlobalStyle from './GlobalStyle'

// Pages 
import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Projects'

// import Header from './components/Header'
// import ProjectGrid from './components/ProjectGrid'
// import Modal from './components/Modal'
// import data from './data.json'
// import './styles/app.scss'

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Navbar />
            <Switch>
                <Route 
                    path="/" 
                    component={Home} 
                    exact 
                />
                <Route 
                    path="/about" 
                    component={About} 
                />
                <Route 
                    path="/projects" 
                    component={Projects} 
                />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default App
