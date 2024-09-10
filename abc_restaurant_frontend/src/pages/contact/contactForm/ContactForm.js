import React from 'react'

import telephone from '../../../assets/telephone.jpeg'

import './ContactForm.css'

const CantactForm = () => {
  return (
    <div className='section'>
        <div className='container grid-container contact-content'>
            <div>
                <h1 className='heading-secondary'>
                    GET IN <span>TOUCH</span>
                </h1>

                <p>We’d love to hear from you! Whether you have a question about our menu, want to make a reservation or need assistance with a takeout or delivery order, we’re here to help.</p>

                <center><img src={telephone} alt="get in touch" /></center>

                <p>Feel free to reach out by phone at (+94) 77 243 6763, email or through our online contact form. Our team is dedicated to ensuring your experience at ABC Restaurant is exceptional from start to finish. We look forward to connecting with you!</p>
            </div>

            <div className='box'>
                <h1 className='heading-secondary color'>
                GIVE US YOUR <span>FEEDBACK</span>
                </h1>

                <form name="feedback" method="post" id="feedbackform">
                    <div className='form-field name-email'>
                        <div>
                            <label>Your Name</label>
                            <input type="text" name='name' />
                        </div>

                        <div>
                            <label>Email</label>
                            <input type="email" name='email' />
                        </div>
                    </div>


                    <div className='form-field'>
                        <div>
                            <label>Subject</label>
                            <input type="text" name='subject' />
                        </div>
                    </div>

                    <div className='form-field'>
                        <div>
                            <label>Message</label>
                            <textarea type="text" name='message' />
                        </div>
                    </div>
                    <button type='submit' name='submit' className='button-alt'>Send Message</button>
                </form>

                
            </div>
        </div>
    </div>
  )
}

export default CantactForm