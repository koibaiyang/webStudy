// 文章路由

const express = require('express')
const router = express.Router()

// 导入需要的函数处理模块
const {addArticle} = require('../router_handler/articles')

// 发布文章路由
router.post('/add',addArticle)


module.exports = router