import React from 'react'
import { Link } from 'react-router'
import Header from './Header'
import About1 from './about/About1'
import Seed from './about/Seed'
import Proffesional from './about/Proffesional'
import Helping from './about/Helping'
import Seed1 from './about/Seed1'
import Foot from './Foot'
const Aboutus = () => {
  return (
    <>
    <Header/>
    <About1/>
    <Seed/>
    <Proffesional/>
    <Seed1/>
    <Helping />
    <Foot/>
    </>
  )
}
export default Aboutus