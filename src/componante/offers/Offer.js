import React, { useState } from "react";
import Ratting from "../ratting/Ratting";
import { Link } from "react-router-dom";

function Offer({ offers }) {
  const {
    firstImage,
    secondImage,
    title,
    price,
    discount,
    rating,
    reviews,
    id,
  } = offers;

  const [imageSrc, setImageSrc] = useState(firstImage);

  return (
    <div className="offer">
      <div className="offer-image">
        <img
          onMouseEnter={() => setImageSrc(secondImage)}
          onMouseLeave={() => setImageSrc(firstImage)}
          src={imageSrc}
          alt={title}
        />
      </div>
      <div className="offer-info">
        <h5 className="offer-title">{title}</h5>
        <Ratting rating={rating} reviews={reviews} />
        <div className="offer-price">
          <strong> السعر </strong>
          <b className="offer-price-item">{price} $</b>
          <b className="offer-price-discount">
            {price - (discount * price) / 100} $
          </b>
        </div>
        <Link to={`/special-offer/${id}`} className="offer-see-more">
          ... شاهد المزيد
        </Link>
        <div className="offer-discount"> خصم{discount} %</div>
      </div>
    </div>
  );
}

export default Offer;
