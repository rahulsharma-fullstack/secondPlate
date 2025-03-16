import React from 'react';
import { FaLeaf } from 'react-icons/fa';

function JoinMovement() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Join the Movement to Reduce Food Waste
          </h2>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <FaLeaf className="text-green-500 text-2xl" />
              </div>
            </div>
            
            <p className="text-gray-600 mb-4">
              Every year, tons of perfectly good food goes to waste. By choosing to buy surplus food, you're helping reduce waste while enjoying quality meals at a discount.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinMovement;