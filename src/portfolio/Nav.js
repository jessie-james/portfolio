import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
    return (<div className='port-nav-bar'>
        <h1>JM logo</h1>
        <ul className='nav-list'>
            <Link to='/' className='nav-list-item'>About</Link>
            <Link to='/Portfolio' className='nav-list-item'>Profolio</Link>
            <Link to='/Contact'className='nav-list-item'>Contact</Link>
        </ul>
    </div>)
}
export default Nav
