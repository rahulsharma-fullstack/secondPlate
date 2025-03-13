import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


function Footer() {
  return (
    <footer className="bg-secondary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img src='./Logo.png' alt="secondPlate logo" className="h-8 w-8 mr-2" /> {/* Add the logo */}
              <span className="text-white font-bold text-xl">second<span className="text-primary">Plate</span></span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Connecting restaurants with customers to reduce food waste and offer great discounts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase">For Customers</h3>
            <ul className="space-y-2">
              <li><Link to="/how-it-works" className="text-gray-400 hover:text-white text-sm">How It Works</Link></li>
              <li><Link to="/restaurants" className="text-gray-400 hover:text-white text-sm">Nearby Restaurants</Link></li>
              <li><Link to="/mobile-app" className="text-gray-400 hover:text-white text-sm">Mobile App</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white text-sm">FAQs</Link></li>
              <li><Link to="/support" className="text-gray-400 hover:text-white text-sm">Contact Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase">For Restaurants</h3>
            <ul className="space-y-2">
              <li><Link to="/partner" className="text-gray-400 hover:text-white text-sm">Partner With Us</Link></li>
              <li><Link to="/business-benefits" className="text-gray-400 hover:text-white text-sm">Business Benefits</Link></li>
              <li><Link to="/dashboard" className="text-gray-400 hover:text-white text-sm">Restaurant Dashboard</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white text-sm">Pricing</Link></li>
              <li><Link to="/resources" className="text-gray-400 hover:text-white text-sm">Resources</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white text-sm">About Us</Link></li>
              <li><Link to="/teams" className="text-gray-400 hover:text-white text-sm">Our Team</Link></li>
              <li><Link to="/testimonial" className="text-gray-400 hover:text-white text-sm">Testimonials</Link></li>
              <li><Link to="/mission" className="text-gray-400 hover:text-white text-sm">Our Mission</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 secondPlate. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
            <Link to="/cookies" className="text-gray-400 hover:text-white text-sm">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;