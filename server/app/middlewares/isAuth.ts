import { Request, Response, NextFunction } from "express";

// middleware to check if the user is authentificated or not
export const isAuth = (req: Request, res: Response, next: NextFunction) => {
  // if user is logged in
  // go on and render the page
  if (req.session.isAuth) {
    next();
  } else {
    req.session.redirectTo = req.url;
    // if the user is not logged in
    // redirect to login page + pass the previous url so that once logged in the user is back to the page he/she was browsing
    res.redirect("/login");
  }
};
