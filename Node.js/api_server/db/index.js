// 导入 mysql 模块
const mysql = require('mysql')

// 连接数据库
const db = mysql.createPool({
    host: "127.0.0.1",
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
})

// 暴露 db 对象
module.exports = db