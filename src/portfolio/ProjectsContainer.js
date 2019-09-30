import React from 'react'
import XchangeBrief from './Projects/XchangeBrief'
import DddbBrief from './Projects/DddbBrief'
import DddbImg from './Projects/Dddbimg'
import XchangeImg from './Projects/Xchangeimg'
import MoodBrief from './Projects/MoodBrief'
import Moodimg from './Projects/Moodimg'
const ProjectsContainer = () => {
    return (
        <div className="project-container port-body">
            <div className="project">
                <XchangeBrief/>
                <XchangeImg />
            </div>
            <div className="project">
                <DddbBrief />
                <DddbImg />
            </div>
            <div className="project">
                <MoodBrief />
                <Moodimg />
            </div>
        </div>
    )
}
export default ProjectsContainer