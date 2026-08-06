const express = require("express");
require("dotenv").config();

const app = express();
// Middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

// Database
const { connectDatabase } = require("./database/database");


// Routes
const authRoute = require("./routes/authRoute");
const productRoute = require("./routes/productRoute");
const orderRoute = require("./routes/orderRoute");
const cartRoute = require("./routes/cartRoute");

// Route Middleware
app.use("/api", authRoute);
app.use("/api", productRoute);
app.use("/api", orderRoute);
app.use("/api", cartRoute);

// Default Route
app.get("/", (req, res) => {
  res.json({
    message: "Sdickers API is running...",
  });
});


// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

// Start Server
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDatabase();

    app.listen(PORT, () => {
      console.log(`Server running on PORT ${PORT}`);
    });
  } catch (err) {
    console.log("Database Connection Failed:", err);
  }
};

startServer();
