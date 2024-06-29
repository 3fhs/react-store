import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./slice/ProductSlice";
import { cartReducer } from "./slice/CartItem";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});

export default store;
