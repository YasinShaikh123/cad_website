import React from 'react';
import stepOne from '../assets/image/53490.png';
import stepTwo from '../assets/image/53491.png';
import stepthree from '../assets/image/53492.png';
import arrowTop from '../assets/image/53302.png';
import arrowBtm from '../assets/image/53304.png';

const Threestep = () => {
  return (
    <div id='HowItWorks' className="how-to-work">
        <div className="container">
            <div className="sec-head">
                <h3 className="roco-font">HOW IT WORKS - 3 EASY STEPS</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typese ttingindus orem <br/> Ipsum has beenthe standard dummy.</p>
            </div>
            <div className="row">
                <div className="col-md-6 three-step">
                    <div className="stap">
                        <div className="num">
                            01
                        </div>
                        <h3>Comit to productivity with<br/> Freedom Scheduling </h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typese ttingindus orem Ipsum has beenthe standard dummy.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="images">
                        <img src={stepOne} />
                    </div>
                </div>
            </div>
            <div className="step-arrow">
                <img src={arrowTop} />
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="images">
                    <img src={stepTwo} />
                    </div>
                </div>
                <div className="col-md-6 three-step">
                    <div className="stap">
                        <div className="num">
                            02
                        </div>
                        <h3>Comit to productivity with<br /> Freedom Scheduling </h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typese ttingindus orem Ipsum has beenthe standard dummy.</p>
                    </div>
                </div>
            </div>
            <div className="step-arrow">
                <img src={arrowBtm}/>
            </div>
            <div className="row">
                <div className="col-md-6 three-step">
                    <div className="stap">
                        <div className="num">
                            03
                        </div>
                        <h3>Comit to productivity with<br/> Freedom Scheduling </h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typese ttingindus orem Ipsum has beenthe standard dummy.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="images">
                    <img src={stepthree} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Threestep
