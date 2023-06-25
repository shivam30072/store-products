const product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await product.find({ company: "ikea" });
  res.status(200).json({ products });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "products route" });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
