import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
    return (<div className='port-nav-bar'>
        <h1>JM</h1>
        <ul className='nav-list'>
            <Link className='port-nav-link'to='/' className='port-nav'>Home</Link>
            <Link className='port-nav-link' to='/Portfolio' className=' port-nav'>Portfolio</Link>
            {/* <Link className='port-nav-link' to='/Contact' className=' port-nav'>Contact</Link> */}
        </ul>
    </div>)
}
export default Nav
