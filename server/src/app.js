const express = require("express");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const { connectDatabase } = require("./database/database");
connectDatabase();

const { registerUser, loginUser } = require("./controller/auth/authController");
//routes
const authRoute = require("./routes/authRoute")

app.use("", authRoute)


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
