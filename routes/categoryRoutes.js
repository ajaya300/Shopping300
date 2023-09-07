import express from "express";
// const express = require("express");
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import {
  categorycontroller,
  createCategoryController,
  deleteCategoryController,
  singleCategoryController,
} from "../controllers/categoryController.js";

const router = express.Router();

//routes
// Create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

// Update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//get all Category
router.get("/get-category", categorycontroller);

//single category
router.put("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

export default router;
