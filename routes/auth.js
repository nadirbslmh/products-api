import express from "express";
import AuthController from "../controllers/auth.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", auth.requestValidation, AuthController.register);
router.post("/login", auth.requestValidation, AuthController.login);

export default router;
