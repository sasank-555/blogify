import { createMiddleware } from "hono/factory";
import { verify } from "hono/jwt";
export const blogMiddleware = createMiddleware(async (c, next) => {
  const header = c.req.header("Authorization") || "";
  const check = header.startsWith("Bearer");
  if (!check) {
    return c.json({
      msg: "invalid token",
    });
  }
  const token = header?.split(" ")[1];

  try {
    const decoded = await verify(token, c.env.JWT_SECRET);
    c.set("userId", decoded.id);
    console.log(c.req.path);
    await next();
  } catch (error) {
    c.status(403);
    c.json({ error: "unauthorized" });
  }
});
