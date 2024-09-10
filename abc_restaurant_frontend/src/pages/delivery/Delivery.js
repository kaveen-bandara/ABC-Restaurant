import React from 'react'

import HeroImage from '../../components/heroImage/HeroImage'

import delivery from '../../assets/delivery.jpg'
import construction from '../../assets/under-construction.jpg'

const Delivery = () => {
  return (
    <div>
      <HeroImage
        bgImage={delivery}
        heading={[<span>Get food delivered to you</span>]}
        text="Delivery avialable Monday – Saturday, 10am – 6pm"
      />
      <img src={construction} alt="under construction" width='100%' />
    </div>
  )
}

export default Delivery