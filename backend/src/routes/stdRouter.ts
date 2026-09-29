import express from "express";
import { getAllBlogs } from "../controllers/BlogController.js";
const Router = express.Router();

Router.get("/blogs", getAllBlogs);

export default Router;
