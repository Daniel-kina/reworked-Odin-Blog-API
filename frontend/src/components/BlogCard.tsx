import { Blog } from "../types/blog";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <div className="blogCardContainer">
      <i>image</i>
      <div className="blogCardInfo">
        <div className="blogCardTitleContainer">
          <h3>{blog.title}</h3>
          <p>{blog.author.username}</p>
        </div>
        <div className="blogCardDateContainer">
          <p>{new Date(blog.published_at).toLocaleDateString("de-DE")}</p>
        </div>
      </div>
    </div>
  );
}
