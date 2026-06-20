const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const { connectDatabase } = require("./database/database");
connectDatabase();
const User = require("./model/userModel");

//register user api
app.post("/register", (req, res) => {
  // console.log(req.body)
  const { email, password, phoneNumber, username } = req.body;
  if (!email || !phoneNumber || !password || !username) {
    res.status(400).json({
      message: "Please provide every details."
    });
  } else {
    User.create({
      userName: username,
      userPhoneNumber: phoneNumber,
      userEmail: email,
      userPassword: password,
    });

    res.status(201).json({
      message: "User registered successfully",
    });
  }
});

const PORT = process.env.PORT;
const startServer = async () => {
  try {
    await connectDatabase(); // WAIT for DB connection

    app.listen(PORT, () => {
      console.log("Server started at PORT = " + PORT);
    });
  } catch (err) {
    console.log("DB Connection failed:", err);
  }
};

startServer();

