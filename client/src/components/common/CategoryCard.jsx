import React from 'react';

const CategoryCard = ({ category }) => {
  return (
    <div className="category-card">
      <h3>{category.name}</h3>
      <p>{category.description}</p>
    </div>
  );
};

export default CategoryCard;
