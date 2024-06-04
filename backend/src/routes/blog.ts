import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { blogMiddleware } from "../../middleware";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use("/*", blogMiddleware);
blogRouter.post("/", async (c) => {
  const userId = c.get("userId");
  console.log("userId :" + userId);
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  try {
    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
      },
    });

    return c.json({
      id: post.id,
    });
  } catch (error) {
    c.status(403);
  }
});

blogRouter.put("/", async (c) => {
  const userId = c.get("userId");
  console.log(userId);
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  try {
    await prisma.post.update({
      where: {
        id: body.id,
        authorId: userId,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });
    return c.text("updated post");
  } catch (error) {
    c.status(403);
  }
});
blogRouter.get("/bulk", async (c) => {
  console.log("HEllo");
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blogs = await prisma.post.findMany({});
    c.status(200);
    return c.json({ blogs });
  } catch (error) {
    c.status(403);
    return c.json({ message: "Error fetching blogs" });
  }
});

blogRouter.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blogId = c.req.param("id");
    const blog = await prisma.post.findFirst({
      where: {
        id: blogId,
      },
    });
    c.status(200);
    return c.json({ blog });
  } catch (error) {
    c.status(403);
    return c.json({ message: "Error fetching blog" });
  }
});
