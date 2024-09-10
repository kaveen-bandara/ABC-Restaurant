import React from 'react'

import HeroImage from '../../components/heroImage/HeroImage'
import Breakfast from './breakfast/Breakfast'
import Lunch from './lunch/Lunch'
import Dinner from './dinner/Dinner'

import bgImage from '../../assets/coffee.jpg'

const Menu = () => {
  return (
    <div>
      <HeroImage
        bgImage={bgImage}
        heading={<span>Our Menu</span>}
        text="What we serve for breakfast, lunch & dinner"
      />
      <Breakfast />
      <Lunch />
      <Dinner />
    </div>
  );
};

export default Menu