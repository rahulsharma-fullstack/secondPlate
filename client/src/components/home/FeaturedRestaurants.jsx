import React from 'react';
import { Link } from 'react-router-dom';
import RestaurantCard from '../common/RestaurantCard';

function FeaturedRestaurants() {
  // Mock data for restaurants
  const restaurants = [
    {
      id: 1,
      name: "Pizza Express",
      image: "/api/placeholder/300/200",
      cuisine: "Italian • Pizza",
      rating: 4.7,
      distance: "0.5 miles",
      closingTime: "9:15 PM",
      discountPercent: 30,
      itemsLeft: 5
    },
    {
      id: 2,
      name: "Sushi Palace",
      image: "/api/placeholder/300/200",
      cuisine: "Japanese • Sushi",
      rating: 4.8,
      distance: "0.7 miles",
      closingTime: "9:30 PM",
      discountPercent: 40,
      itemsLeft: 3
    },
    {
      id: 3,
      name: "Taco Heaven",
      image: "/api/placeholder/300/200",
      cuisine: "Mexican • Tacos",
      rating: 4.5,
      distance: "0.4 miles",
      closingTime: "11 PM",
      discountPercent: 25,
      itemsLeft: 12
    },
    {
      id: 4,
      name: "Green Curry",
      image: "/api/placeholder/300/200",
      cuisine: "Thai • Curry",
      rating: 4.6,
      distance: "1.2 miles",
      closingTime: "9 PM",
      discountPercent: 35,
      itemsLeft: 8
    }
  ];
  
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            <span className="inline-block mr-2 text-sm text-green-500 font-normal">Popular Near You</span>
            Featured Restaurants
          </h2>
          <Link to="/restaurants" className="text-green-500 text-sm font-medium hover:text-green-600">
            View All →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map(restaurant => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedRestaurants;