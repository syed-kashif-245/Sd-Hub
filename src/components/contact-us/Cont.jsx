import React from 'react'

const Cont = () => {
  return (
    <div className='flex justify-center gap-24 p-10 bg-gray-100 min-h-screen'>

    {/* Left Section */}
    <div className='mt-10'>
        <p className='text-2xl text-blue-500'>
            Contact us
        </p>

        <p className='text-4xl font-medium mt-5'>
            Get in Touch with us
        </p>

        <p className='mt-8 text-gray-500 text-lg'>
            <i className="fa-solid fa-phone text-blue-400 mr-3"></i>
            +91 955-012-5050
        </p>

        <p className='mt-5 text-gray-500 text-lg'>
            <i className="fa-solid fa-envelope text-blue-400 mr-3"></i>
            info@sdhub.in
        </p>

        <p className='mt-5 text-gray-500 text-lg'>
            <i className="fa-solid fa-location-dot text-blue-400 mr-3"></i>
            Mehdipatnam, Hyderabad
        </p>
    </div>

   
    <div className=' p-8 w-[500px]'>

        {/* Full Name */}
        <div className='mb-5'>
            <p className='text-lg text-gray-500 mb-2'>
                Full Name
            </p>

            <input
                type="text"
                className='w-full border border-gray-300 p-3 rounded-md outline-none focus:border-blue-500'
            />
        </div>

        {/* Email */}
        <div className='mb-5'>
            <p className='text-lg text-gray-500 mb-2'>
                Email
            </p>

            <input
                type="email"
                className='w-full border border-gray-300 p-3 rounded-md outline-none focus:border-blue-500'
            />
        </div>

        {/* Phone */}
        <div className='mb-5'>
            <p className='text-lg text-gray-500 mb-2'>
                Phone
            </p>

            <input
                type="text"
                className='w-full border border-gray-300 p-3 rounded-md outline-none focus:border-blue-500'
            />
        </div>

        {/* Message */}
        <div className='mb-5'>
            <p className='text-lg text-gray-500 mb-2'>
                Your Message(Optinal)
            </p>

            <textarea
                rows="6"
                className='w-full border border-gray-300 p-3 rounded-md outline-none resize-none focus:border-blue-500'
            ></textarea>
        </div>

        {/* Button */}
        <button className=' text-blue-500 px-6 py-3 rounded-md border-blue-500 hover:bg-blue-600 duration-300 border-blue-500'>
            Submit
        </button>

    </div>

</div>
  )
}

export default Cont