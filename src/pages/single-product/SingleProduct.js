import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import { useParams } from "react-router-dom";
// import { products } from "../../data/products.js";
import Ratting from "../../componante/ratting/Ratting.js";
import ProductDiscription from "./ProductDiscription.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../redux/apiCalls/ProductCallApi.js";
import Spinner from "../../componante/spinner/Spinner.js";
import { addToCart } from "../../redux/apiCalls/CartApi.js";

function SingleProduct() {
  // const [product, setProduct] = useState(null);

  // async function fetchProductById(productId) {
  //   try {
  //     const response = await fetch(
  //       `http://localhost:5000/products/${productId}`
  //     );
  //     const data = await response.json();
  //     setProduct(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const { id } = useParams();
  //add quantity
  const [qty, setQty] = useState("");

  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.product);

  useEffect(() => {
    // fetchProductById(id);
    dispatch(fetchProductById(id));

    // i need open in page scroll up
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  // const product = products.find((p) => p.id === +id);

  // const { title, price, image, rating, reviews } = product;

  //add to cart handel
  const handelAddToCart = () => {
    dispatch(
      addToCart({
        id: product?.id,
        quantity: qty,
        price: product?.price,
        title: product?.title,
        image: product?.image,
      })
    );
  };

  if (loading) return <Spinner />;

  return (
    <div className="product-in-slider">
      <div className="product-container">
        <div className="product-image">
          {/* product && this like this product?.image  */}
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
              <button onClick={handelAddToCart} className="add-to-cart">
                {" "}
                اضف الى سلتك{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <ProductDiscription />
    </div>
  );
}

export default SingleProduct;
