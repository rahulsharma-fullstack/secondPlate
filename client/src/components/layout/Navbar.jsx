import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
// Correct the import path for Button
import Button from '../common/Button';
import AnimatedSection from '../common/AnimatedSection';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Restaurants', href: '#restaurants' },
    { name: 'Categories', href: '#categories' },
    { name: 'About', href: '#about' }
  ];
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-white/80 backdrop-blur-lg shadow-sm' : 'py-5 bg-transparent'}`}>
      <nav className="container-custom flex items-center justify-between">
        <AnimatedSection animation="fade-right" className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">
              second<span className="text-foreground">Plate</span>
            </span>
          </a>
        </AnimatedSection>
        
        {/* Desktop Navigation */}
        <AnimatedSection as="ul" animation="fade" className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a 
                href={link.href}
                className="font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </AnimatedSection>
        
        <AnimatedSection animation="fade-left" className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="default">
            Restaurant Login
          </Button>
          <Button variant="default" size="default">
            Order Now
          </Button>
        </AnimatedSection>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden animate-slide-in-top">
            <div className="container-custom py-5 flex flex-col space-y-4">
              <ul className="flex flex-col space-y-3">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="block font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col space-y-3 pt-3 border-t">
                <Button variant="outline" size="default" className="w-full">
                  Restaurant Login
                </Button>
                <Button variant="default" size="default" className="w-full">
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;