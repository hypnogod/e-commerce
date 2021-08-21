import mongoose from "mongoose";
import moment from 'moment';
const Schema = mongoose.Schema;

// const reviewSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   comment: {
//     type: String,
//     required: true,
//   },
//   rating: {
//     type: Number,
//     required: true,
//   },
//   createdReview: {
//     type: String,
//     default: momemt().format("DD/MM/YYYY") + ";" + momemt().format("hh:mm:ss"),
//   },
//   updatedReview: {
//     type: String,
//     default: momemt().format("DD/MM/YYYY") + ";" + momemt().format("hh:mm:ss"),
//   },
// });

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  seller: {
    type: mongoose.Schema.Types.ObjectID,
    ref: "User",
  },
  image: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  oldPrice: {
    type: Number,
  },
  stockNumber: {
    type: Number,
    required: true,
  },
  shipping: {
    type: Number,
    default: 0,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  numberReviews: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: String,
    default: moment().format("DD/MM/YYYY") + ";" + moment().format("hh:mm:ss"),
  },
  updatedAt: {
    type: String,
    default: moment().format("DD/MM/YYYY") + ";" + moment().format("hh:mm:ss"),
  },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
