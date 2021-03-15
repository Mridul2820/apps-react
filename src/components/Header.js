import React from 'react'

const Header = ({ projects }) => {
    return (
        <div className="section-title">
            <div className="section-title-center">
                <div className="title-image img-left">
                    <img src="./assets/react-art.svg" alt="react"/>
                </div>
                <div className="title-main">
                    <h1 className="title">React Apps</h1>
                    <div className="underline"></div>
                    <h5 className="project-number">Total Projects : {projects.length}</h5>
                </div>
                <div className="title-image img-right">
                    <img src="./assets/image-section-art.svg" alt="image-section"/>
                </div>
            </div>
        </div>
    )
}

export default Header
