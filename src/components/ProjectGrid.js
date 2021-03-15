import React from 'react'
import uuid from 'react-uuid'
import Project from './Project'

const ProjectGrid = ({ projects, setSelectedModal  }) => {
    return (
        <div className="project-grid" >
            {projects.map(project => (
                <Project key={uuid()} project={project} setSelectedModal={setSelectedModal} />
            ))}
        </div>
    )
}

export default ProjectGrid
