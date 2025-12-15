import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Topnav from './components/topnav/Topnav'
import Footer from './components/footer/Footer'

import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Delivery from './pages/delivery/Delivery'
import Gallery from './pages/gallery/Gallery'
import Home from './pages/home/Home'
import Menu from './pages/menu/Menu'
import Reservation from './pages/reservation/Reservation'
import Admin from './pages/admin/Admin'

function App() {
  return (
    <div>
      <Topnav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/delivery' element={<Delivery />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/reservation' element={<Reservation />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;