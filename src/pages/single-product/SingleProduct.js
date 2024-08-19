import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import { useParams } from "react-router-dom";
import Ratting from "../../componante/ratting/Ratting.js";
import ProductDiscription from "./ProductDiscription.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../redux/apiCalls/ProductCallApi.js";
import Spinner from "../../componante/spinner/Spinner.js";
import { addToCart } from "../../redux/apiCalls/CartApi.js";
import Header from "../../componante/header/Header.js";
import Footer from "../../componante/footer/Footer.js";

function SingleProduct() {
  const { id } = useParams();
  //add quantity
  const [qty, setQty] = useState("1");

  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.product);

  useEffect(() => {
    // fetchProductById(id);
    dispatch(fetchProductById(id));

    // i need open in page scroll up
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  const handelAddToCart = () => {
    const quantity = parseInt(qty, 10);

    dispatch(
      addToCart({
        id: product?.id,
        quantity,
        price: product?.price,
        title: product?.title,
        image: product?.image,
      })
    );
  };

  if (loading) return <Spinner />;

  return (
    <>
      <Header />
      <div className="product-in-slider">
        <div className="product-container">
          <div className="product-image">
            <img src={product?.image} alt={product && product.title} />
          </div>
          <div className="product-info">
            <h3 className="product-title">{product?.title}</h3>
            <div className="product-ratting">
              <Ratting
                rating={product && product.rating}
                reviews={product && product.reviews}
              />
            </div>
            <div className="product-price">
              {" "}
              السعر {product && product.price} $
            </div>
            <div className="special-option">
              <strong> الكمية </strong>
              <div className="btn-and-input">
                <input
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                  type="number"
                  min="1"
                  max="10"
                />
                <button
                  onClick={handelAddToCart}
                  className="add-to-cart"
                  min="1"
                  max="10"
                >
                  {" "}
                  اضف الى سلتك{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
        <ProductDiscription />
      </div>
      <Footer />
    </>
  );
}

export default SingleProduct;
