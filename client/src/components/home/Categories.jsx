import React from 'react';
import CategoryCard from '../common/CategoryCard';

const Categories = ({ categories }) => {
  return (
    <section className="categories">
      <h2>Categories</h2>
      <div className="category-list">
        {categories.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
