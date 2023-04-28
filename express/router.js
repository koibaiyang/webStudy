// 导入express模块
const express = require('express')
// 创建路由对象
const router = express.Router()
// 挂载路由
router.get('/',(req, res) => {
    res.send('请求到了东西')
})
router.post('/',(req, res) => {
    res.send('POST')
})
module.exports = router