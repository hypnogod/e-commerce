import { combineReducers } from "redux";
import { productListReducer, productDetailsReducer } from "./ProductReducer";
import { cartReducer } from "../Reducer/cartReducers";
import { userSignReducer } from "./SessionReducer";
import { registerReducer } from "./registerReducer";

const RootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignIn: userSignReducer,
  userRegister: registerReducer,
});
export default RootReducer;
