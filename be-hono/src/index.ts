import { Hono } from 'hono'
import user from '../routes/user'
import blog from '../routes/blog'
import { verify } from 'hono/jwt'
import { cors } from 'hono/cors'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  },
  Variables: {
    userId: string
  }
}>()

app.use("*", cors())
app.use("/api/v1/blog/*", async (c, next) => {
  const jwt = c.req.header("Authorization")
  if (!jwt) {
    c.status(404)
    return c.json({ error: "unauthorized" })
  }
  const token = jwt.split(" ")[1];
  const payload = await verify(token, c.env.JWT_SECRET)

  if (!payload) {
    c.status(401)
    return c.json({ error: "unauthorized" })
  }
  c.set("userId", payload.id)
  await next()
})
app.route("/api/v1/user", user)
app.route("/api/v1/blog", blog)

export default app
