import React from 'react'
import './Project.scss'

const Project = ({ project }) => {
    return (
        <div className="project">
            <div className="project-top">
                <h1 className="project-title" >{project.name}</h1>
                <a target='_blank' href={project.repo} className="project-repo">
                    <img src="./assets/github.svg" alt={project.name}/>
                </a>
            </div>
            <div className="project-image">
                <img src={`./image/${project.image}.png`} alt={project.name} />
            </div>
            <div className="deploy">
                <a target='_blank' href={project.deploy.netlify} >Netlify</a>
                <a target='_blank'  href={project.deploy.vercel} >Vercel</a>
            </div>
        </div>
    )
}

export default Project
