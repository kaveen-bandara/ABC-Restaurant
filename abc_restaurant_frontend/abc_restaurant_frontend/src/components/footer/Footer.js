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
            <p>Locations: Colombo, Galle, Kandy</p>
            <p>Email: reservations@abcrestaurant.lk</p>
            <p>Phone: (+94) 77 243 6763</p>
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
            <p>Monday - Thursday</p>
            <p>12.00 – 3.30 PM & 6.30 -10.30 PM</p>
            <p>Friday - Sunday</p>
            <p>12.00 – 3.30 PM & 6.30 -10.30 PM</p>
            <p>(Hours may differ)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer