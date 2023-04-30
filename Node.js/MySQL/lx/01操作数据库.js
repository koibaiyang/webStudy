// 导入 mysql 模块
const mysql = require('mysql')
// 连接数据库
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
})
// 测试是否连接正常
// db.query('select 1', (err, results) => {
//     if(err) return console.log(err.message);
//     console.log(results);
// })

// 查询 users 表中的数据
// db.query('select * from users', (err, results) => {
//     if(err) return console.log(err.message);
//     console.log(results);
// })

// 插入数据
// const user = {username: 'Splider-Man', password: 'pcc123'}
// const sqlStr = 'insert into users (username, password) values (?, ?)'
// db.query(sqlStr,[user.username, user.password], (err, results) => {
//     if(err) return console.log(err.message);
//     if(results.affectedRows === 1){
//         console.log('插入数据成功');
//     }
// })

// const user = {username: 'Splide-Man-2', password: 'pcc4321'}
// const sqlStr = 'insert into users set ?'
// db.query(sqlStr, user, (err, results) => {
//     if(err) return console.log(err.message);
//     if(results.affectedRows === 1){
//         console.log('插入数据成功');
//     }
// })
// 更新数据
// const user = {id: 6, username: 'aaa', password: '000'}
// const sqlStr = 'update users set username=?,password=? where id=?'
// db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
//     if(err) return console.log('更新失败');
//     if(results.affectedRows === 1){
//         console.log('更新成功');
//     }
// })

// const user = {id: 6, username: 'bbb', password: '100'}
// const sqlStr = 'update users set ? where id=?'
// db.query(sqlStr, [user, user.id], (err, results) => {
//     if(err) return console.log(err.message);
//     if(results.affectedRows === 1){
//         console.log('更新成功');
//     }
// })

// 删除数据
// const sqlStr = 'delete from users where id=?'
// db.query(sqlStr, 6, (err, results) => {
//     if(err) return console.log(err.message);
//     if(results.affectedRows === 1){
//         console.log('删除成功');
//     }
// })

//标记删除
// const sqlStr = 'update users set status=1 where id=?'
// db.query(sqlStr, 3, (err, results) => {
//     if(err) return console.log(err.message);
//     if(results.affectedRows === 1) {
//         console.log('标记删除成功');
//     }
// }) 