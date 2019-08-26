import React from 'react'
import Xchange from'../xchange/body/Xchangeapp.js'
const Body = () => {
    return (<div>
        <h1>Body/Name</h1>
        <ul>
            <li>links</li>
            <li>about me</li>
            <li>projects
                <Xchange/>
            </li>
            <li>experiance</li>
            <li>skills</li>
            
        </ul>
    </div>)
}
export default Body