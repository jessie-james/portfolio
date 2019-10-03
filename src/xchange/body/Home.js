import React from 'react'
import CurrencyForm from './CurrencyForm'
import Results from './Results'
import StrongDollarScale from './head-foot/StrongDollarScale'


const Home =()=>{
        return (
            <div className="home">
                <h3>This is a cool app to find out the strength and rate of a currency exchange</h3>
                <h4>
                    <StrongDollarScale /></h4>
                <CurrencyForm />
                <Results />
            </div>
        )
    }
export default Home