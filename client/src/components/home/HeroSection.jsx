import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import AnimatedSection from '../common/AnimatedSection';

const HeroSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8">
            <AnimatedSection animation="fade-right">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                Reducing Food Waste, One Meal at a Time
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-right" delay={0.1}>
              <h1 className="h1 !text-5xl md:!text-6xl lg:!text-7xl">
                Delicious food at <span className="text-primary">amazing discounts</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-right" delay={0.2}>
              <p className="text-lg md:text-xl text-foreground/80 max-w-xl">
                Connect with local restaurants offering substantial discounts on surplus food. Save money, reduce waste, and enjoy great meals.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-right" delay={0.3} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Find Restaurants
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                For Restaurants
              </Button>
            </AnimatedSection>

            <AnimatedSection animation="fade-right" delay={0.4}>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-10 w-10 rounded-full bg-secondary border-2 border-white overflow-hidden">
                      <img 
                        src={`https://i.pravatar.cc/100?img=${20 + i}`} 
                        alt="User avatar" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-medium">Trusted by 2,000+ users</div>
                  <div className="text-foreground/60 text-xs">Join our community today</div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-left" className="relative">
            <div className="relative mx-auto lg:ml-auto w-full max-w-md">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl animate-pulse-subtle">
                <img 
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Delicious food" 
                  className="h-full w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Floating elements */}
                <div className="absolute bottom-4 left-4 right-4 p-4 glass-card rounded-xl flex items-center justify-between">
                  <div>
                    <h3 className="font-bold">Italian Bistro</h3>
                    <p className="text-sm text-foreground/70">Mediterranean • 1.2 miles</p>
                  </div>
                  <div className="bg-primary text-white font-bold text-lg px-3 py-1 rounded-lg">
                    -40%
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 glass-card py-2 px-3 rounded-lg text-sm font-medium">
                  4.8 ★ (120)
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 h-36 w-36 bg-primary/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-6 -right-6 h-36 w-36 bg-primary/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;