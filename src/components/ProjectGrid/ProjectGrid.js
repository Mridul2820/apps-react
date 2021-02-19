import React from 'react'
import Project from '../Project/Project'
import './ProjectGrid.scss'

const ProjectGrid = ({ projects }) => {
    return (
        <div className="project-grid" >
            {projects.map(project => (
                <Project key={project.id} project={project} />
            ))}
        </div>
    )
}

export default ProjectGrid
