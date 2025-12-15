import React from 'react'
import { NavLink } from 'react-router-dom'

import './Footer.css'

const Footer = () => {
  return (
    <div className='section footer'>
      <div className='container'>
        <div className='footer-card-container'>
          <div>
            <h3>ABC Restaurant</h3>
            <p>Locations: Just go outside, you'll find it</p>
            <p>Email: reservations@abcrestaurant.lk</p>
            <p>Phone: 0123456789</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><NavLink className='quick-link' to='/'>Home</NavLink></li>
              <li><NavLink className='quick-link' to='/about'>About</NavLink></li>
              <li><NavLink className='quick-link' to='/gallery'>Gallery</NavLink></li>
              <li><NavLink className='quick-link' to='/menu'>Menu</NavLink></li>
              <li><NavLink className='quick-link' to='/delivery'>Delivery</NavLink></li>
              <li><NavLink className='quick-link' to='/reservation'>Reservation</NavLink></li>
              <li><NavLink className='quick-link' to='/contact'>Contact</NavLink></li>
            </ul>
          </div>
          <div>
            <h3>Opening Hours</h3>
            <p>Monday - Saturday | Open 24/7</p>
            <p>Sunday | 12.00 PM – 1.00 PM  in your timezone will be closed</p>
            <p>(Hours are calculated to Earth time)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer