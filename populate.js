require("dotenv").config();

const product = require("./models/product");
const connectDB = require("./db/connect");

const productJson = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await product.deleteMany();
    await product.create(productJson);
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
