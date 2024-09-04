import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

import './Topnav.css'

import logo from '../../assets/logo.png'

const Topnav = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <div className='header'>
      <div className='container'>
        <div className='nav-bar'>
          <Link to='/'>
            <img src={logo} alt="logo" width={100} />
          </Link>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li onClick={handleClick}><NavLink className='nav-link' to='/'>Home</NavLink></li>
            <li onClick={handleClick}><NavLink className='nav-link' to='/about'>About</NavLink></li>
            <li onClick={handleClick}><NavLink className='nav-link' to='/gallery'>Gallery</NavLink></li>
            <li onClick={handleClick}><NavLink className='nav-link' to='/menu'>Menu</NavLink></li>
            <li onClick={handleClick}><NavLink className='nav-link' to='/delivery'>Delivery</NavLink></li>
            <li onClick={handleClick}><NavLink className='nav-link' to='/reservation'>Reservation</NavLink></li>
            <li onClick={handleClick}><NavLink className='nav-link' to='/contact'>Contact</NavLink></li>

            <li><button>order online</button></li>
          </ul>

          <div className='hamburger' onClick={handleClick}>
            {click ? ( 
              <FaTimes size={20} style={{color:"#fff"}} />
            ) : ( 
              <FaBars size={20} style={{color:"#fff"}} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topnav