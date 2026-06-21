const mongoose = require("mongoose");
const User = require("../model/userModel");
// require("dotenv").config()
exports.connectDatabase = async () => {
  //wait till it connects to database
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection error:", error);
    process.exit(1);
  }

  //check admin exists
  const isAdminExists = await User.findOne({userEmail:"sdickers.np@gmail.com", role:"admin"})
  if(!isAdminExists){
    //admin seeding
        await User.create({
        userEmail: "sdickers.np@gmail.com",
        userPassword: "Sdickers@#$1010",
        userPhoneNumber: "9765223740",
        userName: "Sdickers admin",
        role: "admin",
        });
        
  }

  
};

// module.exports=connectDatabase
