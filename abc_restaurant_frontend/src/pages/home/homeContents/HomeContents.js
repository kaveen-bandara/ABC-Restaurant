import React, { useState } from 'react'
import { BsFillStarFill } from 'react-icons/bs'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import change1 from '../../../assets/change1.jpg'
import change2 from '../../../assets/change2.jpg'
import change3 from '../../../assets/change3.jpg'
import change4 from '../../../assets/change4.jpg'
import ingredients from '../../../assets/ingredients.jpg'
import delivery from '../../../assets/delivery.jpg'
import reservation from '../../../assets/reservation.jpg'

import './HomeContents.css'

const HomeContents = () => {

    const [items] = useState([
        {id: 1, src: change1},
        {id: 2, src: change2},
        {id: 3, src: change3},
        {id: 4, src: change4},
    ])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 5000,
      };

  return (
    <div className='section'>
        <div className='container'>
            <div className='home-container'>
                <div className='home-carousel'>
                    <div>
                        <Slider {...settings}>
                            {items.map(item => (
                                <div key={item.id}>
                                    <img src={item.src} alt="carousel" />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                <div className='home-content'>
                    <h2 className='heading-secondary'>
                        Amazing meals <span className='ampersand'>&</span>
                        <br />
                        <span>
                            Great <br /> Entertainment
                        </span>
                    </h2>

                    <h4>We hope to see you soon!</h4>

                    <p>Welcome to our culinary haven, where every dish is crafted with passion and precision. 
                        Whether you’re craving a classic favorite or eager to explore something new, 
                        our menu offers a delightful fusion of flavors that promise to satisfy your taste buds. 
                        Join us for an unforgettable dining experience, where exceptional food meets warm hospitality in a cozy, inviting atmosphere.
                        <br />
                        Pair your meal with our signature cocktails, fine wines or refreshing beverages for the perfect culinary experience.
                    </p>
                    <br />

                    <blockquote>
                    Good food is the foundation of genuine happiness. Here, we don’t just serve meals; we create memorable experiences, one plate at a time.
                    </blockquote>
                </div>
            </div>

            <div className='home-card-container'>
                <div className='home-card home-card-left'>
                    <img src={ingredients} alt="ingredients" className='home-card-image' />
                    
                    <div className='home-card-content'>
                        <div className='home-card-title'>
                            <BsFillStarFill color='#c3512f' />
                            <h3 className='heading-tertiary'>the best <span>ingredients</span></h3>
                        </div>

                        <p>At our restaurant, we believe that great food starts with the best ingredients. 
                            That’s why we source the freshest produce, finest cuts of meat and premium spices to ensure every dish bursts with flavor. 
                            Our commitment to quality means every bite you take is packed with natural goodness and authentic taste.</p>
                    </div> 
                </div>
                <div className='home-card home-card-middle'>
                    <img src={delivery} alt="delivery" className='home-card-image' />
                    
                    <div className='home-card-content'>
                        <div className='home-card-title'>
                            <BsFillStarFill color='#c3512f' />
                            <h3 className='heading-tertiary'>food takeout & <span>delivery</span></h3>
                        </div>

                        <p>Enjoy our delicious food from the comfort of your home with our convenient takeout and delivery options. 
                            Whether you’re craving a quick lunch or a cozy dinner, our full menu is available to order. 
                            Simply choose your favorites, and we’ll have them freshly prepared and delivered right to your door!</p>
                    </div> 
                </div>
                <div className='home-card home-card-right'>
                    <img src={reservation} alt="reservation" className='home-card-image' />
                    
                    <div className='home-card-content'>
                        <div className='home-card-title'>
                            <BsFillStarFill color='#c3512f' />
                            <h3 className='heading-tertiary'>make your <span>reservation</span></h3>
                        </div>

                        <p>Ready to enjoy an exceptional dining experience? Make your reservation today to secure your table at our restaurant. 
                            Whether it’s a special occasion or a casual meal, we ensure every visit is unforgettable. Simply call or book online, 
                            and we’ll take care of the rest!</p>
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeContents
