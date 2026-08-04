const router = require("express").Router();

const {
  createOrder,
  getAllOrders,
  getSingleOrder,
  updateOrderStatus,
  deleteOrder,
  trackOrder,
} = require("../controller/order/orderController");

const isAuthenticated = require("../middleware/isAuthenticated");

// Customer
router.post("/order", createOrder);
router.post("/order/track", trackOrder);

// Admin
router.get("/orders", isAuthenticated, getAllOrders);
router.get("/order/:id", isAuthenticated, getSingleOrder);
router.patch("/order/:id/status", isAuthenticated, updateOrderStatus);
router.delete("/order/:id", isAuthenticated, deleteOrder);

module.exports = router;
