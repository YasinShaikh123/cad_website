import React from 'react'
import SecondaryBth from '../components/SecondaryBth'

const ForgetPassword = () => {
  return (
    <div className="registration">
        <div className="container">
            <div className="rigester-box login">
                <div className="get-start-login">
                    <h2>Forgot password</h2>
                </div>
                <form>
                    <div className="form-group mt-5">
                        <label>Email Address</label><br/>
                        <input type="text" placeholder="reethik@gmail.com" />
                    </div>
                    <div className='sec-btns' style={{marginTop:'7rem'}}>
                        <SecondaryBth path='/mail' titleTwo="Reset Password"/>
                    </div>
                    <div className="sending-mess">
                        <p>We Send a password reset link to</p>
                        <p>priyanka@gmail.com</p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ForgetPassword
