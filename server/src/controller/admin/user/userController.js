const User = require("../../../model/userModel");
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-userPassword -otp");
    res.status(200).json({
      total: users.length,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
exports.getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select(
      "-userPassword -otp",
    );
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    res.status(200).json({
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
exports.updateUserRole = async (req, res) => {
  try {
    const { role } = req.body;
    if (!role || !["customer", "admin"].includes(role)) {
      return res.status(400).json({
        message: "Please provide a valid role (customer or admin)",
      });
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { role },
      { new: true, runValidators: true },
    ).select("-userPassword -otp");
    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    res.status(200).json({
      message: "User role updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
exports.deleteUser = async (req, res) => {
  try {
    if (req.user && req.user._id.toString() === req.params.id) {
      return res.status(400).json({
        message: "You cannot delete your own account",
      });
    }
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
