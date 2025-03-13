import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedRestaurants from '../components/home/FeaturedRestaurants';


function Home() {
  return (
    <div className="bg-gray-50">
      <Hero />
      <FeaturedRestaurants />
    
    </div>
  );
}

export default Home;