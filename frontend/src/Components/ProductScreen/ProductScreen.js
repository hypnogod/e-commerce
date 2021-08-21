import React, { useEffect, useState } from "react";
import "./ProductScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { detailsProduct } from "../../Redux/Action/Product/ProductDetail";
import { Box, Button, Grid, Paper, Divider, Link } from "@material-ui/core";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import LockIcon from "@material-ui/icons/Lock";
import Rating from "@material-ui/lab/Rating";

function ProductScreen(props) {
  const dispatch = useDispatch();
  const [stockCount, setStockCount] = useState(1);
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);
  if (!product) {
    return <div>Product not found</div>;
  }

  const back = () => {
    if (history.length > 1) {
      history.back();
    }
  };
  const handleButtonClick = async () => {

  }

  return (
    <div>
      <Paper className="productScreenCZnt">
        <Divider />
        <div className="backTOR">
          <Link onClick={back} component="button" variant="body2">
            <Box display="flex" alignItems="center" p={1}>
              <Box>
                <ArrowBackIosIcon />
              </Box>
              <Box>Back to results</Box>
            </Box>
          </Link>
        </div>
        <Grid
          container
          spacing={3}
          style={{ padding: "20px 40px", width: "100vw" }}
          // justify="space-evenly"
        >
          <Grid item className="imageGrid1">
            <img
              src={product.image}
              alt={product.title}
              className="imageProduct"
            />
          </Grid>
          <Grid item xs className="produDesMain">
            <h3>{product.title}</h3>
            <Box display="flex" alignItems="center">
              <Box>
                <Rating
                  defaultValue={product.rating}
                  precision={0.5}
                  readOnly
                />
              </Box>
              <Box p={1} className="produLinkHov">
                {product.numberReviews} ratings
              </Box>
            </Box>
            <Divider className="dividedLine" />
            <div className="desMainContain">
              <p>
                <b>Price:</b>{" "}
                <span className="priceProd">${product.price}</span>
              </p>
              <p>
                <b>Brand:</b> {product.brand}
              </p>
              <Divider className="dividedLine" />
              <p className="aboutThisItem">About this item</p>
              <ul className="productListDesc">
                <li>
                  Backpack Size:30(L)*17(W)*46cm(H)/11.8*6.7*18.1in; approximate
                  weight: 0.88KG
                </li>
                <li>
                  Material: High Quality Water Resistant Nylon and Polyester
                  Fabric durable lining, easy to clean, waterproof, anti-strike
                  and anti-scratch
                </li>
                <li>
                  Lightweight: Comfortable back panel, widen and well-padded
                  adjustable shoulder straps, sponge top handle and reinforced
                  strap, alleviate burdens on your kid ’s shoulders and hands
                  for comfort all day.
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs  className="produSignUpCheckOut">
              <p>Price: ${product.price}</p>
              {product.stockNumber > 0 ? (
                <div className="seclProduChe">
                  <h3>In Stock</h3>
                  <select
                    value={stockCount}
                    onChange={(e) => setStockCount(e.target.value)}
                  >
                    {[...Array(product.stockNumber).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                  <p>Shipping Price: ???</p>
                </div>
              ) : (
                <h1>Unavailable</h1>
              )}
              <p>Sold by: {product.brand}</p>
              <p>Shipped by: Placeholder</p>
              <Box display="flex" alignItems="center">
                <Box p={1}>
                  <LockIcon />
                </Box>
                <Box>Secure transaction</Box>
              </Box>
              <div>
                <Button
                  className={"productCButton productScreeB"}
                  variant="contained"
                  onClick={product.stockNumber > 0 ? handleButtonClick : null}
                  disabled={product.stockNumber > 0 ? false : true}
                >
                  <span className="addToCartT">Add to Cart</span>{" "}
                </Button>
              </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default ProductScreen;
