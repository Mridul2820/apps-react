import React from 'react'
import './Navbar.scss'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="nav-center">
                <div className="navbar--logo">
                    <img src="./assets/favicon.png" alt="logo mridul"/>
                    <h2>ridul</h2>
                </div>
                <div className="navbar--social">
                    <a target="_blank" href="https://github.com/Mridul2820">
                        <img src="./assets/github.svg" alt="Github Mridul"/>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/i_mridul/">
                        <img src="./assets/instagram.svg" alt="Instagram Mridul"/>
                    </a>
                    <a target="_blank" href="https://twitter.com/i_mridul">
                        <img src="./assets/twitter.svg" alt="Twitter Mridul"/>
                    </a>
                </div>                
            </div>
        </div>
    )
}

export default Navbar
