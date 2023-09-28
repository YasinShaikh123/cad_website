import React from 'react'

const StepOne = () => {
  return (
    <div style={{position:'relative'}} >
      <div className="next-step">
            <p>Step 1 Of 3</p> 
        </div>
        <h2>Hi, Jaliya</h2>
        <h3>How Did You Get To Know About Us?</h3>
        <div className="select-btn">
            <button>Email Marketing</button>
            <button>Social Media(Platform)</button>
            <button>Referral</button>
            <button>Advertisement</button>
            <button>Website</button>
            <button>Other</button>
        </div>
    </div>
  )
}

export default StepOne
