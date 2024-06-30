import { Slider } from '@/components/component/MainSlider'
import MovingHeadline from '@/components/component/MovingHeadline'



import { Belowheader } from '@/components/component/Belowheader'
import { Navbar } from '@/components/component/Navbar'

import React from 'react'
import { AnnouncementCarousel } from '@/components/component/AnnouncementCarousel'
import { TestCarousel } from '@/components/component/TestCarousel'



const Homepage = () => {
  return (
    <>
    <MovingHeadline/>
    <Navbar/>
    <Slider/>
    <Belowheader/>
    <AnnouncementCarousel/>
    <TestCarousel/>
   
    </>
  )
}

export default Homepage
