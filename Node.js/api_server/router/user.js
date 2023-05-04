const express = require('express')

// 创建路由对象
const router = express.Router()

// 导入验证表单数据的中间件
const expressJoi = require('@escook/express-joi')

// 导入验证规则的对象
const {reg_login_schema} = require('../schema/user')

// 导入路由处理函数模块
const router_h = require('../router_handler/user')

// 注册新用户
router.post('/reguser', expressJoi(reg_login_schema), router_h.reguser)

// 登录
router.post('/login', expressJoi(reg_login_schema), router_h.login)

// 暴露 router
module.exports = router