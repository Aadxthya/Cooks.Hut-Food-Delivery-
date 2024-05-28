import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem'; // Ensure this import path is correct

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  // Filtering the food list based on the category
  const filteredFoodList = category === 'All' ? food_list : food_list.filter(item => item.category === category);

  return (
    <div className='food_display' id='food-display'>
      <h2>Top Dishes</h2>
      <div className='food-display-list'>
        {filteredFoodList.map((item, index) => (
          <FoodItem
            key={index}
            id={item._id}
            name={item.name}
            description={item.description} // Fixed typo from "desicription" to "description"
            price={item.price}
            image={item.image} // Fixed typo from "description" to "image"
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
