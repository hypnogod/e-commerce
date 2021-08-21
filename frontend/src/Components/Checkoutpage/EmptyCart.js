import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";

function EmptyCart() {
  const userSignin = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignin;
  return (
    <div className="cartEmpty">
      <div>
        <h1>Your Cart is Empty</h1>
        <Link to="/" className="emptyCardDealLink">
          Look at some deals
        </Link>
        {userInfo ? <></> : (
          <div className="emptyCardButtonContainer">
            <Button
              variant="contained"
              href="/login"
              className="signInEmptyCartButton"
            >
              Sign In
            </Button>
            <Button variant="contained" href="/register">
              Create a New Account
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmptyCart;
