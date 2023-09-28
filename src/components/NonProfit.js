import React from 'react'
import SecondaryBth from './SecondaryBth'

const NonProfit = () => {
  return (
    <div className="container">
        <div className="nonprofit">
            <div className="sec-head">
                <h3 className="roco-font">75% OFF FOR NONPROFITS</h3>
                <p>Your impact is important. Cad it solutions is excited to support nonprofit<br/> organizations with specialized plan pricing. Keep work simple, making an impact.</p>
            </div>
            <div className="green-btn">
                <SecondaryBth titleTwo="Contact Us"/>
            </div>
        </div>
    </div>
  )
}

export default NonProfit
