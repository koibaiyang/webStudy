// 导入 express 模块
const express = require('express')

// 导入 joi
const joi = require('@hapi/joi')

// 创建服务器
const app = express()

// 配置 cors 跨域
const cors = require('cors')
app.use(cors())

// 配置解析表单的中间件 application/x-www-form-urlencoded 格式
app.use(express.urlencoded({extended: false}))

// 配置 res.cc 错误信息中间件
app.use((req, res, next) => {
    res.cc = function(err, status = 1){
        res.send({
            status,
            message: err instanceof Error ? err.message : err
        })
    }
    next()
})

// 配置解析 token 中间件
const expressJWT = require('express-jwt')
const config = require('./config')
app.use(expressJWT({secret: config.jwtSecretKey, algorithms: ['HS256']}).unless({path: [/^\/api\//]}))

// 导入用户路由模块
const userRouter = require('./router/user')
app.use('/api', userRouter)

// 导入用户信息路由模块
const userInfoRouter = require('./router/userInfo')
app.use('/my', userInfoRouter)

// 导入文章类别管理路由模块
const articleCateRouter = require('./router/artcate')
app.use('/my/article', articleCateRouter)

// 导入新增文章管理路由模块
const addArticlesRouter = require('./router/articles')
app.use('/my/article',addArticlesRouter)

// 错误中间件
app.use((err, req, res, next) => {
    // 数据验证失败
    if(err instanceof joi.ValidationError) return res.cc(err)
    // 身份认证失败的错误
    if(err.name === 'UnauthorizedError') return res.cc('身份认证失败')
    // 其他错误
    res.cc(err)
})

// 启动服务器
app.listen(3007,() => {
    console.log('api server running at http://127.0.0.1:3007');
})