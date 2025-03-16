import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedRestaurants from '../components/home/FeaturedRestaurants';
import HowItWorks from '../components/home/HowItWorks';
import JoinMovement from '../components/home/JoinMovement';

function Home() {
  return (
    <div className="bg-gray-50">
      <Hero />
      <FeaturedRestaurants />
      <HowItWorks />
      <JoinMovement />
    </div>
  );
}

export default Home;