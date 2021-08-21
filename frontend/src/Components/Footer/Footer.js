import React from "react";
import "./Footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Link } from "react-router-dom";

function Footer() {
  //   window.scroll({
  //     top: 0,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  return (
    <div className="overallFooterContainer">
      <div className="navtoTop" onClick={() => window.scrollTo({ top: 0 })}>
        Go to the top
      </div>
      <div className="footerP2_container">
        <div className="footer_coloum">
          <strong>Buy</strong>
          <Link to="/register" target="_blank">
            <span>Register</span>
          </Link>
          <span>Stores</span>
          <span>Business Cards</span>
          <span>Store card</span>
        </div>
        <div className="footer_coloum">
          <strong>Sell</strong>
          <span>Start selling</span>
          <span>How to sell</span>
          <span>Business sellers</span>
          <span>Affiliates</span>
        </div>
        <div className="footer_coloum">
          <strong>Get to Know Us</strong>
          <Link to={{ pathname: "https://www.facebook.com/" }} target="_blank">
            <span>
              <FacebookIcon /> Facebook
            </span>
          </Link>
          <Link to={{ pathname: "https://twitter.com/" }} target="_blank">
            <span>
              <TwitterIcon /> Twitter
            </span>
          </Link>
          <Link to={{ pathname: "https://www.instagram.com/" }} target="_blank">
            <span>
              <InstagramIcon /> Instagram
            </span>
          </Link>
          <span>About Placeholder.Inc</span>
        </div>
        <div className="footer_coloum">
          <strong>Help {"&"} Contact</strong>
          <span>Contact Us</span>
          <span>Resolution Center</span>
          <span>Announcements</span>
          <span>Job Opportunities</span>
          <span>Your Account</span>
          <span>Your Order</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
