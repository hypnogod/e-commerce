import mongoose from 'mongoose';
import momemt from 'moment';

const Schema = mongoose.Schema;

// seller: {
//   name: String,
//   logo: String,
//   description: String,
//   rating: { type: Number, default: 0, required: true },
//   numReviews: { type: Number, default: 0, required: true },
// },
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
    required: true,
  },
  isSeller: {
    type: Boolean,
    default: false,
    required: true,
  },
  cart: {
    type: Array,
  },
  createdAt: {
    type: String,
    default: momemt().format("DD/MM/YYYY") + ";" + momemt().format("hh:mm:ss"),
  },
  updatedAt: {
    type: String,
    default: momemt().format("DD/MM/YYYY") + ";" + momemt().format("hh:mm:ss"),
  },
});

const User = mongoose.model("User", userSchema);
export default User;
