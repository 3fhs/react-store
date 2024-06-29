import React from "react";
import { Link } from "react-router-dom";

function ManWear() {
  return (
    <div className="empty-page">
      <h1> الصفحة فارغة نتمنى لك قضاء وقت ممتع </h1>
      <p> لازالت تحت الانشاء و التعديل </p>
      <Link to="/"> الى الصفحة الرئيسية </Link>
    </div>
  );
}

export default ManWear;
