import React from 'react';

const Teams = () => {
  return (
    <div className="bg-gray-50">
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Add team member cards here */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md p-4">
              <img src="./Aarushi.jpg" alt="Aarushi" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Aarushi</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md p-4">
              <img src="./Areeb.jpg" alt="Areeb" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Areeb</h3>
              <p className="text-gray-600">CTO</p>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md p-4">
              <img src="./Soumya.jpg" alt="Soumya" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Soumya</h3>
              <p className="text-gray-600">COO</p>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md p-4">
              <img src="./Vaishal.jpg" alt="Vaishal" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Vaishal</h3>
              <p className="text-gray-600">CFO</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teams;
