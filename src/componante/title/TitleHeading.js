import React from "react";
import "./title.css";

function TitleHeading({ title }) {
  return (
    <div className="head-title">
      <h2 className="title-style">{title}</h2>
      <i className="bi bi-chevron-double-down moving-icon"></i>
    </div>
  );
}

export default TitleHeading;
