import { useEffect, useRef } from 'react';

const AnimatedSection = ({ 
  children, 
  className = '',
  animation = "fade",
  delay = 0,
  threshold = 0.1,
  as: Component = 'div',
  ...props 
}) => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    // Set initial state and apply delay if specified
    section.style.opacity = '0';
    
    if (delay) {
      section.style.transitionDelay = `${delay}s`;
    }
    
    // Apply transform based on animation type
    switch(animation) {
      case 'fade-up':
        section.style.transform = 'translateY(30px)';
        break;
      case 'fade-down':
        section.style.transform = 'translateY(-30px)';
        break;
      case 'fade-left':
        section.style.transform = 'translateX(-30px)';
        break;
      case 'fade-right':
        section.style.transform = 'translateX(30px)';
        break;
      case 'scale':
        section.style.transform = 'scale(0.95)';
        break;
      case 'fade':
      default:
        break;
    }
    
    // Create intersection observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Apply transition
          section.style.transition = 'opacity 0.8s cubic-bezier(0.13, 0.53, 0.38, 0.97), transform 0.8s cubic-bezier(0.13, 0.53, 0.38, 0.97)';
          section.style.opacity = '1';
          section.style.transform = 'translate(0, 0) scale(1)';
          
          // Unobserve after animation
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );
    
    observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, [animation, delay, threshold]);
  
  return (
    <Component
      ref={sectionRef}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

export default AnimatedSection;