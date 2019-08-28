import React from 'react'

const Resume = () => {
    return (
        <div className="resume-container">
            <div className="columnOne">
            <h1>Jessie James</h1><h3>FullStack Web Developer</h3>

            <div className="columnOne-sections">
                <h3 className="resume-header"> WEB DEVELOPMENT WORK:</h3>

            <div className="web-dev-section">
                <h3 className="prj-title">A PROJECT-</h3><p className="project-link"> a project link url</p>
                <ul className="skills-list">
                    <li>A database with all CRUD request to input and store data. </li>
                </ul>
                <p className="built-with">Built with: JavaScript, React, Node.js, Axios, MongoDB, Express, Mongoose, HTML, CSS</p>
            </div>

            <div className="web-dev-section">
                <h3 className="prj-title">ANOTHER PROJECT -</h3> <p className="project-link"> a project link url</p>
                <ul className="skills-list">
                    <li>A database with all CRUD request to input and store data. I added token authentication and other functionality, enhanced responsiveness, expanded product offerings, etc.</li>
                </ul>
                <p className="built-with">Built with: JavaScript, React, Node.js, Axios, MongoDB, Express, Mongoose, HTML, CSS</p>
            </div>
                
            <div className="web-dev-section">
                <h3 className="prj-title">ANOTHER PROJECT -</h3> <p className="project-link"> a project link url</p>
                <ul className="skills-list">
                    <li>A database with all CRUD request to input and store data. I added token authentication and other functionality, enhanced responsiveness, expanded product offerings, etc.</li>
                </ul>
                <p className="built-with">Built with: JavaScript, React, Node.js, Axios, MongoDB, Express, Mongoose, HTML, CSS</p>
            </div>
            </div>

            <div className="columnOne-sections">
                
            <h3 className="resume-header"> PROFESSIONAL EXPERIENCE</h3>
            <div className="work-experiance-section">
                    <h2 className="company-title">TELOS U, LLC <span>Orem, UT [02- 2017—07 -2019]</span></h2>
                    <h5 className="job-title">Team Lead <span>[02-2018 - 07-2019]</span></h5>
                    <ul className="skills-list">
                        <li>Oversaw two separate teams and trained various  number employees for each role at Telos as well as oversaw analytics and student reporting.</li>
                        <li>Ran weekly treatment meetings for students.</li>
                        <li>Cultivated proactive ownership and team oriented culture through bi-weekly supervisor meetings with staff to set specific goals </li>
                        <li>Created and implemented company wide processes and developed new systems with Google Blueprints and Trello included: personal technology agreement protocols, student progress report guidelines, customized staff training platforms, building safety and maintenance plans.</li>
                    </ul>
                    <h5 className="job-title">Tech Committee Chair<span> [05-2017 - 07 - 2019]</span></h5>
                    <ul className="skills-list">
                        <li>Assessed and presented various software platforms to the company board for phone and other applications options.</li>
                        <li>Work with our Director of Discovery Space Center to create a new system for monitoring client communication. </li>
                        <li>Oversaw MMGuardian phone management software as well as managed and maintained Verizon account.</li>
                    </ul>
                    <h5 className="job-title">Campus Supervisor/ Residential Advisor<span>[02-2017 - 02-2018]</span></h5>
                    <ul className="skills-list">
                        <li>Received Campus Supervisor of the Year Award</li>
                        <li>Developed new data driven student progress guidelines and templates with 3 team members used Google DataStudio, Sheets, and Trello which became company wide standard. </li>
                        <li>Oversaw activity planning as the Activities Committee Chairmen.</li>
                    </ul>
            </div>
            <div className="work-experiance-section">
                    <h2 className="company-title">Provo Canyon School, Inc.<span>Springville, UT[05-2016—02-2017]</span></h2>
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
                <li>Portfolio: link</li>
                <li>Github:  jessie-james</li>
                <li>LinkedIn: jessie--james</li>
            </ul>
            </div>
            <div className="columnTwo-sections">

            <h3 className="resume-header"> HARD SKILLS: </h3>
            <ul className="bold-skill">Web Development:
                <li className="column-two-list">JavaScript, ES6, React, HTML,CSS, Node.js, Express, AJAX/HTTP, Mongoose, MongoDB,  JSON, Git, Wordpress</li>
            </ul>
            <ul className="bold-skill">Other:
                <li className="column-two-list">Google Blueprints Google DataStudioTrello </li>
            </ul>
            </div>
            <div className="columnTwo-sections">
            <h3 className="resume-header"> SOFT SKILLS: </h3>
            <ul>
                <li>Verbal and written communication</li>
                <li> Mediation and Collaboration Self Management </li>
                <li>Organization</li>
                <li>Mentoring</li>
                <li>Constructive Feedback</li>
            </ul>
            </div>

            <div className="columnTwo-sections">
                <h3 className="resume-header"> EDUCATION: </h3>
            <ul className="bold-skill" >V School<span>Salt Lake City, UT </span> 
                <li>Full Stack JavaScript Development, 2019</li>
            </ul>
            <ul className="bold-skill" >Brigham Young University <span>Provo, UT</span> 
                <li>BA,  History, 2016</li>
            </ul>  
            </div>
            <div className="columnTwo-sections">
                <h3 className="resume-header"> REFERENCES: </h3>
                <ul>
                    <li><span>Paul Taylor</span>, former Life skill Director at Telos U</li>
                    <li>Phone Number:</li>
                </ul>
                <ul>
                    <li><span>Scottie Wilson</span>, former manager/ Student Living Director at Telos U Head </li>
                    <li>Phone Number:</li>
                </ul> 
                <ul>
                    <li><span>Paul Taylor</span>, Executive Director at Telos U.</li>
                    <li>Phone Number: </li>
                </ul>
            </div>
        </div>
    </div>
       

    )
}
export default Resume