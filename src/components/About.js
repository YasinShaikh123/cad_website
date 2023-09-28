import React from 'react';
import aboutCard from '../assets/image/53498.png';
import check from '../assets/image/53308.png';

const About = () => {
  return (
    <div id='Aboutus' class="about-us">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="about-image">
                        <div class="avatar">
                            <div class="top-card">
                                <div class="prod">
                                    <p>Lorem ipsum</p>
                                    <div><img src={check} />Productivity</div>
                                </div>
                            </div>
                        </div>
                        <img class="main-img-card" src={aboutCard} />
                        <div class="avatar">
                            <div class="btm-card">
                                <div class="smail"><p>Lorem ipsum</p></div>
                                <div class="prod">
                                    <p>Lorem ipsum</p>
                                    <div><img src={check}/>Productivity</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="about-content">
                        <h2>ABOUT US</h2>
                        <h3>Lorem ipsum dolor sit amet, consetetur</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
