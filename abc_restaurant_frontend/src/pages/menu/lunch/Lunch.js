import React from 'react'

import ListItem from '../../../components/listItem/ListItem'

import lunch from '../../../assets/lunch-items.jpg'

import './Lunch.css'
  
  const menuData = [
    {
      title: "Rice & Curry",
      description: "white or red rice with dhal curry, pol sambol, kola mallum & fried chicken/fish/pork/beef/egg",
    },
    {
      title: "Fried Rice",
      description: "chicken, fish, pork, beef, egg or vegetarian",
    },
    {
      title: "Pizza",
      description: "cheese, chicken or beef",
    },
    {
      title: "Fried Chicken",
      description: "with broccoli & chips",
    },
    {
      title: "Beef Steak",
      description: "with mushrooms & fries",
    },
    {
      title: "Sandwiches",
      description: "chicken, fish or egg",
    },
    {
      title: "Short Eats",
      description: "rolls, buns & pastries",
    },
  ];

const Lunch = () => {
  return (
    <div className='section'>
        <div className='container lunch-selection'>
      <h1 className='heading-secondary'>Lunch</h1>

      <div className='grid-container'>
        <div>
          <img src={lunch} alt="lunch items" />
        </div>

        <div>
          {menuData.map((data, i) => (
            <ListItem
              key={i}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Lunch