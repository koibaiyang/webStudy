// 1.1获取fs模块
const fs = require('fs')
// 1.2获取path模块
const path = require('path')
// 1.3定义<style></style> 和 <script></script> 正则表达式
const regstyle = /<style>[\s\S]*<\/style>/
const regscript = /<script>[\s\S]*<\/script>/
// 2.1 fs读取html文件
fs.readFile(path.join(__dirname, '../素材/index.html'), 'utf8', (err, dataStr)=>{
    // 2.2读取失败判断
    if(err) return console.log('读取HTML文件失败' + dataStr.message);
    // 2.3读取成功，分别解析 html，css，js 文件 
    // console.log(dataStr);
    resolveCss(dataStr)
    resolveScript(dataStr)
    resolveHtml(dataStr)
})
// 3.1定义 css 解析函数
function resolveCss(htmlStr){
    const css_arr = regstyle.exec(htmlStr)
    // console.log(css_arr);
    const css_txt = css_arr[0].replace('<style>', '').replace('</style>', '')
    // console.log(css_txt);
    fs.writeFile(path.join(__dirname, './lxclock/index.css'), css_txt, 'utf8', (err) => {
        if(err) return console.log('写入 index.css 失败！' + err.message);
        console.log('写入css文件成功');
    })
}
// 3.2定义 js 解析函数
function resolveScript(htmlStr){
    const js_arr = regscript.exec(htmlStr)
    const js_txt = js_arr[0].replace('<script>', '').replace('</script>', '')
    fs.writeFile(path.join(__dirname, './lxclock/index.js'), js_txt, 'utf8', (err) => {
        if(err) return console.log('写入 index.js 失败！' + err.message);
        console.log('写入js文件成功');
    })
}
// 定义 html 解析函数
function resolveHtml(htmlStr){
    // const css_arr = regstyle.exec(htmlStr)
    // const js_arr = regscript.exec(htmlStr)
    // const html_txt = htmlStr.replace(css_arr[0], '<link rel="stylesheet" href="./index.css">').replace(js_arr[0], '<script src="./index.js"></script>')
    const html_txt = htmlStr.replace(regstyle, '<link rel="stylesheet" href="./index.css">').replace(regscript, '<script src="./index.js"></script>')
    fs.writeFile(path.join(__dirname, './lxclock/index.html'), html_txt, 'utf8', (err) => {
        if(err) return console.log('写入 index.html 失败！' + err.message);
        console.log('写入html文件成功');
    })
}