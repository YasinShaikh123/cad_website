import React, { useState, useEffect } from 'react'
import PrimaryBtn from './PrimaryBtn'
import SecondaryBth from './SecondaryBth'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 100) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };

        window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
       <div  className={isScrolled ? 'back header-menu' : 'header-menu'} id="masthead">
            <div className="menubar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 col-sm-12 logo">
                        <div className="menu-logo">
                            <Link to='/'>
                                CAD IT Solutions
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-12 sec-center">
                        <div className="page">
                            <nav className="navbar navbar-expand-lg navbar-light">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                <li className="nav-item " ><a href='/#Threecard' className="nav-link" >Features</a></li>
                                <li className="nav-item"  ><a href='/#HowItWorks' className="nav-link">How It Works</a></li>
                                <li className="nav-item "><a href='/#simplepricing' className="nav-link">Pricing</a></li>
                                <li className="nav-item"><a href='/about' className="nav-link">About</a></li>
                                <li className="nav-item"><a href='/#Contactus' className="nav-link">Contact</a></li>
                                </ul>
                            </div>
                            </nav>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12 but-right">
                        <PrimaryBtn  path='/login' title="Login"/>
                        <SecondaryBth path='/Registration' titleTwo="Get Free Trail"/>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Navbar
