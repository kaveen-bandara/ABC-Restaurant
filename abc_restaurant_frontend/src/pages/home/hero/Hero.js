import React from 'react'

import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-img container'>
        <div className='hero-content'>
            <h1 className='heading-primary'><span>welcome</span> to ABC Restaurant</h1>
            <h2 className='heading-secondary'>Experience world class cuisine here in Sri Lanka.</h2>
            <p className='text-white'>Every dish is crafted with passion and precision.</p>
        </div>
    </div>
  )
}

export default Hero