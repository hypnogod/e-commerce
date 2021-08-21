import express from "express";
import Product from "../Models/productModel.js";
import data from "../Util/productData.js";
import expressAsyncHandler from "express-async-handler";

const productRoute = express.Router();

productRoute.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);

productRoute.get(
  "/seedProducts",
  expressAsyncHandler(async (req, res) => {
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
  })
);

// need to be at last
productRoute.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

export default productRoute;
