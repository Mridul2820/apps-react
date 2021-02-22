import React from 'react'
import uuid from 'react-uuid'
import Project from '../Project/Project'
import './ProjectGrid.scss'

const ProjectGrid = ({ projects, setSelectedimg  }) => {
    return (
        <div className="project-grid" >
            {projects.map(project => (
                <Project key={uuid()} project={project} setSelectedimg={setSelectedimg} />
            ))}
        </div>
    )
}

export default ProjectGrid
