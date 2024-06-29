import { cartActions } from "../slice/CartItem";

// add item to cart
export function addToCart(newItem) {
  return (dispatch, getItem) => {
    dispatch(cartActions.addItems(newItem));

    //add to local storage
    const { cart } = getItem();
    localStorage.setItem("cart-items", JSON.stringify(cart.cartItems));
  };
}

// remove item to cart
export function removeCart(id) {
  return (dispatch, getItem) => {
    dispatch(cartActions.removeItemFromCart(id));

    //remove cart in page and in local impty
    const { cart } = getItem();
    localStorage.setItem("cart-items", JSON.stringify(cart.cartItems));
  };
}
