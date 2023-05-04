// 导入数据库对象
const db = require('../db/index')

// 导入密码处理模块
const bcrypt = require('bcryptjs')

// 获取用户信息函数
exports.getUserInfo = (req, res) => {
  
    const sql = 'select id,username,nickname,user_pic,email from ev_users where id=?' // 定义 sql 查询语句

    db.query(sql, req.user.id, (err, results) => { //req.user 是express-jwt中间件挂载的对象

        if(err) return res.cc(err) 

        if(results.length !== 1) return res.cc('获取用户信息失败')

        res.send({
            status: 0,
            message: '获取用户信息成功',
            data: results[0]
        })
    })
    
}

// 更新用户信息函数
exports.updateUserInfo = (req, res) => {  

    const sql = 'update ev_users set ? where id=?' // 定义 sql 更新语句

    db.query(sql, [req.body,req.body.id], (err, results) => {

        if(err) return res.cc(err) 

        if(results.affectedRows !== 1) return res.cc('更新用户信息失败')

        res.cc('更新信息成功', 0)
    })
}

// 更新用户密码函数
exports.updatePassword = (req, res) => {

    const sql = 'select * from ev_users where id=?' //定义查询用户 id 的 sql 语句

    db.query(sql, [req.user.id], (err, results) => {

        if(err) return res.cc(err) 

        if(results.length !== 1) return res.cc('用户不存在！')  // 判断用户是否存在

        const compaire = bcrypt.compareSync(req.body.oldPwd, results[0].password) // 判断用户原密码是否正确

        if(!compaire) return res.cc('原密码错误')

        const sql = 'update ev_users set password=? where id=?' // 定义更新密码 sql 语句

        const newPwd = bcrypt.hashSync(req.body.newPwd, 10) // 对新密码进行 bcrypt 加密处理

        db.query(sql, [newPwd, req.user.id], (err, results) => {

            if(err) return res.cc(err)

            if(results.affectedRows !== 1) return res.cc('更新密码失败')

            res.cc('更新密码成功 ^_^ !', 0)
        })
        
    })
    
}

// 更新用户头像函数
exports.updateAvatar = (req, res) => {

    const sql = 'update ev_users set user_pic=? where id=?' //定义更新头像 sql 语句

    db.query(sql, [req.body.avatar, req.user.id], (err, results) => {

        if(err) return res.cc(err)

        if(results.affectedRows !== 1) return res.cc('更新失败')

        res.cc('更新头像成功', 0)
    })

}