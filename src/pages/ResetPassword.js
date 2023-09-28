import React from 'react'

const ResetPassword = () => {
  return (
    <div className="registration">
        <div className="container">
            <div className="rigester-box login">
                <div className="get-start-login mb-5">
                    <h2>Change password</h2>
                </div>
                <form>
                    <div className="form-group">
                        <label>Password</label><br/>
                        <input type="text" placeholder="*******" />
                    </div>
                    <div className="form-group mb-0">
                        <label>Confirm Password</label><br/>
                        <input type="text" placeholder="*******" />
                    </div>
                    <button className='mt-5' type='submit'>Reset Password</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ResetPassword
