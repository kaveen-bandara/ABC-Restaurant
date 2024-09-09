import React from 'react'

import Hero from './hero/Hero'
import HomeContents from './homeContents/HomeContents'
import Locations from './locations/Locations'

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeContents />
      <Locations />
    </div>
  )
}

export default Home