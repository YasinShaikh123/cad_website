import React from 'react'
import SecondaryBth from './SecondaryBth'
import { Link } from 'react-router-dom'

const SimpleCard = ({title,pera,amt,off,amount,secondpera,imgUrl,threepera,fourpera,start}) => {
  return (
    <div class="col-md-4">
        <div class="yearly">
            <h4>{title}</h4>
            <p>{pera}</p>
            <div class="start">
                <p>{start}</p>
                <div class="dis">
                    <span class="amt">{amt}</span><span class="off">{off}</span>
                </div>
                <div class="amount">
                    <h2>{amount}</h2>
                    <p>{secondpera}</p>
                </div>
                <div class="point">
                    <img src={imgUrl} alt='cardImage' />
                    <p>{threepera}</p>
                </div>
                <div class="point">
                <img src={imgUrl} alt='cardImage' />
                    <p>{fourpera}</p>
                </div>
                <div class="start-btn">
                        <SecondaryBth path='/Pricing' titleTwo="Get Started "/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SimpleCard
