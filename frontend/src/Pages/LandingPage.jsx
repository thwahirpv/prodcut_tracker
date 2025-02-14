import React from 'react'
import Header from '../Components/LandingPage/Header'
import Center from '../Components/LandingPage/Center'
import LandingFooter from '../Components/LandingPage/LandingFooter'
import Footer from '../Components/Layout/Footer'

const LandingPage = () => {
  return (
    <div className='bg-primary'>
      <Header />
      <Center />
      <LandingFooter />
      <Footer />
    </div>
  )
}

export default LandingPage
