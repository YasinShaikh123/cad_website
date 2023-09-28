import React from 'react'
import NonProfit from '../components/NonProfit'
import DashFaq from '../components/DashFaq'
import PricingTable from '../components/PricingTable'
import SwitchButton from '../components/SwitchButton'

const Pricing = () => {
  return (
    <>
        <div className="main-banner pricing-banner">
            <div className="container">
                <div className="row">
                    <div className="banner-content">
                        <h2 className="roco-font">WHAT SUITS YOU BEST</h2>
                        <p>There are different plan for users pick the right one for you.</p>
                    </div>
                </div>
            </div>
        </div>
        <SwitchButton />
        <PricingTable/>
        <NonProfit/>
        <DashFaq/>
    </>
  )
}

export default Pricing
