import React from 'react'
import Hero from './Hero/Hero'
import Feature from './Features/Feature'
import PopularBurger from './PopularBurger/PopularBurger'
import Delivery from './Delivery/Delivery'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Feature/>
      <PopularBurger/>
      <Delivery/>
    </div>
  )
}

export default Home
