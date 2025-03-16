import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { FaStar } from 'react-icons/fa';

function RestaurantSpotlight() {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-2">
          <span className="text-sm font-medium text-green-500">Featured</span>
        </div>
        
        <h2 className="text-2xl font-bold text-center mb-4">
          Restaurant Spotlight
        </h2>
        
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Discover our featured restaurants offering amazing discounts on quality surplus food
        </p>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="md:flex">
            <div className="md:w-1/2 relative">
              <img 
                src="https://plus.unsplash.com/premium_photo-1670601440146-3b33dfcd7e17?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Restaurant interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                25% OFF
              </div>
              <div className="absolute top-4 right-4 bg-white rounded-md px-2 py-1 flex items-center shadow-sm">
                <FaStar className="text-yellow-400 mr-1" />
                <span className="text-sm font-medium">4.9</span>
              </div>
            </div>
            
            <div className="md:w-1/2 p-6 md:p-8">
              <h3 className="text-xl font-bold mb-1">
                Spotlight on
              </h3>
              <h2 className="text-2xl font-bold text-green-600 mb-3">
                The Italian Bistro
              </h2>
              
              <p className="text-gray-600 mb-4">
                Authentic Italian cuisine with homemade pasta and wood-fired pizzas. Save on their daily pasta special and seasonal desserts.
              </p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">
                  Today's Discounted Items:
                </h4>
                <ul className="space-y-1">
                  <li className="flex items-center text-sm">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                    Margherita Pizza
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                    Tiramisu
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Button primary>View Menu</Button>
                <Button>Reserve Now</Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-6">
          <div className="flex space-x-2">
            {[1, 2, 3].map((id) => (
              <button 
                key={id}
                className={`w-2 h-2 rounded-full ${id === 1 ? 'bg-green-500' : 'bg-gray-300'}`}
                aria-label={`View spotlight restaurant ${id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantSpotlight;