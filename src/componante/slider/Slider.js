import React, { useState } from "react";
import "./Slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Ratting from "../ratting/Ratting";

function Slider({ data }) {
  const [slideIndex, setSlideIndex] = useState(0);

  const handelSlide = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex - 1);
    } else setSlideIndex(slideIndex + 1);
  };
  return (
    <div className="sliders">
      <button
        className="bt-right"
        onClick={() => handelSlide("left")}
        disabled={slideIndex === -data.length}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      <div
        className="slider-container"
        style={{ transform: `translate(${slideIndex * -250}px)` }}
      >
        {data.map((slide) => (
          <Link to={`/products/${slide.id}`} className="slide" key={slide.id}>
            <img src={slide.image} alt={slide.title} className="slide-img" />
            <h3 className="slide-title">{slide.title}</h3>
            <Ratting rating={slide.rating} reviews={slide.reviews} />
            <div className="slide-price">
              <span>السعر</span>
              {slide.price} $
            </div>
          </Link>
        ))}
      </div>
      <button
        className="bt-left"
        onClick={() => handelSlide("right")}
        disabled={slideIndex === 1}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    </div>
  );
}

export default Slider;
