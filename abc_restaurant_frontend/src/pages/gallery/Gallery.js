import React from 'react'

import HeroImage from '../../components/heroImage/HeroImage'
import GalleryImages from './galleryImages/GalleryImages'

import bgImage from '../../assets/wine.jpeg'

const Gallery = () => {
  return (
    <div>
      <HeroImage
        bgImage={bgImage}
        heading={<span>Gallery</span>}
        text="Check out our snaps from the kitchen & Restaurant"
      />
      <GalleryImages />
    </div>
  )
}

export default Gallery