import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./componante/footer/Footer";
import Header from "./componante/header/Header";
import Home from "./pages/home/Home";
import Electro from "./pages/electro/Electro";
import Kitchen from "./pages/kitchen/Kitchen";
import ManWear from "./pages/manwear/ManWear";
import WomenWear from "./pages/womenwear/WomenWear";
import Cart from "./pages/cart/Cart";
import Products from "./pages/products/Products";
import SingleProduct from "./pages/single-product/SingleProduct";
import SpecialOffer from "./pages/special-offer/SpecialOffer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/special-offer/:id" element={<SpecialOffer />} />
        <Route path="/elec" element={<Electro />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/manwear" element={<ManWear />} />
        <Route path="/womenwear" element={<WomenWear />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
