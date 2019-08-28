import React from 'react'
import {Link} from 'react-router-dom'
import Xchange from '../xchange/body/Xchangeapp'
const ProjectPage = () => {
    const projectInfo = {
        'display': 'flex',
        'flexDirection': 'column',
        'textAlign': 'center',
    }
    const brief = {
        'fontSize': '30pt',
        'margin': '20px',
        
        
    }
    const list = {
        'display': 'flex',
        'justifyContent': 'space-between',
        'listStyle': 'none',
        
    }
    const item = {
        'width': '40%',
        
    }
    const portButton = {
        'color': 'blue',
        'textAlign': 'end',
        'fontSize': '15pt',
        'margin':'20px',
    }

    return (<div className="project-page-container">
        <div style={projectInfo}>
            <h1 style={brief}>Brief</h1>
            <p>Why i made this app. what this app does and who it can helpp what did i learn and what will i still work to Chnage</p>
            <ul style={list}>
                <li style={item}>
                    <h3>Skills</h3>
                    <p>all the things i used will go here</p>
                    <p>all the things i used will go here</p>
                    <p>all the things i used will go here</p>
                </li>
                <li style={item}>
                    <h3>My role</h3>
                    <p>all the things that I did if it was a group because my role aal cool and then pull in some things off my resume to make me look like an awsome Bad Ass</p>
                </li>
            </ul>
            <h2>Try Me Out</h2>
            <div>\/</div>
            <div className="play-with -it">
                <Xchange />
            </div>
            <Link to='/Portfolio'style={portButton}>Profolio</Link>
        </div>
    </div>)
}
export default ProjectPage