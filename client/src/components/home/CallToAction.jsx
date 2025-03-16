import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

function CallToAction() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Save Money and Reduce Food Waste?
          </h2>
          
          <p className="text-gray-600 mb-8">
            Join thousands of satisfied customers enjoying discounted meals from local restaurants. Sign up now to start saving!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/find-restaurants">
              <Button primary className="px-6 py-3">Find Restaurants</Button>
            </Link>
            <Link to="/for-restaurant-owners">
              <Button className="px-6 py-3">For Restaurant Owners</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;