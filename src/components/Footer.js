import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="main-footer">
        <div className="container">
            <div className="row">
                <div className="footer-logo">
                <Link to='/'>
                    <h2>CAD IT Solutions</h2>
                </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-md-7">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="icons">
                                <p>Join our social community</p>
                                <ul className="social-icon">
                                    <li><Link to="#"><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                                    <li><Link to="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></Link></li>
                                    <li><Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                                    <li><Link to="#"><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                                    <li><Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 pl-0">
                            <div className="footer-page">
                                <ul>
                                    <li><Link to="../termcondition">Terms & Condition</Link></li>
                                    <li><Link to="../privacypolicy">Privacy Policy</Link></li>
                                    <li><Link to="../gdprPolicy">GDPR policy</Link></li>
                                    <li><Link to="../faq">FAQ,S</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col md-5"></div>
                
            </div>
            <div className="copywrite">
                <Link to="index.php">Copyright @ 2023.All Rights Reserved By CAD IT Solutions</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer
