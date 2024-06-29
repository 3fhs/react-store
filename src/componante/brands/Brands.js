import React from "react";
import { brands } from "../../data/brands";
import "./Brands.css";

function Brands() {
  return (
    <div className="brands-container">
      {brands.map((item) => (
        <div key={item.id} className="brands">
          <img src={item.image} alt="brand fashon" />
        </div>
      ))}
    </div>
  );
}

export default Brands;
