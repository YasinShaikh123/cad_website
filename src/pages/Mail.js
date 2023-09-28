import React from 'react'
import mailbox from '../assets/image/mail.png'
import SecondaryBth from '../components/SecondaryBth'

const Mail = () => {
  return (
    <div className="registration">
        <div className="container">
            <div className="rigester-box mail-box">
                <div className="get-start-login">
                    <img src={mailbox}/>
                    <h2>check your mail</h2>
                    <p>Reset password link existing to your email address </p>
                    <div className='sec-btns'>
                        <SecondaryBth path='/login' titleTwo="Back To Login"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mail
