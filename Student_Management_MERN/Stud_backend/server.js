const express = require("express");
const connectDB = require("./db/db");

const studentRoutes = require("./routes/studentRoutes");
const methodOverride = require("method-override");
const cors = require("cors");

// Connect DB
connectDB();

const app = express();

// Middleware
app.use(methodOverride("_method"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", studentRoutes);

// Server
app.listen(4000, () => {
  console.log("Server running on port 4000...");
});
