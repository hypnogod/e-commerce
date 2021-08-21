import React from "react";

import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { withStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

function ShoppingCard() {
  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: 5,
      top: 4,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }))(Badge);

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  return (
    <Link to="/checkout" className="nav_Link">
      <IconButton aria-label="cart">
        <StyledBadge
          badgeContent={cartItems.length > 0 ? cartItems.length : 0}
          color="secondary"
          max={99}
          showZero
        >
          <ShoppingCartIcon fontSize="large" className="cartIcon" />
        </StyledBadge>
      </IconButton>
    </Link>
  );
}

export default ShoppingCard;
