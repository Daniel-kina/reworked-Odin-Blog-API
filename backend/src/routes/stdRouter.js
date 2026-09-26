import express from "express";
const Router = express.Router();

Router.get("/", (req, res, next) => {
  res.json("Hello!");
});

export default Router;
