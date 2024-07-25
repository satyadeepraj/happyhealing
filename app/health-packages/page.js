import React from 'react'
import { HealthPackages } from './HealthPackages'
import Footer from '@/components/component/Footer'
import MovingHeadline from '@/components/component/MovingHeadline'
import { Navbar } from '@/components/component/Navbar'

const page = () => {
  return (
    <div>
         <MovingHeadline />
         <Navbar />
      <HealthPackages/>
      <Footer/>
    </div>
  )
}

export default page
