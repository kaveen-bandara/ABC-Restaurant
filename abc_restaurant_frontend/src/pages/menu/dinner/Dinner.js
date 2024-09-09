import React from 'react'

import ListItem from '../../../components/listItem/ListItem'

import coffeeImage from '../../../assets/dinner-items.jpg'

import './Dinner.css'

const menuData = [
  {
    title: "Bread",
    description: "with potato curry, seeni sambol & chicken/fish/egg curry",
  },
  {
    title: "Rice",
    description: "white or red rice with dhal curry, pol sambol & chicken/fish/egg cury",
  },
  {
    title: "Kottu",
    description: "vegetable, cheese, chicken or egg",
  },
  {
    title: "Hoppers",
    description: "plain or egg with lunu miris",
  },
  {
    title: "String Hoppers",
    description: "with potato curry, pol sambol & chicken/fish/egg curry",
  },
];

const Dinner = () => {
  return (
    <div className='container dinner-selection'>
      <h1 className='heading-secondary'>Dinner</h1>

      <div className='grid-container'>
        <div>
          {menuData.map((data, i) => (
            <ListItem
              key={i}
              title={data.title}
              description={data.description}
              price={data.price}
            />
          ))}
        </div>

        <div>
          <img src={coffeeImage} alt="dinner items" />
        </div>
      </div>
    </div>
  );
};

export default Dinner