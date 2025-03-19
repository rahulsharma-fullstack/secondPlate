import { CheckCircle2, MapPin, Utensils, CreditCard } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const steps = [
  {
    icon: <MapPin className="h-10 w-10 text-primary" />,
    title: "Find Nearby Restaurants",
    description: "Discover local restaurants with surplus food available at discounted prices."
  },
  {
    icon: <CreditCard className="h-10 w-10 text-primary" />,
    title: "Place Your Order",
    description: "Order directly through the app for pickup or dine-in at your chosen restaurant."
  },
  {
    icon: <Utensils className="h-10 w-10 text-primary" />,
    title: "Enjoy Your Meal",
    description: "Pick up your discounted meal or dine in using the digital coupon in the app."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-secondary/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <div className="container-custom">
        <AnimatedSection animation="fade-up" className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
            Simple Process
          </div>
          <h2 className="h2 mb-4">How secondPlate Works</h2>
          <p className="text-lg text-foreground/70">
            Our platform connects you with local restaurants offering surplus food at great discounts, making it easy to save money and reduce food waste.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/3 left-0 right-0 h-0.5 bg-primary/20"></div>
          
          {steps.map((step, index) => (
            <AnimatedSection 
              key={index}
              animation="fade-up"
              delay={index * 0.1}
              className="relative bg-white rounded-2xl p-6 shadow-md"
            >
              {/* Step number */}
              <div className="absolute -top-5 left-6 flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-bold">
                {index + 1}
              </div>
              
              <div className="pt-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-primary/10">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-foreground/70">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection animation="fade-up" className="max-w-3xl mx-auto mt-16 bg-white rounded-2xl p-6 md:p-8 shadow-md">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-shrink-0">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Join the Movement to Reduce Food Waste</h3>
              <p className="text-foreground/70">
                Every year, billions of pounds of food are wasted worldwide. By choosing to purchase surplus food, you're helping restaurants reduce waste while enjoying quality meals at a discount.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HowItWorks;