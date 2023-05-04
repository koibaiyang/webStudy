// 导入数据库对象
const db = require('../db/index')

// 导入 bcryptjs 密码加密包
const bcrypt = require('bcryptjs')

// 导入 jsonwebtoken 包
const jwt = require('jsonwebtoken')

// 注册函数
exports.reguser = (req, res) => {
    const userInfo = req.body
    
    // if(!userInfo.username || !userInfo.password){ //检测注册 用户名或密码不能为空
    //     // return res.send({status: 1, message: '用户名或密码不合法'})
    //     return res.cc('用户名或密码不合法')
    // }

    const sql = 'select * from ev_users where username=?'
    db.query(sql, [userInfo.username], (err, results) => {
        // if(err) return res.send({status: 1, message: err.message})
        if(err) return res.cc(err)
        if(results.length > 0){ // 检测用户名是否被占用
            // return res.send({status: 1, message: '该用户名已存在了 ^_^'})
            return res.cc('该用户名已存在了 ^_^')
        }
        
        userInfo.password = bcrypt.hashSync(userInfo.password, 10) //对用户密码进行加密

        const sql = 'insert into ev_users set ?'
        db.query(sql, [{username: userInfo.username, password: userInfo.password}], (err, results) => { // 插入注册数据信息
            // if(err) return res.send({status: 1, message: err.message})
            if(err) return res.cc(err)
            // if(results.affectedRows !== 1) return res.send({status: 1, message: '注册失败，请稍后在试-_-'})
            if(results.affectedRows !== 1) return res.cc('注册失败，请稍后在试-_-')
            // res.send({status: 0, message: '注册成功！'})
            res.cc('注册成功！', 0)
        })              
    })   
}

// 登陆函数
exports.login = (req, res) => {
    const userInfo = req.body
    // 定义查询语句
    const sql = 'select * from ev_users where username=?'

    db.query(sql, [userInfo.username], (err, results) => { 
        if(err) return res.cc(err)
        if(results.length !== 1) return res.cc('该账户不存在') //查询用户数据

        const compaireResult = bcrypt.compareSync(userInfo.password, results[0].password) //判断用户密码是否正确
        if(!compaireResult) return res.cc('密码输入错误')

        const user = {...results[0], password: '', user_pic: ''} // 剔除用户的密码和头像      
        const config = require('../config') // 导入密钥配置文件
        const tokenStr = jwt.sign(user, config.jwtSecretKey, config.expiresIn) // 生成 token 字符串        
        res.send({
            status: 0,
            message: '登录成功',
            token: 'Bearer ' + tokenStr //注意加空格
        })
    })
    
}