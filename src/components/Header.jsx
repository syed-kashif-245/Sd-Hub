import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="flex items-center gap-96 px-10 py-4 mt-[20px] ml-[30px]">

      <div>
        <img
          src="/sdhublogo.png"
          className="w-[180px] h-[100px] object-contain"
        />
      </div>

      <div className="flex gap-10 font-bold">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-800 border-b-4 border-blue-800 pb-2"
              : "hover:text-blue-800 hover:border-b-4 hover:border-blue-800 pb-2 font-medium"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-800 border-b-4 border-blue-800 pb-2"
              : "hover:text-blue-800 hover:border-b-4 hover:border-blue-800 pb-2 font-medium"
          }
        >
          About us
        </NavLink>

        <NavLink
          to="/courses"
          className={({ isActive }) =>
            isActive
              ? "text-blue-800 border-b-4 border-blue-800 pb-2"
              : "hover:text-blue-800 hover:border-b-4 hover:border-blue-800 pb-2 font-medium"
          }
        >
          Courses
        </NavLink>

        <a
          href="https://bit.ly/sdhubreg"
          className='hover:text-blue-800 hover:border-b-4 hover:border-blue-800 pb-2 font-medium'
        >
          Registration form
        </a>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-blue-800 border-b-4 border-blue-800 pb-2"
              : "hover:text-blue-800 hover:border-b-4 hover:border-blue-800 pb-2 font-medium"
          }
        >
          Contact Us
          <i className="fa-regular fa-message pl-2"></i>
        </NavLink>

      </div>
    </div>
  )
}

export default Header