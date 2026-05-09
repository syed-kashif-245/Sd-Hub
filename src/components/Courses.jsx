import React from 'react'
import { Link } from 'react-router'
import Course1 from './course/Course1'
import Middle1 from './course/Middle1'
import Header from './Header'
import Foot from './Foot'

const Courses = () => {
  return (
    <div>
      <Header />
      <Course1 />
      <Middle1 />
      <Foot />
    </div>
  )
}

export default Courses