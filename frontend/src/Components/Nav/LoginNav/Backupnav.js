import React from "react";
import "../Nav.css";
import { Link } from "react-router-dom";

function LoginNv(props) {
  return (
    <nav className="header bakcHead">
      <div>
        <Link to="/">
          <img
            src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png"
            alt="company logo"
            id="header-img"
          />
        </Link>
      </div>

      <div className="p1loba">
        <Link to="/" className="nav_Link">
          <div className="header_options">
            <span className="newLBacNaH">Home</span>
          </div>
        </Link>
        <Link to="/checkout" className="nav_Link">
          <div className="header_options">
            <span className="newLBacNaH">Cart</span>
          </div>
        </Link>
        {props.titleLocation === "login" ? (
          <Link to="/register" className="nav_Link">
            <div className="header_options">
              <span className="newLBacNaH">Sign Up</span>
            </div>
          </Link>
        ) : 
        <Link to="/login" className="nav_Link">
        <div className="header_options">
          <span className="newLBacNaH">Sign In</span>
        </div>
      </Link>
        }
      </div>
    </nav>
  );
}

export default LoginNv;
