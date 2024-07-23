import React from 'react'
import chistats_logo from '../assets/chistats_logo.png'

const Header = () => {
  return (
    <div className="flex items-center justify-between">
        <h2 className="font-semibold text-[#505050d6] text-2xl text-darkBlue hover:cursor-default">
          Sales<span className='text-[#323232]'>Efficacy</span>
        </h2>
        <img src={chistats_logo} alt="logo" className="h-6 w-[120px]" />
    </div>
  )
}

export default Header