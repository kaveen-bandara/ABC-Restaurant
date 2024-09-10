import React from 'react'

import g1 from '../../../assets/g1.jpg'
import g2 from '../../../assets/g2.jpg'
import g3 from '../../../assets/g3.jpg'
import g4 from '../../../assets/g4.jpg'
import g5 from '../../../assets/g5.jpg'
import g6 from '../../../assets/g6.jpg'
import g7 from '../../../assets/g7.jpg'
import g8 from '../../../assets/g8.jpg'
import g9 from '../../../assets/g9.jpg'

import './GalleryImages.css'

const GalleryImages = () => {

    const gallery = [
        {id: 1, src: g1, alt: "gallery1"},
        {id: 2, src: g2, alt: "gallery2"},
        {id: 3, src: g3, alt: "gallery3"},
        {id: 4, src: g4, alt: "gallery4"},
        {id: 5, src: g5, alt: "gallery5"},
        {id: 6, src: g6, alt: "gallery6"},
        {id: 7, src: g7, alt: "gallery7"},
        {id: 8, src: g8, alt: "gallery8"},
        {id: 9, src: g9, alt: "gallery9"},
    ]

  return (
    <div className='section'>
        <div className='gallery-container'>
            <div className='container'>
                <div className='gallery-card-container'>
                    {gallery.map(image => (
                        <img key={image.id} src={image.src} alt={image.alt} className='gallery-card-image' />
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default GalleryImages