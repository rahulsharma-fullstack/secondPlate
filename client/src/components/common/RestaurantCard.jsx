import { Clock, Navigation } from 'lucide-react';
// Correct the import path for DiscountBadge
import DiscountBadge from './DiscountBadge';
import AnimatedSection from './AnimatedSection';

const RestaurantCard = ({ 
  restaurant, 
  className = '',
  ...props 
}) => {
  const { 
    name, 
    image, 
    cuisine, 
    distance, 
    discount, 
    rating, 
    closingTime,
    itemsLeft,
    isFavorite = false
  } = restaurant;
  
  return (
    <AnimatedSection
      animation="fade-up"
      className={`group relative overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg ${className}`}
      {...props}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        
        {/* Discount badge */}
        <div className="absolute top-3 left-3">
          <DiscountBadge discount={discount} />
        </div>
        
        {/* Rating badge */}
        <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm text-foreground font-medium text-sm py-1 px-2 rounded flex items-center">
          {rating} ★
        </div>
        
        {/* Favorite button */}
        <button className="absolute top-3 right-14 h-7 w-7 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={isFavorite ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            className={isFavorite ? "text-red-500" : "text-gray-700"}
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-sm text-foreground/70">{cuisine}</p>
          </div>
        </div>
        
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center text-sm text-foreground/70">
            <Navigation className="mr-1 h-4 w-4" />
            <span>{distance} away</span>
          </div>
          <div className="flex items-center text-sm text-foreground/70">
            <Clock className="mr-1 h-4 w-4" />
            <span>Closes at {closingTime}</span>
          </div>
        </div>
        
        <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
          <div className="text-sm font-medium">
            <span className="text-amber-600">{itemsLeft} items left</span>
          </div>
          <button className="text-primary text-sm font-medium hover:underline transition-all">
            View Menu
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default RestaurantCard;