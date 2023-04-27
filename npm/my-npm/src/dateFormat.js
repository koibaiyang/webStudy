// 定义格式化时间的方法
function dateFormat (ds) {
    const date = new Date(ds)
    const year = date.getFullYear()
    const month = padZero(date.getMonth() + 1)
    const d = padZero(date.getDate())
    const hh = padZero(date.getHours())
    const mm = padZero(date.getMinutes())
    const ss = padZero(date.getSeconds())
    return  `${year}-${month}-${d} ${hh}:${mm}:${ss}`
}

// 定义一个补零函数
function padZero (a){
    return a < 10 ? '0' + a : a
}

module.exports = {
    dateFormat
}