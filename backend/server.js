import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// routers
import userRouter from "./Routers/userRouter.js";
import productRoute from "./Routers/productRouter.js";
import orderRouter from "./Routers/orderRouter.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use("/api/users", userRouter);
app.use('/api/products', productRoute);
app.use('/api/orders', orderRouter);
// app.get('/api/products/:id', (req, res) => {
//   const product = data.products.find((x) => x._id === req.params.id);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({
//       message: 'product not found'
//     })
//   }
// })


app.use((err, req, res, next) => {
  res.status(500).send({
    message: err.message,
  });
});

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get('*', (req,res)=>{
  console.log(req.originalUrl)
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
