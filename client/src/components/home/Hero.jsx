import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

function Hero() {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <div className="mb-4">
              <span className="inline-flex items-center text-primary text-sm">
                <span className="w-2 h-2 inline-block bg-primary rounded-full mr-2"></span>
                Reducing Food Waste, One Meal at a Time
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Delicious food at <span className="text-primary">amazing discounts</span>
            </h1>
            
            <p className="text-gray-600 mb-6">
              Connect with local restaurants offering substantial discounts on 
              surplus food. Save money, reduce waste, and enjoy great meals.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Link to="/restaurants">
                <Button primary>Find Restaurants</Button>
              </Link>
              <Link to="/for-restaurants">
                <Button>For Restaurants</Button>
              </Link>
            </div>
            
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((id) => (
                  <div key={id} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>
                ))}
              </div>
              <span className="ml-3 text-sm text-gray-600">
                Trusted by 2,580+ users
              </span>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-3 max-w-xs mx-auto">
                <div className="relative rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="A dish of food" 
                    className="w-full rounded-lg"
                  />
                  <div className="absolute top-3 right-3 bg-white text-xs rounded px-2 py-1 font-medium">
                    4.8 ★ (112)
                  </div>
                </div>
                
                <div className="pt-3">
                  <h3 className="font-medium text-gray-800">Italian Bistro</h3>
                  <p className="text-gray-500 text-xs">Mediterranean • 0.7 miles</p>
                  
                  <div className="mt-3 flex justify-between items-center">
                    <button className="bg-primary text-white text-sm px-3 py-1 rounded-md">
                      40%
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;