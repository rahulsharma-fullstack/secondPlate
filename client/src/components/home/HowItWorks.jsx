import React from 'react';
import { FaSearch, FaShoppingCart, FaUtensils } from 'react-icons/fa';

function HowItWorks() {
  const steps = [
    {
      id: 1,
      icon: <FaSearch className="text-green-500 text-3xl" />,
      title: "Find Nearby Restaurants",
      description: "Discover local restaurants with surplus food available at discounted prices."
    },
    {
      id: 2,
      icon: <FaShoppingCart className="text-green-500 text-3xl" />,
      title: "Place Your Order",
      description: "Order directly through the app for pickup or dine-in at your chosen restaurant."
    },
    {
      id: 3,
      icon: <FaUtensils className="text-green-500 text-3xl" />,
      title: "Enjoy Your Meal",
      description: "Pick up your discounted meal or dine in using the digital receipt in the app."
    }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-2">
          <span className="text-sm font-medium text-green-500">Simple Process</span>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          How secondPlate Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
              </div>
              
              <div className="relative mb-6">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full border-t border-gray-200 -z-10"></div>
                <div className="bg-white w-8 h-8 rounded-full border-2 border-green-500 flex items-center justify-center mx-auto text-green-500 font-medium">
                  {step.id}
                </div>
              </div>
              
              <h3 className="font-semibold mb-2 text-gray-800">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;