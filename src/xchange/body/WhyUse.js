import React from 'react'

const WhyUse = () => {
    return ( 
        <div className="article" >
            <h2>How to Use</h2>
            <p>
                Exchange rates are used everyday But how much do you actually understand about the rate. Do you know if the Exchange rate is good or bad? High or Low? 
            </p>
            <p>
                Our site is designed to provided fast and simple answers.
                Our Strong vs Weak Currency Code  is the key. If you see Dark Green the currency is considered <span className="dark-green">Very Strong</span> in comparison to the oposing currency. Light Green is still <span className="green">Strong</span> 
                but won't affect you much unless you will be exchaning alot of money. Yellow means that the rate is about <span className ="yellow">Equal</span>. Orange indicates know your that it is becoming a <span className ="orange">Weaker</span> currency
                but again little affect. Lastly, Red  should make you aware that currency is <span className = 'red'>Very Weak</span> and you will lose out in the exchange.
            </p>
        </div>
    )
}
export default WhyUse