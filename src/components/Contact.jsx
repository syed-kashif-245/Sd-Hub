import React from 'react'
import Header from './Header'
import Foot from './Foot'
import About1 from './about/About1'
import Contact1 from './contact-us/Contact1'
import Cont from './contact-us/Cont'

const Contact = () => {
  return (
    <div>
        <Header />
        <Contact1 />
        <Cont/>
        <Foot />
    </div>
  )
}

export default Contact