import React from "react";
import "./Header.css";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons/faBasketShopping";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TopHeader({ setOpenMinu }) {
  return (
    <div className="top-header">
      <div className="top-header-menu" onClick={() => setOpenMinu(true)}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="top-header-logo">
        <FontAwesomeIcon icon={faBasketShopping} />
        السوق المصرى
      </div>
      <div className="top-header-text">اهلا و سهلا نورتونا</div>
      <div className="top-header-phone">
        123-456-789
        <FontAwesomeIcon icon={faPhone} />
      </div>
    </div>
  );
}

export default TopHeader;
