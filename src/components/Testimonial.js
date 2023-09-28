import React, { Component } from "react";
import Slider from "react-slick";
import Profile from '../assets/image/tasti-image.png';
import IconLeft from '../assets/image/quote-2.png';
import IconRight from '../assets/image/Icons1.png';
import LeftArrow from '../assets/image/Icons1.png';
import RightArrow from '../assets/image/Icons1.png';

const Testimonial = () => {

    // const LeftArrowComp = () =>{<a class="your-class-btn-back"><img src={LeftArrow} /></a>}
    // const RightArrowComp = () =>{<a class="your-class-btn-back"><img src={RightArrow} /></a>}


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        // prevArrow: '<a class="your-class-btn-back">Back</a>',
        // nextArrow: '<a class="your-class-btn-forward">Forward</a>',
      };


  return (
      <div className="tasti">
      <div className="container">
          <div className="sec-head">
              <h3 className="roco-font">WHAT OUR CLIENT SAYS</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typese ttingindus orem<br/> Ipsum has beenthe standard dummy.</p>
          </div>
          <div className="tasti-slide">
            <Slider {...settings}>
                <div className="reymond">
                    <img src={Profile}/>
                    <h2>Reymond Galario</h2>
                    <p>Sydney, Australia</p>
                    <div className="text">
                        <img className="left" src={IconLeft}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typeSettings industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                        but also the leap into electronic typeSettings</p>
                        <img className="right" src={IconRight}/>
                    </div>
                </div>
                <div className="reymond">
                    <img src={Profile}/>
                    <h2>Reymond Galario</h2>
                    <p>Sydney, Australia</p>
                    <div className="text">
                        <img className="left" src={IconLeft}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typeSettings industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                        but also the leap into electronic typeSettings</p>
                        <img className="right" src={IconRight}/>
                    </div>
                </div>
                <div className="reymond">
                    <img src={Profile}/>
                    <h2>reymond galario</h2>
                    <p>sydney, Australia</p>
                    <div className="text">
                        <img className="left" src={IconLeft}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typeSettings industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                        but also the leap into electronic typeSettings</p>
                        <img className="right" src={IconRight}/>
                    </div>
                </div>
            </Slider>
          </div>
      </div>
  </div>
  )
}

export default Testimonial
