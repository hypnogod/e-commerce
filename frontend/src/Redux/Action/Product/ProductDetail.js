import {
  PRODUCT_DETAILS_REQ,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../../Types/ProductTypes";
import axios from "axios";

export const detailsProduct = (productID) => async (dispatch) => {
  dispatch({
    type: PRODUCT_DETAILS_REQ,
    payload: productID,
  });
  try {
    const { data } = await axios.get(`/api/products/${productID}`);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (err) {
      console.log(err)
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: "error",
    });
  }
};
