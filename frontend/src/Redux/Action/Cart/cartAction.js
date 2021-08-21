import axios from "axios";
import { ADD_TO_CART, REMOVE_CART_ITEM } from "../../Types/CartType";

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${productId}`);
  dispatch({
    type: ADD_TO_CART,
    payload: {
      id: data._id,
      image: data.image,
      name: data.title,
      price: data.price,
      stockNumber: data.stockNumber,
      product: data._id,
      shipping: data.shipping,
      qty,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removecartItem = (id) => (dispatch, getState) => {
  dispatch({ type: REMOVE_CART_ITEM, payload: id });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
