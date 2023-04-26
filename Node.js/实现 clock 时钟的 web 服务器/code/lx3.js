// 导入node.js http， fs， path模块
const fs = require('fs')
const path = require('path')
const http = require('http')
// 创建一个实例服务器
const server = http.createServer()
// 给实例服务器绑定request事件，监听客户端的请求
server.on('request', (req, res) => {
    let url = req.url
    if(url === '/'){
        url = path.join(__dirname, 'lxclock/index.html')
    }else{
        url = path.join(__dirname, '/lxclock', url)
    }
    fs.readFile(url, 'utf8', (err, dataStr) => {
        if(err) return res.end('404 not found')
        res.end(dataStr)
    })    
})
// 启动服务器
server.listen(80,() => {
    console.log('server running at http://127.0.0.1');
})