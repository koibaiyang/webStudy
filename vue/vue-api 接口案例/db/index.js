// 导入数据库包
import mysql from 'mysql2'
// 创建连接
const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'admin123',
  database: 'my_db_01'
})
// 导出 promise数据库
export default pool.promise()

// 检测是否连接成功
// pool.query('SELECT 1', (err, results) => {
//   if(err) return console.log(err.message);
//   console.log(results);
// })
