import {
  USER_LOGOUT,
  USER_SIGNIN_SUCCESS,
  USER_ERRORS,
  USER_LOADING,
} from "../Types/SessionType";

export const userSignReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOADING:
      return { loading: true };
    case USER_ERRORS:
      return { loading: false, error: 'login failed' };
    case USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload  };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
