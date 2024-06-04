import { createMiddleware } from "hono/factory";
import { verify } from "hono/jwt";
export const blogMiddleware = createMiddleware(async (c, next) => {
  const header = c.req.header("authorization") || "";
  const check = header.startsWith("Bearer");
  if (!check) {
    return c.json({
      msg: "invalid token",
    });
  }
  const token = header?.split(" ")[1];

  const decoded = await verify(token, c.env.JWT_SECRET);
  if (decoded.id) {
    c.set("userId", decoded.id);
    console.log(c.req.path);
    await next();
  } else {
    c.status(403);
    c.json({ error: "unauthorized" });
  }
});
