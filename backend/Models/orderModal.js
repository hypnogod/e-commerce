import mongoose from "mongoose";
import momemt from "moment";

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  orderItems: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      image: { type: String, required: true },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
    },
  ],
  shippingAddress: {
    fullName: { type: String, required: true },
    addressOne: { type: String, required: true },
    addressTwo: { type: String },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    state: { type: String, required: true },
  },
  paymentMethod: { type: String, required: true },
  itemsPrice: { type: Number, required: true },
  shippingPrice: { type: Number, required: true },
  taxPrice: { type: Number, required: true },
  total: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  seller: { type: mongoose.Schema.Types.ObjectID, ref: 'User' },
  isPaid: { type: Boolean, default: false },
  paidAt: { type: Date },
  isDelivered: { type: Boolean, default: false },
  deliveredAt: { type: Date },
  createdAt: {
    type: String,
    default: momemt().format("DD/MM/YYYY") + ";" + momemt().format("hh:mm:ss"),
  },
  updatedAt: {
    type: String,
    default: momemt().format("DD/MM/YYYY") + ";" + momemt().format("hh:mm:ss"),
  },
});

const Order = mongoose.model("Order", orderSchema);
export default Order;

