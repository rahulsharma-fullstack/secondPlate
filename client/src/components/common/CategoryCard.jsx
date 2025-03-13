import React from 'react';
import { Link } from 'react-router-dom';

function CategoryCard({ category }) {
  const { id, name, image } = category;
  
  return (
    <Link to={`/category/${id}`} className="block group">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow relative">
        <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity z-10 rounded-lg"></div>
        <img 
          src={image} 
          alt={name} 
          className="w-full h-28 object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <span className="text-white font-medium text-lg">{name}</span>
        </div>
      </div>
    </Link>
  );
}

export default CategoryCard;