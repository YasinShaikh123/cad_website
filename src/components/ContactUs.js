import React from 'react'
import SecondaryBth from './SecondaryBth'
import { Link } from 'react-router-dom'

const ContactUs = () => {
  return (
    <div id='Contactus' className="get-in-touch">
        <div className="container">
            <div className="row">
                    <div className="col-md-6 cont-desc">
                        <div className="sec-head">
                            <h3 className="roco-font">GET IN TOUCH</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a </p>
                        </div>
                        <div className="contect">
                            <ul>
                                <li><i className="fa fa-map-marker" aria-hidden="true"></i> : 23, lorem ipsum</li>
                                <li><i className="fa fa-phone" aria-hidden="true"></i> : +258 15 15 1254</li>
                                <li><i className="fa fa-envelope-o" aria-hidden="true"></i> : caditsolution.com</li>
                                <li><i className="fa fa-mobile" aria-hidden="true"></i> : 08546921576</li>
                            </ul>
                        </div>
                    </div> 
                    <div className="col-md-6 form-sec">
                        <div className="contact-form">
                            <h2>CONTACT US</h2>
                            <form>
                                <div className="form-group">
                                    <input type="text" placeholder="Enter your name ....." />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="Enter your email ....."/>
                                </div>
                                <div className="form-group">
                                    <textarea rows="4" placeholder="Enter your message ....."></textarea>
                                </div>
                                <Link to="" className="submit-btn">SEND</Link>
                            </form>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs
