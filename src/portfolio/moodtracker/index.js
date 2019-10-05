import React from 'react'
import loginimg from "./loginsignup.jpg"
import therapistDashimg from './therapistDash.jpg'
import clientDash from './clientDash.png'
import clientResults from './clientResultsClose.jpg'
import "./moodCase.css"

const Moodtracker = () => {

    return (<div className="project-page-container">
        <div className="projectInfo">
            <h1 className="port-body brief">Mood Tracker</h1>
            <h2 className="tryMe"><a href="https://rtc-mood-tracker.herokuapp.com/">Try It Out</a></h2>
            <ul className="list">
                <li className="item">
                    <h3>Built With:</h3>
                    <p>JavaScript</p>
                    <p>React</p>
                    <p>MongoDB</p>
                    <p>Express</p>
                    <p>CSS</p>

                </li>
                <li className="item">
                    <h3>Comming Soon:</h3>
                    <p>I will be buidling out the Client side  next where the therapist will be able to send the custom mood survey to the client. The client will be able to access this survey and both the client and therapist will have acess to the results. </p>
                </li>
            </ul>
            <h2 className="list tryMe">UX/UI user flow cards</h2>
            <div className="case-imgs">
                <img src={loginimg} alt="loginimg" className="case-img"/>
                <img src={clientDash} alt="clientDashimg" className="case-img" />
                <img src={clientResults} alt="clientResults" className="case-img"/>
                <img src={therapistDashimg} alt="therapistDashimg" className="case-img"/>

            </div>
        </div>
    </div>)
}
export default Moodtracker