import React from 'react'
import {Link} from 'react-router-dom'
import './resume.css'

const Resume = () => {

    return (
        <div className="resume-container">
            <div className="columnOne">
                <h1>Jessie James
                    <span className="mobile-span">FullStack Web Developer</span>
                    <Link to='/octoberresume.pdf' className="mobile-span print" target="_blank">Click Here to Print Resume</Link>
                </h1>
                <div className="columnOne-sections">
                    <h2 className="resume-header"> WEB DEVELOPLENT WORK</h2>
                        <p>~see Portfolio~</p>
                        <h2 className="resume-header"> PROFESSIONAL EXPERIENCE</h2>
                        <div className="work-experiance-section">
                            <h3 className="company-title">TELOS U, LLC Orem, UT <span>[02- 2017—07 -2019]</span></h3>
                            <h5 className="job-title">Team Lead <span>[02-2018 - 07-2019]</span></h5>
                            <ul className="skills-list">
                                <li>Oversaw two separate teams and trained various 40+ employees for each role  while at Telos as well as oversaw analytics and student reporting.</li>
                                <li>Cultivated proactive ownership and team oriented culture through bi-weekly supervisor meetings with staff to set specific goals </li>
                                <li> Developed new data driven student progress guidelines as well as created and implemented new company wide new systems with Google Blueprints and Trello included: personal technology agreement protocols, customized staff training platforms, building safety and maintenance plans.</li>
                            </ul>
                            <h5 className="job-title">Tech Committee Chair<span> [05-2017 - 07 - 2019]</span></h5>
                            <ul className="skills-list">
                                <li>Assessed and presented various software platforms to the company board for phone and other applications options.</li>
                                <li>Work with the Director of Discovery Space Center to create a new system for monitoring client communication. </li>
                            </ul>
                            <h5 className="job-title">Campus Supervisor/ Residential Advisor<span>[02-2017 - 02-2018]</span></h5>
                             <ul className="skills-list">
                                <li>Received Campus Supervisor of the Year Award</li>
                                <li>Oversaw activity planning as the Activities Committee Chairmen.</li>
                            </ul>
                        </div>
                        <div className="work-experiance-section">
                            <h3 className="company-title">PROVO CANYON SCHOOL, Springville, UT<span>[05-2016 — 02-2017]</span></h3>
                            <h5 className="job-title">Unit  Lead<span>[11-2016 - 02-2017] </span></h5>
                            <ul className="skills-list">
                                <li>Oversaw the Stabilization Unit  including 3  staff  and 16 students</li>
                            </ul>
                            <h5 className="job-title">Residential Assistant<span>[05-2016 - 11 - 2016]</span></h5>
                            <ul className="skills-list">
                                <li>Maintained a structured  therapeutic environment and front line support  for 8-16 at Risk Youth at a time</li>
                            </ul>  
                    </div>
                </div>
            </div>
        <div className="columnTwo">
            <div className="columnTwo-sections">
                <h3 className="resume-header"> CONTACT: </h3>
                <ul className="column-two-list">
                    <li># 801-718-4984</li>
                    <li>jess.mae.james@gmail.com</li>
                    <li>Portfolio: jessie_mae.surge.sh</li>
                    <li>Github:  jessie-james</li>
                    <li>LinkedIn: jessie--james</li>         
                </ul>
            </div>
            <div className="columnTwo-sections">
                <h3 className="resume-header"> SOFT SKILLS: </h3>
                <ul>
                    <li className="column-two-list">Verbal and written communication</li>
                    <li className="column-two-list"> Mediation and Collaboration Self Management </li>
                    <li className="column-two-list">Organization</li>
                    <li className="column-two-list">Mentoring</li>
                    <li className="column-two-list">Constructive Feedback</li>
                 </ul>
            </div>
            <div className="columnTwo-sections">
                <h3 className="resume-header"> EDUCATION: </h3>
                <ul className="bold-skill" >V School<span>Salt Lake City, UT </span> 
                    <li className="column-two-list">Full Stack JavaScript Development, 2019</li>
                </ul>
                <ul className="bold-skill" >Brigham Young University <span>Provo, UT</span> 
                    <li className="column-two-list">BA,  History, 2016</li>
                </ul>  
            </div>
          
        </div>
    </div>
       

    )
}
export default Resume