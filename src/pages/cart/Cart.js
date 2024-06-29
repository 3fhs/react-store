import React from "react";
import "./Cart.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../../redux/apiCalls/CartApi";
import { Link } from "react-router-dom";

// const cartItems = [
//   {
//     id: 1,
//     quantity: 2,
//     price: 2000,
//     title: "هاتف سامسونج بتاع الزمالك",
//     image:
//       "https://tv-it.com/storage/manar-gamal/1-1-2024/samsung-galaxy-a15/samsung-galaxy-a15-12.webp",
//   },
//   {
//     id: 2,
//     quantity: 4,
//     price: 1000,
//     title: "هاتف سامسونج بتاع الزمالك",
//     image:
//       "https://cdn.shopify.com/s/files/1/0327/9585/2937/files/SM-A256EZKDMEA_bb7e9864-21a4-4f97-9f6d-8e9e6e6b9623.jpg?v=1716452999",
//   },
// ];

function Cart() {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  return cartItems < 1 ? (
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
          <button className="cart-summary-btn"> تابع عملية الشراء الان </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
