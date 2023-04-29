// 导入 express 模块
const express = require('express')

// 注册实例服务器 app
const app = express()
// 导入cors中间件
const cors = require('cors')
app.use(cors())
// 导入 解析URL- encoded 格式的中间件
app.use(express.urlencoded({extended:false}))
//导入路由模块
const router = require('./07apiRouter')
app.use('/api',router)

// 启动服务器
app.listen(80,() => {
    console.log('express server running at http://127.0.0.1');
})