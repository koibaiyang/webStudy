// 导入 express
import express from 'express'
// 导入 getuserrouter 路由
import getUserRouter from './router/user_router.js'

const app = express()

app.use('/api', getUserRouter)

app.listen(80, () => {
  console.log('server running at http://127.0.0.1');
})