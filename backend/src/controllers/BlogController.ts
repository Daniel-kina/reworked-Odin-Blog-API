import { selectAllBlogsWithUser } from "../queries/blogQueries.js";
import { RequestHandler } from "express";

const getAllBlogs: RequestHandler = async (req, res) => {
  const blogs = await selectAllBlogsWithUser();
  res.status(200).json(blogs);
};
export { getAllBlogs };
