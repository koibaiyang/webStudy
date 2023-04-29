const express = require('express')
const router = express.Router()
// 挂载路由对象
router.get('/get', (req, res) => {
    // req.query 获取url中携带的参数
    const query = req.query
    res.send({
        status: 0,//0表示成功，1表示失败
        msg: 'GET 请求成功',//状态描述信息
        data: query//请求的参数
    })
})
router.post('/post',(req, res) => {
    // 获取请求体的 url-encoded 格式的数据
    const body = req.body
    res.send({
        status: 0,
        msg: 'POST 请求成功',
        data:body
    })
})
module.exports = router