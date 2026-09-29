export interface Blog {
  id: string;
  title: string;
  content: string;
  image: string;
  published_at: Date;
  author: {
    id: string;
    username: string;
  };
}

export interface BlogArr {
  blogs: Blog[];
}
