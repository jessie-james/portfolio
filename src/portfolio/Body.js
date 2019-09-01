import React from 'react'
import HomeName from './HomeName.js'
import ProjectContainer from './ProjectsContainer'
import Resume from './Resume'
import About from './About.js'
// import Xchange from'../xchange/body/Xchangeapp.js'
const Body = () => {
    return (
        <div className="port-body">
        <HomeName />
        <About />
        <Resume/ >
    </div>)
}
export default Body