import React, { useEffect } from "react";
import { addToCart } from "../../Redux/Action/Cart/cartAction";
import { useDispatch, useSelector } from "react-redux";
import FilledCheckout from "./FilledCheckout";

import NotLogCheckout from "./NotLoggedCheckout/NotLogCheckout";
import "./Checkout.css";
import "./newCheckout.css";

function Checkout(props) {
  const productID = props.match.params.id;
  const qty = 1;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productID) {
      dispatch(addToCart(productID, qty));
    }
  }, [dispatch, productID, qty]);

  return (
    <div>
      {cartItems.length === 0 ? (
        <NotLogCheckout />
      ) : (
        <FilledCheckout cartItems={cartItems} />
      )}
    </div>
  );
}

export default Checkout;
