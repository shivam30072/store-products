require("dotenv").config();

const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");
const productsRouter = require("./routes/products");

//middleware
app.use(express.json());

//routes

app.get("/", (req, res) => {
  res.send(
    '<h1>store product</h1><a href="/api/v1/products">products route</a>'
  );
});

app.use("/api/v1/products", productsRouter);

//products route

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    //connect db
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`server is running on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
