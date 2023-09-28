import React from 'react'
import { Link } from 'react-router-dom'
import GoogleIcon from '../assets/image/google-Icons.png'
import Microsoft from '../assets/image/microsoft.png'
import SecondaryBth from '../components/SecondaryBth'


const Login = () => {
  return (
    <div className="registration">
        <div className="container">
            <div className="rigester-box login">
                <div className="get-start-login">
                    <h2>Log in</h2>
                    <p>Don’t Have An Account? <Link to="/registration"> Create An Account</Link></p>
                </div>
                <form>
                    <div className="form-group">
                        <label>Email Address</label><br/>
                        <input type="text" placeholder="reethik@gmail.com" />
                    </div>
                    <div className="form-group mb-0">
                        <label>Password</label><br/>
                        <input type="text" placeholder="*******" />
                    </div>
                    <div className='forget'>
                        <Link to="/ForgetPassword">Forgot Password</Link>
                    </div>
                    <div className="check">
                        <input type="checkbox" />
                        <p>keep me logged in</p>
                    </div>
                    <div className='sec-btns'>
                        <SecondaryBth titleTwo="Log In"/>
                    </div>
                </form>
                <div className="input-box">
                    <div>
                        <a href="#">
                            <img src={GoogleIcon} />
                            Sign Up With Google
                        </a>
                    </div>
                    <div>
                        <Link href="#">
                            <img src={Microsoft} />
                            Sign Up With Microsoft
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
