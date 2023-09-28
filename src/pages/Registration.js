import React from 'react'
import GoogleIcon from '../assets/image/google-Icons.png'
import Microsoft from '../assets/image/microsoft.png'
import { Link } from 'react-router-dom'

const Registration = () => {
  return (
    <div className="registration">
        <div className="container">
            <div className="rigester-box">
                <div className="get-start">
                    <h2>Get Started</h2>
                    <h3>"Welcome to <span>'CAD IT Solutions”</span></h3>
                    <p>Get started, it is free for 14 days. No credit card required.</p>
                </div>
                <div className="input-box">
                    <div>
                        <a href="#">
                        <img src={GoogleIcon}/>
                            sign up with google
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src={Microsoft}/>
                            sign up with microsoft
                        </a>
                    </div>
                </div>
                <div className="next">
                    <hr></hr>
                    <h2>OR</h2>
                </div>
                <div className="sign-up">
                    <input type="text" placeholder="" />
                    <Link to="/registrationtwo">Sign Up</Link>
                </div>
                <div className="check">
                    <input type="checkbox" />
                    <p>I accept the <a href="privacy-policy">privacy policy</a> and <a href="term-condition">terms & conditions</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Registration
