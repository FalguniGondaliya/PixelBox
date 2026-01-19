const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("PixelBox Backend is running 🚀");
});

const PORT = process.env.PORT || 5000;
app.use("/api/auth", require("./routes/authRoutes"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
