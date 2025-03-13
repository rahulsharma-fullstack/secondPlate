import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaClock } from 'react-icons/fa';

function RestaurantCard({ restaurant }) {
  const { id, name, image, cuisine, rating, distance, closingTime, discountPercent, itemsLeft } = restaurant;
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
        {discountPercent && (
          <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-md text-sm font-medium">
            {discountPercent}% OFF
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white rounded-md px-2 py-1 flex items-center shadow-sm">
          <FaStar className="text-yellow-400 mr-1" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-gray-800">{name}</h3>
            <p className="text-gray-500 text-sm">{cuisine}</p>
          </div>
          <div className="text-sm text-gray-500 flex items-center">
            <FaClock className="mr-1" />
            <span>Closes at {closingTime}</span>
          </div>
        </div>
        
        <div className="mt-3 flex justify-between items-center">
          <span className="text-sm text-orange-500 font-medium">
            {itemsLeft} items left
          </span>
          <Link to={`/restaurant/${id}`} className="text-green-500 text-sm font-medium hover:text-green-600">
            View Menu
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;