import React from 'react'

import HeroImage from '../../components/heroImage/HeroImage'
import AboutInfo from './aboutInfo/AboutInfo'
import Images from './images/Images'
import OurData from './ourData/OurData'

import bgImage from '../../assets/burger.jpg'

const About = () => {
  return (
    <div>
      <HeroImage
        bgImage={bgImage}
        heading={<span>about us</span>}
        text='Take a look at the place, the people & the food'
      />
      <OurData />
      <Images />
      <AboutInfo />
    </div>
  )
}

export default About