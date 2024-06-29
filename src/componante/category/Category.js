import React from "react";
import "./Category.css";
import { categories } from "../../data/category";

function Category() {
  return (
    <div className="categories">
      {categories.map((category) => (
        <div className="category-body" key={category.id}>
          <img src={category.image} alt={category.title} />
          <h2 className="category-title">{category.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default Category;
