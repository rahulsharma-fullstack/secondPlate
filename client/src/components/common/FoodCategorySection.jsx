import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const categories = [
  {
    id: 'all',
    name: 'All',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'italian',
    name: 'Italian',
    image: 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'asian',
    name: 'Asian',
    image: 'https://images.unsplash.com/photo-1541696490-8744a5dc0228?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'mexican',
    name: 'Mexican',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'indian',
    name: 'Indian',
    image: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'desserts',
    name: 'Desserts',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'healthy',
    name: 'Healthy',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'fast-food',
    name: 'Fast Food',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

const FoodCategorySection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="categories" className="py-16 relative overflow-hidden">
      <div className="container-custom">
        <AnimatedSection animation="fade-up" className="mb-8 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
            Categories
          </div>
          <h2 className="h2 mb-4">Browse by Food Category</h2>
          <p className="text-lg text-foreground/70">
            Explore restaurants by cuisine type and find the perfect discounted meal
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" className="relative">
          {/* Scroll shadows */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
          
          {/* Scroll buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          
          {/* Categories */}
          <div 
            ref={containerRef}
            className="flex overflow-x-auto pb-4 space-x-4 scrollbar-hide px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-shrink-0 group transition-all ${activeCategory === category.id ? 'scale-105' : ''}`}
              >
                <div className="w-40 overflow-hidden rounded-xl relative">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className={`w-full h-full object-cover transition-all duration-300 ${activeCategory === category.id ? 'scale-105' : 'group-hover:scale-105'}`} 
                    />
                  </div>
                  <div className={`absolute inset-0 ${activeCategory === category.id ? 'bg-primary/50' : 'bg-black/40 group-hover:bg-black/30'} transition-all`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold text-lg drop-shadow-md">{category.name}</span>
                  </div>
                  {activeCategory === category.id && (
                    <div className="absolute -bottom-px left-0 right-0 h-1 bg-primary"></div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FoodCategorySection;