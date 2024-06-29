import React, { useEffect } from "react";
// i change it because i use json server
// import { products } from "../../data/products.js";
import Banners from "../../componante/banner/Banners.js";
import Category from "../../componante/category/Category.js";
import SpecialOffers from "../../componante/offers/SpecialOffers.js";
import TitleHeading from "../../componante/title/TitleHeading.js";
import Slider from "../../componante/slider/Slider.js";
import Brands from "../../componante/brands/Brands.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../redux/apiCalls/ProductCallApi.js";

function Home() {
  // const [products, setProducts] = useState([]);

  // async function fetchProducts() {
  //   try {
  //     const response = await fetch("http://localhost:5000/products");
  //     const data = await response.json();
  //     setProducts(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    // fetchProducts();
    dispatch(fetchProduct());
  }, []);

  const laptop = products.filter((p) => p.islaptop === true);
  const mobile = products.filter((p) => p.islaptop === false);

  return (
    <div>
      <Banners />
      <Category />
      <SpecialOffers />
      <TitleHeading title=" مجموعة من اروع اللابات " />
      <Slider data={laptop} />
      <TitleHeading title=" مجموعة من اروع الموبايلات " />
      <Slider data={mobile} />
      <TitleHeading title="تسوق حسب الماركات" />
      <Brands />
    </div>
  );
}

export default Home;
