import React from "react";
import star from "../../icons/star.png";
import "./Ratting.css";

function Ratting({ rating, reviews }) {
  return (
    <div className="rating-container">
      <div className="rating">
        {rating}
        <img src={star} alt="stars" />
      </div>
      <span>{reviews} تقيمات</span>
    </div>
  );
}

export default Ratting;
