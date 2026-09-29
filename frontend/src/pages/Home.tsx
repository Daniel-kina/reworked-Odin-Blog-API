import BlogCard from "../components/BlogCard";
import { Blog } from "../types/blog";

export default function Home() {
  async function fetchBlogs(): Promise<Blog[]> {
    const response = await fetch("http://localhost:3000/api/blogs");

    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }

    return response.json();
  }

  return (
    <>
      <div className="homeContainer">
        <h2 className="homeTitle">available Blogs</h2>
        <div className="BlogsGrid">
          <BlogCard></BlogCard>
        </div>
      </div>
    </>
  );
}
