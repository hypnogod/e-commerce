import axios from "axios";
import {
  USER_REG_LOADING,
  USER_REG_SUCCESS,
  USER_REG_ERROR,
} from "../../Types/RegType";

import { USER_SIGNIN_SUCCESS } from "../../Types/SessionType";

export const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: USER_REG_LOADING, payload: { name, email, password } });
  try {
    const { data } = await axios.post("/api/users/register", {
      name,
      email,
      password,
    });
    dispatch({ type: USER_REG_SUCCESS, payload: data });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: USER_REG_ERROR,
      payload: "Register Failed",
    });
  }
};
