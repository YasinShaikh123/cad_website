import React from 'react'
import SecondaryBth from './SecondaryBth'

const HomeBanner = () => {
  return (
    <div className="main-banner">
        <div className="container">
            <div className="row">
                <div className="banner-content">
                    <h2 className="roco-font">Big Data Will Come Up<br />
                        With A  Solution</h2>
                    <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of<br /> letters, as normal distribution of letters.</p>
                    <div className="green-btn">
                        <SecondaryBth path='/registration' titleTwo="Sign Up"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeBanner
