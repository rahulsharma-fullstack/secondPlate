import { useState } from 'react';
import { ArrowRight, ArrowLeft, Star } from 'lucide-react';
// Correct the import path for Button
import Button from '@/components/common/Button';
import DiscountBadge from '@/components/common/DiscountBadge';
import AnimatedSection from '@/components/common/AnimatedSection';

const restaurants = [
  {
    id: 1,
    name: "The Italian Bistro",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Authentic Italian cuisine with homemade pasta and wood-fired pizzas. Save on our daily pasta special and seasonal desserts.",
    discount: 35,
    cuisine: "Italian",
    rating: 4.8,
    items: ["Pasta Carbonara", "Margherita Pizza", "Tiramisu"]
  },
  {
    id: 2,
    name: "Spice Garden",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Bold and flavorful Indian cuisine featuring traditional curries, fresh naan, and signature tandoori dishes. Enjoy discounts on our daily special thali.",
    discount: 40,
    cuisine: "Indian",
    rating: 4.6,
    items: ["Butter Chicken", "Vegetable Biryani", "Garlic Naan"]
  },
  {
    id: 3,
    name: "Sushi Express",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Premium sushi and Japanese cuisine prepared with the freshest ingredients. Get discounts on our chef's special rolls and bento boxes.",
    discount: 30,
    cuisine: "Japanese",
    rating: 4.7,
    items: ["California Roll", "Salmon Nigiri", "Chicken Teriyaki"]
  }
];

const RestaurantSpotlight = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextRestaurant = () => {
    setCurrentIndex((prev) => (prev + 1) % restaurants.length);
  };
  
  const prevRestaurant = () => {
    setCurrentIndex((prev) => (prev - 1 + restaurants.length) % restaurants.length);
  };
  
  const restaurant = restaurants[currentIndex];
  
  return (
    <section id="spotlight" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
      
      <div className="container-custom">
        <AnimatedSection animation="fade-up" className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
            Featured
          </div>
          <h2 className="h2 mb-4">Restaurant Spotlight</h2>
          <p className="text-lg text-foreground/70">
            Discover our featured restaurants offering amazing discounts on quality surplus food
          </p>
        </AnimatedSection>
        
        <AnimatedSection 
          key={restaurant.id} 
          animation="fade" 
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative aspect-video lg:aspect-auto">
              <img 
                src={restaurant.image} 
                alt={restaurant.name} 
                className="h-full w-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <DiscountBadge discount={restaurant.discount} size="lg" />
              </div>
              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-foreground font-medium rounded-lg py-1 px-3 flex items-center">
                <Star className="w-4 h-4 text-amber-500 mr-1 fill-amber-500" />
                <span>{restaurant.rating}</span>
              </div>
            </div>
            
            <div className="p-6 md:p-8 flex flex-col">
              <div className="mb-2">
                <div className="text-sm font-medium text-primary">{restaurant.cuisine} Restaurant</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">{restaurant.name}</h3>
                <p className="text-foreground/70 mb-6">{restaurant.description}</p>
              </div>
              
              <div className="mb-8">
                <h4 className="font-medium mb-3">Today's Discounted Items:</h4>
                <ul className="space-y-2">
                  {restaurant.items.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-auto flex flex-col sm:flex-row items-center gap-4">
                <Button className="w-full sm:w-auto">View Menu</Button>
                <Button variant="outline" className="w-full sm:w-auto">Reserve Now</Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        <div className="flex justify-center mt-8 space-x-4">
          <button 
            onClick={prevRestaurant}
            className="h-10 w-10 rounded-full border border-foreground/20 flex items-center justify-center transition-all hover:bg-primary hover:text-white hover:border-primary"
            aria-label="Previous restaurant"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          
          <div className="flex items-center space-x-2">
            {restaurants.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 ${index === currentIndex ? 'w-8 bg-primary' : 'w-2.5 bg-foreground/20'} rounded-full transition-all`}
                aria-label={`Go to restaurant ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextRestaurant}
            className="h-10 w-10 rounded-full border border-foreground/20 flex items-center justify-center transition-all hover:bg-primary hover:text-white hover:border-primary"
            aria-label="Next restaurant"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RestaurantSpotlight;
