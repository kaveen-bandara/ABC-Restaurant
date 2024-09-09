import React from 'react'

import HeroImage from '../../components/heroImage/HeroImage'
import ReservationForm from './reservationForm/ReservationForm'

import bgImage from '../../assets/reservation.jpg'

const Reservation = () => {
  return (
    <div>
      <HeroImage 
        bgImage={bgImage}
        heading={<span>Make a Reservation</span>}
        text="Book a table, for a special occation or casual meal"
      />
      <ReservationForm />
    </div>
  )
}

export default Reservation