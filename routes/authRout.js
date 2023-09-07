import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
} from "../controllers/authController.js";
import { requireSignIn } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/authMiddleware.js";

//router object
const router = express.Router();

//Routing
//Register || METHOD POST
router.post("/register", registerController);

//LOGIN ||POST
router.post("/login", loginController);

// Forgot password
router.post("/forgot-password", forgotPasswordController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

//Protected User rout auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//Protected Admin rout auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
