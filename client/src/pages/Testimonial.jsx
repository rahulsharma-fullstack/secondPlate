import React from 'react';

const Testimonial = () => {
  return (
    <div className="bg-gray-50">
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Testimonials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Add testimonial cards here */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <p className="text-lg text-gray-600 mb-4">"SecondPlate has been a game-changer for our restaurant. We've reduced food waste and gained new customers. Highly recommend!"</p>
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">Owner, Italian Bistro</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <p className="text-lg text-gray-600 mb-4">"I love the discounts and the variety of food options available. SecondPlate is my go-to app for ordering meals."</p>
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">Customer</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <p className="text-lg text-gray-600 mb-4">"Supporting local restaurants and getting great deals on food is a win-win. SecondPlate makes it easy and convenient."</p>
              <h3 className="text-xl font-semibold text-gray-800">Michael Johnson</h3>
              <p className="text-gray-600">Customer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
