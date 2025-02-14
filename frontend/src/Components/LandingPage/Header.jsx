import React from 'react'
import logo from '../../assets/Images/tracklogo.png'

const Header = () => {
  return (
    <div className='w-full h-[100px] flex justify-center items-center'>
      <div>
        <img className='w-[50px]' src={logo} alt='logo' />
      </div>
    </div>
  )
}

export default Header
