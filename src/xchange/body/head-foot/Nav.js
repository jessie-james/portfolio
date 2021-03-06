import React from 'react'
import { Link } from 'react-router-dom'
import {withGlobal} from '../../body/GlobalProvider'

const Nav = (props) => {
    console.log(props.badgeNum)
    return (
        <ul className="nav-bar badge" >
            <Link to='/xchange/home'className="linking">Home</Link>
            <Link to='/xchange/about' className="linking">How To Use</Link>
            <Link to='/xchange/list' className="linking">Saved rates
            <div className={props.isViewed ? 'badge' : "saved-it-false"} data-badge={props.badgeNum}></div>
            </Link>
        </ul>
    )
}
export default withGlobal(Nav)

