import React from "react";
import "./Products.css";
import ProductItem from "./productItem/ProductItem";

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductList;
