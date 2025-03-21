import React from 'react';
import RestaurantCard from '../components/common/RestaurantCard';

function Restaurants() {
  // Mock data for restaurants (expanded from the FeaturedRestaurants component)
  const restaurants = [
    {
      id: 1,
      name: "Pizza Express",
      image: "https://plus.unsplash.com/premium_photo-1673580742890-4af144293960?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      image: "https://plus.unsplash.com/premium_photo-1673580742890-4af144293960?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      image: "https://plus.unsplash.com/premium_photo-1673580742890-4af144293960?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      image: "https://plus.unsplash.com/premium_photo-1673580742890-4af144293960?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cuisine: "Thai • Curry",
      rating: 4.6,
      distance: "1.2 miles",
      closingTime: "9 PM",
      discountPercent: 35,
      itemsLeft: 8
    },
    {
      id: 5,
      name: "Burger Joint",
      image: "https://plus.unsplash.com/premium_photo-1673580742890-4af144293960?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cuisine: "American • Burgers",
      rating: 4.4,
      distance: "0.9 miles",
      closingTime: "10 PM",
      discountPercent: 20,
      itemsLeft: 15
    },
    {
      id: 6,
      name: "Pasta Paradise",
      image: "https://plus.unsplash.com/premium_photo-1673580742890-4af144293960?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cuisine: "Italian • Pasta",
      rating: 4.7,
      distance: "1.5 miles",
      closingTime: "9:45 PM",
      discountPercent: 30,
      itemsLeft: 6
    },
    {
      id: 7,
      name: "Falafel Factory",
      image: "https://plus.unsplash.com/premium_photo-1673580742890-4af144293960?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cuisine: "Middle Eastern",
      rating: 4.6,
      distance: "0.8 miles",
      closingTime: "8:30 PM",
      discountPercent: 40,
      itemsLeft: 4
    },
    {
      id: 8,
      name: "Dim Sum House",
      image: "https://plus.unsplash.com/premium_photo-1673580742890-4af144293960?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cuisine: "Chinese • Dim Sum",
      rating: 4.5,
      distance: "1.3 miles",
      closingTime: "9 PM",
      discountPercent: 35,
      itemsLeft: 9
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Nearby Restaurants</h1>
        <p className="text-gray-600 mb-8">
          Discover local restaurants offering delicious meals at discounted prices to reduce food waste
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {restaurants.map(restaurant => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Restaurants;