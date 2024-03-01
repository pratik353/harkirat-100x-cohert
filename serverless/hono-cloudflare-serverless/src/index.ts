import { Hono } from 'hono'

const app = new Hono()

// ADDING MIDDLEWARE IN HONO :- don't use middleware direct in app.use
// create function and add it whenever you want 
// app.use(async (c, next) => {
//   if (c.req.header("Authorization")) {
//     // Do validation
//     await next()
//   } else {
//     return c.text("You dont have acces");
//   }
// })

async function authMiddleware (c: any, next: any){
  if (c.req.header("Authorization")) {
    // Do validation
    await next()
  } else {
    return c.text("You dont have acces");
  }
}

app.post('/', authMiddleware, async(c) => {
  // access body, params, headers
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("name"));

  return c.json({msg: "request hit"})
})

export default app
