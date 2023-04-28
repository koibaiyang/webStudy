// 导入express模块
const express = require('express')
// 创建服务器
const app = express()
// 注册路由模块
const router = require('./router')
app.use(router)
// 启动服务器
app.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})