import React from 'react'
import './Project.scss'

const Project = ({ project, setSelectedModal }) => {

    const modalUrl = `./image/${project.image}.png`
    // const modalUrl = project.deploy.netlify

    return (
        <div className="project">
            <h1 className="project-title" >{project.name}</h1>

            <div className="project-image">
                <img 
                    src={`./image/${project.image}.png`} 
                    alt={project.name} 
                    onClick={() => {
                        setSelectedModal(modalUrl)
                    }}
                />


            </div>

            <div className="project-repo">
                <a target='_blank' href={project.repo} className="repo">
                    <img src="./assets/github.svg" alt={project.name}/>
                    <p>Github</p>
                </a>
            </div>


            <div className="deploy">
                <a target='_blank' href={project.deploy.netlify} >Netlify</a>
                <a target='_blank' href={project.deploy.vercel} >Vercel</a>
            </div>
        </div>
    )
}

export default Project
