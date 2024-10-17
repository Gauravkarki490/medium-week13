import { Hono } from "hono";

import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { createPostInput,updatePostInput } from "@gauravsingh/common";
const blog = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  },
  Varibles: {
    userId: string
  }
}>()


blog.post("/", async (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json()
  const {success } = createPostInput.safeParse(body)
  if(!success){
    c.status(400);
    return c.json({ error: "invalid input" });
  }
  const blogs = await prisma.post.create(
    {
      data: {
        title: body.title,
        content: body.content,
        authorid: c.get("userId")
      }
    }
  )
  return c.json({
    id: blogs.id
  })
})


blog.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  const userId=c.get("userId")

  const body = await  c.req.json()
  const {success } = updatePostInput.safeParse(body)
  if(!success){
    c.status(400);
    return c.json({ error: "invalid input" });
  }
  const updateBlog  = await prisma.post.update({
    where:{
      id: body.id,
      authorid: userId
    },
    data:{
      title: body.title,
      content: body.content
    }
  })
  return c.json({
    id: updateBlog.id
  })
})


blog.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const userId=c.get("userId")

  const blogs = await prisma.post.findMany({
   select:{
    content:true,
    title:true,
    id:true,
    publishedDate:true,
    author:{
      select:{
        name:true
      }
   }
   
},
where:{
  authorid: userId
}})
 
  return c.json(blogs)
})

blog.get("/:id", async (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const blogid = c.req.param("id")
  const userId=c.get("userId")

  const blog = await prisma.post.findUnique({
    where:{
      id: blogid,
      authorid: userId
    },
    select:{
      id:true,
      title:true,
      content:true,
      publishedDate:true,
      author: {select:{
        name:true
      }
    }
  }
  })
  return c.json(blog)
})

export default blog
