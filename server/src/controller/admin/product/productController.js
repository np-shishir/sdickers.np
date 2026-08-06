const Product = require("../../../model/productModel");
exports.createProduct = async (req, res) => {
  try {
    const {
      productName,
      productDescription,
      productPrice,
      productStatus,
      productStockQty,
      productCategory,
      productImage,
    } = req.body;
    if (
      !productName ||
      !productDescription ||
      !productPrice ||
      !productStockQty ||
      !productCategory
    ) {
      return res.status(400).json({
        message: "Please provide all the details",
      });
    }
    await Product.create({
      productName,
      productDescription,
      productPrice,
      productStatus: productStatus || "available",
      productStockQty,
      productCategory,
      productImage,
    });
    res.status(201).json({
      message: "Product created successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
exports.getAllProducts = async (req, res) => {
  try {
    const { search, category, minPrice, maxPrice, sort } = req.query;
    let filter = {};
    if (search) {
      filter.productName = {
        $regex: search,
        $options: "i",
      };
    }
    if (category) {
      filter.productCategory = category;
    }
    if (minPrice || maxPrice) {
      filter.productPrice = {};
      if (minPrice) {
        filter.productPrice.$gte = Number(minPrice);
      }
      if (maxPrice) {
        filter.productPrice.$lte = Number(maxPrice);
      }
    }
    let sortOption = {};
    if (sort === "latest") {
      sortOption = { createdAt: -1 };
    }
    if (sort === "priceAsc") {
      sortOption = { productPrice: 1 };
    }
    if (sort === "priceDesc") {
      sortOption = { productPrice: -1 };
    }
    const products = await Product.find(filter).sort(sortOption);
    res.status(200).json({
      message: "Products fetched successfully",
      total: products.length,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
exports.getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    res.status(200).json({
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
exports.getRelatedProducts = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    const related = await Product.find({
      productCategory: product.productCategory,
      _id: { $ne: product._id },
    }).limit(4);
    res.status(200).json({
      data: related,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );
    if (!updatedProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    res.status(200).json({
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
