import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

import logo from '../../assets/logo.png'

import './Topnav.css'

const Topnav = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if(window.scrollY >= 100) {
      setColor(true)
    }
    else {
      setColor(false)
    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <div className='container'>
        <div className='nav-bar'>
          <Link to='/'>
            <img src={logo} alt="logo" width={100} />
          </Link>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li onClick={handleClick}><NavLink className='nav-link' to='/' exact activeClassName='active'>Home</NavLink></li>
            <li onClick={handleClick}><NavLink className='nav-link' to='/about' activeClassName='active'>About</NavLink></li>
            <li onClick={handleClick}><NavLink className='nav-link' to='/gallery' activeClassName='active'>Gallery</NavLink></li>
            <li onClick={handleClick}><NavLink className='nav-link' to='/menu' activeClassName='active'>Menu</NavLink></li>
            <li onClick={handleClick}><NavLink className='nav-link' to='/delivery' activeClassName='active'>Delivery</NavLink></li>
            <li onClick={handleClick}><NavLink className='nav-link' to='/reservation' activeClassName='active'>Reservation</NavLink></li>
            <li onClick={handleClick}><NavLink className='nav-link' to='/contact' activeClassName='active'>Contact</NavLink></li>
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