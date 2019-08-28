import React from 'react'
import ProjectBrief from './ProjectBrief'
import ProjectImg from './ProjectImg'
const ProjectsContainer = () => {
    return (
        <div className="project-container port-body">
            <div className="project">
                <ProjectBrief/>
                <ProjectImg />
            </div>
            <div className="project">
                <ProjectBrief />
                <ProjectImg />
            </div>
            <div className="project">
                <ProjectBrief />
                <ProjectImg />
            </div>
            <div className="project">
                <ProjectBrief />
                <ProjectImg />
            </div>
            <div className="project">
                <ProjectBrief />
                <ProjectImg />
            </div>
        </div>
    )
}
export default ProjectsContainer