const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../model/userModel");
exports.connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection error:", error);
    process.exit(1);
  }
  const isAdminExists = await User.findOne({userEmail:"sdickers.np@gmail.com", role:"admin"})
  if(!isAdminExists){
        await User.create({
        userEmail: "sdickers.np@gmail.com",
        userPassword: bcrypt.hashSync("Sdickers@#$1010", 10),
        userPhoneNumber: "9765223740",
        userName: "Sdickers admin",
        role: "admin",
        });
  }
};
