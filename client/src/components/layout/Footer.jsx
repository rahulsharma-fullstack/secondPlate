import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between">
        <div>
          <h2 className="text-lg font-bold">secondPlate</h2>
          <p>&copy; 2023 secondPlate. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://facebook.com" className="text-white hover:text-gray-400">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" className="text-white hover:text-gray-400">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" className="text-white hover:text-gray-400">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
