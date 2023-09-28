import React from 'react'
import SecondaryBth from '../components/SecondaryBth'

const SignIn = () => {
  return (
    <div className="registration">
        <div className="container">
            <div className="rigester-box login">
                <div className="get-start-login mb-5">
                    <h2 style={{marginBottom:'10px',textAlign:'center'}}>Welcome to our company</h2>
                    <p style={{color:'#484848',textAlign:'center'}}>You’re signing up as name@gmail.com</p>
                </div>
                <form>
                    <div className="form-group">
                        <label>First Name</label><br/>
                        <input type="text" placeholder='' />
                    </div>
                    <div className="form-group mb-0">
                        <label>Last Name</label><br/>
                        <input type="text" placeholder="" />
                    </div>
                    <div className="form-group mb-0">
                        <label>Password</label><br/>
                        <input type="text" placeholder="" />
                    </div>
                    <div className="check mt-5">
                        <input type="checkbox" />
                        <p>Get Feature Updates And Tips Via Email(Recommended).</p>
                    </div>
                    <div className='sec-btns'>
                        <SecondaryBth path='/stapper' titleTwo="Continue"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignIn
