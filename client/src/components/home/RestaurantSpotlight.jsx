import React from 'react';

const RestaurantSpotlight = ({ restaurant }) => {
  return (
    <section className="restaurant-spotlight">
      <h2>Restaurant Spotlight</h2>
      <div className="restaurant-details">
        <h3>{restaurant.name}</h3>
        <p>{restaurant.description}</p>
      </div>
    </section>
  );
};

export default RestaurantSpotlight;
