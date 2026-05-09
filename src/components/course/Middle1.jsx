import React from 'react'

const Middle1 = () => {
  return (
    <div className='flex mb-[200px]'>
    <div>
        <img src="12.jpg" alt="/" className='w-[450px] mt-[100px] h-[450px] ml-[90px]'/>
    </div>
    <div>
        <p className='font-semibold text-4xl ml-[40px] pt-[100px] '>List of Courses at SD HUB</p>
        <ol className='font-normal text-medium text-gray-600 ml-10 mt-5'>
        <li> Digital Marketing + Graphic Designing</li>
        <li> Data Analytics</li>
        <li>Tally ERP</li>
        <li>Office Administration</li>
        <li>Web Designing</li>
        </ol>
        <div className='mt-5 ml-[40px]'>
        <a href="/" alt='/' className='text-violet-800 text-lg font-medium pt-10'>Register Here</a>
  </div>
  </div>
    </div>
  )
}

export default Middle1