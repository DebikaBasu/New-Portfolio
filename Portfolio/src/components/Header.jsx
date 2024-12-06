import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <div className='fixed w-full z-10 p-20 flex items-center justify-end py-28 px-20'>
   <button className='bg-black px-6 py-3 border-4 text-xl rounded-full hover:bg-gray-500'>Hire me</button>
   <i className="ri-menu-line text-3xl ml-3"></i>

   </div>
  )
}

export default Header