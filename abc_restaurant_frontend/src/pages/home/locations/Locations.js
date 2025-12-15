import React from 'react'

import colombo from '../../../assets/colombo.jpg'
import galle from '../../../assets/galle.jpg'
import kandy from '../../../assets/kandy.jpg'

import './Locations.css'

const Locations = () => {
  return (
    <div className='section'>
        <div className='location-container'>
            <br /><br />
            <h1 className='heading-primary'><center>Locations</center></h1>
            <div className='container'>
                <div className='location-card-container'>
                    <div className='location-card'>
                        <img src={location} alt="colombo" className='location-card-image' />
                        <center><button>Colombo</button></center>
                    </div>

                    <div className='location-card'>
                        <img src={galle} alt="galle" className='location-card-image' />
                        <center><button>Galle</button></center>
                    </div>

                    <div className='location-card'>
                        <img src={kandy} alt="kandy" className='location-card-image' />
                        <center><button>Kandy</button></center>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Locations