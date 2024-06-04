import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign, verify } from "hono/jwt";
import { signUpInput, signInInput } from "@sasank_555/common";
export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    jwtPayload: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const { success } = signUpInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ message: "Invalid input" });
  }
  try {
    const finduser = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });
    if (finduser) {
      c.status(411);
      return c.json({ message: "User already exists" });
    }
    const user = await prisma.user.create({
      data: { email: body.email, password: body.password, name: body.name },
    });
    const token = await sign(
      { id: user.id, email: user.email },
      c.env.JWT_SECRET
    );
    return c.json({
      token: token,
    });
  } catch (error) {
    c.status(403);
  }
});

userRouter.post("/signin", async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const { success } = signInInput.safeParse(body);
  if (!success) {
    c.json({
      msg: "Invalid Inputs",
    });
  }
  try {
    const user = await prisma.user.findUnique({
      where: { email: body.email, password: body.password },
    });
    console.log(user);
    if (!user) {
      c.status(403);
      return c.json({
        msg: "signup first",
      });
    }
    const check = user.password == body.password;
    if (!check) {
      return c.json({
        msg: "Invalid Password",
      });
    }
    const token = await sign(
      { id: user.id, email: user.email },
      c.env.JWT_SECRET
    );
    return c.json({
      token: token,
    });
  } catch (error) {
    c.status(403);
  }
});

userRouter.get("/getuser/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const authorid = c.req.param("id");
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: authorid,
      },
    });
    if (!user) {
      c.status(411);
      return c.json({
        message: "User does not exist anymore",
      });
    }
    c.status(200);
    return c.json({
      name: user.name,
    });
  } catch (error) {
    c.status(500);
    return c.json("Internal server error");
  }
});

userRouter.get("/check", async (c) => {
  const header = c.req.header("authorization") || "";
  const check = header.startsWith("Bearer");
  if (!check) {
    c.status(403);
    return c.json({
      msg: "Wrong Token",
    });
  }
  try {
    const token = header.split(" ")[1];
    const decoded = await verify(token, c.env.JWT_SECRET);
    c.set("jwtPayload", decoded.id);
  } catch (error) {
    c.status(403);
  }
});
