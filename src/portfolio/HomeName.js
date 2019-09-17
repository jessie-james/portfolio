import React from 'react'
import { Link } from 'react-router-dom'
import jesspng from '../imgs/jessgrafic..png'
const HomeName = () => {
    return (
        <div className="home-name-container">
            <div className="home-text">
                <h1>Hi, Its Jess,</h1>
                <h3>I am a Full Stack Web devloper wiht a UX UI mindset blah bal bah  its me...</h3>
                <div className="view-work-button">
                    <Link to='/Portfolio' className='nav-list-item port-nav'>View Work</Link>
                </div>
            </div>
            <div className="home-graphic-container">
                <img src={jesspng} alt="jesspng" className="home-graphic"/>
            </div>
           
        </div>
    )
}
export default HomeName
