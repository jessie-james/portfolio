import React from 'react'
import GitHub from '../imgs/GitHub.png'
import LinkedIn from '../imgs/LinkedIn.png'
import Twitter from '../imgs/twitter.png'

const Footer =()=>{
    return (
        <div className="port-footer">
            <p className="special-font">Thanks for reading!</p>
            <p>Contact me via Email: jess.mae.james@gmail.com</p>
            <ul className='footer-link-container'>
                <a href="https://github.com/jessie-james"><img src={GitHub} alt="github" /></a>
                <a href="www.linkedin.com/in/jessie--james"><img src={LinkedIn} alt="linkedin"></img></a>
                <a href="https://twitter.com/Jessie_Ma3"> <img src={Twitter} alt="twitter"></img></a>
            </ul>
        </div>)
}
export default Footer