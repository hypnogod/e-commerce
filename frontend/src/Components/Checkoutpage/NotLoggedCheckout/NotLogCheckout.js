import React from "react";
import EmptyCart from "../EmptyCart";
import SideAdvertisement from "../SideAdver/SideAdvertisement";

function NotLogCheckout() {
  return (
    <div>
      <div className="notCheckoutPG1Container">
        <div className="notCheckout_contentP1">
          <div className="notCheckedMessage">
            <div className="ZmbztymNoChecked">
              <img
                src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
                alt="chill"
              />
            </div>
            <EmptyCart />
          </div>
        </div>
        <div className="coloumAdContainer">
          <SideAdvertisement />
        </div>
      </div>
    </div>
  );
}

export default NotLogCheckout;
