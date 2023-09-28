import React from 'react'
import BrandGoole from '../assets/image/brand-google.png'
import OutLook from '../assets/image/outlook.png'
import { Link } from 'react-router-dom'

const RegistrationTwo = () => {
  return (
    <div className="registration">
        <div className="container">
            <div className="rigester-box">
                <div className="get-start">
                    <h2>Please verify your email</h2>
                    <p>Once You Verify Your Email Address , You And Your Team Can Get Started</p>
                </div>
                <div className="open-box row">
                    <div className="col-md-6">
                        <Link to="/signin">
                            <img src={BrandGoole} style={{marginRight:'10px'}}/>
                            Open Gmail
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <Link to="/signin">
                            <img src={OutLook} style={{marginRight:'10px'}} />
                            Open Outlook
                        </Link>
                    </div>
                </div>
                <div className="check text-center" style={{justifyContent:'center'}}>
                    <p>Didn’t Received An Email ? <a href="term-condition">Resend Email</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RegistrationTwo
