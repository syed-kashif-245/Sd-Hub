import React from 'react'
import { Link } from 'react-router'

const Foot = () => {
  return (
    <div className='bg-gray-700 pt-[50px] mt-[100px]'>
    <div className='flex'>
      <div>
      <img  src='sd-hub-white.png' alt='/' className='h-[50px] w-[140px] ml-[80px]'/>
      <p className='text-gray-300  pt-[29px] text-lg font-base pb-[40px] ml-[80px]'>We believe that access to quality education should not be limited by<br/> financial constraints, and we strive to level the playing field for all.</p>
     <a> <i className="fa-brands fa-facebook-f border-white ml-[80px] text-white "></i></a>
      <a><i class="fa-brands fa-instagram text-white pl-5 "></i></a>
      <a><i class="fa-brands fa-linkedin-in text-white pl-5 "></i></a>
</div>
<div className=' pl-[50px] flex flex-col  text-lg text-gray-300'>
  <Link to="/" >Home</Link>
  <Link to="/about">About us</Link>
  <Link to="/courses">Courses</Link>
  
</div>
</div>
<div>
<hr className=" w-full border-[1px] border-gray-300 w-[300px] mx-auto mt-5"/>
      <p className='pt-10 pl-[140px] text-gray-400 text-medium pb-[80px]'>© Managed by Professionals Solidarity Forum. Sponsored by Support for Educational & Economic Development & Helping Hands Foundation.</p>
    </div>
</div>
  )
}
export default Foot