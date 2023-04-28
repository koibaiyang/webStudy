// 导入模块
const express = require('express')
// 创建服务器
const app = express()
// 挂载路由
app.get('/',(req, res) => {
    res.send('hello, express')
})
app.post('/',(req, res) => {
    res.send('改一下字符')
})
// 启动服务器
app.listen(80, () => {
    console.log('app running at http://127.0.0.1');
})