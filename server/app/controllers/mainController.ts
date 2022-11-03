import { Request, Response } from "express";

export const mainController = {
  homePage: async (req: Request, res: Response) => {
    res.json({ msg: "homepage", connected: req.session.isConnected });
  },
};
