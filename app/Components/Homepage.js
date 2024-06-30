import { Slider } from '@/components/component/MainSlider'
import MovingHeadline from '@/components/component/MovingHeadline'



import { Belowheader } from '@/components/component/Belowheader'
import { Navbar } from '@/components/component/Navbar'

import React from 'react'
import { AnnouncementCarousel } from '@/components/component/AnnouncementCarousel'
import { TestCarousel } from '@/components/component/TestCarousel'
import { HealthCarousel } from '@/components/component/HealthPackagesCarousel'
import { FacilityCarousel } from '@/components/component/FacilitiesCarousel'
import Footer from '@/components/component/Footer'
import WhyChooseUs from '@/components/component/WhyChooseUs'
import { Blogs } from '@/components/component/Blogs'



const Homepage = () => {
  return (
    <>
    <MovingHeadline/>
    <Navbar/>
    <Slider/>
    <Belowheader/>
    <AnnouncementCarousel/>
    <TestCarousel/>
    <HealthCarousel/>
    <FacilityCarousel/>
    <WhyChooseUs/>
    <Blogs/>
    <Footer/>
   
    </>
  )
}

export default Homepage
