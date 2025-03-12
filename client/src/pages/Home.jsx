import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedRestaurants from '../components/home/FeaturedRestaurants';
import Categories from '../components/home/Categories';
import HowItWorks from '../components/home/HowItWorks';
import RestaurantSpotlight from '../components/home/RestaurantSpotlight';
import JoinMovement from '../components/home/JoinMovement';
import CallToAction from '../components/home/CallToAction';

const Home = () => {
  const featuredRestaurants = [
    // ...sample data...
  ];

  const categories = [
    // ...sample data...
  ];

  const spotlightRestaurant = {
    // ...sample data...
  };

  return (
    <>
      <Hero />
      <FeaturedRestaurants restaurants={featuredRestaurants} />
      <Categories categories={categories} />
      <HowItWorks />
      <RestaurantSpotlight restaurant={spotlightRestaurant} />
      <JoinMovement />
      <CallToAction />
    </>
  );
};

export default Home;
