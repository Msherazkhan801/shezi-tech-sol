import React from 'react'
import Hero from '../component/Hero'
import FeaturesSection from '../component/Feature'
import StatsSection from '../component/State'
import StructureSection from '../component/StructureSection'
import PricingSection from '../component/PricingSection'
import TestimonialSlider from '../component/TestimonialSlider'
import CallToActionSection from '../component/WaveSection'
import BlogSection from '../component/BlogSection'
import LogoSlider from '../component/LogoSlider'

const Home = () => {
  return (
    <>
  <Hero/>
  <FeaturesSection/>
  <StatsSection/>
  <StructureSection/>
  <PricingSection/>
  <TestimonialSlider/>
  <CallToActionSection/>
  <BlogSection flag={true}/>
  <LogoSlider/>
  </>
  )
}

export default Home