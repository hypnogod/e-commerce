import React from "react";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { addToCart } from "../../Redux/Action/Cart/cartAction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import {removecartItem} from "../../Redux/Action/Cart/cartAction"

function FilledCheckout({ cartItems }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const removeCartItem = (id) => {
    dispatch(removecartItem(id));
  };
  const checkouthandeler = () => {
    history.push('/login?redirect=shipping');
  };

  return (
    <div className="checkoutcontainer">
      <div className="checkoutPage1">
        <div className="checkoutRight">
          <Paper elevation={0} className="shoppingCardContainer">
            <div className="sCartCHeader">
              <h1>Shopping Cart</h1>
            </div>
            <Divider />
            {cartItems.map((items) => (
              <div style={{ padding: "10px" }} key={items.product}>
                <div className="sCartCBody">
                  {/* */}
                  <div className="sCartImgBody">
                    <Link to={`/product/${items.product}`}>
                      <img
                        className="imagesCartIng"
                        src={items.image}
                        alt={items.name}
                      />
                    </Link>
                  </div>
                  {/* */}
                  <div className="sCartTitle">
                    <Link to={`/product/${items.product}`}>
                      <h2>{items.name}</h2>
                    </Link>
                    <div className="sCartBottomCont">
                      <div className="sCartSelect">
                        <p>Quantity: </p>
                        <select
                          value={items.qty}
                          onChange={(e) =>
                            dispatch(
                              addToCart(items.product, Number(e.target.value))
                            )
                          }
                        >
                          {[...Array(items.stockNumber).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                      <Divider
                        orientation="vertical"
                        flexItem={true}
                        light={false}
                      />
                      <Button
                        className="deletesCartButton"
                        variant="contained"
                        color="secondary"
                        startIcon={<DeleteIcon />}
                        onClick={() => removeCartItem(items.product)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                  {/* */}
                  <div className="sCartPrices">
                    <p>Price: {"$" + items.price}</p>
                    <br />
                    <p>Approx Total: {"$" + (items.price * items.qty).toFixed(2)}</p>
                  </div>
                </div>
                <Divider />
              </div>
            ))}
            <div>
              <h3>
                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items): $
                {(cartItems.reduce((a, c) => a + c.price * c.qty, 0)).toFixed(2)}
              </h3>
            </div>
          </Paper>
          <Paper
            elevation={0}
            style={{ padding: "20px", margin: "20px 0 20px 0" }}
          ></Paper>
        </div>
        <div className="scCheckContainer">
          <Paper elevation={0} className="scCheckoutBox">
            <div className="scCBtextC">
              <p>Item ({cartItems.reduce((a, c) => a + c.qty, 0)})</p>
            </div>
            <Divider />
            <div className="scCBtextC scCBSubtotal">
              <h3>Subtotal</h3>
              <h3>${(cartItems.reduce((a, c) => a + c.price * c.qty, 0)).toFixed(2)}</h3>
            </div>
            <Button variant="contained" color="primary" onClick={checkouthandeler} disabled={cartItems.length === 0}>
              Go to checkout
            </Button>
          </Paper>
        </div>
      </div>
    </div>
  );
}

export default FilledCheckout;
