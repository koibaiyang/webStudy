// 导入数据库
import db from '../db/index.js'

export async function getAllUser (req, res) {
  try {
    const [rows] = await db.query('select id, username, nickname from ev_users')
  // console.log(rows);
  res.send({
    status: 0,
    message: '获取信息列表成功！',
    data: rows
  })
  }catch (e) {
    res.send({
      status: 1,
      message: '获取信息列表失败',
      desc: e.message
    })
  }
}
export function cs (req, res) {
  res.send({
    message: 'aujhduioahuiodhaioudhjo苏杭丢啊汉武帝'
  })
}
