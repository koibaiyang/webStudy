//  导入 expres 模块
const express = require('express')

// 导入 artcate 函数处理模块
const artcate_handler = require('../router_handler/artcate')

// 导入验证数据的中间件
const expressJoi = require('@escook/express-joi')

// 导入需要的验证规则
const {add_cate_schema, delete_cate_schema, get_cate_schema, update_cate_schema} = require('../schema/artcate')

// 创建路由对象
const router = express.Router()

// 获取文章分类列表数据 路由
router.get('/cates', artcate_handler.getArticleCate)

// 新增文章分类路由
router.post('/addcates', expressJoi(add_cate_schema), artcate_handler.addArticleCate)

// 根据文章分类 id 删除数据 路由
router.get('/deletecate/:id', expressJoi(delete_cate_schema), artcate_handler.deleteArticleCate)

// 根据文章分类 id 获取数据 路由
router.get('/cates/:id', expressJoi(get_cate_schema), artcate_handler.getIdArticleCate)

// 根据文章分类 id 更新数据 路由
router.post('/updatecate', expressJoi(update_cate_schema), artcate_handler.updateArticleCate)

// 暴露路由对象
module.exports = router