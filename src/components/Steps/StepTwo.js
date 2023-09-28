import React from 'react'

const StepTwo = () => {
  return (
    <div style={{position:'relative'}}>
      <div className="next-step">
            <p>Step 2 Of 3</p> 
        </div>
        <h3>What's Your Primary Role?</h3>
        <div className="select-btn">
            <button>Finance</button>
            <button>Director</button>
            <button>HR</button>
            <button>IT</button>
        </div>
    </div>
  )
}

export default StepTwo
