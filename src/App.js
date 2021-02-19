import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import data from './data.json'
import './App.scss'

console.log(data)

const App = () => {
    return (
        <div className="container">
            <Navbar />
            <Header />
        </div>
    )
}

export default App
