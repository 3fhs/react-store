import React from "react";
import "./Cart.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../../redux/apiCalls/CartApi";
import { Link } from "react-router-dom";
import Footer from "../../componante/footer/Footer";
import Header from "../../componante/header/Header";

function Cart() {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      <Header />
      {cartItems.length < 1 ? (
        <div className="empty-cart">
          <h1> السلة فارغة نتمنى لك قضاء وقت ممتع </h1>
          <p> لم تضف اى سلع حتى الان </p>
          <Link to="/"> الى الصفحة الرئيسية </Link>
        </div>
      ) : (
        <div className="cart">
          <h1 className="cart-title"> سلة التسوق </h1>
          <div className="cart-container">
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="cart-info">
                    <div className="cart-item-title">{item.title}</div>
                    <div className="cart-item-quantity">
                      الكمية :<span>{item.quantity}</span>
                    </div>
                    <div className="cart-item-price">
                      السعر :<span> {item.price * item.quantity}</span> $
                    </div>
                    <FontAwesomeIcon
                      onClick={() => dispatch(removeCart(item.id))}
                      icon={faTrash}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <div className="cart-summary-text">
                <FontAwesomeIcon icon={faCircleCheck} />
                جزء من طلبك معد للشحن المجانى , ققم بتحديد هذا الخيار اولا
              </div>
              <div className="cart-summary-total">
                المجموع :
                <span>
                  {cartItems.reduce(
                    (acc, cur) => acc + cur.price * cur.quantity,
                    0
                  )}
                </span>{" "}
                $
              </div>
              <button className="cart-summary-btn">
                تابع عملية الشراء الان
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Cart;
