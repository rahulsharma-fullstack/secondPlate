import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/home/HeroSection';
import FoodCategorySection from '@/components/common/FoodCategorySection';
import JoinMovement from '@/components/home/JoinMovement';
import RestaurantSpotlight from '@/components/home/RestaurantSpotlight';
import CallToAction from '@/components/home/CallToAction';
import Footer from '@/components/layout/Footer';
import RestaurantCard from '@/components/common/RestaurantCard';
import AnimatedSection from '@/components/common/AnimatedSection';
import { setupScrollAnimations } from '@/lib/animations';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/common/Button';

// Sample restaurant data
const popularRestaurants = [
  {
    id: 1,
    name: "Pizza Express",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cuisine: "Italian • Pizza",
    distance: "0.8 miles",
    discount: 30,
    rating: 4.7,
    closingTime: "10 PM",
    itemsLeft: 8
  },
  {
    id: 2,
    name: "Sushi Palace",
    image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cuisine: "Japanese • Sushi",
    distance: "1.2 miles",
    discount: 25,
    rating: 4.5,
    closingTime: "9:30 PM",
    itemsLeft: 5,
    isFavorite: true
  },
  {
    id: 3,
    name: "Taco Heaven",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cuisine: "Mexican • Tacos",
    distance: "0.5 miles",
    discount: 40,
    rating: 4.3,
    closingTime: "11 PM",
    itemsLeft: 12
  },
  {
    id: 4,
    name: "Green Curry",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cuisine: "Thai • Curry",
    distance: "1.5 miles",
    discount: 35,
    rating: 4.8,
    closingTime: "9 PM",
    itemsLeft: 3
  }
];

const Home = () => {
  useEffect(() => {
    // Setup animations that trigger on scroll
    const cleanupAnimation = setupScrollAnimations();

    // Cleanup on component unmount
    return () => {
      if (cleanupAnimation) cleanupAnimation();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main>
        <HeroSection />

        <section id="restaurants" className="py-20">
          <div className="container-custom">
            <AnimatedSection animation="fade-up" className="flex flex-col md:flex-row md:items-end justify-between mb-10">
              <div>
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                  Popular Near You
                </div>
                <h2 className="h2">Featured Restaurants</h2>
              </div>
              <Button variant="outline" className="mt-4 md:mt-0 flex items-center group">
                View All
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          </div>
        </section>

        <FoodCategorySection />
        <JoinMovement />
        <RestaurantSpotlight />

        <section className="py-20 bg-primary/5 relative overflow-hidden">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedSection animation="fade-up">
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                  Join Today
                </div>
                <h2 className="h2 mb-4">Ready to Save Money and Reduce Food Waste?</h2>
                <p className="text-lg text-foreground/70 mb-8">
                  Join thousands of satisfied customers enjoying discounted meals from local restaurants. Sign up now to start saving!
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="lg">Find Restaurants</Button>
                  <Button variant="outline" size="lg">For Restaurant Owners</Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;