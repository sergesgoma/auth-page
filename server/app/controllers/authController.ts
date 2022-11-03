import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";

export const authController = {
  signupPage: async (req: Request, res: Response) => {
    res.json({ msg: "SIGN UP" });
  },
  signUp: async (req: Request, res: Response) => {
    const { email, password } = req.body;
    // Check if email exists
    User.find({ email: req.body.email })
      .exec()
      .then((user) => {
        if (user.length >= 1) {
          return res.status(500).json({
            message: "registration failed",
          });
        } else {
          // if the mail doesn't exist in the DB, hash and salt the password
          bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
              return res.status(500).json({
                message: "registration failed",
              });
            } else {
              // then add the new user to the DB with the hashed and salted password
              const user = new User({
                email: email,
                password: hash,
              });
              user
                .save()
                .then((result) => {
                  console.log(result);
                  res.redirect("/login");
                })
                .catch((err) => {
                  console.log(err);
                  res.status(500).json({
                    message: "registration failed",
                  });
                });
            }
          });
        }
      });
  },
  loginPage: async (req: Request, res: Response) => {
    res.json({ msg: "LOG IN" });
  },
  logIn: async (req: Request, res: Response) => {
    const { email, password } = req.body;

    // check if user exists
    const user = await User.findOne({ email });
    // if user doesn't exist, error message + redirection to the login page
    if (!user) {
      console.log("connection failed");
      res.redirect("/login");
    } else {
      // check if the password entered is the same as the user's in the DB
      const isMatch = await bcrypt.compare(password, user.password);
      // if not, error message + redirection to the login page
      if (!isMatch) {
        console.log("connection failed");
        res.redirect("/login");
      }
      // if everything matches, success message + redirection to the homepage
      console.log("user connected");
      req.session.isConnected = true;
      res.redirect("/");
    }
  },
  logOut: async (req: Request, res: Response) => {
    req.session.destroy((err) => {
      if (err) throw reportError;
      res.redirect("/login");
    });
  },
};
