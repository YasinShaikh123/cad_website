import React from 'react'

const StepThree = () => {
  return (
    <div style={{position:'relative'}}>
        <h3>How Many Employees Do You Have?</h3>
        <div className="select-btn">
            <button>1-4</button>
            <button>5-9</button>
            <button>10-49</button>
            <button>50-99</button>
            <button>Larger</button>
        </div>
    </div>
  )
}

export default StepThree
