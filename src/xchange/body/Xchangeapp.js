import React from 'react'
import Header from './head-foot/Header.js'
import Home from './Home.js'
import About from './About.js'
import SavedList from './SavedList.js'
import Footer from './head-foot/Footer'
import { Switch, Route } from 'react-router-dom'
import GlobalProvider from './GlobalProvider'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import './xchange.css'


import { withGlobal } from './GlobalProvider'


const Xchangeapp = () => {
    return (
        <GlobalProvider>
    <div className="app-container">
        <Header />
        <Switch>
            <Route exact path='/xchange/home' component={Home} />
            <Route path='/xchange/about' component={About} />
            <Route path='/xchange/list' component={SavedList}/>
        </Switch>
        <Footer />
            </div>
        </GlobalProvider>
    )
}
export default withGlobal(Xchangeapp)