import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

function Header() {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-green-500 font-bold text-xl">
            <span className="text-gray-800">second</span>Plate
          </Link>
          
          <nav className="ml-8 hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link to="/how-it-works" className="text-gray-600 hover:text-green-500">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/restaurants" className="text-gray-600 hover:text-green-500">
                  Restaurants
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-600 hover:text-green-500">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-green-500">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="flex items-center space-x-3">
          <Link to="/restaurants" className="text-sm text-green-600 border border-green-600 rounded-full px-3 py-1 hover:bg-green-50">
            Restaurant Login
          </Link>
          <Button primary>Order Now</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;