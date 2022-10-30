import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcryptjs";

export const authController = {
  loginPage: async (req: Request, res: Response) => {
    const sessionAuth = req.session.isAuth;
    res.json(sessionAuth);
  },
  logIn: async (req: Request, res: Response) => {
    const { email, password } = req.body;

    // check if user exists
    const user = await User.findOne({ email: email });
    // if user doesn't exist, redirect to the login page
    if (!user) {
      return res.redirect("/login");
    }
    // check if the password entered is the same as the user's in the DB
    const isMatch = await bcrypt.compare(password, user.password);
    // if not, redirect to the login page
    if (!isMatch) {
      return res.redirect("/login");
    }
    // if everything matches, redirect to the homepage
    req.session.isAuth = true;
    req.session.username = req.body.username;
    const sessionAuth = req.session.isAuth;
    res.redirect("/");
  },
};
