import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function MiddleHeader() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="middle-header">
      <div className="middle-header-search">
        <input className="search" type="text" placeholder="ابحث عن المنتجات" />
        <button className="search-btn">بحث</button>
      </div>
      <Link to="/cart" className="middle-header-shopping">
        سلة المشتريات
        <FontAwesomeIcon icon={faCartPlus} />
        {cartItems.length > 0 && (
          <span className="cart-number">{cartItems.length}</span>
        )}
      </Link>
    </div>
  );
}

export default MiddleHeader;
