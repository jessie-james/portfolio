import React from 'react'
import {Link} from 'react-router-dom'
import Xchange from '../xchange/body/Xchangeapp'
const ProjectPage = () => {
  

    return (<div className="project-page-container">
        <div className="projectInfo">
            <h1 className="port-body brief">Brief</h1>
            <p className="brief-p-tag">Exchange rates are used everyday But how much do you actually understand about the rate. Do you know if the Exchange rate is good or bad? High or Low?A currency is classified as Strong when it is worth more than another country’s currency. </p>
            <ul className="list">
                <li className="item">
                    <h3>Built With:</h3>
                    <p>JavaScript</p>
                    <p>React</p>
                    <p>Axios</p>
                    <p>CSS</p>
                    
                </li>
                <li className="item">
                    <h3>Comming Soon:</h3>
                    <p>I will be adding a server and database using MongoDB, Express and Mongoose. This data base will house currancy codes, exchange rates country flags and bread prices for all the currancies that are currently acessable on this app. Through that database I will build out the cost of living factor pages.</p>
                </li>
            </ul>
            <h2 className="list tryMe">Try Me Out</h2>
            <i className="fa fa-arrow-down tryMe"></i>
            <div className="play-with-it">
                <Xchange />
            </div>
        </div>
    </div>)
}
export default ProjectPage