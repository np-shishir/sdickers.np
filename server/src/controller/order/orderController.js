const Order = require("../../model/orderModel");
exports.createOrder = async (req, res) => {
  try {
    const {
      customerName,
      customerPhone,
      customerEmail,
      deliveryAddress,
      items,
      totalAmount,
      paymentMethod,
    } = req.body;
    if (
      !customerName ||
      !customerPhone ||
      !deliveryAddress ||
      !items ||
      items.length === 0 ||
      !totalAmount
    ) {
      return res.status(400).json({
        message: "Please provide all required details",
      });
    }
    const order = await Order.create({
      user: req.user ? req.user._id : undefined,
      customerName,
      customerPhone,
      customerEmail,
      deliveryAddress,
      items,
      totalAmount,
      paymentMethod,
    });
    res.status(201).json({
      message: "Order placed successfully",
      data: order,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id })
      .sort({ createdAt: -1 })
      .populate("items.product");
    res.status(200).json({
      total: orders.length,
      data: orders,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("items.product");
    res.status(200).json({
      total: orders.length,
      data: orders,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
exports.getSingleOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate("items.product");
    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }
    res.status(200).json({
      data: order,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
exports.updateOrderStatus = async (req, res) => {
  try {
    const { orderStatus } = req.body;
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { orderStatus },
      {
        new: true,
        runValidators: true,
      },
    );
    if (!updatedOrder) {
      return res.status(404).json({
        message: "Order not found",
      });
    }
    res.status(200).json({
      message: "Order status updated",
      data: updatedOrder,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
exports.deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) {
      return res.status(404).json({
        message: "Order not found",
      });
    }
    res.status(200).json({
      message: "Order deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
exports.trackOrder = async (req, res) => {
  try {
    const { customerPhone } = req.body;
    if (!customerPhone) {
      return res.status(400).json({
        message: "Phone number is required",
      });
    }
    const orders = await Order.find({
      customerPhone,
    }).populate("items.product");
    res.status(200).json({
      total: orders.length,
      data: orders,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
