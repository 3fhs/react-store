import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    product: null,
    loading: false,
  },
  reducers: {
    // i make this because i need fetch api
    setProducts(state, action) {
      state.products = action.payload;
    },
    setProduct(state, action) {
      state.product = action.payload;
    },
    // end fetch api
    // i make loading action
    setLoading(state) {
      state.loading = true;
    },
    clearLoading(state) {
      state.loading = false;
    },
    // end loading action
  },
});

const productActions = ProductSlice.actions;
const productReducer = ProductSlice.reducer;

export { productActions, productReducer };
