import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import Badge from '../common/Badge'; // Import the Badge component
import { FaStar, FaMapMarkerAlt, FaClock } from 'react-icons/fa'; // Corrected icon imports

function Hero() {
  return (
    <section className="py-12 md:py-16 ">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div>
          <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm text-green-600 mb-6">
              🌱 Reducing Food Waste, One Meal at a Time
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4">
              Delicious food at <span className="text-primary">amazing discounts</span>
            </h1>
            <p className="text-lg text-secondary mb-8 max-w-md">
              Connect with local restaurants offering substantial discounts on surplus food. Save money, reduce
              waste, and enjoy great meals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/restaurants">
                <Button className="bg-primary hover:bg-primary-dark w-full sm:w-auto">Find Restaurants</Button>
              </Link>
              <Link to="/for-restaurants">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary-light w-full sm:w-auto"
                >
                  For Restaurants
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[`./Aarushi.jpg`, `./Areeb.jpg`, `Soumya.jpg`, `Vaishal.jpg`].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img
                      src={`${i}`}
                      alt="User avatar"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-secondary">Trusted by 2,000+ users</p>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Delicious food at a discount"
                className="w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 ">
                <div className="bg-white rounded-xl p-4 shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">Italian Bistro</h3>
                    <div className="flex items-center">
                      <FaStar className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm font-medium">4.8</span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-secondary mb-3">
                    <FaMapMarkerAlt className="h-3 w-3 mr-1" />
                    <span>0.7 miles</span>
                    <span className="mx-2">•</span>
                    <FaClock className="h-3 w-3 mr-1" />
                    <span>Closes at 10pm</span>
                  </div>
                  <div className="flex justify-start items-center mx-3">
                    <Badge className="bg-primary text-white text-xl px-3">-40%</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;