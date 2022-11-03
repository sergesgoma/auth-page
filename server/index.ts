import express, { NextFunction, Request, Response } from "express";
import session from "express-session";
import path from "path";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { router } from "./app/router";

dotenv.config({ path: __dirname + "/.env" });

const MongoDBSession = require("connect-mongodb-session")(session);
const PORT = process.env.PORT || 5000;

const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// connection to the DB
mongoose.connect(String(process.env.MONGODB_URL));
const db = mongoose.connection;

db.on("error", () => console.log("Error in connecting to Database"));
db.once("open", () => console.log("Connected to Database"));

const store = new MongoDBSession({
  uri: process.env.MONGODB_URL,
  collection: "mySession",
});


app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.use(
  session({
    secret: String(process.env.SECRET_KEY),
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

// launch of the server + listening
app.use(router);
app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
