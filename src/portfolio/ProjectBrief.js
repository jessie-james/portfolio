import React from 'react'
import { Link } from 'react-router-dom'
const ProjectBrief = () => {
    return (
        <div className="project-brief-container">
            <h3>Strong Xchange</h3>
            <p> A currency conversion website that allows the user to see: 1) Rate of
conversion 2. Converted currency amount 3. Strength of one currency
compared to another. Strong X change used the Fixer.io database.</p>
            <Link to='/Xchange/home' className='nav-list-item port-nav'>See More</Link>
        </div>
    )
}
export default ProjectBrief