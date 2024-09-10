import React from 'react'

import './ReservationForm.css'

const ReservationForm = () => {
  return (
    <div className='section'>
        <div className='container grid-container reservation-content'>           
            <div>
                <h1 className='heading-secondary'>
                MAKE A <span>RESERVATION</span>
                </h1>

                <form name="reservation" method="post">
                    <div className='form-field name-email'>
                        <div>
                            <label>Your Name</label>
                            <input type="text" name="name" />
                        </div>

                        <div>
                            <label>Email</label>
                            <input type="email" name="email" />
                        </div>

                        <div>
                            <label>Phone Number</label>
                            <input type="text" name="phone" />
                        </div>
                    </div>

                    <div className='form-field name-email'>
                        <div>
                            <label>Date</label>
                            <input type="date" name="date" />
                        </div>

                        <div>
                            <label>Time</label>
                            <input type="time" name="time" />
                        </div>
                    </div>
                    <center><button type='submit' name='submit' className='button-alt'>Make Reservation</button></center>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ReservationForm