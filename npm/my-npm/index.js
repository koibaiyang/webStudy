// 这是包的入口文件

const date = require('./src/dateFormat')
const escape = require('./src/htmlEscape')


// 暴露 dataFormate 方法
module.exports = {
    ...date,
    ...escape
}