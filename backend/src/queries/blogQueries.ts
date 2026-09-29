import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function selectAllBlogsWithUser() {
  const blogs = await prisma.blog.findMany({
    include: {
      User: {
        select: {
          id: true,
          username: true,
        },
      },
    },
  });

  return blogs;
}

export { selectAllBlogsWithUser };
