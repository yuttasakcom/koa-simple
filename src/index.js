import Koa from 'koa'
import Router from 'koa-router'

const port = process.env.PORT || "3000"
const app = new Koa()
const router = new Router()

router.get("/", async ctx => ctx.body = "Hello, Koa")

app.use(router.routes()).use(router.allowedMethods())
app.listen(port)

console.log(`Server running at http://localhost:${port}`)