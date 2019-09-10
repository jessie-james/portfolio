import React from 'react'
import {Link} from 'react-router-dom'
import Xchange from '../xchange/body/Xchangeapp'
const ProjectPage = () => {
  

    return (<div className="project-page-container">
        <div className="projectInfo">
            <h1 className="port-body brief">Brief</h1>
            <p>Why i made this app. what this app does and who it can helpp what did i learn and what will i still work to Chnage</p>
            <ul className="list">
                <li className="item">
                    <h3>Skills</h3>
                    <p>all the things i used will go here</p>
                    <p>all the things i used will go here</p>
                    <p>all the things i used will go here</p>
                </li>
                <li className="item">
                    <h3>My role</h3>
                    <p>all the things that I did if it was a group because my role aal cool and then pull in some things off my resume to make me look like an awsome Bad Ass</p>
                </li>
            </ul>
            <h2 className="list">Try Me Out</h2>
            <div>\/</div>
            <div className="play-with-it">
                <Xchange />
            </div>
        </div>
    </div>)
}
export default ProjectPage