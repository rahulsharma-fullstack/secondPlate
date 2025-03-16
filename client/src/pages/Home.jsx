import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedRestaurants from '../components/home/FeaturedRestaurants';
import HowItWorks from '../components/home/HowItWorks';

function Home() {
  return (
    <div className="bg-gray-50">
      <Hero />
      <FeaturedRestaurants />
      <HowItWorks />
    </div>
  );
}

export default Home;