import React from 'react'

import './AboutInfo.css'

const AboutInfo = () => {
  return (
    <div className='section'>
      <div className='container grid-container'>
        <div>
          <div className='about-info-content'>
            <h2 className='heading-secondary'>
              A FEW WORDS <span>ABOUT US</span>
            </h2>

            <h4>Let us introduce ourselves</h4>

            <p>
              Welcome to ABC Restaurant, where passion for food meets a commitment to excellence. 
              We are a team of dedicated chefs and food enthusiasts, driven by the belief that great meals are the foundation of memorable experiences. 
            </p>

            <blockquote>
              Every dish tells a story, and at ABC Restaurant, we make sure it’s one you’ll want to hear again and again.
            </blockquote>

            <p>
              With a focus on fresh, locally sourced ingredients and a menu that blends tradition with innovation, 
              we strive to offer a dining experience that’s both comforting and exciting. Whether you’re a first-time guest or a regular, 
              our goal is to make every visit to ABC Restaurant feel like coming home.
            </p>
          </div>
        </div>

        <div>
          <div className="about-info-content">
            <h2 className="heading-secondary">
              A PLACE TO WINE, A PLACE <span>TO DINE</span>
            </h2>

            <h4>We hope to see you soon!</h4>

            <p>
              At ABC Restaurant, we offer more than just a meal. We provide a place to wine, a place to dine and a space to unwind. 
              Whether you’re here for a casual dinner or a special occasion, our welcoming atmosphere and thoughtfully curated menu create the perfect setting for any event. 
            </p>

            <blockquote>
              Good food, good wine and great memories. Every visit to ABC Restaurant is a celebration of life’s simple pleasures.
            </blockquote>

            <p>
              With a selection of fine wines and handcrafted dishes, we invite you to savor every moment. 
              We hope to see you soon and share in your next memorable dining experience!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo