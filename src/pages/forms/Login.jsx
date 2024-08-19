import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import Footer from "../../componante/footer/Footer";
import TitleHeading from "../../componante/title/TitleHeading";

function Login() {
  return (
    <>
      <div className="forms-section">
        <form className="form">
          <TitleHeading title={" تسجيل الدخول "} />
          <div className="form-input">
            <input type="email" placeholder=" اكتب عنوان بريدك الاليكترونى " />
          </div>
          <div className="form-input">
            <input type="password" placeholder=" اكتب كلمة السر الخاص بك " />
          </div>
          <div className="btn">
            <button> تسجيل الدخول </button>
          </div>
          <div className="register-btn">
            <p>
              {" "}
              اذا كنت غير مسجل من فضلك اضغط على{" "}
              <Link to="/register"> انشاء ايميل </Link>{" "}
            </p>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;
