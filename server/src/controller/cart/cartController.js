const Cart = require("../../model/cartModel");

// ==========================
// Add Product to Cart
// ==========================
exports.addToCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId, quantity } = req.body;

    if (!productId) {
      return res.status(400).json({
        message: "Product ID is required",
      });
    }

    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = await Cart.create({
        user: userId,
        items: [],
      });
    }

    const existingProduct = cart.items.find(
      (item) => item.product.toString() === productId,
    );

    if (existingProduct) {
      existingProduct.quantity += quantity || 1;
    } else {
      cart.items.push({
        product: productId,
        quantity: quantity || 1,
      });
    }

    await cart.save();

    res.status(200).json({
      message: "Product added to cart",
      data: cart,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// Get Logged In User Cart
// ==========================
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({
      user: req.user.id,
    }).populate("items.product");

    if (!cart) {
      return res.status(200).json({
        data: {
          items: [],
        },
      });
    }

    res.status(200).json({
      data: cart,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// Update Product Quantity
// ==========================
exports.updateCart = async (req, res) => {
  try {
    const { quantity } = req.body;

    if (!quantity || quantity < 1) {
      return res.status(400).json({
        message: "Quantity should be greater than 0",
      });
    }

    const cart = await Cart.findOne({
      user: req.user.id,
    });

    if (!cart) {
      return res.status(404).json({
        message: "Cart not found",
      });
    }

    const item = cart.items.find(
      (item) => item.product.toString() === req.params.productId,
    );

    if (!item) {
      return res.status(404).json({
        message: "Product not found in cart",
      });
    }

    item.quantity = quantity;

    await cart.save();

    res.status(200).json({
      message: "Cart updated successfully",
      data: cart,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// Remove Product From Cart
// ==========================
exports.removeFromCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({
      user: req.user.id,
    });

    if (!cart) {
      return res.status(404).json({
        message: "Cart not found",
      });
    }

    cart.items = cart.items.filter(
      (item) => item.product.toString() !== req.params.productId,
    );

    await cart.save();

    res.status(200).json({
      message: "Product removed from cart",
      data: cart,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// Clear Cart
// ==========================
exports.clearCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({
      user: req.user.id,
    });

    if (!cart) {
      return res.status(404).json({
        message: "Cart not found",
      });
    }

    cart.items = [];

    await cart.save();

    res.status(200).json({
      message: "Cart cleared successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
