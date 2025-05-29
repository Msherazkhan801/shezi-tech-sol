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
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <>
     <Helmet>
        <title>Shezi Tech Solution - Software & Tech Services</title>
        <meta name="description" content="Providing software development and tech tutorials." />
        <meta name="keywords" content="software, development, coding, tutorials" />
      </Helmet>
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