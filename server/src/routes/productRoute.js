const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/admin/product/productController");

const isAuthenticated = require("../middleware/isAuthenticated");

const router = require("express").Router();

// Create Product
router.route("/product").post(isAuthenticated, createProduct);

// Get All Products
router.route("/products").get(getAllProducts);

// Get Single Product
router.route("/product/:id").get(getSingleProduct);

// Update Product
router.route("/product/:id").patch(isAuthenticated, updateProduct);

// Delete Product
router.route("/product/:id").delete(isAuthenticated, deleteProduct);

module.exports = router;