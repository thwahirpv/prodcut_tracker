import React from 'react'
import { Link } from 'react-router-dom'

const LandingFooter = () => {
  return (
    <div className='flex justify-center py-[40px] '>
      <Link to='/register'>
        <a className='bg-secondary py-2 px-5 rounded-md text-[#E4F2E7] font-[450] text-lg cursor-pointer'>Start Tracking</a>
      </Link>
    </div>
  )
}

export default LandingFooter
