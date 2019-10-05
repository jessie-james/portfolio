import React from 'react'
import {Link} from "react-router-dom"
const MoodBrief = () => {
    return (
        <div className="project-brief-container ">
            <h3>Mood Tracker</h3>
            <p>built for Mobile</p>
            <p>Problem: Residential Treament Centers (RTCs) need a better way for Therapist to know the daily mood changes of their clients. Solution: a custom mood tracker where the therapist can tailor mood Jornailing questions to  the specific client with out causeing a diagnostic bias. This App is built  using UX/UI best practice of user testing/ cardsorting and user facing feature feedback</p>
            <a href="https://rtc-mood-tracker.herokuapp.com/">See the Application</a>
            <Link to='/moodtracker'>See the Case Study</Link>
        </div>
    )
}
export default MoodBrief