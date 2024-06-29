import React from "react";
import "./Banner.css";

function Banners() {
  return (
    <div className="banner">
      <img
        className="img-left"
        src="/images/banners/shoes.png"
        alt="it is the banner one"
      />
      <img
        className="img-right"
        src="/images/banners/house.png"
        alt="it is the banner two"
      />
    </div>
  );
}

export default Banners;
