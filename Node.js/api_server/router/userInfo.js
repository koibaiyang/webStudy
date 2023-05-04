// 导入 express
const express = require('express')

// 创建路由对象
const router = express.Router()

// 导入函数处理模块
const userInfo_handler = require('../router_handler/userInfo')

// 获取用户基本信息
router.get('/userinfo', userInfo_handler.getUserInfo)

// 导入更新用户信息验证规则的中间件
const expressJoi = require('@escook/express-joi')

// 导入验证规则对象
const {update_userInfo_schema, update_password_schema, update_avatar_schema} = require('../schema/user')

// 更新用户基本信息
router.post('/userinfo', expressJoi(update_userInfo_schema), userInfo_handler.updateUserInfo)

// 更新用户密码
router.post('/updatepwd', expressJoi(update_password_schema), userInfo_handler.updatePassword)

// 更新用户头像
router.post('/update/avatar', expressJoi(update_avatar_schema), userInfo_handler.updateAvatar)

// 暴露路由对象
module.exports = router