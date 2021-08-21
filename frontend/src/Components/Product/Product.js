import React, { useState } from "react";
import "./Product.css";
import Rating from "@material-ui/lab/Rating";
import { Link } from 'react-router-dom'
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import CheckIcon from "@material-ui/icons/Check";
import { useHistory } from "react-router";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

function Product(props) {
  const {
    id,
    title,
    oldPrice,
    price,
    rating,
    image,
    stockNumber,
  } = props;

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const history = useHistory();

  const handleButtonClick = async () => {
    history.push(`/checkout/${id}`)
    // if (!loading) {
    //   setSuccess(false);
    //   setLoading(true);
    //   window.setTimeout(() => {
    //     setSuccess(true);
    //     setLoading(false);
    //   history.push(`/checkout/${id}?qty=1`)
    //   }, 2000);
    // }
    // window.setTimeout(() => {
    //   if (!success) {
    //     setSuccess(false);
    //     setLoading(false);
    //   }
    // }, 3000);
  };

  return (
    <Card className="productContainer">
      <CardActionArea>
        <Link to={`/product/${id}`} className="CardlinkProduct">
          <CardContent>
            <div className="productInfo">
              <p className="productTitle">{title}</p>
              {/* New Price*/}
              <div className="pricesContainer">
                <p>
                  <small className="currency">{"$"}</small>
                  <strong className="price">{price}</strong>
                </p>
                {/* Old Price*/}
                <p>
                  {oldPrice === "" ? null : (
                    <small className="oldPrice price">
                      {"$" + oldPrice}
                    </small>
                  )}
                </p>
              </div>
              {/* stars*/}
              <div className="ratingStarts">
                <Rating name="read-only" defaultValue={rating}   precision={0.5} readOnly />
              </div>
            </div>
            <CardMedia
              component="img"
              alt="product"
              image={image}
              style={{ maxHeight: "200px" }}
            />
            {/* <img src={image} alt="product" className="productImageF" /> */}
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
        {stockNumber > 0 ? (
          <Button
            className={"productCButton"}
            variant="contained"
            disabled={loading}
            onClick={handleButtonClick}
            disableElevation
          >
            <span className="addToCartT">Add to Cart</span>
            {loading && (
              <CircularProgress size={20} style={{ color: "white" }} />
            )}
            {success ? <CheckIcon /> : null}
          </Button>
        ) : (
          <Button
            variant="contained"
            disabled={true}
            className="UnavaibleproductButton"
            disableElevation
          >
            Unavaible
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default Product;
