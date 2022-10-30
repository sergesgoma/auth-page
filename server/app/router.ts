import express, { Request, Response } from "express";
import { authController } from "./controllers/authController";
const router = express.Router();

router.get("/login", authController.loginPage);
router.get("/login", authController.logIn);

export { router };
