import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div className="flex items-center gap-96 px-10 py-4 mt-[20px] ml-[30px]">

  <div className="">
    <img
      src="/sdhublogo.png"
      className="w-[180px] h-[100px] object-contain "
    />
  </div>

  <div className="flex gap-10  text-bold ">
    <Link to="/" className=' text-blue-800 border-b-4 border-blue-800 pb-2'>Home</Link>
    <Link to="about" className=' hover:text-blue-800 hover:border-b-4 hover:border-blue-800 pb-2'>About us</Link>
    <Link to="/courses" className='hover:text-blue-800 hover:border-b-4 hover:border-blue-800 pb-2'>Courses</Link>
    <Link to="/form" className='hover:text-blue-800 hover:border-b-4 hover:border-blue-800 pb-2'>Registration form</Link>
   <Link to="/contact" ><button className='hover:text-blue-800 hover:border-b-4 hover:border-blue-800 pb-2'>
  Contact Us<i className="fa-regular fa-message pl-2"></i></button>
</Link>
</div>
</div>
  )
}

export default Header