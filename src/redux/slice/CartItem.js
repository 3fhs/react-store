import { createSlice } from "@reduxjs/toolkit";

const cartItem = createSlice({
  name: "item",
  initialState: {
    //return by local storage
    cartItems: localStorage.getItem("cart-items")
      ? JSON.parse(localStorage.getItem("cart-items"))
      : [],
  },
  reducers: {
    addItems(state, action) {
      const newItem = action.payload;
      // there is item in cart
      const isItemExistInCart = state.cartItems.find(
        (cartItem) => cartItem.id === newItem.id
      );
      if (isItemExistInCart) {
        state.cartItems = state.cartItems.map((item) =>
          item.id === newItem.id ? newItem : item
        );
      } else {
        state.cartItems = [...state.cartItems, newItem];
      }
    },
    removeItemFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

const cartActions = cartItem.actions;
const cartReducer = cartItem.reducer;

export { cartActions, cartReducer };
