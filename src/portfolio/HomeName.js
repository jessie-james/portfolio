import React from 'react'
import { Link } from 'react-router-dom'
import jesspng from '../imgs/jessgrafic..png'
const HomeName = () => {
    return (
        <div className="home-name-container">
            <div className="home-about-port">
                <div className="home-text">
                    <h1>Hi, Its Jess,</h1>
                    <h3>I am a Full-Stack Web Devloper with an eye for UX/UI applications</h3>
                </div>
                <div className="home-graphic-container">
                    <img src={jesspng} alt="jesspng" className="home-graphic"/>
                </div>
            </div>
            <div className="view-work-button nav-list ">
                <Link to='/Portfolio' className='port-nav-link'>View Work</Link>
            </div>
           
        </div>
    )
}
export default HomeName
