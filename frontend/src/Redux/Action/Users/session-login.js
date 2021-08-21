import axios from "axios";
import {
  USER_LOGOUT,
  USER_SIGNIN_SUCCESS,
  USER_ERRORS,
  USER_LOADING,
} from "../../Types/SessionType";

export const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_LOADING, payload: { email, password } });
  try {
    const { data } = await axios.post("/api/users/login", { email, password });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_ERRORS,
      message: "login failed",
    });
  }
};

export const signout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('cartItems');
  dispatch({ type:  USER_LOGOUT });
  document.location.href = '/login';
}