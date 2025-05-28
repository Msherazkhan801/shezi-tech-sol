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
import Form from '../component/Forms'
import ContactPage from './Contact'

const Home = () => {
  return (
    <>
  <Hero/>
  <FeaturesSection/>
  <StatsSection/>
  <StructureSection/>
  <CallToActionSection/>
  <BlogSection flag={true}/>
  <TestimonialSlider/>
  <ContactPage/>
  <LogoSlider/>
  </>
  )
}

export default Home