import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Navbar({ openMinu, setOpenMinu }) {
  return (
    <div>
      <nav style={{ right: openMinu ? "0" : "-320px" }} className="navbar">
        <div className="navbar-menu-close">
          <FontAwesomeIcon
            icon={faCircleXmark}
            onClick={() => setOpenMinu(false)}
          />
        </div>
        <ul className="navbar-links">
          <Link
            to="/"
            className="navbar-link"
            onClick={() => setOpenMinu(false)}
          >
            الرئيسية
          </Link>
          <Link
            to="/products"
            className="navbar-link"
            onClick={() => setOpenMinu(false)}
          >
            الموبايلات و الالكترونيات
          </Link>
          <Link
            to="/kitchen"
            className="navbar-link"
            onClick={() => setOpenMinu(false)}
          >
            المطبخ و المنزل
          </Link>
          <Link
            to="/manwear"
            className="navbar-link"
            onClick={() => setOpenMinu(false)}
          >
            ملابس رجالى
          </Link>
          <Link
            to="/womenwear"
            className="navbar-link"
            onClick={() => setOpenMinu(false)}
          >
            ملابس حريمى
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
