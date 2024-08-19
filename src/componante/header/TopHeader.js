import React from "react";
import "./Header.css";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function TopHeader({ setOpenMinu }) {
  return (
    <div className="top-header">
      <div className="top-header-menu" onClick={() => setOpenMinu(true)}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <Link to="/" className="top-header-logo">
        MHM
      </Link>
      <div className="top-header-text">اهلا و سهلا نورتونا</div>
      <div className="top-header-phone">
        {""}20/11111{""} <FontAwesomeIcon icon={faPhone} />
      </div>
    </div>
  );
}

export default TopHeader;
