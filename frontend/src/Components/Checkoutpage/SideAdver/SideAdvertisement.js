import React from "react";
import "./sideAdv.css";
import Rating from "@material-ui/lab/Rating";
import Button from "@material-ui/core/Button";

function SideAdvertisement() {
  return (
    <div className="sideAdvContainer">
      <div>
        <h5>Hottest Items</h5>
        <div className="sideProductItems">
          <div className="sideProduct">
            <div className="sideImgPro">
              <img
                alt="ad"
                src="https://images-na.ssl-images-amazon.com/images/I/51OLRBCwCAL._AC_UL100_SR100,100_.jpg"
              />
            </div>
            <div className="sideAdInfo">
              <span>Header</span>
              <Rating name="read-only" value={4} readOnly />
              <span>$100.99</span>
              <Button variant="contained" disableElevation>
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideAdvertisement;
