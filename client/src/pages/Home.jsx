import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedRestaurants from '../components/home/FeaturedRestaurants';
import HowItWorks from '../components/home/HowItWorks';
import JoinMovement from '../components/home/JoinMovement';
import RestaurantSpotlight from '../components/home/RestaurantSpotlight';
import CallToAction from '../components/home/CallToAction';


function Home() {
  return (
    <div className="bg-gray-50">
      <Hero />
      <FeaturedRestaurants />
      <HowItWorks />
      <JoinMovement />
      <RestaurantSpotlight/>
      <CallToAction />
    </div>
  );
}

export default Home;