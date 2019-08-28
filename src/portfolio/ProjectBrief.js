import React from 'react'
import { Link } from 'react-router-dom'
const ProjectBrief = () => {
    return (
        <div className="project-brief-container">
            <h3>Strong Xchange</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eius sapiente, quaerat modi assumenda sed quod velit veritatis dicta eligendi? Eligendi doloremque mollitia et, atque necessitatibus quod doloribus iure numquam.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, cupiditate cumque saepe amet mollitia odio incidunt accusamus recusandae, in molestias perspiciatis repudiandae nam id! Cumque beatae culpa quos impedit sapiente?</p>
            <Link to='/Xchange/home' className='nav-list-item'>See More</Link>

        </div>
    )
}
export default ProjectBrief