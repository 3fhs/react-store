import React from "react";
import Ratting from "../../../componante/ratting/Ratting";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
  return (
    <div>
      <Link
        className="product-item"
        to={`/products/${product.id}`}
        key={product.id}
      >
        <img
          src={product.image}
          alt={product.title}
          className="product-item-img"
        />
        <h3 className="product-item-title">{product.title.slice(0, 24)} ..</h3>
        <Ratting rating={product.rating} reviews={product.reviews} />
        <div className="product-item-price"> السعر : {product.price} $</div>
      </Link>
    </div>
  );
}

export default ProductItem;
