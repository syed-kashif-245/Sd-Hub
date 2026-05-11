import React from 'react'
import { Link } from 'react-router'
const middle = () => {
  return (
     <div className='mt-[130px] ml-[60px] flex'>
        <div>

        </div>
        <div>
            <p className='text-5xl text-gray-800 font-extrabold text-gray-500'>Empowering Individuals</p>
            <p className='text-6xl text-blue-600 font-bold mt-5'>To Build Carriers</p> 
            <p className="text-gray-500 mt-5">Our ultimate goal is to equip individuals not only in core domain <br/>skills but also softskills and language training to thrive in the<br/> competitive job market.</p>
            <Link to="/contact" ><button className='bg-blue-500 mt-5 px-5 py-2 text-white w-[160px]'> contact us </button></Link>
        </div>
        <div className='ml-[100px]' >
            <img src='/2.jpg' className='h-[330px] w-[500px]'></img>

        </div>
    </div>
  )
}

export default middle