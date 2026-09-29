import BlogCard from "./BlogCard";
import { BlogArr } from "../types/blog";

export default function BlogList({ blogs }: BlogArr) {
  return (
    <>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog}></BlogCard>
      ))}
    </>
  );
}
