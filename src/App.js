import React from 'react'
import Nav from './portfolio/Nav'
import Body from './portfolio/Body'
import ProjectsContainer from './portfolio/ProjectsContainer'
import ProjectPage from './portfolio/ProjectPage'
import Moodtracker from './portfolio/moodtracker'
import {Switch, Route} from 'react-router-dom'

import Footer from './portfolio/Footer'
import './styles.css'

const App = () => {
    return (
        <div className="main-app-container">
            <Nav />
            <Switch>
                <Route exact path='/' component={Body} />
                <Route path='/Portfolio' component={ProjectsContainer} />
                <Route path='/Xchange' component={ProjectPage} />
                <Route path='/moodtracker' component={Moodtracker} />
                {/* <Route Path="/Moodtracker" component={MoodProject}/> */}
                {/* <Route path='/Contact' component ={Contact}/> */}
            </Switch>
            <Footer/>
        </div>
    )
}
export default App