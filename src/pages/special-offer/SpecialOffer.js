import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { specialOffers } from "../../data/special-offers";
import Ratting from "../../componante/ratting/Ratting";
import ProductDiscription from "../single-product/ProductDiscription";
import "./SpecialOffer.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/apiCalls/CartApi";

function SpecialOffer() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const prodParams = specialOffers.find((p) => p.id === parseInt(id));

  const { images, title, rating, reviews, price, discount } = prodParams;

  const [firstIndex, setFirstInsex] = useState(0);
  //add quantity
  const [qty, setQty] = useState("1");

  const calculatedDiscount = price - (discount * price) / 100;

  useEffect(() => {
    // i need open in page scroll up
    window.scrollTo(0, 0);
  }, [dispatch]);

  //add to cart handel
  const handelAddToCart = () => {
    const quantity = parseInt(qty, 10);

    dispatch(
      addToCart({
        id: id,
        quantity,
        price: calculatedDiscount,
        title: title,
        image: images[0],
      })
    );
  };

  return (
    <div className="specialoffer">
      <div className="special-offer-details">
        <div className="special-contair-image">
          <img
            src={prodParams.images[firstIndex]}
            alt=""
            className="first-image"
          />
          <div className="special-images">
            {images.map((source, index) => (
              <img
                className="special-image"
                key={index}
                src={source}
                alt=""
                onClick={() => setFirstInsex(index)}
              />
            ))}
          </div>
        </div>
        <div className="special-contair-info">
          <h3 className="special-title">{title}</h3>
          <Ratting rating={rating} reviews={reviews} />
          <div className="special-price">
            <strong> السعر </strong>
            <span className="after-price"> {price} $</span>
            <span className="before-price"> {calculatedDiscount} $</span>
          </div>
          <div className="special-option">
            <strong> الكمية </strong>
            <div className="btn-and-input">
              <input
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                type="number"
                min="1"
                max="10"
              />
              <button onClick={handelAddToCart} className="add-to-cart">
                {" "}
                اضف الى سلتك{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="special-text">
        <ProductDiscription />
      </div>
    </div>
  );
}

export default SpecialOffer;
