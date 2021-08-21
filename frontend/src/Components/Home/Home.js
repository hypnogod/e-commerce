import React, { useEffect } from "react";
import "./Home.css";
import Product from "../Product/Product";
import SliderImage from "./SliderImage";
import ProductLoading from "../Product/Loading/TotalProductLoading";

import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../../Redux/Action/Product/productActions";

function Home() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
    // calling function
  }, [dispatch]);
  return (
    <>
      <div className="home_Container">
        <SliderImage />
        <div className="product_container">
          {loading ? (
            <ProductLoading />
          ) : (
            <div className="product_row">
              {products.map((product) => (
                <Product
                  key={product._id}
                  id={product._id}
                  title={product.title}
                  oldPrice={product.oldPrice}
                  price={product.price}
                  rating={product.rating}
                  image={product.image}
                  stockNumber={product.stockNumber}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
