import React, { useState } from "react";
import ShoppingCart from "./ShoppingCard";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Popover from "@material-ui/core/Popover";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import {signout} from "../../Redux/Action/Users/session-login";

function NavInfoNotMain() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const userSignin = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();

  const signoutHandeler = () => {
    dispatch(signout())
  }
  return (
    <div className="header_nav">
      {userInfo ? (
        <>
          <div className="nav_Link">
            <div className="header_options">
              <span className="nav_O1">Welcome!</span>
              <span className="nav_O2">{userInfo.name}</span>
            </div>
          </div>
          <ShoppingCart />

          <div className="nav_Link">
          <IconButton onClick={handleClick} style={{ color: "white" }}>
            <AccountCircleIcon fontSize="large" style={{ color: "white" }} />
          </IconButton>
          </div>

          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>My account</MenuItem>
              <MenuItem>
                <Link to="#signout" onClick={signoutHandeler}>Logout</Link>
              </MenuItem>
            </MenuList>
          </Popover>
        </>
      ) : (
        <>
          <Link to="/register" className="nav_Link">
            <div className="header_options">
              <span className="nav_O1">New?</span>
              <span className="nav_O2">Sign Up</span>
            </div>
          </Link>

          <Link to="/login" className="nav_Link">
            <div className="header_options">
              <span className="nav_O1">Hello,</span>
              <span className="nav_O2">Sign In</span>
            </div>
          </Link>
          <Link to="/login" className="nav_Link">
            <div className="header_options">
              <span className="nav_O1">Your</span>
              <span className="nav_O2">Orders</span>
            </div>
          </Link>
          <ShoppingCart />
        </>
      )}
    </div>
  );
}

export default NavInfoNotMain;
