// const express = require("express");  This is the ES-5
// const colors = require("colors");
import authRout from "./routes/authRout.js";
import express from "express";
// import colors from "colors";
import dotenv from "dotenv";
// import morgan from `morgan`;
import connectDB from "./db.js";
import morgan from "morgan";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/ProductRoutes.js";
import cors from "cors";

//Configure env
dotenv.config();

//Database Config
connectDB();

// rest object
const app = express(); // call the above express function

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRout);
// app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// rest api means to create api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

// port
const PORT = process.env.PORT || 8080;

// run Listen means to run the app
app.listen(PORT, () => {
  console.log(
    `Server Running on${process.env.PORT} mode on port ${PORT}`.bgCyan.white
  );

  console.log("This is a red text".red);
  console.log("This is a green text".green);
});
