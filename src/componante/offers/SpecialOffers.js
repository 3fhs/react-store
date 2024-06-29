import React from "react";
import "./SpecialOffers.css";
import { specialOffers } from "../../data/special-offers";
import Offer from "./Offer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

function SpecialOffers() {
  return (
    <div className="special-offer">
      <h2>
        كل يوم عروض{" "}
        <span className="offer-icon">
          <FontAwesomeIcon icon={faClock} />
          لمدة 24 ساعة
        </span>
      </h2>
      <div className="offer-container">
        {specialOffers.map((offers) => (
          <Offer key={offers.id} offers={offers} />
        ))}
      </div>
    </div>
  );
}

export default SpecialOffers;
