import React from 'react'

import ListItem from '../../../components/listItem/ListItem'

import breakfast from '../../../assets/breakfast-items.jpg'

import './Breakfast.css'

const menuData = [
  {
    title: "String Hoppers",
    description: "with potato curry, pol sambol & chicken/fish/egg curry",
  },
  {
    title: "Bread",
    description: "with dhal curry, pol sambol & chicken/fish/egg curry",
  },
  {
    title: "Hoppers",
    description: "plain or egg with lunu miris",
  },
  {
    title: "High Protein, Low Carb",
    description: "grilled chicken breast with veggies",
  },
  {
    title: "Rice & Curry",
    description: "white or red rice with dhal curry, pol sambol & fried chicken/fish/egg",
  },
  {
    title: "Pancakes",
    description: "with chocolate sauce or maple syrup, honey & cream",
  },
];

const Breakfast = () => {
  return (
    <div className='container breakfast-selection'>
      <h1 className='heading-secondary'>Breakfast</h1>

      <div className='grid-container'>
        <div>
          {menuData.map((data, i) => (
            <ListItem
              key={i}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>

        <div>
          <img src={breakfast} alt="breakfast items" />
        </div>
      </div>
    </div>
  );
};

export default Breakfast