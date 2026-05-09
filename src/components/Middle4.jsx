import React from 'react'

const Middle4 = () => {
  return (
    <div className='pt-[200px] flex flex-col items-center justify-center'>
        <p className="text-4xl mb-[10px] font-semibold">Delivering Value</p>
        <p className="text-4xl font-semibold">One candidate at a time</p>
        <div className='flex justify-evenly pt-10 w-full'>
          <div >
            <p className='text-blue-500 text-7xl font-thin'>400+</p>
          <p className='pl-2 text-lg'>Students</p>
          </div>
          <div>
            
            <p className='text-blue-500 text-7xl  font-thin'>100%</p>
            <p className='pl-2 text-lg'>Positive Feedback</p>
          </div>
          <div>
            <p className='text-blue-500 text-7xl  font-thin'>5+</p>
            <p className='pl-2 text-lg'>Batches</p>
          </div>
          <div>
            <p className='text-blue-500 text-7xl  font-thin'>
              6+
            </p>
            <p className='pl-2 text-lg'>
              Courses
            </p>
          </div>
        </div>
    </div>
  )
}

export default Middle4