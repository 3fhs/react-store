import React, { useEffect } from "react";
import Banners from "../../componante/banner/Banners.js";
import Category from "../../componante/category/Category.js";
import SpecialOffers from "../../componante/offers/SpecialOffers.js";
import TitleHeading from "../../componante/title/TitleHeading.js";
import Slider from "../../componante/slider/Slider.js";
import Brands from "../../componante/brands/Brands.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../redux/apiCalls/ProductCallApi.js";
import Footer from "../../componante/footer/Footer";
import Header from "../../componante/header/Header";

function Home() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const laptop = products.filter((p) => p.islaptop === true);
  const mobile = products.filter((p) => p.islaptop === false);

  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}

export default Home;
