import React from 'react';
import RestaurantCard from '../common/RestaurantCard';

const FeaturedRestaurants = ({ restaurants }) => {
  return (
    <section className="featured-restaurants">
      <h2>Featured Restaurants</h2>
      <div className="restaurant-list">
        {restaurants.map(restaurant => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedRestaurants;
