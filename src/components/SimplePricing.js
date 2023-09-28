import React from 'react';
import checkIcon from '../assets/image/right-icon.png'
import SimpleCard from './SimpleCard';
import SwitchButton from './SwitchButton';

const SimplePricing = () => {
  return (
    <div id="simplepricing" class="simple-pricing">
        <div class="container">
            <div class="sec-head">
                <h3 class="roco-font">BEST & SIMPLE PRICING</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typese ttingindus orem <br /> Ipsum has beenthe standard dummy.</p>
            </div>
            <SwitchButton/>
            <div class="row">
                <SimpleCard
                   title="YEARLY"
                   pera="Porem ipsum dolor sit amet, consectetur adipiscing elit."
                   start="Starts at"
                   amt="$250"
                   off="62% off"
                   amount="$95.99"
                   secondpera="/Porem ipsum dolor sit amet, consectetur adipiscing elit."
                   imgUrl={checkIcon}
                   threepera="threepera"
                   fourpera="fourpera"
                />
                <SimpleCard
                   title="YEARLY"
                   pera="Porem ipsum dolor sit amet, consectetur adipiscing elit."
                   start="Starts at"
                   amt="$250"
                   off="62% off"
                   amount="$95.99"
                   secondpera="/Porem ipsum dolor sit amet, consectetur adipiscing elit."
                   imgUrl={checkIcon}
                   threepera="threepera"
                   fourpera="fourpera"
                />
                <SimpleCard
                   title="YEARLY"
                   pera="Porem ipsum dolor sit amet, consectetur adipiscing elit."
                   start="Starts at"
                   amt="$250"
                   off="62% off"
                   amount="$95.99"
                   secondpera="/Porem ipsum dolor sit amet, consectetur adipiscing elit."
                   imgUrl={checkIcon}
                   threepera="threepera"
                   fourpera="fourpera"
                />
            </div>
        </div>
    </div>
  )
}

export default SimplePricing
