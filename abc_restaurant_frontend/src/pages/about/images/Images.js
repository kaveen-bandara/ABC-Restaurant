import React from 'react'

import view from '../../../assets/view.jpg'
import view2 from '../../../assets/view2.jpg'
import view3 from '../../../assets/view3.jpg'

import './Images.css'

const Images = () => {
  return (
    <div className='section'>
        <div className='container'>
            <div className='images-card-container'>
                <div className='images-card'>
                    <img src={view} alt="view" className='images-card-image' />
                </div>

                <div className='images-card'>
                    <img src={view2} alt="view2" className='images-card-image' />
                </div>

                <div className='images-card'>
                    <img src={view3} alt="view3" className='images-card-image' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Images