import React from 'react';
import HomeBanner from '../components/HomeBanner';
import HomeCard from '../components/HomeCard';
import Threestep from '../components/Threestep';
import SimplePricing from '../components/SimplePricing';
import About from '../components/About';
import NonProfit from '../components/NonProfit';
import Testimonial from '../components/Testimonial';
import ContactUs from '../components/ContactUs';

function Home() {
  return (
    <>
      <HomeBanner/>
      <HomeCard />
      <Threestep />
      <SimplePricing/>
      <About/>
      <NonProfit/>
      <Testimonial/>
      <ContactUs/>
    </>
  )
}

export default Home
