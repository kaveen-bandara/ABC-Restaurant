import React from 'react'

import HeroImage from '../../components/heroImage/HeroImage'
import ContactForm from './contactForm/ContactForm'

import bgImage from '../../assets/cheese.jpg'

const Contact = () => {
  return (
    <div>
      <HeroImage
        bgImage={bgImage}
        heading={<span>Contact Us</span>}
        text="Please get in touch with us"
      />
      <ContactForm />
    </div>
  )
}

export default Contact