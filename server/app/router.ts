import express from "express";
import { authController } from "./controllers/authController";
import { mainController } from "./controllers/mainController";

const router = express.Router();

// homepage
router.get("/home", mainController.homePage);

// authentification routes
router.get("/signup", authController.signupPage);
router.post("/signup", authController.signUp);

router.get("/login", authController.loginPage);
router.post("/login", authController.logIn);

router.post("/logout", authController.logOut);

export { router };
