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
