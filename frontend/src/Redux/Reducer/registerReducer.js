import {
  USER_REG_LOADING,
  USER_REG_SUCCESS,
  USER_REG_ERROR,
} from "../Types/RegType";

export const registerReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REG_LOADING:
      return { loading: true };
    case USER_REG_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REG_ERROR:
      return { loading: false, error: "Register failed" };
    default:
        return state;
  }
};
