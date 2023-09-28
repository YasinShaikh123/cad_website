import React from 'react';
import cardOne from '../assets/image/card-one.png';
import cardTwo from '../assets/image/card-two.png';
import cardThree from '../assets/image/card-three.png';
import Card from './Card';

const HomeCard = () => {
    
  return (
    <div  id='Threecard' className="three-card">
        <div className="row">
            <Card 
                title="Customer Support"
                titleTwo="& Services"
                disc="It is a long established fact tIt is a long established fact that a reader will be"
                discShow="It is a long established face tlt is a long established face that a reader will be"
                imgUrl={cardOne}/>
            <Card
                title="Task & Activity"
                titleTwo="Management"
                disc="It is a long established fact tIt is a long established fact that a reader will be"
                discShow="It is a long established face tlt is a long established face that a reader will be"
                imgUrl={cardTwo}/>
            <Card 
                title="Analytics &"
                titleTwo="Reporting"
                disc="It is a long established fact tIt is a long established fact that a reader will be"
                discShow="It is a long established face tlt is a long established face that a reader will be"
                imgUrl={cardThree}/>
        </div>
    </div>
  )
}

export default HomeCard
