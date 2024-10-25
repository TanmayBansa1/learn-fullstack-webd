import { Hono } from 'hono'

const app = new Hono()

app.post('/',async (c) => {
  // body, headers, query, middlewares//connnecting to db
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"))

  return c.text('Hello Hono!')
})

export default app
