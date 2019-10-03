import React from 'react'
import StrongCurrency from './StrongCurrency'
import WhyUse from './WhyUse.js'
import ExchangeBestPractices from './ExchangeBestPractices'

const About = () => {
    return (
        <div className="body about">
            <WhyUse />
            <StrongCurrency />
            <ExchangeBestPractices/>
        </div>
    )
}
export default About