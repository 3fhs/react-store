import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <h3 className="footer-top-title">نرحب دائما بمساعدتك</h3>
        <div className="footer-top-email">
          <span className="footer-top-text">للتواصل عبر البريد</span>
          <span className="footer-top-email-fake">
            <FontAwesomeIcon icon={faEnvelope} />
            mohamed@fake.com
          </span>
        </div>
      </div>
      <div className="footer-middle">
        <div className="footer-items">
          <h4 className="footer-item-title"> الالكترونيات </h4>
          <ul className="footer-item-links">
            <li className="footer-item-link"> الكاميرات و تسجيل الفيديو </li>
            <li className="footer-item-link"> الاجهزة المنزلية </li>
            <li className="footer-item-link"> الهواتف </li>
            <li className="footer-item-link"> سماعات الرأس </li>
            <li className="footer-item-link"> اجهزة التابلت </li>
          </ul>
        </div>
        <div className="footer-items">
          <h4 className="footer-item-title"> الازياء </h4>
          <ul className="footer-item-links">
            <li className="footer-item-link"> ازياء رجالى </li>
            <li className="footer-item-link"> ازياء حريمى </li>
            <li className="footer-item-link"> ازياء اولاد </li>
            <li className="footer-item-link"> نظارات </li>
            <li className="footer-item-link"> المجوهرات </li>
          </ul>
        </div>
        <div className="footer-items">
          <h4 className="footer-item-title"> المطبخ و مشتملاته </h4>
          <ul className="footer-item-links">
            <li className="footer-item-link"> ديكورات منازل </li>
            <li className="footer-item-link"> الاثاث </li>
            <li className="footer-item-link"> المطبخ و ادوات الطعام </li>
            <li className="footer-item-link"> ديكورات الحمام </li>
            <li className="footer-item-link"> مستلزمات الحدائق </li>
          </ul>
        </div>
        <div className="footer-items">
          <h4 className="footer-item-title"> الجمال </h4>
          <ul className="footer-item-links">
            <li className="footer-item-link"> العطور </li>
            <li className="footer-item-link"> المكياج </li>
            <li className="footer-item-link"> العناية بالشعر </li>
            <li className="footer-item-link"> العناية بالبشرة </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <FontAwesomeIcon icon={faCopyright} /> 2024{" "}
        <span> كل الحقوق محفوظة اسمعهالك </span>
      </div>
    </div>
  );
}

export default Footer;
