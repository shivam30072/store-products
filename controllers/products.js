const product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  // req.query for getting query values
  const { featured } = req.query;
  const queryObject = {};
  if (featured) {
    // queries always comes in string make sure to convert it into actual type
    queryObject["featured"] = featured === "false" ? false : true;
  }

  const products = await product.find(queryObject);
  // hardcoded way not a good approach
  // const products = await product.find({ featured: false });
  res.status(200).json({ products });
};

const getAllProducts = async (req, res) => {
  // sort method for sorting in ascending order
  // const products = await product.find({}).sort("price name");

  // sort method sorting in descending order
  // const products = await product.find({}).sort("-price -name");

  // select method only gets you the field that you specify
  // const products = await product.find({}).select("price name company");

  // limit method to limit the number of results
  // const products = await product.find({}).limit(10);

  // skip method to skip the results
  const products = await product.find({}).skip(10);
  res.status(200).json({ total: products.length, products });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
