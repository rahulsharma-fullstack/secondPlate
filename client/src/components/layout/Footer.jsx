import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-white/10">
          <div>
            <div className="text-2xl font-bold mb-4">
              second<span className="text-primary">Plate</span>
            </div>
            <p className="text-white/70 mb-6">
              Connecting restaurants with conscious consumers to reduce food waste and offer great discounts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">For Customers</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors">Browse Restaurants</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors">Mobile App</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors">FAQs</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors">Contact Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">For Restaurants</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors">Partner With Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors">Business Benefits</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors">Restaurant Dashboard</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors">Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors">Our Mission</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors">Press</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/70 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} secondPlate. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-white/70 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-white/70 hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;